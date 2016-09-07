/**
 * Created by db on 16/9/6.
 */
;(function(){
    $('[ data-sel="shut-down"]').click(function(){    //关闭登陆弹框
        console.log('关闭登陆')
        $('[data-sel="login-modal"]').css('display','none')
    })

    $('[data-sel="login-button"]').click(function(){
        var username = $('[data-sel="username"]').val()
        var password = $('[data-sel="password"]').val()
        $.post('/api/login',{
            username:username,
            password:password
        }).done(function(data){
            console.log(data)
            if(data.code === 1){
                window.location.href ='/user/'+ data.data.id
            }else{
                alert('您输入的用户名或密码错误，请重新输入！！')
            }


        })
    })

})();
