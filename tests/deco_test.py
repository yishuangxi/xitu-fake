from functools import wraps

def login(fn):
    @wraps(fn)
    def _():
        print 'before fn ...'
        fn()
        print 'after fn ...'

    return _

@login
def fn():
    print 'fn ...'


fn()
print 'fn.__name__', fn.__name__