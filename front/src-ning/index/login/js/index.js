


// 左边导航数据请求
;(function ($) {
    $(function () {
        var url = '/api/cates'
        $.ajax(url, {
            method: 'GET',
            success: function(response){
                // console.log('data:', response)
                // console.log('ning')
                var html = template('index-nav', response)
                $('[data-sel=head-navigation-s]').append(html)
            }
        })
    });
})(jQuery);




// 注册点击的打开和关闭
;(function () {
    $register = $('[data-sel=click-register]')
    // 注册打开
    $register.click(function () {
        $('[data-sel=register-container]').css("display", "block")
        $('[data-sel=register-case]').css("display", "block")
    })
    // 注册关闭
    $close = $('[data-sel=register-close]')
    $close.click(function () {
        $('[data-sel=register-container]').css("display", "none")
        $('[data-sel=register-case]').css("display", "none")
    })



    // 注册数据的提交请求
    $('[data-sel=register-button]').click(function () {
        var accounts = $('[data-sel=register-accounts]').val()
        var password = $('[data-sel=register-password]').val()

        $.post('/api/register', {
            username: accounts,
            password: password

        }).done(function (data) {
            console.log('data ================== ', data)
            if(data.code === 1){
                alert("注册成功！请登录")
                $('[data-sel=register-container]').css("display", "none")
                $('[data-sel=register-case]').css("display", "none")
            }
            // else {
            //     alert("帐号存在或密码错误，请重新输入")
            // }

        })
    })
})();






// 中间文章数据请求
;(function () {
    $(function () {
        var url='/api/articles'
        $.ajax(url, {
            method:'GET',
            success:function (data) {
                // console.log(response)
                var html = template('homepage-article',data)
                $('[data-sel=homepage-article]').append(html)
            }
        })
    })
})(jQuery);



// // 左边导航点击事件添加其他的类名
// ;(function () {
//     var $naigation = $('[data-sel=head-navigation-s]')
//     var $naigationIndex
//
//     $naigation.click(function () {
//         console.log($naigation)
//
//         $naigationIndex = $naigation.index(this)
//
//         $naigation.eq($naigationIndex).addClass('head-navigation-2').siblings().removeClass('head-navigation-2')
//     })
//
//
// })();

