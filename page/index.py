from base import PageBase
from tornado.gen import coroutine


class PageIndex(PageBase):
    @coroutine
    def get(self, *args, **kwargs):
        user = yield self.get_current_user()
        self.render('index/index.html', user=user)
