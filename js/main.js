
//section3 hover 애니메이션
$(function(){
    $(".bill_container").on("mouseenter",function(){
        $(this).stop().animate({bottom:20},200);
    }) 
    .on("mouseleave",function(){
        $(this).stop().animate({bottom:0},200);
    }); 
});

$('.bill_container').click(function(){
    if($(this).hasClass('on')){
        $(this).removeClass('on');
        $(this).stop().animate({bottom:20},200);
    } else {
        $('.bill_container').removeClass('on');
        $(this).stop().animate({bottom:0},200);
        $(this).addClass('on');
    }
});



AOS.init();