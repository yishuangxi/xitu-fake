/**
 * Created by Administrator on 2016/9/5.
 */
// 左导航栏数据请求
;(function($) {
    $(function() {
        var url = '/api/cates';
        $.ajax(url,{
            method:'GET',
            dataType:'json',
            success:function(response) {
                var html = template('left-nav',response);
                $('[data-sel=container]').append(html);
            }
        })
    })
})(jQuery);

//nologin页面动作控制
;(function($) {
    $(function() {
        $('[data-sel=header-register]').click(function() {
            $('.hero-cover').addClass('open')
            $('.login-cover').addClass('open')
        })
        $('[data-sel=main-register]').click(function() {
            $('.hero-cover').addClass('open')
            $('.login-cover').addClass('open')
        })
    })
})(jQuery);