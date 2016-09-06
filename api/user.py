# coding=utf8

from base import ApiBase
from tornado.gen import coroutine, Return
from service.user import ServiceUser

from decorator.auth import login


class ApiUserBase(ApiBase):
  def __init__(self, *args, **kwargs):
    super(ApiUserBase, self).__init__(*args, **kwargs)
    self.srv_user = ServiceUser()


class ApiUser(ApiUserBase):
  @coroutine
  def get(self, user_id):
    data = yield self.srv_user.find_one_by_id(user_id)
    self.json_ok(data)


class ApiUsers(ApiUserBase):
  @coroutine
  def get(self, *args, **kwargs):
    page = self.get_argument('page', 1)
    following_id = self.get_argument('following_id', None)
    data = yield self.srv_user.find_page(following_id, page)
    self.json_ok(data)


class ApiMe(ApiUserBase):
  @login
  @coroutine
  def get(self):
    user = yield self.get_current_user()
    user_id = user.id
    print 'user_id: ' + str(user_id)
    data = yield self.srv_user.find_one_by_id(user_id)
    self.json_ok(data)


class ApiLogin(ApiUserBase):
  @coroutine
  def post(self):
    username = self.get_argument('username', None)
    password = self.get_argument('password', None)

    data = yield self.srv_user.find_one_by_username_password(username, password)
    if not data:
      self.json_err('用户名或密码错误')
    else:
      user_id = data.id
      self.set_current_user(user_id)
      self.json_ok(data)


class ApiLogout(ApiUserBase):
  @coroutine
  def get(self):
    self.logout_current_user()
    self.json_ok()


class ApiRegister(ApiUserBase):
  @coroutine
  def post(self):
    username = self.get_argument('username', None)
    password = self.get_argument('password', None)

    # 用户名是否已经被使用
    data = yield self.srv_user.find_one_by_username(username)

    if data:
      self.json_err('username: ' + username + '已经被其他人使用了')
    else:
      # 注册用户
      data = self.srv_user.create(username, password)
      if data:
        self.json_ok()
      else:
        self.json_err('注册失败')
