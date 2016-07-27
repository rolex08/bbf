var hwSlideSpeed = 700;
var hwTimeOut = 1000;

$(document).ready(function(e) {
    $('.slide').eq(0).show();
    var
        slideNum = 0,
        slideTime,
        firstButton = $('#first-slide-button'),
        slideCount = $("#slider .slide").size();

    var animSlide = function(arrow){
        clearTimeout(slideTime);
        $('.slide').eq(slideNum).fadeOut(hwSlideSpeed);
        if(arrow == "next"){
            if(slideNum == (slideCount-1)){slideNum=0;}
            else{slideNum++}
        }
        else if(arrow == "first") {
            slideNum = 0;
        }
        $('.slide').eq(slideNum).fadeIn(hwSlideSpeed, rotator);
        $(".control-slide.active").removeClass("active");
        $('.control-slide').eq(slideNum).addClass('active');
    }
    $('#nextbutton').click(function(){
        if ((slideCount - 1) != slideNum) {
            firstButton.show();
        } else {
            firstButton.hide();
        }
        animSlide("next");
    });
    firstButton.click(function(){
        $(this).hide();
        animSlide("first");
    });

    var pause = false;
    var rotator = function(){
        if(!pause){
            slideTime = setTimeout(function(){animSlide('next')}, hwTimeOut);
            clearTimeout(slideTime);
        }
    }
});
