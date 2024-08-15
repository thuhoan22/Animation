; (function (win, $) {

	var controller = new ScrollMagic.Controller();
	var prevScrollTop = 0,
			breakpoint = 1023,
			heightWin = $(window).height(),
			horizontalEL = $('.js-horizontal'),
			newsBtnTimer;

	var stickyHeader = function () {
    var windowScroll = $(window).scrollTop();

    windowScroll > 0 ? $('.header').addClass('is-sticky') : $('.header').removeClass('is-sticky');
    // windowScroll > prevScrollTop ? $('.header').addClass('is-hide') : $('.header').removeClass('is-hide');
    prevScrollTop = windowScroll;
  };

	var accordion = function () {
		var accordionOn = $('.js-qna').find('.qna-item').hasClass('is-open');

		if (accordionOn) {
			$('.js-qna').find('.qna-item.is-open').children('.box-content').css('display','block');
		}
		$('.js-qna').find('.btn-item').on('click', function() {
			if($(this).parents('.qna-item').hasClass('is-open')) {
				$(this).parents('.qna-item').removeClass('is-open');
				$(this).parents('.qna-item').find('.box-content').slideUp();
			} else {
				$('.js-qna').find('.is-open').removeClass('is-open');
				$('.js-qna').find('.box-content').slideUp();
				$(this).parents('.qna-item').addClass('is-open');
				$(this).parents('.qna-item').find('.box-content').slideDown();
			}
		});
	}

	var collectionSwiper = new Swiper('.swiper-collection', {
		slidesPerView: 4,
		spaceBetween: 48,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
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

	var parallaxImg = function () {
		var parallaxEl = $('.js-parallax');

		parallaxEl.each(function () {
			var $this = $(this),
					scrollTop = $(window).scrollTop(),
					scrollStart = $this.offset().top - heightWin,
					scrollEnd = $this.offset().top + $this.outerHeight(),
					scrollSpace = scrollEnd - scrollStart;

			
		if(scrollTop < scrollStart) {
			$this.find('img').css('transform','matrix(1.05, 0, 0, 1.05, 0, -150)');
		}else if(scrollTop >= scrollStart && scrollTop <= scrollEnd) {
			$this.find('img').css('transform','matrix(1.05, 0, 0, 1.05, 0,'+ ((scrollTop - scrollStart)/scrollSpace * 300 - 150) +')');
		}else {
			$this.find('img').css('transform','matrix(1.05, 0, 0, 1.05, 0, 150)');
		}
		});
	};

	var setHorizontalHeight = function () {
		if(!horizontalEL.length) return;

		if ($(window).innerWidth() > breakpoint) {
			var secHeight = $('.horizontal-bg').innerHeight();

			horizontalEL.height(2*$(window).innerHeight() + $(window).innerWidth() + secHeight);
			horizontalEL.find('.horizontal-wrap').width(2*$(window).innerWidth())
			horizontalEL.find('.horizontal-inner').width($(window).innerWidth());
		}else {
			horizontalEL.height('auto');
			horizontalEL.find('.horizontal-wrap').width('auto');
			horizontalEL.find('.horizontal-inner').width('auto');
		}
	}

	var horizontalScroll = function() {
		if(!horizontalEL.length) return;

		if ($(window).innerWidth() > breakpoint) {
			var scrollTop = $(window).scrollTop(),
					interviewWidth = $(window).innerWidth(),
					horizontalOffsetTop = Math.round(horizontalEL.offset().top),
					scrollStart = horizontalOffsetTop,
					scrollPoint1 = Math.round(horizontalOffsetTop + $(window).innerHeight()),
					scrollPoint2 = Math.round(horizontalOffsetTop + $(window).innerHeight() + interviewWidth),
					scrollEnd = Math.round(horizontalOffsetTop + interviewWidth + 2*$(window).innerHeight());

			if (scrollTop < scrollStart) {
				$('.horizontal-container').css('position', 'relative');
				$('.horizontal-subscribe').css('transform', 'translateX(0)');
				$('.horizontal-subscribe .inner').css('padding-top', '0px');
			}
			else if(scrollTop >= scrollStart && scrollTop < scrollPoint1) {
				$('.horizontal-container').css('position', 'fixed');
				$('.horizontal-subscribe').css('transform', 'translateX(0)');
				$('.horizontal-subscribe .inner').css('padding-top', '0px');
			}
			else if(scrollTop >= scrollPoint1 && scrollTop < scrollPoint2) {
				$('.horizontal-container').css('position', 'fixed');
				$('.horizontal-subscribe').css('transform', 'translateX('+ (-scrollTop + scrollPoint1) +'px)');
				$('.horizontal-subscribe .inner').css('padding-top', '0px');
			}
			else if(scrollTop >= scrollPoint2 && scrollTop <= scrollEnd) {
				$('.horizontal-container').css('position', 'fixed');
				$('.horizontal-subscribe').css('transform', 'translateX('+ (-interviewWidth) +'px)');
				$('.horizontal-subscribe .inner').css('padding-top', '0px');
			}
			else {
				$('.horizontal-container').css('position', 'relative');
				$('.horizontal-subscribe').css('transform', 'translateX('+ (-interviewWidth) +'px)');
				$('.horizontal-subscribe .inner').css('padding-top', (2*$(window).innerHeight() + $(window).innerWidth()) + 'px');
			}
		}else {
			$('.horizontal-container').css('position', 'static');
			$('.horizontal-subscribe').css('transform', 'none');
			$('.horizontal-subscribe .inner').css('padding-top', '0px');
		}
	};

	var hoverButton = function() {
		$('.btn').each(function() {
			const item = $(this);
	
			item.stop().on('mouseenter', function(){
				item.addClass('is-mouseenter');
			})
	
			item.stop().on('mouseleave', function(){
				item.removeClass('is-mouseenter');
				item.addClass('is-mouseleave');
				newsBtnTimer = setTimeout(function(){
					item.removeClass('is-mouseleave');
				}, 650)
			})
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
  }

  var setTransitionDelayLine = function() {
    var titleAreaLine = $('.js-title-split');
    titleAreaLine.each(function() {
      var arrLine = $(this).find('.line span');
      arrLine.each(function(index, item) {
        $(item).css('transition-delay', index * 0.25 + 's')
      })
    })
  }

  var showTextSplit = function() {
    var element = $('.js-title-split');
    element.each(function () {
      var $this = $(this),
        thisOffSetTop = $this.offset().top,
        scrollTop = $(window).scrollTop();

      if(scrollTop > thisOffSetTop - 4/5*$(window).innerHeight()) {
        $this.addClass('is-active');
      }
    });
  }

	function animateCountup(id, start, end, duration) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
			current += increment;
			obj.innerHTML = current;
			if (current == end) {
					clearInterval(timer);
			}
    }, stepTime);
	}

	const counterUpEv = $('.section-choose');
	var animateCountupActive = function () {
    var dataCountup = $('[data-count]');
    dataCountup.each(function () {
      var $this = $(this),
        thisOffSetTop = $this.offset().top,
        windowScroll = $(window).scrollTop(),
        scrollPoint = windowScroll + $(window).innerHeight();
			
      if (thisOffSetTop <= scrollPoint) {
				animateCountup('counter1', 250, 400, 800);
				animateCountup('counter2', 0, 20, 800);
				animateCountup('counter3', 50, 230, 800);
				animateCountup('counter4', 0, 25, 800);
      }
    });
  };

	var counterUp = function () {
		var counterElem = $('.counter');

		counterElem.each(function () {
			var $this = $(this),
					countTo = $this.attr('data-count'),
					ended = $this.attr('ended');
					
			// console.log(countNum);
			
			if (ended != 'true') {
				$({countNum: $this.text()}).animate({
					countNum: countTo
				}, {
					duration: 1000,
					easing: 'swing',
					step: function () {
						$this.text(Math.floor(this.countNum));
					},
					complete: function () {
						var resultNum = this.countNum;
						if(resultNum > 999){
							thisValComma = Number(resultNum).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
							$this.text(thisValComma);
						} else {
							$this.text(this.countNum);
						}
					}
				});
				$this.attr('ended', 'true');
			}
		});
	}
	if (!(counterUpEv.hasClass("is_active"))) {
		counterUpEv.addClass("is_active");
		// counterUp();
	}

	// ScrollMagic
	var sceneMinting = new ScrollMagic.Scene({
    triggerElement: '#section-minting',
    triggerHook: 1.5,
    duration: 700
  });

  sceneMinting.on('progress', function(e) {
    var progress = e.progress,
				top = $('.section-minting-bg .top'),
        right = $('.section-minting-bg .right'),
        bottom = $('.section-minting-bg .bottom');
        left = $('.section-minting-bg .left'),

    TweenMax.to([right, left], 1, { width: `${(1 - progress) * 37}%` });
    TweenMax.to([top, bottom], 1, { height: `${(1 - progress) * 37}%` });
  }).addTo(controller);

	$(win).on('scroll', function () {
		stickyHeader();
		animateElement();
		parallaxImg();
		horizontalScroll();
		showTextSplit();
		animateCountupActive();
	});

	$(win).on('load', function () {
		accordion();
		animateElement();
		parallaxImg();
		setHorizontalHeight();
		horizontalScroll();
		hoverButton();
		splitText();
		setTransitionDelayLine();
		showTextSplit();
		animateCountupActive();
	});

	$(win).on('resize', function () {
		setHorizontalHeight();
		horizontalScroll();
		splitText();
		setTransitionDelayLine();
	});

})(window, window.jQuery);
