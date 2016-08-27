# coding=utf8
from base import ApiBase
from tornado.gen import coroutine, Return
from service.cate import ServiceCate

class ApiCateBase(ApiBase):
    def __init__(self, *args, **kwargs):
        super(ApiCateBase, self).__init__(*args, **kwargs)
        self.srv_cate = ServiceCate()


class ApiCate(ApiCateBase):
    @coroutine
    def get(self, cate_id):
        self.json_ok({"id": cate_id})


class ApiCates(ApiCateBase):
    @coroutine
    def get(self):
        data = yield self.srv_cate.find_all()
        self.json_ok(data)
