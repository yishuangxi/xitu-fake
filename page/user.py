# coding=utf8
from base import PageBase


class PageLogin(PageBase):
    def get(self):
        self.render('login.html')


class PageRegister(PageBase):
    def get(self):
        self.render('register.html')

class PageUser(PageBase):
    def get(self, user_id):
        self.render('user.html')
