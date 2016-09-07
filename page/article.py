# coding=utf8
from base import PageBase
from tornado.gen import coroutine, Return


class PagePublish(PageBase):
  @coroutine
  def get(self):
    user = yield self.get_current_user()
    self.render('publish/publish.html', user=user)
