(function($) {
    "use strict";


    new WOW().init();

    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });


    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

})(jQuery);