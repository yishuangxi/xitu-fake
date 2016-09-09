/**
 * Created by Administrator on 2016/9/7.
 */
;(function($) {
    $(function() {
        $('[data-sel=login]').click(function() {
            var username = $('[data-sel=login-username]').val();
            var password = $('[data-sel=login-password]').val();

            if(username.length < 3 || username.length > 8) {
                $('.login-note').text("*用户名不存在");
                return;
            }
            if(password.length < 3 || password.length > 8) {
                $('.login-note').text("*用户名不存在或密码错误");
                return;
            }

            $.post('/api/login',{
                username:username,
                password:password
            }).done(function(data) {
                console.log("success");
                if(data.code == 1) {
                    alert("登录成功!");
                    $('.hero-cover').removeClass('open');
                    $('.login-cover').removeClass('open');
                } else {
                    $('.login-note').text("*用户名不存在或密码错误");
                }
            })
                .fail(function() {
                    console.log("failed");
                })
        });

        $('.icon-close').click(function(){
            $('.hero-cover').removeClass('open');
            $('.login-cover').removeClass('open')
        });

        $('.to-register').click(function() {
            $('.login-cover').removeClass('open');
            $('.register-cover').addClass('open')
        })


    })
})(jQuery);