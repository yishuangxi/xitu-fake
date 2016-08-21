from base import PageBase


class PageIndex(PageBase):
    def get(self, *args, **kwargs):
        self.render('index.html')
