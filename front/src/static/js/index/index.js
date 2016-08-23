/**
 * Created by db on 16/8/23.
 */
;(function(){
    console.log('kskssss')
    var list = []

    for(var i = 0;i < 2;i++){
        list.push({
            image: 'http://ac-mhke0kuv.clouddn.com/c87dbc267c15a2cccb49.jpeg?imageView/1/w/120/h/120/q/100/format/png',
            title: '高仿 QQ、微信效果的图片浏览器（支持原图和缩略图、多种手势、CocoaPods） ',
            ion: '136',
            username: 'CoderKo1o',
            time:'6天前',
        })
        alert(list.length)
    }

    var $div = $('.entry').clone(true);

    for(var i = 0;i <= 5;i++){


       //var $img = $('.entry-screenshot').find('img')
       // var $title = $('.entries-title')
       // var $ion = $('.collection-action').find('span')
       // var $username = $('.action')
       // $img.attr = ('src',list[i]['image'])
       // $title.innerHTML =list[i]['title']
       // $ion.innerHTML =list[i]['ion']
       // $username.innerHTML =list[i]['time']

        $('.entry:last-child').append($div)



    }
})();
