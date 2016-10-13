# coding=utf8
from tornado.web import RequestHandler
from tornado.gen import coroutine, Return
import json
from datetime import date, datetime
from service.user import ServiceUser


class ApiBase(RequestHandler):
  def __init__(self, *args, **kwargs):
    super(ApiBase, self).__init__(*args, **kwargs)
    self.srv_user = ServiceUser()

  @coroutine
  def get_current_user(self):
    user_id = self.get_cookie('xitu_token')
    if user_id:
      user = yield self.srv_user.find_one_by_id(user_id)
    else:
      user = None
    raise Return(user)

  def get_current_user_id(self):
    return self.get_cookie('xitu_token')

  @coroutine
  def set_current_user(self, user_id):
    self.set_cookie('xitu_token', str(user_id))

  @coroutine
  def logout_current_user(self):
    self.clear_cookie('xitu_token')

  def json_ok(self, data='', msg=''):
    callback = self.get_argument('callback', False)
    if not callback:
      self.write({
        'code': 1,
        'msg': msg,
        'data': self.__json(data)
      })
    else:
      self.set_header('content-type', 'text/javascript')
      data = {
        'code': 1,
        'msg': msg,
        'data': self.__json(data)
      }
      self.write("""try{%s(%s)}catch(err){console.log("rubby err: ", err)}""" % (callback, self.__dumps(data)))

  def json_err(self, msg=''):
    self.write({
      'code': 0,
      'msg': msg
    })

  def __json(self, data):
    return json.loads(self.__dumps(data))

  def __dumps(self, data):
    return json.dumps(data, cls=JsonEncoder)


class JsonEncoder(json.JSONEncoder):
  def default(self, o):
    if isinstance(o, datetime):
      return o.strftime('%Y-%m-%d %H:%M:%S')
    elif isinstance(o, date):
      return o.strftime('%Y-%m-%d')
    else:
      return json.JSONEncoder.default(self, o)
