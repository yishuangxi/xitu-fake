/**
 * Created by db on 16/9/8.
 */
;(function(){
  $('[data-sel="list"]').click(function(event){    //点头相弹出退出登陆列表
    if($('[data-sel="list-content"]').css('display')=='none'){
       $('[data-sel="list-content"]').css('display','block')
    }else{
      $('[data-sel="list-content"]').css('display','none')
    }
    event.stopPropagation()

  })

  $('body').click(function(){      //点击列表本身隐藏
        if($('[data-sel="list-content"]').css('display') === 'block'){
            $('[data-sel="list-content"]').css('display','none')
        }else{
            return
        }

    })


  $('[data-sel="list2"]').hover(function(){  //hover关于子列表显示
    $('[data-sel="list2-content"]').css('display','block')
  },function(){
    $('[data-sel="list2-content"]').css('display','none')
  })


})();

;(function(){
  $('[data-sel="exit"]').click(function(){  //登出
    $.get('/api/logout',function(){

    }).done(function(data){
      console.log(data)
      if(data.code === 1){
        alert('您确定要退出吗？')
         window.location.reload();
      }else if(data.code === 0){
        alert('退出失败')
      }
    })
  })

;(function(){
    $('[data-sel="contribute"]').click(function(){
      window.location.href='http://localhost:8888/publish'
    })


     $('[data-sel="go-homepage"]').click(function(){
        window.location.href='http://localhost:8888'
    })

    $('[ data-sel="go-home"]').click(function(){   //点击我的主页跳转到个人主页页面

            window.location.href='/user/'+$('[data-sel="go-home"]').attr('data-userid')

    })
  })();

})();

