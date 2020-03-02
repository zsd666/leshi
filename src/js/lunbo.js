var swiper = new Swiper('.swiper-container', {
    loop: true,  
  autoplay: {
            delay: 2000
          },
  lazy: {
          //loadPrevNext: true,
      },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  });
  //0.625   5/8
  function homeResize() {

    WinHeight = $(window).height();
    WinWidth = $(window).width();
    fullBox = $(".swiper-slide .full");

    if (WinWidth > 768) {
      if (WinWidth / WinHeight > 1.6) {
        fullBox.width("100%").height(WinWidth * 0.625).css({
        "position": 'absolute',
          "left": "0px",
          "top": (WinHeight - fullBox.height()) / 2 + "px"
        });
      } else {
        fullBox.width(WinHeight * 1.6).height("100%").css({
        "position": 'absolute',
          "left": "-" + (fullBox.width() - WinWidth) / 2 + "px",
          "top": "0px"
        });
      }
    } else {
      fullBox.width("100%").height("auto").css({
        "position": 'static',
      });
    }
  }
  homeResize();

  $(window).resize(function() {
    homeResize();
  });