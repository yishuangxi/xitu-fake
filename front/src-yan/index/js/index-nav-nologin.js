

;(function ($) {
    $(function () {

        var url = '/api/cates'
        $.ajax(url, {
            method: 'GET',
            success: function(response){
                var html = template('aside-nav', response)
               $('[data-sel="aside-nav"]').prepend(html)
            }
        })
    });
})(jQuery);
