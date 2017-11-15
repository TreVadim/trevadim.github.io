'use strict';

// Scroll
function scroll(from, to) {
  $(from).click(function (event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: $(to).position().top}, 2000);
  });
}

scroll('.scroll', '#whyWe');
scroll('.menu li:first-child a', '#scroll-1');
scroll('.menu li:nth-child(2) a', '#scroll-2');
scroll('.menu li:nth-child(3) a', '#scroll-3');
scroll('.menu li:nth-child(4) a', '#scroll-4');
scroll('.menu li:nth-child(5) a', '#scroll-5');
scroll('.menu li:nth-child(6) a', '#scroll-6');
scroll('.menu li:nth-child(7) a', '#scroll-7');
scroll('.menu li:nth-child(8) a', '#scroll-8');
scroll('.item button','#scroll-3');

// Menu
function showHide() {
  $('.menu').fadeToggle(800);
}

$('.trigger-container').on('click', function () {
  showHide();
});
$('.menu').on('mouseleave', function () {
  showHide();
});

// Popup
function popUpShow() {
  $('#popup-1').show(800);
}

function popUpHide() {
  $('#popup-1').hide(800);
}

$('body').on('submit', function (event) {
  event.preventDefault();
  popUpShow();
});

$(document).mouseup(function (e) {
  var container = $('.popup>div');
  if (container.has(e.target).length === 0) {
    popUpHide();
    $('body input').val('');
  }
});


// Slider
// Hovers
function hover(slide) {
  $(slide + ' polygon').toggleClass('hover-fill');
}

// Slider - 1
$('.slide-2, .slide-11').on('mouseenter mouseleave', function () {
  hover('.slide-1');
});

$('.slide-4, .slide-12').on('mouseenter mouseleave', function () {
  hover('.slide-5');
});

$('.slide-4').on('mouseenter mouseleave', function () {
  $('#text-sl-4').toggleClass('opacity');
});


$('.slide-6, .slide-13').on('mouseenter mouseleave', function () {
  hover('.slide-7');
});

$('.slide-6').on('mouseenter mouseleave', function () {
  $('#text-sl-6').toggleClass('opacity');
});

$('.slide-10, .slide-14').on('mouseenter mouseleave', function () {
  hover('.slide-9');
});

// Action

var $left = $('#left'),
    $right = $('#right');

$($right).on('click', function (event) {
  event.preventDefault();
  
  $('.slide-2').fadeOut(500);
  
  setTimeout(function () {
    $('.slide-4').fadeOut(500);
  },(300));
  
  setTimeout(function () {
    $('.slide-6').fadeOut(500);
  },(600));
  
  setTimeout(function () {
    $('.slide-10').fadeOut(500);
  },(900));
  
  $('.slide-11').css('transform','rotate(0)');
  
  setTimeout(function () {
    $('.slide-12').css('transform','rotate(0)');
  },(300));
  
  setTimeout(function () {
    $('.slide-13').css('transform','rotate(0)');
  },(600));
  
  setTimeout(function () {
    $('.slide-14').css('transform','rotate(0)');
  },(900));
});

$($left).on('click', function (event) {
  event.preventDefault();
  $('.slide-11').css('transform','rotate(-90deg)');
  
  setTimeout(function () {
    $('.slide-12').css('transform','rotate(-90deg)');
  },(300));
  
  setTimeout(function () {
    $('.slide-13').css('transform','rotate(90deg)');
  },(600));
  
  setTimeout(function () {
    $('.slide-14').css('transform','rotate(90deg)');
  },(900));
  
  $('.slide-2').fadeIn(1200);
  
  setTimeout(function () {
    $('.slide-4').fadeIn(1200);
  },(300));
  
  setTimeout(function () {
    $('.slide-6').fadeIn(1200);
  },(600));
  
  setTimeout(function () {
    $('.slide-10').fadeIn(1200);
  },(600));
  
});