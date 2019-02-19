$(function() {
    if ($('.cac-buoc-thuc-hien .owl-carousel').length) {
        $('.cac-buoc-thuc-hien .owl-carousel').owlCarousel({
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            items: 1,
            false: true,
            loop: false,
            center: false,
            padding: 10,
            margin: 30,
            navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
            nav: true,
            dots: false,
            autoplay: false,
            autoplayTimeout: 3000,
            autoplayHoverPause: false,
            callbacks: true,
            responsive: {
                480: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });
    }

});