;
(function ($) {

})(jQuery);


;
(function () {
    var $li = $('.nav-list li')
    $li.click(function () {
        console.log(1112)
       var $liIndex = $li.index(this)
     $('.content').eq($liIndex).css("display","block").siblings().css("display","none")
    })


   var $li =  $('i').filter('.action')
    $li.hover(function(){
        var $liIndex = $li.index(this)
        console.log($liIndex)
        $li.next().eq($liIndex).css("display","block")
    },function(){
        var $liIndex = $li.index(this)
        $li.next().eq($liIndex).css("display","none")
    })


})();

;