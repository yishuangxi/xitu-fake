# coding=utf8
from api import user, article, cate

router_api = [
  (r'/api/login', user.ApiLogin),
  (r'/api/logout', user.ApiLogout),
  (r'/api/register', user.ApiRegister),

  # get 获取user详情
  (r'/api/user/(\d+)', user.ApiUser),
  (r'/api/me', user.ApiMe),
  # get 获取users列表
  (r'/api/users', user.ApiUsers),

  # post, 新增
  (r'/api/article', article.ApiArticle),
  # put 修改
  (r'/api/article/(\d+)', article.ApiArticle),
  # get id 获取
  (r'/api/article/(\d+)', article.ApiArticle),
  # delete  删除
  (r'/api/article/(\d+)', article.ApiArticle),
  # get 获取列表
  (r'/api/articles', article.ApiArticles),
  # get 获取阅读列表
  (r'/api/articles/read', article.ApiArticlesRead),

  # 获取
  (r'/api/cate/(\d+)', cate.ApiCate),
  # 获取列表
  (r'/api/cates', cate.ApiCates)

]
