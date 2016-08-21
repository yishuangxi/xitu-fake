# coding=utf8
from base import ModelBase
from tornado.gen import coroutine, Return

class ModelUser(ModelBase):
    @coroutine
    def find_one_by_username_password(self, username, password):
        sql = 'select * from user where username=%s, password=%s limit 1'
        res = yield self.get(sql, username, password)
        raise Return(res)

    @coroutine
    def find_one_by_id(self, user_id):
        sql = 'select * from user where id=%s limit 1'
        res = yield self.get(sql, user_id)
        raise Return(res)

    @coroutine
    def find_one_by_username(self, username):
        sql = 'select * from user where username=%s limit 1'
        res = yield self.get(sql, username)
        raise Return(res)

    @coroutine
    def create(self, username, password, ):
        enabled = "1"
        sql = '''insert into user (id, username, password, enabled, created_at, updated_at)
                                             values(null, %s, %s, %s, %s, %s)'''
        enabled, now = '1', self.now()
        res = yield self.insert(sql, username, password, enabled, now, now)

        raise Return(res)