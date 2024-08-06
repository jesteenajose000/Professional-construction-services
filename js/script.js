$(document).ready(function() {
    var $header = $('#mainHeader');
    $(window).on('scroll', function() {
    if ($(this).scrollTop() > 0) {
        $header.addClass('scrolled');
    } else {
        $header.removeClass('scrolled');
    }
    });

    $('.menu-image').on('click', function() {
        $('.side-bar').addClass('visible');
       
      });
      $('.close').on('click', function() {
        $('.side-bar').removeClass('visible');
      });


      
$('.testimonial-cards').slick({
  
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]
});
});


