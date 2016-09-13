/**
 * Created by db on 16/9/8.
 */
;(function(){                           //导航关注栏喧染
   var url = '/api/cates?user_id='+$('[data-sel="go-home"]').attr('data-userid')+'&page=1'
  console.log(url)
  $.get(url,function(){

  }).done(function(data){
    var html = template('nav-login',data)
    $('[data-sel="index-nav"]').append(html)
  })


  $('[data-sel="index-title"]').click(function(){    //导航收放功能
    var navIndex = $('[data-sel="index-title"]').index(this)

    console.log(navIndex)
    if($('.category-list').filter('.none')[0] === $('.category-list').eq(navIndex)[0]){
      return
    }
    $('.category-list').not('.none').css('display','none')
    $('.category-list').eq(navIndex).show(function(){
      $(this).addClass('none')
    })
    $('.category-list').filter('.none').hide(function(){
      $(this).removeClass('none')
    })
  })


})();
