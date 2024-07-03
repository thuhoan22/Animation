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

	var customerSwiper = new Swiper('.our-customer .swiper', {
		slidesPerView: 2,
		spaceBetween: 80,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    }
	});

	var animateElement = function () {
    var el = $('[data-animate]');
    el.each(function () {
      var $this = $(this),
        thisOffSetTop = $this.offset().top,
        windowScroll = $(window).scrollTop(),
        scrollPoint = windowScroll + $(window).innerHeight();

      if (thisOffSetTop < scrollPoint) {
        $this.addClass('fade-active');
      }
    });
  };

	var splitText = function() {
    const sectionTitles = document.querySelectorAll('.text-line');
    const targets = Array.prototype.concat(sectionTitles);
    
    const splits = new SplitType(targets,{
      types: 'lines'
    })

    Array.prototype.forEach.call(splits.lines,function(line){
      let text = line.innerText;
      line.innerHTML = '<span>'+ text +'</span>';
    })
  };

  var setTransitionDelayLine = function() {
    var titleAreaLine = $('.text-area-line');
    titleAreaLine.each(function() {
      var arrLine = $(this).find('.line span');
      arrLine.each(function(index, item) {
        $(item).css('transition-delay', index * 0.25 + 's')
      })
    })
  };

  var showTextSplit = function() {
    var element = $('.text-area-line');
    element.each(function () {
      var $this = $(this),
        thisOffSetTop = $this.offset().top,
        scrollTop = $(window).scrollTop();

      if(scrollTop > thisOffSetTop - 4/5*$(window).innerHeight()) {
        $this.addClass('is-active');
      }
    });
  };

	$(win).on('scroll', function () {
		animateElement();
		showTextSplit();
	});

	$(win).on('load', function () {
		accordion();
		animateElement();
		splitText();
		setTransitionDelayLine();
		showTextSplit();
	});

	$(win).on('resize', function () {
		splitText();
		setTransitionDelayLine();
	});

})(window, window.jQuery);
