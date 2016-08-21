# coding=utf8
from api import user, article, cate

router_api = [
    (r'/api/login', user.ApiLogin),
    (r'/api/logout', user.ApiLogout),
    (r'/api/register', user.ApiRegister),

    # post, 新增
    (r'/api/article', article.ApiArticle),
    # put 修改
    (r'/api/article/(\d+)', article.ApiArticle),
    # get id 获取
    (r'/api/article/(\d+)', article.ApiArticle),
    # delete  删除
    (r'/api/article/(\d)', article.ApiArticle),
    # get 获取列表
    (r'/api/articles', article.ApiArticles),

    # 获取
    (r'/api/cate/(\d+)', cate.ApiCate),
    # 获取列表
    (r'/api/cates', cate.ApiCates)

]
