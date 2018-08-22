 $(".mat-input").focus(function(){
 $(this).parent().addClass("is-active is-completed");
});

$(".mat-input").focusout(function(){
  if($(this).val() === "")
    $(this).parent().removeClass("is-completed");
  $(this).parent().removeClass("is-active");
})

$(document).ready(function(){
  $('.slider').bxSlider();
});

$(document).ready(function(){
$("a[href*=#]").on("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
    }, 777);
    e.preventDefault();
    return false;
});
});


var header = new Headhesive('header');	
$('.navbar-nav a').on('click', function() {
    if ($('.navbar-toggler').css('display') != 'none') {
    $(".navbar-toggler").trigger("click");
}
});


$(function() {
var num = $(".number");
num.each(function(indx, el) {
    var max = $(el).data("max");
    var duration = 5000;
    var visibility = checkViewport(el);
    $(el).on("animeNum", function() {
        $({n: 0}).animate({n: max}, {
            easing: "linear",
            duration: duration,
            step: function(now, fx) {
                $(el).html(now | 0)
            }
        })
    }).data("visibility", visibility);
    visibility && $(el).trigger("animeNum")
});

function checkViewport(el) {
var H = document.documentElement.clientHeight,
    h = el.scrollHeight,
    pos = el.getBoundingClientRect();
    return pos.top + h > 0 && pos.bottom - h < H
}
$(window).scroll(function() {
    num.each(function(indx, el) {
        var visibility = checkViewport(el);
        el = $(el);
        var old = el.data("visibility");
        old != visibility && el.data("visibility", visibility) && !old && el.trigger("animeNum")
    })
})
});

$(function() {  
    jQuery.scrollSpeed(100, 800);
});

;( function( $ ) {

 $( '.lightzoom' ).lightzoom( {
   speed:                 400,   // скорость появления
   overlayOpacity:        '0.8', // прозрачность фона (от 0 до 1)
   viewTitle:             false, // true, если надо показывать подпись к изобажению
   isOverlayClickClosing: true, // true, если надо закрывать окно при клике по затемненной области
   isWindowClickClosing:  true, // true, если надо закрывать окно при клике по любой области
   isEscClosing:          true  // true, если надо закрывать окно при нажатии на кнопку Esc
 } );

} )( jQuery );
