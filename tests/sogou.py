import requests
import codecs
r = requests.get('http://weixin.sogou.com/pcindex/pc/pc_0/1.html')


f = codecs.open('sogou-load.html', 'w', 'utf8')
f.write(r.text)
f.close()