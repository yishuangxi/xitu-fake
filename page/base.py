# coding=utf8
from tornado.web import RequestHandler
from service.user import ServiceUser


class PageBase(RequestHandler):
    def __init__(self, *args, **kwargs):
        super(PageBase, self).__init__(*args, **kwargs)
        self.srv_user = ServiceUser()
