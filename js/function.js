;(function($, window, document, undefined) {
  var $win = $(window);
  var $doc = $(document);

  $doc.ready(function() {
    // sticky header
    var $header = $('.header');

    $win.on('load scroll', function(){
      $header.toggleClass('header-filled', $win.scrollTop() > 1);
    });

    // mobile nav
    $('.nav-trigger').on('click', function(event){
      event.preventDefault();

      $(this).toggleClass('active')
      $(this).closest('.nav-mobile').toggleClass('open')
    });

    // slider home
    $('.slider-home').find('.slides').slick({
      arrows: false,
      draggable: false,
      dots: true,
      fade: true,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 5000
    });

    // slider events
    $('.slider-events').find('.slides').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      draggable: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  });

})(jQuery, window, document);
