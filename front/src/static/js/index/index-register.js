


;(function () {
    $('[data-sel=hd-register]').click(function () {

        $('[data-sel=i-want-register]').css("display","block")
        console.log('注册窗口打开了')

    })


    $('[data-sel=register-Off]').click(function () {

        $('[data-sel=i-want-register]').css("display","none")
        console.log('注册窗口关了')
    })

    $('[data-sel=ok]').click(function(){
        var username = $('[data-sel=register-call]').val()
        var password = $('[data-sel=register-password]').val()
        // var mail =$('[data-sel=register-mail]').val()

        console.log(username)
        console.log(password)
        // console.log(mall)

        $.post('/api/register', {
            username: username,
            password: password

        }).done(function (data) {
            console.log('data ================== ', data)
            if(data.code === 1){
                alert("注册成功！请登录")
                $('[data-sel=i-want-register]').css("display","none")
            }
            // else {
            //     alert("帐号存在或密码错误，请重新输入")
            // }





            

        })





    })
})();