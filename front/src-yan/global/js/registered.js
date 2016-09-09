/**
 * Created by db on 16/9/7.
 */
;(function () {
  $('[data-sel="register-Off"]').click(function () {  //关闭注册页面
    $('[data-sel="i-want-register"]').css('display', 'none')
    $('[data-sel="register-username"]').val('')
    $('[data-sel="register-password"]').val('')
    $('.register-text').text('')
    $('[data-sel="ok"]').css('background-color','#007fff')
  })

  $('[data-sel="ok"]').click(function () {
    var username = $('[data-sel="register-username"]').val()
    var password = $('[data-sel="register-password"]').val()
    console.log(username)
    console.log(password)
    var usernamel =username.length
     console.log(usernamel)
    if(usernamel<3||usernamel>5 ){
      $('.register-text').text('用户名3-8位数')
      return
    }

    $.post('/api/register',{

      username:username,
      password:password

    }).done(function(data){
      console.log('data',data)
      if(data.code===1){
        $('.register-text').text('＊注册成功')
        $('[data-sel="ok"]').css('background-color','#ddd')

      }
    }).fail(function(){

        $('.register-text').text('＊您输入的用户已存在')

    })



  })
})();