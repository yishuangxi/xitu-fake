/**
 * Created by db on 16/9/13.
 */

    document.querySelector('#load-js').addEventListener('click', function(e){



      var url = './clone.js'
      var script = document.createElement('script')
      script.src = url
      script.async = false
      console.log('加载中...')
      document.body.appendChild(script)
      console.log('加载完成...')
    },false)

setTimeout(function(){
  var url = './clone.js'
      var script = document.createElement('script')
      script.src = url
      script.async = false
      console.log('加载中...')
      document.body.appendChild(script)
      console.log('加载完成...')
}, 2000)
