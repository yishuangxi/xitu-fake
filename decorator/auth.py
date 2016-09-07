# coding=utf8
from functools import wraps
from tornado.gen import coroutine, Return


def login(fn):
  @wraps(fn)
  @coroutine
  def _(self, *args, **kwargs):
    user = yield self.get_current_user()
    if not user:
      self.json_err('你还未登陆')
    else:
      # 因为fn是异步函数,所以,这里要用yield来执行
      yield fn(self, *args, **kwargs)

  return _
