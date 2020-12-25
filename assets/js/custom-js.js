/* 1st Slider */
$(document).ready(function() {
    $("#owl-demo").owlCarousel({
        loop: true,
        items: 3,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            360: { items: 1 },
            768: { items: 2 },
            1024: { items: 3 }
        },
    });
});
/* 1st slinder end */
/* 2nd slinder start */
$(document).ready(function() {
    $("#owl-demo2").owlCarousel({
        loop: true,
        items: 3,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            360: { items: 1 },
            768: { items: 2 },
            1024: { items: 3 }
        },
        margin: 30
    });
});
/* 2nd slinder end */
/* Counter start */
var counted = 0;
$(window).scroll(function() {
    var oTop = $('#counter').offset().top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > oTop) {
        $('.stat-number').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            }, {
                duration: 2000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                }
            });
        });
        counted = 1;
    }
});
/* counter end */