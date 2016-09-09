/**
 * Created by db on 16/9/6.
 */

;(function ($) {
    $(function () {

        var url = '/api/articles'
        $.ajax(url, {
            method: 'GET',
            success: function(response){
                var html = template('content-nologin', response)
                $('[data-sel="content-nologin"]').prepend(html)
            }
        })
    });




})(jQuery);

