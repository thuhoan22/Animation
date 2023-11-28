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

	var sec2Swiper = new Swiper('.sec2 .swiper', {
		slidesPerView: 4,
    loop: true,
    navigation: {
      nextEl: ".section02 .rotate-btn.next",
      prevEl: ".section02 .rotate-btn.prev",
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


	$(win).on('scroll', function () {
	}).scroll();

	$(win).on('load', function () {
		fullpageInit();
	});

})(window, window.jQuery);
