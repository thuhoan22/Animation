; (function (win, $) {

  var $parallax = $('.parallax'),
      prevScrollTop = 0;

	function handleParallaxScroll() {
		gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

		ScrollSmoother.create({
			wrapper: '.wrap',
			content: '.container',
		});

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.content',
				start: 'top top',
				end: 'bottom top',
				scrub: true,
			}
		});

		$parallax.each(function () {
			if (!$parallax) return;
			const depth = $(this).attr('data-depth');
			const parallaxHeight = $(this).height();
			const movement = parallaxHeight * depth;
			tl.to(this, { y: movement, ease: 'none' }, 0);
		});
	};

  var stickyHeader = function () {
    var windowScroll = $(window).scrollTop();

    windowScroll > 0 ? $('.header').addClass('is-sticky') : $('.header').removeClass('is-sticky');
    windowScroll > prevScrollTop ? $('.header').addClass('is-hide') : $('.header').removeClass('is-hide');
    prevScrollTop = windowScroll;
  };

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
    stickyHeader();
	});

	$(win).on('load', function () {
    handleParallaxScroll();
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
