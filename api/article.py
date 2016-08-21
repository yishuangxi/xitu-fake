# coding = utf8
from base import ApiBase


class ApiArticle(ApiBase):
    def get(self, article_id):
        self.json_ok({"title": "title 1", "content": "content 1"})

    def post(self):
        self.json_ok({"id": 1, "method": "post"})

    def put(self, article_id):
        self.json_ok({"id": article_id, "method": "put"})

    def delete(self, article_id):
        self.json_ok({"id": article_id, "method": "delete"})


class ApiArticles(ApiBase):
    def get(self):
        self.json_ok([{"title": "title 1", "content": "content 1"}])
