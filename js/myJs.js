$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });




});



$(window).scroll(function () {
    if ($(this).scrollTop() > 350) {
        $(".quick").fadeIn();
    }
})


//code foe individual button selection


$(window).scroll(function () {
    if ($(this).scrollTop() > 350) {
        $(".up , .stop, .down").fadeIn();
    } else {
        $(".up , .stop, .down").fadeOut();
    }
});
$(document).ready(function () {
    $(".up").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 6000)
    });
});
$(document).ready(function () {
    $(".stop").click(function () {
        $("html,body").stop();
    });
});
$(document).ready(function () {
    $(".down").click(function () {
        $("html,body").animate({
            scrollTop: 18000
        }, 6000)
    });
});



$(document).ready(function () {
    $(".yt").click(function () {
        $("#videoSlider").slideToggle(500);
    })
})








//................
