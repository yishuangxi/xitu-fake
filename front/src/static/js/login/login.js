/**
 * Created by db on 16/8/27.
 */
$(function () {
    $('.login-button').click(function () {
        var username = $('[data-sel=username]').val()
        var password = $('[data-sel=password]').val()
        console.log(username)
        $.post('/api/login', {
            username: username,
            password: password
        }).done(function(data){
            console.log(data)
            if(data.code === 1){
                console.log('1'+data)
                window.location.href='http://localhost:8888/user/10000'
            }else{
                alert('您输入的用户名或密码错误，请重新输入!!')
            }
        })
//
//            $.post('/api/login',
//                    {
//                        username: username,
//                        password: password
//                    }, function (data) {
//                        console.log(data)
//                    })


    })

    $('[data-sel=logout]').click(function () {
        $.post('/api/logout', {
        }).done(function(data){
            console.log(data)
        })
    })

   $('[login=shut-down]').click(function(){
       $('[login="user"]').css('display','none')
   })


})