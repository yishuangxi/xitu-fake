# coding=utf8
from base import ApiBase
from tornado.gen import coroutine, Return
from service.cate import ServiceCate

class ApiCateBase(ApiBase):
    def __init__(self, *args, **kwargs):
        super(ApiCateBase, super).__init__(*args, **kwargs)


class ApiCate(ApiBase):
    @coroutine
    def get(self, cate_id):
        self.json_ok({"id": cate_id})


class ApiCates(ApiBase):
    @coroutine
    def get(self):
        self.json_ok([{"id": 1, "name": "qianduan"}, {"id": 2, "name": "design"}])
