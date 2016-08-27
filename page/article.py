# coding=utf8
from base import PageBase


class PagePublish(PageBase):
    def get(self):
        self.render('publish.html')
