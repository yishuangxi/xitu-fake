# coding=utf8
from base import ApiBase
from service.article import ServiceArticle
from tornado.gen import coroutine, Return
from decorator.auth import login


class ApiArticleBase(ApiBase):
    def __init__(self, *args, **kwargs):
        super(ApiArticleBase, self).__init__(*args, **kwargs)
        self.srv_article = ServiceArticle()


class ApiArticle(ApiArticleBase):
    @coroutine
    def get(self, article_id):
        self.json_ok("这是测试数据")

    @login
    @coroutine
    def post(self):
        title = self.get_argument('title', None)
        link = self.get_argument('link', None)
        desc = self.get_argument('desc', None)
        figure = self.get_argument('figure', None)
        _type = self.get_argument('type', None)
        tag = self.get_argument('tag', None)
        cate_id = self.get_argument('cate_id', None)
        user_id = self.get_current_user_id()

        data = yield self.srv_article.create(title, link, desc, figure, _type, tag, cate_id, user_id)
        self.json_ok(data)

    @coroutine
    def put(self, article_id):
        self.json_ok({"id": article_id, "method": "put"})

    @coroutine
    def delete(self, article_id):
        self.json_ok({"id": article_id, "method": "delete"})


class ApiArticles(ApiArticleBase):
    @coroutine
    def get(self):
        count = self.get_argument('count', 10)
        last_one = self.get_argument('last_one', 0)
        cate_id = self.get_argument('cate_id', None)

        data = yield self.srv_article.find_page_by_cate(cate_id, last_one, count)

        self.json_ok(data)

class ApiArticlesRead(ApiArticleBase):
    @coroutine
    def get(self):
        user_id = self.get_argument('user_id', None)
        page = self.get_argument('page', 1)
        data = yield self.srv_article.find_page_by_user_id(user_id, page)
        self.json_ok(data)

