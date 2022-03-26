$(document).ready(function(){
    
    $('.testimonial-carousel').owlCarousel({
        center: true,
        loop:true,
        margin: 20,
        autoWidth: true,
        autoplay: true,
        items: 3,
        nav: false,
        pagination: false,
        animateOut: 'fadeOut',
    })

    $('.blog-carousel').owlCarousel({
        center: true,
        loop:true,
        margin: 10,
        items: 5,
        autoplay: true,
        nav: true,
        navText: ['<span class="icon-cg-arrow-left"></span>', "<span class='icon-cg-arrow-right'></span>"],
        // autoWidth: true,
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 3
            },
            1400: {
                items: 5
            },
            2000: {
                items: 7
            }
        }
    })

});

