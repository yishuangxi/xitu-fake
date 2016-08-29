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


    $('[data-sel="exit"]').click(function(){
        $.post('/api/logout', {

        }).done(function(data){
            console.log(data)

            if(data.code === 1){
                window.location.href='http://localhost:8888'
            }else if(data.code == 0){
                alert("退出失败")
            }
        })

    })

    $('[data-sel="contribute"]').click(function(){
       window.location.href='http://localhost:8888/publish'
    })

})();
