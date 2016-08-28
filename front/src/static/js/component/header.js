/**
 * Created by db on 16/8/28.
 */
;(function(){
    $('[cephalic="list"]').click(function(event){
        if($('[cephalic="list-content"]').css('display') === 'none'){
            $('[cephalic="list-content"]').css('display','block')
        } else{
            $('[cephalic="list-content"]').css('display','none')
        }

        event.stopPropagation()
    })

    $('[ data-sel="body"]').click(function(){
        if($('[cephalic="list-content"]').css('display') === 'block'){
            $('[cephalic="list-content"]').css('display','none')
        }else{
            return
        }

    })

    $('[data-sel="list2"]').hover(function(){
        $('[data-sel="list2-content"]').css('display','block')

    },function(){
        $('[data-sel="list2-content"]').css('display','none')

    })

})();
