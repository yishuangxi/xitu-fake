# coding=utf8

from base import ApiBase
from tornado.gen import coroutine, Return


class ApiLogin(ApiBase):
    @coroutine
    def post(self):
        self.json_ok()


class ApiLogout(ApiBase):
    @coroutine
    def post(self):
        self.json_ok()


class ApiRegister(ApiBase):
    @coroutine
    def post(self):
        self.json_ok()
