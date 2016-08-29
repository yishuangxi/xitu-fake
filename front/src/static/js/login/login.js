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
                window.location.href='/user/'+data.data.id
            }
        })

           // $.post('/api/login',
           //         {
           //             username: username,
           //             password: password
           //         }, function (data) {
           //             console.log(data)
           //         })




    })

    $('[data-sel=logout]').click(function () {
        $.post('/api/logout', {
        }).done(function(data){
            console.log(data)
        })
    })

   $('[login=shut-down]').click(function(){
       console.log(123456)
       $('[data-sel=login-modal]').css('display','none')
   })


})