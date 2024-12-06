; (function (win, $) {

  // Calculate Full Height (when apply 100vh for MO)
  function calculateAppHeight() {
    var documentElement = document.documentElement;
    documentElement.style.setProperty('--vh', documentElement.clientHeight * 0.01 + 'px');
  }

  // Func: Open GNB
	var mobileGnbOpen = function() {
		var $btn_menu = $('.js-gnb-mobile'),
		    $btn_gnb = $('.gnb-link');

		$btn_menu.on('click', function () {
		  var $this = $(this),
			$thisExpanedStatus = $this.attr('aria-expanded');

		  if ($thisExpanedStatus == 'false') {
        $this.addClass('is-active');
        $this.closest('.header-gnb').addClass('is-open');
        $this.attr('aria-expanded', 'true');
        $.scrollLock(true);
		  } else {
        $this.removeClass('is-active');
        $this.closest('.header-gnb').removeClass('is-open');
        $this.attr('aria-expanded', 'false');
        $.scrollLock(false);
		  }
		});

    $btn_gnb.on('click', function () {
      $btn_menu.removeClass('is-active').attr('aria-expanded', 'false');
      $('.header-gnb').removeClass('is-open');
      $.scrollLock(false);
    });
	};

  // Func: Move to section
  var valSpace = 100;
  $('.gnb-link').click(function (e) {
    e.preventDefault();
    var sectionTarget = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(sectionTarget).offset().top - valSpace
    }, 400);
  });

  // Func: Handle Interaction
  var handleInteraction = function() {
    $('.animate, .animate-left, .animate-right').each(function () {
      var itemPosition = $(this).offset().top;
      if (
        ($(window).scrollTop() >= itemPosition - 0.9 * $(window).innerHeight() && $(this).hasClass('animate')) ||
        ($(window).scrollTop() >= itemPosition - 0.9 * $(window).innerHeight() && $(this).hasClass('animate-left')) ||
        ($(window).scrollTop() >= itemPosition - 0.9 * $(window).innerHeight() && $(this).hasClass('animate-right'))
      ) {
        $(this).addClass('is-show');
      }
    });
  };

  // Swiper: Gallery
  var swiperGallery = new Swiper('.swiper-gallery', {
    spaceBetween: 30,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.swiper-gallery .swiper-button-next',
      prevEl: '.swiper-gallery .swiper-button-prev',
    },
    breakpoints: {
      1024: {
        centeredSlides: true,
        loop: true,
        initialSlide: 1,
      },
    },
  });

	$(win).on('load', function () {
    calculateAppHeight();
    mobileGnbOpen();
    handleInteraction();
	});

  $(win).on('scroll', function () {
    handleInteraction();
	});

	$(win).on('resize', function () {
    calculateAppHeight();
	});

})(window, window.jQuery);
