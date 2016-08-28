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




$('[data-sel=register]').click(function () {

    $('[login="user"]').css("display","block")
    console.log('aaa')

})