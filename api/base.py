# coding=utf8
from tornado.web import RequestHandler
import json
from datetime import date, datetime


class ApiBase(RequestHandler):
    def __init__(self, *args, **kwargs):
        super(ApiBase, self).__init__(*args, **kwargs)

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
            self.write("""

            try{
                %s(%s)
            }catch(err){

            }

            """ % (callback, self.__dumps(data)))

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
