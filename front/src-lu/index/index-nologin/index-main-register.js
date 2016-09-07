/**
 * Created by Administrator on 2016/9/6.
 */

;(function($) {
    $(function() {
        $('[data-sel=register]').click(function() {
            var username = $('[data-sel=register-username]').val();
            var password = $('[data-sel=register-password]').val();
            if(username.length < 3 || username.length > 8) {
                $('.register-note').text("*用户名长度要求3-8位");
                return;
            }
            if(password.length < 3 || password.length > 8) {
                $('.register-note').text("*密码长度要求3-8位");
                return;
            }
            $.post('/api/register',{
                username:username,
                password:password
            }).done(function(data) {
                console.log("success")
                if(data.code == 1 && username) {
                    alert("注册成功!请登录");
                    $('.hero-cover').removeClass('open');
                    $('.login-cover').removeClass('open');
                }
            })
                .fail(function() {
                    $('.register-note').text("*用户名已经存在");
                    console.log("failed");
                })
        });

        $('.icon-close').click(function(){
            $('.hero-cover').removeClass('open');
            $('.login-cover').removeClass('open')
        })


    })
})(jQuery);

