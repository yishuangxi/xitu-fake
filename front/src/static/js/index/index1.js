/**
 * Created by Administrator on 2016/9/4.
 */


;(function($) {
    $(function() {
        var url = '/api/cates';
        $.ajax(url,{
            dataType:'json',
            method:'GET',
            success:function(response){
                var arr = response.data;
                console.log(arr);
                var html = template('aside-nav',response);
                console.log(html);
                $('[data-sel=aside-nav]').append(html);
            }
        })
    })
})(jQuery);

;(function() {

})(jQuery);