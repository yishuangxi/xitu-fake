# coding=utf8
from base import PageBase
from tornado.gen import coroutine


class PageLogin(PageBase):
  def get(self):
    self.render('login/login.html')


class PageRegister(PageBase):
  def get(self):
    self.render('register/register.html')


class PageUser(PageBase):
  @coroutine
  def get(self, user_id):
    # user = yield self.get_current_user()
    user = yield self.srv_user.find_one_by_id(user_id)
    self.render('user/user.html', user=user)
