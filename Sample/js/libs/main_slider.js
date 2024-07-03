$(document).ready(function(){
    
    $('#fullpage').fullpage({
      anchors: ['section01', 'section02',  'section04', 'section05', 'section06', 'footer'],
      navigation:true,
      navigationTooltips: ['예금상품', '대출상품', '은행소개', '고객소개', 'ABOUT'],
      showActiveTooltip: true,
      navigationPosition:'left',
      keyboardScrolling: true,
    });
    /*
     $('#fullpage').fullpage({
        anchors: ['section01', 'section02',  'section04', 'section05', 'section06', 'footer'],
        navigation:true,
        navigationTooltips: ['예금상품', '대출상품', '검색', '은행소개', '고객소개', 'ABOUT'],
        showActiveTooltip: true,
        navigationPosition:'left',
        keyboardScrolling: true,
    });
    */
});
$(function () {
  var swiper1 = new Swiper(".depositbox_wrap", {
    slidesPerView: 5,
    spaceBetween: 0,
    pagination: {
      el: ".dots",
    },
    navigation: {
      nextEl: ".section01 .rotate-btn.next",
      prevEl: ".section01 .rotate-btn.prev",
    },
    loop: true,
    loopAdditionalSlides: 1,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    on: {
      slideChange: function () {
        setTimeout(() => {
          slideShow()
        }, 400);
      },
    },
  });
  $(".section01 .depositbox_wrap_ct .play").on("click", function () {
    swiper1.autoplay.start();
    return false;
  });
  $(".section01 .depositbox_wrap_ct .stop").on("click", function () {
    swiper1.autoplay.stop();
    return false;
  });
  
    // 접근성
  $(".section01 .swiper-slide a").on("focus", function () {
      swiper1.autoplay.stop();
      $(".section01 .swiper-slide").removeClass('swiper-slide-active');
      $(this).closest(".swiper-slide").addClass('swiper-slide-active');
      return false;
  });
// 접근성
  $(".section01 .swiper-slide a").on("blur", function () {
      $(".section01 .swiper-slide").removeClass('swiper-slide-active');
  });
    
  // 접근성
function slideShow() {
    const buttons = document.querySelectorAll('.section01 .slider');
    const activeIndex = Array.from(buttons).findIndex(button => button.classList.contains('swiper-slide-active'));

    const startIndex = Math.max(0, activeIndex - 2);
    const endIndex = Math.min(buttons.length - 1, activeIndex + 2);

    for (let i = 0; i < buttons.length; i++) {
      const item = buttons[i].querySelector('.section01 .item'); 
      if (i >= startIndex && i <= endIndex) {
        buttons[i].classList.add('show');
        item.tabIndex = 0;
      } else {
        buttons[i].classList.remove('show');
        item.tabIndex = -1;
      }
    }
  }
	
  let $slides = document.querySelectorAll(".depositbox_wrap .swiper-slide");
  for (let i of $slides) {
    i.addEventListener("mouseover", function () {
      swiper1.autoplay.stop();
    });
    i.addEventListener("mouseout", function () {
      swiper1.autoplay.start();
    });
  }




  var swiper3 = new Swiper(".section02_swiper", {
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
    on: {
      slideChange: function () {
        setTimeout(() => {
          slideShow2()
        }, 400);
      },
    },
  });
  $(".section02 .depositbox_wrap_ct .play").on("click", function () {
    swiper3.autoplay.start();
    return false;
  });
  $(".section02 .depositbox_wrap_ct .stop").on("click", function () {
    swiper3.autoplay.stop();
    return false;
  });
  setTimeout(() => {
    
    // 접근성
    $(".section02 .swiper-slide a").on("focus", function () {
      swiper3.autoplay.stop();
      $(".section02 .swiper-slide").removeClass('swiper-slide-active');
      $(this).closest(".swiper-slide").addClass('swiper-slide-active');
      return false;
    });
    // 접근성
    $(".section02 .swiper-slide a").on("blur", function () {
      $(".section02 .swiper-slide").removeClass('swiper-slide-active');
    });
  }, 300);
    
  let $slides2 = document.querySelectorAll(".section02_swiper .swiper-slide");
  for (let i of $slides2) {
    i.addEventListener("mouseover", function () {
      swiper3.autoplay.stop();
    });
    i.addEventListener("mouseout", function () {
      swiper3.autoplay.start();
    });
  }
  // 메인페이지 섹션2 대출슬라이드
function slideShow2() {
    const buttons2 = document.querySelectorAll('.section02 .slider');
    const activeIndex2 = Array.from(buttons2).findIndex(button => button.classList.contains('swiper-slide-active'));

    const startIndex2 = Math.max(0, activeIndex2);
    const endIndex2 = Math.min(buttons2.length - 1, activeIndex2 + 3);

    for (let i = 0; i < buttons2.length; i++) {
      const item2 = buttons2[i].querySelector('.section02 .item'); 
      if (i >= startIndex2 && i <= endIndex2) {
        buttons2[i].classList.add('show');
        item2.tabIndex = 0;
      } else {
        buttons2[i].classList.remove('show');
        item2.tabIndex = -1;
      }
    }
}



  // SECTION02 SWIPER
  var swiper2 = new Swiper(".sec20Swiper", {
    spaceBetween: 25,
    direction: "vertical",
    slidesPerView: 4,
    autoplay: true,
    loop: true,
    navigation: {
      nextEl: ".플래이앱솔2",
      prevEl: ".플래이앱솔1",
    },
    on: {
      slideChange: function () {
        // 현재 슬라이드의 인덱스를 가져옵니다.
        var activeIndex = this.activeIndex;

        // 모든 슬라이드에서 active 클래스를 제거합니다.
        $(".swiper-slide").removeClass("active");

        // 현재 슬라이드에 active 클래스를 추가합니다.
        $(".swiper-slide").eq(activeIndex).addClass("active");
      },
    },
  });


    

  //SECTION05 SWIPER
  var swiper5 = new Swiper(".sec6Swiper", {
    slidesPerView: 3,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    spaceBetween: 60,
    loopAdditionalSlides: 100,
    loopedSlides: 2,

    autoplay: true,
    navigation: {
      nextEl: ".section06 .rotate-btn.next",
      prevEl: ".section06 .rotate-btn.prev",
    },
    on: {
      slideChange: function () {
        setTimeout(() => {
          slideShow6()
        }, 400);
      },
    },
  });
  $(".section06 .depositbox_wrap_ct .play").on("click", function () {
    swiper5.autoplay.start();
    return false;
  });
  $(".section06 .depositbox_wrap_ct .stop").on("click", function () {
    swiper5.autoplay.stop();
    return false;
  });
  $(".section06 .swiper-slide a").on("focus", function () {
    swiper5.autoplay.stop();
    $(".section06 .swiper-slide").removeClass('swiper-slide-active');
    $(this).closest(".section06 .swiper-slide").addClass('swiper-slide-active');
    return false;
  });
// 접근성
  $(".section06 .swiper-slide a").on("blur", function () {
      $(".section06 .swiper-slide").removeClass('swiper-slide-active');
  });
});function slideShow6() {
    const buttons6 = document.querySelectorAll('.section06 .sns-slide');
    const activeIndex6 = Array.from(buttons6).findIndex(button => button.classList.contains('swiper-slide-active'));

    const startIndex6 = Math.max(0, activeIndex6 - 1);
    const endIndex3 = Math.min(buttons6.length - 1, activeIndex6 + 1);

    for (let i = 0; i < buttons6.length; i++) {
      const item2 = buttons6[i].querySelector('.section06 .swiper-item01'); 
      if (i >= startIndex6 && i <= endIndex3) {
        buttons6[i].classList.add('show');
        item2.tabIndex = 0;
      } else {
        buttons6[i].classList.remove('show');
        item2.tabIndex = -1;
      }
  }

}
