/**
 * Created by db on 16/9/9.
 */

;(function(){
  var $click =$('.click')
    $click.focus(function(){
        var $clickIndex = $click.index(this)
        $click.eq($clickIndex).addClass('click-blue')
    })
    $click.blur(function(){
     var $clickIndex = $click.index(this)
      $click.eq($clickIndex).removeClass('click-blue')
    })

})();

;(function(){

    var $cTag = $('.c-tag')
    var $cTagIndex
    $cTag.click(function(){
        $cTagIndex = $cTag.index(this)
        $cTag.eq($cTagIndex).addClass('c-tag-style').siblings().removeClass('c-tag-style')

    })

    var $create=$('.c-tag-id')
    var $createIndex
    $create.click(function () {
        $createIndex=$create.index(this)
        $create.eq($createIndex).addClass('c-tag-style-id').siblings().removeClass('c-tag-style-id')
    })

})();




;(function () {
    $('[data-sel=submission]').click(function () {

        var title = $('[data-sel=share-title]').val()
        var website = $('[data-sel=share-website]').val()
        var describe=$('[data-sel=share-describe]').val()
        var type = $('.c-tag-style').attr('data-cateid')
        var tag =$('[data-sel=share-tag]').val()
        var cate_id=$('.c-tag-style-id').attr('data-cateid')
        console.log('tag',tag)

        $.post('/api/article',{
            title:title,
            link:website,
            desc:describe,
            tag:tag,
            type:type,
            cate_id:cate_id

        }).done(function (data) {
            if(data.code===1){
                console.log('成功')
            }

        }).fail(function(){
            console.log('失败')
        })
    })
})();

