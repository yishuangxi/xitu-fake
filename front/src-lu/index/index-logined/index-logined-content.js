/**
 * Created by Administrator on 2016/9/9.
 */


;(function(){
    var url = '/api/articles'
    $.get(url,function(){

    }).done(function(data){
        var html = template('content-login',data);
        $('.home-entry-item').append(html)
    })
})();