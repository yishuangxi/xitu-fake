/**
 * Created by db on 16/9/8.
 */
;(function(){
  var url = '/api/articles/read?user_id='+$('[data-sel="go-home"]').attr('data-userid')
  $.get(url,function(){

  }).done(function(data){
    var html = template('content-login',data)
    $('[data-sel="content-maiddle"]').append(html)
  })
})();
