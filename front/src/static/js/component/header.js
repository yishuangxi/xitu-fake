/**
 * Created by db on 16/8/28.
 */
;(function(){
    $('[cephalic="list"]').click(function(event){   //头部点击出现下拉列表功能
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

    $('[data-sel="list2"]').hover(function(){      //下拉列表内hover关于列表弹出功能
        $('[data-sel="list2-content"]').css('display','block')

    },function(){
        $('[data-sel="list2-content"]').css('display','none')

    })


    $('[data-sel="exit"]').click(function(){    //登出功能实现
        $.post('/api/logout', {

        }).done(function(data){
            console.log(data)

            if(data.code === 1){
                alert("确定要退出吗？")
                window.location.href='http://localhost:8888'
            }else if(data.code == 0){
                alert("退出失败")
            }
        })

    })

    $('[data-sel="contribute"]').click(function(){  //点击头部“＋”页面跳转至投稿页面
       window.location.href='http://localhost:8888/publish'
    })

    $('[ data-sel="go-home"]').click(function(){   //点击我的主页跳转到个人主页页面
        $.post('/api/logout',{
        }).done(function(data){
            console.log('1111'+data)
            window.location.href='/user/'+location.pathname.split("/")[2]
        })

    })

    $('[data-sel="go-homepage"]').click(function(){
        window.location.href='http://localhost:8888'
    })

})();
