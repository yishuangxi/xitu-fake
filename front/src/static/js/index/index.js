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


    var $i = $('i').filter('.action')
    $i.hover(function () {
        var $iIndex = $i.index(this)
        console.log($iIndex)
        $i.next().eq($iIndex).css("display", "block")
    }, function () {
        var $iIndex = $i.index(this)
        $i.next().eq($iIndex).css("display", "none")
    })

    $('.hd-Login').click(function () {
        console.log(11100)
    })


})();

