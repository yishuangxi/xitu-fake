# coding=utf8
from tornado.gen import coroutine, Return
import asynctorndb
from config.mysql import config_mysql
import datetime
from functools import wraps


class ModelBase(object):
    @coroutine
    def __get_connection(self):
        conn = asynctorndb.Connection(host=config_mysql.get('host'), database=config_mysql.get('database'),
                                      user=config_mysql.get('user'),
                                      passwd=config_mysql.get('password'), charset="utf8")
        yield conn.connect()
        raise Return(conn)

    @coroutine
    def __do_sql(self, method, sql, *args, **kwargs):
        conn = yield self.__get_connection()
        if hasattr(conn, method):
            method = getattr(conn, method)
            res = yield method(sql, *args, **kwargs)
            raise Return(res)

    # 装饰器，装饰asynctorndb各方法：iter, query, get, update, delete, execute, insert,
    def __do_sql_operation(method):
        def _(func):
            @wraps(func)
            @coroutine
            def __(self, sql, *args, **kwargs):
                res = yield self.__do_sql(method, sql, *args, **kwargs)
                raise Return(res)

            return __

        return _

    @__do_sql_operation('iter')
    def iter(self): pass

    @__do_sql_operation('query')
    def query(self): pass

    @__do_sql_operation('get')
    def get(self): pass

    @__do_sql_operation('execute')
    def execute(self): pass

    @__do_sql_operation('execute_lastrowid')
    def execute_lastrowid(self): pass

    @__do_sql_operation('execute_rowcount')
    def execute_rowcount(self): pass

    @__do_sql_operation('executemany')
    def executemany(self): pass

    @__do_sql_operation('executemany_lastrowid')
    def executemany_lastrowid(self): pass

    @__do_sql_operation('executemany_rowcount')
    def executemany_rowcount(self): pass

    @__do_sql_operation('update')
    def update(self): pass

    @__do_sql_operation('delete')
    def delete(self): pass

    @__do_sql_operation('updatemany')
    def updatemany(self): pass

    @__do_sql_operation('insert')
    def insert(self): pass

    @__do_sql_operation('insertmany')
    def insertmany(self): pass

    def now(self):
        return datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
