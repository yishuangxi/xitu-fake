from tornado.ioloop import IOLoop
from tornado.web import Application
from config.site import config_site
from router.router_all import router_all

if __name__ == '__main__':
    app = Application(router_all, **config_site)
    port = 8888
    app.listen(port)
    print 'serving on http://localhost:' + str(port)
    IOLoop.instance().start()
