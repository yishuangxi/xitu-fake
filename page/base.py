# coding=utf8
from tornado.web import RequestHandler
from service.user import ServiceUser
from tornado.gen import coroutine, Return
import json
from datetime import datetime, date


class PageBase(RequestHandler):
    def __init__(self, *args, **kwargs):
        super(PageBase, self).__init__(*args, **kwargs)
        self.srv_user = ServiceUser()

    @coroutine
    def get_current_user(self):
        user_id = self.get_cookie('xitu_token')
        if user_id:
            user = yield self.srv_user.find_one_by_id(user_id)
        else:
            user = None
        raise Return(user)

    def get_current_user_id(self):
        return self.get_cookie('xitu_token')

        def __json(self, data):
            return json.loads(self.__dumps(data))

        def __dumps(self, data):
            return json.dumps(data, cls=JsonEncoder)

    class JsonEncoder(json.JSONEncoder):
        def default(self, o):
            if isinstance(o, datetime):
                return o.strftime('%Y-%m-%d %H:%M:%S')
            elif isinstance(o, date):
                return o.strftime('%Y-%m-%d')
            else:
                return json.JSONEncoder.default(self, o)
