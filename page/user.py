# coding=utf8
from base import PageBase
from tornado.gen import coroutine

class PageLogin(PageBase):
    def get(self):
        self.render('login.html')


class PageRegister(PageBase):
    def get(self):
        self.render('register.html')

class PageUser(PageBase):
    @coroutine
    def get(self, user_id):
        user = yield self.get_current_user()
        self.render('user.html', user=user)

class PageMe(PageBase):
    @coroutine
    def get(self):
        user = yield self.get_current_user()
        self.render('user.html', user=user)
