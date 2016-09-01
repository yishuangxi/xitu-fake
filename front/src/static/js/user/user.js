/**
 * Created by db on 16/8/21.
 */
;(function(){
    var userId = location.pathname.split("/")[2]


    //用ajax请求数据渲染用户主页
    var url = '/api/articles/read?user_id=100000'
    $.ajax(url,{
        method:"GET",
        async:"true",
        success:function(data){
            console.log( data)


            var html = template('user-name', data)

            $('.user-role').after(html)

        },
        error:function(){

        }
    })

})();
