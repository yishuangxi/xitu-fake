/**
 * Created by db on 16/8/31.
 */
;(function($){
    $(function(){   //获取数据喧染index-login导航栏
      var url = '/api/cates?user_id=100000&page=1'
        $.ajax(url,{
            method: 'GET',
            success:function(data){
                console.log("==========",data)
                var html = template('index-nav2',data)
                $('[data-sel="index-nav"]').append(html)

            }
        })






        $('[ data-sel="index-title"]').click(function(){        //index-login导航点击展开
            var $index = $('[ data-sel="index-title"]').index(this)
            var $list =$('.category-list')

            console.log($index)
            if($list.filter('.none')[0] == $list.eq($index)[0]){
                return
            }
            $list.not('.none').css('display','none')

            $list.filter('.none').hide(function(){
                $(this).removeClass('none')
            })
            $list.eq($index).show(function(){
                $(this).addClass('none')
            })


        })

        $('[data-sel="close"]').click(function(){
            $('[data-sel="close-img"]').css('display','none')
            $('[data-sel="close"]').css('display','none')
        })



    });

})(jQuery);

