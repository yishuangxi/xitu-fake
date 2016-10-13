/**
 * Created by db on 16/10/12.
 */


;(function($){
    $(function(){

        $(document).on('click', '.c-middle', function(){
            $(this).addClass('c-middle-top')
        })

        $(document).on('click', '.c-middle-top', function(){
            $(this).addClass('c-middle-left')
        })


    })
})(jQuery);