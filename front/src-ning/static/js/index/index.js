;(function ($) {
    $(function () {
        var url = '/api/cates'

        $.ajax(url, {
            method:'GET',
            success:function (data) {
                console.log(data)


                var html = template('left-navigation',data)

                $('[data-sel=head-navigation]').append(html)
            }
        })
    })
})(jQuery);