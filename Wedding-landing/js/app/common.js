; (function (win, $) {

	var accordion = function () {
		var accordionOn = $('.js-vision').find('.detail-item').hasClass('is-open');

		if (accordionOn) {
			$('.js-vision').find('.detail-item.is-open').children('.box-content').css('display','block');
		}
		$('.js-vision').find('.btn-item').on('click', function() {
			if($(this).parents('.detail-item').hasClass('is-open')) {
				$(this).parents('.detail-item').removeClass('is-open');
				$(this).parents('.detail-item').find('.box-content').slideUp();
			} else {
				$('.js-vision').find('.is-open').removeClass('is-open');
				$('.js-vision').find('.box-content').slideUp();
				$(this).parents('.detail-item').addClass('is-open');
				$(this).parents('.detail-item').find('.box-content').slideDown();
			}
		});
	}

  // Swiper: Gallery
  var swiperGallery = new Swiper('.swiper-gallery', {
    spaceBetween: 30,
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-gallery .swiper-button-next',
      prevEl: '.swiper-gallery .swiper-button-prev',
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
		accordion();
    handleInteraction();
	});

	$(win).on('resize', function () {

	});

})(window, window.jQuery);
