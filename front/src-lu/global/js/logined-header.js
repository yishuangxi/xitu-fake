/**
 * Created by Administrator on 2016/9/9.
 */

;(function() {

    //用户登录后的用户操作弹框
    $('.user-img').click(function() {
        if($('[data-sel=list-content]').hasClass('true')) {
            $('[data-sel=list-content]').removeClass('true');
        } else {
            $('[data-sel=list-content]').addClass('true');
        }
    });
//（关于）----动作
    $('[data-sel=list2]').mouseover(function() {
        $('[data-sel=list2-content]').addClass('true');
        //console.log($('[data-sel=list2-content]'))
    });
    $('[data-sel=list2]').mouseleave(function() {
        $('[data-sel=list2-content]').removeClass('true');
    });

    //退出登录
    $('[data-sel=exit]').click(function() {
        $.get('/api/logout',{
        }).done(function(data) {
            console.log("success");
            if(data.code == 1) {
                alert("退出成功!");
                //window.location.reload();
                location='/';
            } else {
                alert("退出失败!");
            }
        })
            .fail(function() {
                console.log("failed");
            })
    });

    //登录后的页面--用户操作部分，点击事件(改变颜色)
    $('li.logined-user-handle').click(function() {
        $(this).find(':last-child').removeClass('fadeout');
        $(this).find(':first-child').addClass('fadeout');

        $(this).siblings().find(':last-child').addClass('fadeout');
        $(this).siblings().find(':first-child').removeClass('fadeout')

    })

})(jQuery);