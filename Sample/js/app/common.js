; (function (win, $) {
	var fullpageInit = function () {
		$('#container').fullpage({
			anchors: ['sec1', 'sec2', 'sec3', 'sec4'],
			licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
			sectionSelector: 'section',
			navigation:true,
			navigationTooltips: ['Section 1', 'Section 2', 'Section 3', 'Section 4'],
			showActiveTooltip: true,
			navigationPosition:'left',
			keyboardScrolling: true,
		});
	}

	var secSwiperProduct = new Swiper('.swiper-product', {
		slidesPerView: 4,
    loop: true,
    navigation: {
      nextEl: ".swiper-product .rotate-btn.next",
      prevEl: ".swiper-product .rotate-btn.prev",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    // on: {
    //   slideChange: function () {
    //     setTimeout(() => {
    //       slideShow2()
    //     }, 400);
    //   },
    // },
	});

	var sectionTechnology = function () {
		const tabs = [ "최적화된 믹싱공정", "2차전지 제조공정", "독보적인 믹싱기술", "믹싱장비 제조공정"];
		const media = $('.js-media');
		// const timelines = $('.js-data-timeline').attr('[data-timeline]');
		const timelines = document.querySelectorAll('[data-timeline]');
		let t = 0;

		// media.addEventListener("timeupdate", (event) => {
		// 	t = event.target.currentTime;

		// 	timelines.forEach((timeline) => {
		// 		timeline.dataset.timeline = '';
		// 	});

		// 	if (t > 87){
		// 		timelines[3].dataset.timeline = 'on';
		// 	} else if (t > 70){
		// 		timelines[2].dataset.timeline = 'on';
		// 	} else if (t > 33){
		// 		timelines[1].dataset.timeline = 'on';
		// 	} else {
		// 		timelines[0].dataset.timeline = 'on';
		// 	}
		// });


		technologySlide = new Swiper('.swiper.swiper-technology', {
			speed: 600,
			effect: 'fade',
			direction: 'vertical',
			mousewheel: true,
			allowTouchMove: true,
			fadeEffect: {
				crossFade: true
			},
			pagination: {
				el: '.swiper-technology .swiper-pagination',
				type: 'bullets',
				clickable: true,
				renderBullet: (index, className) => {
					return '<span class="' + className + '"><span>' + tabs[index] + '</span></span>';
				}
			},
			breakpoints: {
				1280: {
					allowTouchMove: false,
				}
			},
			on: {
				slideChangeTransitionEnd: (swiper) => {
					if(swiper.realIndex === 0){
						$.fn.fullpage.setAllowScrolling(true, 'up');
					}else{
						$.fn.fullpage.setAllowScrolling(false, 'up');
					}
					if(swiper.realIndex === tabs.length - 1){
						$.fn.fullpage.setAllowScrolling(true, 'down');
					}else{
						$.fn.fullpage.setAllowScrolling(false, 'down');
					}
				}
			}
		});
	};


	$(win).on('scroll', function () {
	}).scroll();

	$(win).on('load', function () {
		fullpageInit();
		sectionTechnology();
	});

})(window, window.jQuery);
