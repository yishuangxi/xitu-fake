from base import PageBase
from tornado.gen import coroutine


class PageIndex(PageBase):
    @coroutine
    def get(self, *args, **kwargs):
        user_id = self.get_cookie('xitu_token')
        if user_id:
            print 'user_id: ', user_id
            user = yield self.srv_user.find_one_by_id(user_id)
            print user
            self.render('index-login.html', user=user)
        else:
            self.render('index.html')
