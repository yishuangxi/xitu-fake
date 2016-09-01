# coding=utf8
from base import ModelBase
from tornado.gen import coroutine, Return


class ModelArticle(ModelBase):
    @coroutine
    def find_one_by_id(self, article_id):
        sql = 'select * from article where id=%s limit 1'
        data = yield self.get(sql, article_id)
        raise Return(data)

    @coroutine
    def find_page_by_cate(self, cate_id=None, article_id=0, count=10):
        print 'count: ' + str(count) + ' count type: ' + str(type(count))
        if cate_id:
            sql = '''select * from article where id > %s and cate_id=%s limit %s'''
            data = yield self.query(sql, article_id, cate_id, count)
        else:
            sql = '''select * from article where id > %s limit %s'''
            data = yield self.query(sql, article_id, count)

        raise Return(data)

    @coroutine
    def find_page_latest(self, article_id, count=10):
        sql = '''select * from article'''
        data = yield self.query(sql)
        raise Return(data)

    @coroutine
    def find_page_hottest(self, article_id):
        sql = '''select * from article'''
        data = yield self.query(sql)
        raise Return(data)

    @coroutine
    def create(self, title, link, desc, figure, _type, tag, cate_id, user_id):
        sql = '''insert into article (`id`, `title`, `link`, `desc`, `figure`, `type`, `tag`,
                                      `cate_id`,`user_id`, `created_at`, `updated_at`)
                                      values (null, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)'''
        now = self.now()
        article_id = yield self.insert(sql, title, link, desc, figure, _type, tag, cate_id, user_id, now, now)

        raise Return(article_id)

    #创建article_cate关系
    @coroutine
    def _create_relation_article_cate(self, article_id, cate_id):
        sql = '''insert into r_article_cate (`article_id`, `cate_id`) values (%s, %s)'''
        data = yield self.insert(sql, article_id, cate_id)
        raise Return(data)

    @coroutine
    def find_page_by_user_id(self, user_id, page=1):
        count = 10
        start = (page -1) * count
        end = start + count

        sql = 'select a.* from article a ' \
              'INNER JOIN `read` b ' \
              'ON a.id=b.article_id ' \
              'WHERE b.user_id=%s limit %s, %s'

        data = yield self.query(sql, user_id, start, end)
        raise Return(data)
