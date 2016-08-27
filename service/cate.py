# codin=utf8
from base import ServiceBase
from model.cate import ModelCate
from tornado.gen import coroutine, Return
from util import validate

class ServiceCate(ServiceBase):
    def __init__(self, *args, **kwargs):
        super(ServiceCate, self).__init__(*args, **kwargs)
        self.validate = validate
        self.model_cate = ModelCate()

    @coroutine
    def find_one_by_id(self, cate_id):
        res = yield self.model_cate.find_one_by_id(cate_id)
        raise Return(res)
    
    @coroutine
    def find_all(self):
        data = yield self.model_cate.find_all()
        raise Return(data)

