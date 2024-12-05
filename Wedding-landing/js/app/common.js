; (function (win, $) {

  // Func: Move to section
  var valSpace = 100;
  $('.gnb-item a').click(function (e) {
    e.preventDefault();
    var sectionTarget = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(sectionTarget).offset().top - valSpace
    }, 400);
  });

  // Swiper: Gallery
  var swiperGallery = new Swiper('.swiper-gallery', {
    spaceBetween: 30,
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    initialSlide: 0,
    navigation: {
      nextEl: '.swiper-gallery .swiper-button-next',
      prevEl: '.swiper-gallery .swiper-button-prev',
    },
    breakpoints: {
      1024: {
        initialSlide: 1,
      },
    },
  });

  // Func: Handle Interaction
  var handleInteraction = function() {
    $('.animate, .animate-zoom').each(function () {
      var itemPosition = $(this).offset().top;
      if (
        ($(window).scrollTop() >= itemPosition - 0.9 * $(window).innerHeight() && $(this).hasClass('animate')) ||
        ($(window).scrollTop() >= itemPosition - 0.9 * $(window).innerHeight() && $(this).hasClass('animate-zoom'))
      ) {
        $(this).addClass('is-show');
      }
    });
  };

	$(win).on('scroll', function () {
    handleInteraction();
	});

	$(win).on('load', function () {
    handleInteraction();
	});

	$(win).on('resize', function () {

	});

})(window, window.jQuery);
