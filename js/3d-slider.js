$(document).on('ready', function() {
  var slide = $('.slider-single');
  var slideTotal = slide.length - 1;
  var slideCurrent = -1;

  /* Функция добавления точек по количеству слайдов */
  var slideDotWrap = $('.slider-dot-wrapper');
  var slideDotRef = $('.slider-dot');

  function slideDotAdd() {
    for (var i = 0; i < slideTotal; i++) {
      slideDotWrap.append(slideDotRef.clone());
    };
    slideDotWrap.on('click', '.slider-dot', function() {
      slideCurrent = $(this).index() - 1;
      slideRight();
    });
    slideDotRef = $('.slider-dot');
  }
  /* Функция подсветки активной точки */
  function slideDotCurr() {
    $('div.slider-dot').css('background', 'none');
    slideDotRef.eq(slideCurrent).css('background', '#f46464');
  }
  /* ----- */

  function slideInitial() {
    slide.addClass('proactivede');
    slideDotAdd();
    setTimeout(function() {
      slideRight();
    }, 500);
  }

  function slideRight() {
    if (slideCurrent < slideTotal) {
      slideCurrent++;
    } else {
      slideCurrent = 0;
    }

    slideDotCurr(); // Подсвечиваем активную точку

    if (slideCurrent > 0) {
      var preactiveSlide = slide.eq(slideCurrent - 1);
    } else {
      var preactiveSlide = slide.eq(slideTotal);
    }
    var activeSlide = slide.eq(slideCurrent);
    if (slideCurrent < slideTotal) {
      var proactiveSlide = slide.eq(slideCurrent + 1);
    } else {
      var proactiveSlide = slide.eq(0);

    }

    slide.each(function() {
      var thisSlide = $(this);
      if (thisSlide.hasClass('preactivede')) {
        thisSlide.removeClass('preactivede preactive active proactive').addClass('proactivede');
      }
      if (thisSlide.hasClass('preactive')) {
        thisSlide.removeClass('preactive active proactive proactivede').addClass('preactivede');
      }
    });
    preactiveSlide.removeClass('preactivede active proactive proactivede').addClass('preactive');
    activeSlide.removeClass('preactivede preactive proactive proactivede').addClass('active');
    proactiveSlide.removeClass('preactivede preactive active proactivede').addClass('proactive');
  }

  function slideLeft() {
    if (slideCurrent > 0) {
      slideCurrent--;
    } else {
      slideCurrent = slideTotal;
    }

    slideDotCurr(); // Подсвечиваем активную точку

    if (slideCurrent < slideTotal) {
      var proactiveSlide = slide.eq(slideCurrent + 1);
    } else {
      var proactiveSlide = slide.eq(0);
    }
    var activeSlide = slide.eq(slideCurrent);
    if (slideCurrent > 0) {
      var preactiveSlide = slide.eq(slideCurrent - 1);
    } else {
      var preactiveSlide = slide.eq(slideTotal);
    }
    slide.each(function() {
      var thisSlide = $(this);
      if (thisSlide.hasClass('proactivede')) {
        thisSlide.removeClass('preactive active proactive proactivede').addClass('preactivede');
      }
      if (thisSlide.hasClass('proactive')) {
        thisSlide.removeClass('preactivede preactive active proactive').addClass('proactivede');
      }
    });
    preactiveSlide.removeClass('preactivede active proactive proactivede').addClass('preactive');
    activeSlide.removeClass('preactivede preactive proactive proactivede').addClass('active');
    proactiveSlide.removeClass('preactivede preactive active proactivede').addClass('proactive');
  }
  var left = $('.slider-left');
  var right = $('.slider-right');
  left.on('click', function() {
    slideLeft();
  });
  right.on('click', function() {
    slideRight();
  });
  slideInitial();
});