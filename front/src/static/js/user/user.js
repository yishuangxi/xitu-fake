/**
 * Created by db on 16/8/21.
 */
;
(function ($) {
    $(function () {
        var url = '/api'+location.pathname;

        var startTime = new Date().getTime()
        console.log('我马上要发请求了')
        //
        //$.ajax(url,{
        //    method:"GET",
        //    //data:params,
        //    //dataType:"json",
        //    async: true,
        //    success: function(){
        //        var $user = $('#user')
        //        var $entryTitle = document.createElement('div')
        //        var $img = document.createElement('img')
        //        $entryTitle.innerHTML = "为什么要使用 Node.js"
        //        $user.append($entryTitle)
        //        $img.attr=("src", "http://gold.xitu.io/images/welcome/entry-default-img@2x.png")
        //
        //    },
        //    error: function(){
        //
        //    }
        //});

        $.ajax(url, {
            method: 'GET',
            async: true,
            success: function (data) {

                //console.log("请求成功, 耗时： ", endTime - startTime)
                //console.log('data: ', data)
                var data = data.data
                var html = ''

                for(var p in data){
                    html =  html + '<div style="color: red">' +data[p] + '</div>'
                }

                $('#user').append(html)


            },
            error: function (err) {
                console.log(err)
            }
        })

        console.log('我正在做其它事情。。。。。。。。')

    })

})(jQuery);

