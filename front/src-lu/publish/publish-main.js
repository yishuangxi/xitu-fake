/**
 * Created by Administrator on 2016/9/9.
 */


;(function() {
    $('.tags>.tag').click(function() {
        $(this).addClass('choose');
        $(this).siblings().removeClass('choose')
    });

    var inputTarget = $('[name=url],[name=title],[name=content],.new-tag-input');
    inputTarget.focus(function() {
        $(this).addClass('outline-blue');
    });
    inputTarget.blur(function() {
        $(this).removeClass('outline-blue');
    })

    $('[data-sel=submit-pub]').click(function() {
        var webUrl = $('[name=url]').val();
        var tittle = $('[name=title]').val();
        var desc = $('[name=content]').val();
        var tag = $('.new-tag-input').val();
        var type = $('[data-sel=type]>*').filter('.choose').attr('data-cateid');
        var cate_id = $('[data-sel=cate]>*').filter('.choose').attr('data-cateid');
        console.log(type + '----------' + cate_id)

        $.post('/api/article',{
            tittle:tittle,
            link:webUrl,
            desc:desc,
            tag:tag,
            type:type,
            cate_id:cate_id
        }).done(function(data) {
            if(data.code == 1){
                console.log("success");
            }
        }).fail(function() {
            console.log("failed");
        })
    })
})(jQuery);