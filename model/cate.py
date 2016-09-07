# coding=utf8
from base import ModelBase
from tornado.gen import coroutine, Return


class ModelCate(ModelBase):
  @coroutine
  def find_one_by_id(self, cate_id):
    sql = 'select * from cate where id=%s limit 1'
    res = yield self.get(sql, cate_id)
    raise Return(res)

  @coroutine
  def find_all(self, user_id=None):
    if user_id:
      sql = 'select a.*, b.following_id from cate a ' \
            'INNER JOIN r_follow_cate b ' \
            'ON a.id =b.cate_id ' \
            'WHERE b.following_id=%s';
      res = yield self.query(sql, user_id)
    else:
      sql = 'select * from cate'
      res = yield self.query(sql)
    raise Return(res)
