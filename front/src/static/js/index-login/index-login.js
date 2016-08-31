/**
 * Created by db on 16/8/31.
 */
;(function($){
    $(function(){
      var url = '/api/cates?user_id=100000&page=1'
        $.ajax(url,{
            method: 'GET',
            success:function(data){
                console.log("==========",data)
                var html = template('index-nav2',data)
                $('[data-sel="index-nav"]').append(html)

            }
        })


        $('[ data-sel="index-title"]').click(function(){
            var $index = $('[ data-sel="index-title"]').index(this)
            console.log($index)

            $('.category-list').eq($index).addClass('none')

        })



    });

})(jQuery);

