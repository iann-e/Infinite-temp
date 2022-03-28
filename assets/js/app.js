$(document).ready(function(){
    
    const defTestimonialOption = {
        center: true,
        loop:true,
        margin: 20,
        //autoWidth: true,
        autoplay: false,
        nav: false,
        pagination: false,
        animateOut: 'fadeOut',
        smartSpeed: 1000,
        responsive: {
           0:{
               stagePadding: 0,
               items: 1.1,
               margin: 0,
               center: false,
               //loop: false,
               dotsEach: 1,
              // dots: true,

           },
           990: {
               stagePadding: 50,
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

   // const dots = $( ".owl-dots" )
        //dots.wrap( "<div class='container'></div>" )
            
    const testiDot = $( ".testimonial-carousel .owl-dot" )
        testiDot.css("width", `calc(100% / ${ testiDot.length } )`)

    const defBlogOption = {
            loop:true,
            margin: 10,
            items: 3,
            autoplay: false,
            nav: true,
            smartSpeed: 1000,
            navText: ['<span class="icon-cg-arrow-left"></span>', "<span class='icon-cg-arrow-right'></span>"],
            // autoWidth: true,
            stagePadding: 230,
            dots: false,
            startPosition: 1,
            responsive: {
                0: { items: 1.3, stagePadding: 50, margin: 0, dots: true, loop: false },
                768:{ items: 2.3, stagePadding: 50, margin: 0, dots: true, loop: false },
                1200: { items: 3 }
            }
    }
    $('.blog-carousel').owlCarousel(defBlogOption)


    const owl = $('.card-article-carousel');

    const defCardOption = {
            dots: true,
            items: 1.08,
            loop: true,
            margin: 30,
            responsive: {
                0: {
                    margin: 5,
                    items: 1.1,
                    dotsEach: 1,
                }
            }
        }

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
                owl.addClass('off').trigger('destroy.owl.carousel');
                owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
            }
        }

       cardDot.css("width", `calc(100% / ${ cardDot.length } )`)

    });



});

