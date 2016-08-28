from base import PageBase


class PageIndex(PageBase):
    def get(self, *args, **kwargs):
        if self.get_cookie('xitu_token'):
            self.render('index-login.html')
        else:
            self.render('index.html')
