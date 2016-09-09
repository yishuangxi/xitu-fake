
;(function () {
    var $list =$('[data-sel=list]')
    console.log($list)
    $list.click(function () {
        $('[data-sel=sign-list]').css("display", "block")
    })

    var $aboutIist =$('[data-sel=about-list]')
    $aboutIist.hover(function () {
        $('[data-sel=about-content]').css("display", "block")
    })
    
    
    
    
    

})();