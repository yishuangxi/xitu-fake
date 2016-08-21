# coding=utf8
from base import ModelBase
from tornado.gen import coroutine, Return


class ModelCate(ModelBase):
    @coroutine
    def find_one_by_id(self, cate_id):
        sql = 'select * from cate where id=%s limit 1'
        res = yield self.get(sql, cate_id)
        raise Return(res)

    @coroutine
    def find_all(self):
        sql = 'select * from cate'
        res = yield self.get(sql)
        raise Return(res)
