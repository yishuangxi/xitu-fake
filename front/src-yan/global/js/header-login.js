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

})();

