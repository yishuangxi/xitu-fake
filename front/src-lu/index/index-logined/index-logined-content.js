/**
 * Created by Administrator on 2016/9/9.
 */


;(function(){
    var url = '/api/articles';

    //ajax 请求 数据，动态生成页面index-main-content部分
    $.get(url,function(){

    }).done(function(data){
        var html = template('content-login',data);
        $('.home-entry-item').append(html)
    });

})();

