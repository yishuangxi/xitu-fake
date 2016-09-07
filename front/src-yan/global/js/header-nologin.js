/**
 * Created by db on 16/9/6.
 */
;(function(){
    $('[data-sel="login"]').click(function(){  //打开登陆
        console.log('打开登陆')
        $('[data-sel="login-modal"]').css('display','block')
    })

    $('[data-sel="hd-register"]').click(function(){
       console.log('打开注册')
        $('[data-sel="i-want-register"]').css('display','block')
    })
})();