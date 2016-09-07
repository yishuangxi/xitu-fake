# codin=utf8
from base import ServiceBase
from model.article import ModelArticle
from tornado.gen import coroutine, Return
from util import validate


class ServiceArticle(ServiceBase):
  def __init__(self, *args, **kwargs):
    super(ServiceArticle, self).__init__(*args, **kwargs)
    self.validate = validate
    self.model_article = ModelArticle()

  @coroutine
  def find_one_by_id(self, article_id):
    res = yield self.model_article.find_one_by_id(article_id=article_id)
    raise Return(res)

  @coroutine
  def find_page_by_cate(self, cate_id, article_id, count):
    data = yield self.model_article.find_page_by_cate(cate_id, article_id, count)
    raise Return(data)

  @coroutine
  def create(self, title, link, desc, figure, _type, tag, cate_id, user_id):
    data = yield self.model_article.create(title, link, desc, figure, _type, tag, cate_id, user_id)
    raise Return(data)

  @coroutine
  def find_page_by_user_id(self, user_id, page):
    res = yield self.model_article.find_page_by_user_id(user_id, page)
    raise Return(res)
