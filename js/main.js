
//section3 hover 애니메이션
$(function(){
    $(".bill_container").on("mouseenter",function(){
        $(this).animate({bottom:20},200);
    }) 
    
    .on("mouseleave",function(){
        $(this).stop().animate({bottom:0},200);
    });

});

/*new WOW().init();*/

AOS.init();