/**
 * Created by Administrator on 2016/9/6.
 */

;(function($) {
    $(function() {
        $('[data-sel=register]').click(function() {
            var username = $('[data-sel=register-username]').val();
            var password = $('[data-sel=register-password]').val();
            $.post('/api/register',{
                username:username,
                password:password
            }).done(function(data) {
                if(data.code == 1) {
                    alert("注册成功!请登录");
                    $('.hero-cover').removeClass('open');
                    $('.login-cover').removeClass('open');
                } else {

                }
            })
        })
    })
})(jQuery);

