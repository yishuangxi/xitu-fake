/**
 * Created by Administrator on 2016/9/5.
 */

;(function($) {
    $(function() {
        var url = '/api/cates';
        $.ajax(url,{
            method:'GET',
            dataType:'json',
            success:function(response) {
                var html = template('left-nav',response);
                $('[data-sel=left-nav]').append(html);
            }
        })
    })
})(jQuery);
