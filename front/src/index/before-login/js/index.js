$(function () {
    var url = "http://localhost:8888/api/articles";
    $.ajax(url, {
        method: "GET",
        async: true,
        success: function (response) {
            console.log(response)
            var html = template('test', response)
            $('.box-entries').append(html)

        },
        error: function () {

        }

    })
});


;
(function () {
    var $li = $('.nav-list li')
    $li.click(function () {
        console.log(1112)
        var $liIndex = $li.index(this)
        console.log($liIndex)
        $('.content').eq($liIndex).css("display", "block").siblings().css("display", "none")
    });


    $(document).on('mouseover', '[data-sel=action]', function (event) {
        console.log('mouseover')
        var $i = $('[data-sel=action]')
        var $iIndex = $i.index(this)
        console.log($iIndex)
        $i.next().eq($iIndex).css("display", "block")
    })


    $(document).on('mouseout', '[data-sel=action]', function (event) {
        console.log('mouseout')
        var $i = $('[data-sel=action]')
        var $iIndex = $i.index(this)
        console.log($iIndex)
        $i.next().eq($iIndex).css("display", "none")

    })


    //
    //$('[data-sel=action]').click(function(){
    //
    //})
    //
    //$(document).on('click', '[data-sel=hd-login]')

    $('.hd-Login').click(function () {     //点击登陆打开登陆弹框
        console.log(11100)
        $('[data-sel="login-modal"]').css('display', 'block')
    })


})();


;(function ($) {
    $(function () {

        var url = '/api/cates'
            $.ajax(url, {
                method: 'GET',
                success: function(response){
                    console.log('data:', response)


                    var html = template('index-nav', response)
                    $('[data-sel=aside-nav]').append(html)


                }

            })


    });
})(jQuery);



