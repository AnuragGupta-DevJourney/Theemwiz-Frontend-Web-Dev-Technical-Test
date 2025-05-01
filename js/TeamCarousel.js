$(document).ready(function () {
    var owl = $('.owl-carousel');

    owl.owlCarousel({
        loop: true,
        margin: 15,
        autoplay: true,
        autoplayTimeout: 4000,
        dots: true,
        nav: false,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 4 },
            1200: { items: 4 }
        }
    });

    $('#prevBtn').click(function () {
        owl.trigger('prev.owl.carousel');
    });

    $('#nextBtn').click(function () {
        owl.trigger('next.owl.carousel');
    });
});