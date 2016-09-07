// 左边导航数据请求
;(function ($) {
    $(function () {

        var url = '/api/cates'
        $.ajax(url, {
            method: 'GET',
            success: function(response){
                // console.log('data:', response)
                // console.log('ning')

                var html = template('index-nav', response)
                $('[data-sel=head-navigation-s]').append(html)

            }
        })
    });
})(jQuery);


// 中间文章数据请求
;(function () {
    $(function () {

        var url='/api/articles'
        $.ajax(url, {
            method:'GET',
            success:function (data) {
                // console.log(response)

                var html = template('homepage-article',data)

                $('[data-sel=homepage-article]').append(html)
            }
        })

    })




})(jQuery);



// // 左边导航点击事件添加其他的类名
// ;(function () {
//     var $naigation = $('[data-sel=head-navigation-s]')
//     var $naigationIndex
//
//     $naigation.click(function () {
//         console.log($naigation)
//
//         $naigationIndex = $naigation.index(this)
//
//         $naigation.eq($naigationIndex).addClass('head-navigation-2').siblings().removeClass('head-navigation-2')
//     })
//
//
// })();

