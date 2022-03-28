$(document).ready(function(){
    
    const defTestimonialOption = {
        center: true,
        loop:true,
        margin: 50,
        //autoWidth: true,
        autoplay: false,
        nav: false,
        pagination: false,
        animateOut: 'fadeOut',
        smartSpeed: 1000,
        responsive: {
           0:{
               stagePadding: 0,
               items: 1.065,
               margin: 20,
               center: false,
               //loop: false,
               dotsEach: 1,
              // dots: true,

           },
           768: {
                stagePadding: 130,
                items: 1,
                margin: 30
           },
           992: {
               stagePadding: 150,
               items: 1,
           },
           1200: {
                stagePadding: 100,
                items: 1,
           },
           1400:{
                stagePadding: 200,
                items: 1,
           },
           1900: {
            items: 1,
            stagePadding: 400,
          }
       }
    }

    $('.testimonial-carousel').owlCarousel(defTestimonialOption)
    const testiDot = $( ".testimonial-carousel .owl-dot" )
        testiDot.css("width", `calc(100% / ${ testiDot.length } )`)

    const defBlogOption = {
            loop:true,
            margin: 0,
            autoplay: false,
            nav: true,
            smartSpeed: 1000,
            navText: ['<span class="icon-cg-arrow-left"></span>', "<span class='icon-cg-arrow-right'></span>"],
            // autoWidth: true,
            stagePadding: 230,
            dots: false,
            responsive: {
                0: { items: 1.065, stagePadding: 0, margin: 20, dots: true, dotsEach: 1, loop: false, nav: false },
                768:{ items: 2, stagePadding: 100, margin: 30, dots: true, startPosition: 1 },
                1200: { items: 2, margin: 30, stagePadding: 100 },
                1400: { items: 3, margin: 30, stagePadding: 100 },
                1800:{ items: 3, margin: 50, startPosition: 320 }
            }
    }
    $('.blog-carousel').owlCarousel(defBlogOption)

    const blogDot = $('.blog-carousel .owl-dot')
        blogDot.css("width", `calc(100% / ${ blogDot.length } )`)

    const defCardOption = {
            dots: true,
            items: 1.08,
            loop: true,
            margin: 30,
            responsive: {
                0: {
                    margin: 0,
                    items: 1.07,
                    dots: true,
                    dotsEach: 1,
                }
            }
        }

    const owl = $('.card-article-carousel')

    if ( $(window).width() < 992 ) {
        owl.owlCarousel(defCardOption)
    } else {
        owl.addClass('off');
    }

    
    let cardDot = $( ".card-article-carousel .owl-dot" )
    cardDot.css("width", `calc(100% / ${ cardDot.length } )`)


    $(window).resize(function() {

        cardDot = $( ".card-article-carousel .owl-dot" )

        if ( $(window).width() < 992 ) {
            if ( $('.owl-carousel').hasClass('off') ) {
                owl.owlCarousel(defCardOption);
                owl.removeClass('off');
            }
        } else {
            if ( !$('.owl-carousel').hasClass('off') ) {
                owl.addClass('off').trigger('destroy.owl.carousel')
                owl.find('.owl-stage-outer').children(':eq(0)').unwrap()
            }
        }

       cardDot.css("width", `calc(100% / ${ cardDot.length } )`)

    });



});

