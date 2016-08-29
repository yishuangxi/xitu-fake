// ;(function () {
//     var $register =$('[data-sel=register]')
//
//     $register.click(function () {
//
//         // console.log($register)
//         var $registerIndex=$register.index(this)
//         console.log($registerIndex)
//         $(['[login="user"]']).eq($registerIndex).css("display","block")
//     })
// })();

//
//
;(function(){
    $('[data-sel=hd-register]').click(function () {

        $('[data-sel=i-want-register]').css("display","block")
        console.log('注册窗口打开了')

    })
})();


;(function () {
    $('[data-sel=register-Off]').click(function () {

        $('[data-sel=i-want-register]').css("display","none")
        console.log('注册窗口关了')
    })

    $('[data-sel=ok]').click(function(){
        var username = $('[data-sel=register-call]').val()
        var password = $('[data-sel=register-password]').val()
        var email =$('[data-sel=register-mail]').val()

        console.log(username)
        console.log(password)
        // console.log(mall)

        $.post('/api/register', {
            username: username,
            password: password

        }).done(function (data) {
            console.log('data ================== ', data)
        })

        // function post(url,params) {
        //     var temp=$post('/api/register')
        //     temp.username =username
        //     temp.password = password
        //     temp.mall = mall
        //     console.log(temp)
        //
        //     for(var x in params){
        //         temp.appendChild(temp)
        //
        //     }
        // }





    })
})();