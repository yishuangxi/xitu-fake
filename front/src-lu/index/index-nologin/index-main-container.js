/**
 * Created by Administrator on 2016/9/6.
 */

;(function() {
    $(function() {
        var url = '/api/articles';
        $.ajax(url,{
            method:'GET',
            dataType:'json',
            success:function(data) {
                var html = template('entries',data);
                $('[data-sel=entries]').append(html);
            }
        })
    })
})(jQuery);