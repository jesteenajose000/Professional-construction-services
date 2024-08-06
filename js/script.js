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
});
