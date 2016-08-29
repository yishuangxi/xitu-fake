// ;(function () {
//     var $register =$('[data-sel=register]')
//
//     $register.click(function () {
//
//         // console.log($register)
//         var $registerIndex=$register.index(this)
//         console.log($registerIndex)
//         $(['[login="user"]']).eq($registerIndex).css("display","block")
//     })
// })();

//
//
;(function(){
    $('[data-sel=hd-register]').click(function () {

        $('[data-sel=i-want-register]').css("display","block")
        console.log(123)

    })
})();


;(function () {
    $('[data-sel=register-Off]').click(function () {

        $('[data-sel=i-want-register]').css("display","none")
        console.log(987)
    })
})();