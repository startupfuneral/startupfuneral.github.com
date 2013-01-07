$(function(){
    var lastScrollTop = 0;
    $(window).scroll(function(event){
       var currentScrollTop = $(this).scrollTop();
       if (currentScrollTop > lastScrollTop){
           console.log('scrolling down');
            $('.header').each(function(){
                if($(this).hasClass('fixed'))
                { 
                    var _next_header = $(this).nextUntil('.header').next('.header');
                    if($(_next_header).length > 0)
                    {
                        if(($(this).offset().top + $(this).height()) >= $(_next_header).offset().top)
                        {
                            // Bottom of header hit top of next header
                            $(this).removeClass('fixed').addClass('relative');
                            $(_next_header).removeClass('relative').addClass('fixed');
                        }
                    }
                }
            }); 
        } 
        else 
        {
            // Scrolling up
            $('.header').each(function(){
                if($(this).hasClass('fixed'))
                { 
                    var _prev_header = $(this).prevUntil('.header').prev('.header');
                    if($(_prev_header ).length > 0)
                    {
                        if($(this).offset().top <= ($('#' + $(_prev_header).attr('id') + '_content').offset().top + $(this).height()))
                        {
                            // Top of header hit bottom of previous content box
                            $(this).removeClass('fixed').addClass('relative');
                            $(_prev_header).removeClass('relative').addClass('fixed');
                        }
                    }
                }
            }); 
        }
        lastScrollTop = currentScrollTop;
    });
});​