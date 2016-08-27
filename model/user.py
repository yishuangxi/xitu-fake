# coding=utf8
from base import ModelBase
from tornado.gen import coroutine, Return


class ModelUser(ModelBase):
    @coroutine
    def find_one_by_username_password(self, username, password):
        sql = 'select * from user where username=%s and password=%s limit 1'
        res = yield self.get(sql, username, password)
        raise Return(res)

    @coroutine
    def find_one_by_id(self, user_id):
        sql = 'select * from user where id=%s limit 1'
        res = yield self.get(sql, user_id)
        raise Return(res)

    @coroutine
    def find_one_by_username(self, username):
        sql = 'select * from user where username=%s limit 1'
        res = yield self.get(sql, username)
        raise Return(res)

    # 翻页功能: 如果传入了following_id, 则查找对应用户id所关注的用户列表, 否则查找所有用户
    @coroutine
    def find_page(self, following_id=None, page=1):
        count = 10
        start = (page - 1) * count
        end = start + count

        if following_id:
            sql = 'select a.*, b.following_id from user a INNER JOIN r_follow_user b on a.id=b.following_id WHERE b.following_id=%s limit %s, %s'
            res = yield self.query(sql, following_id, start, end)
        else:
            sql = 'select * from user limit %s, %s'
            res = yield self.query(sql, start, end)

        raise Return(res)

    @coroutine
    def create(self, username, password, ):
        sql = '''insert into user (id, username, password, enabled, created_at, updated_at)
                                             values(null, %s, %s, %s, %s, %s)'''
        enabled, now = '1', self.now()
        res = yield self.insert(sql, username, password, enabled, now, now)

        raise Return(res)
