# codin=utf8
from base import ServiceBase
from model.user import ModelUser
from tornado.gen import coroutine, Return
from util import validate


class ServiceUser(ServiceBase):
    def __init__(self, *args, **kwargs):
        super(ServiceUser, self).__init__(*args, **kwargs)
        self.validate = validate
        self.model_user = ModelUser()

    @coroutine
    def find_one_by_username_password(self, username, password):
        res = yield self.model_user.find_one_by_username_password(username, password)
        raise Return(res)

    @coroutine
    def find_one_by_id(self, user_id):
        res = yield self.model_user.find_one_by_id(user_id=user_id)
        raise Return(res)

    @coroutine
    def find_one_by_username(self, username):
        data = yield self.model_user.find_one_by_username(username)
        raise Return(data)

    @coroutine
    def find_page(self, following_id, page):
        res = yield self.model_user.find_page(following_id, page)
        raise Return(res)

    @coroutine
    def create(self, username, password):
        res = yield self.model_user.create(username, password)
        raise Return(res)
