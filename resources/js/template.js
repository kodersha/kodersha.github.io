$(document).ready(function(){
  $('.slider').slick({
    infinite: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    prevArrow: $('.section-control .prev'),
    nextArrow: $('.section-control .next'),
    speed: 100
  });

  // $('.slider').on('wheel', function(e){
  //   if (/Mobi|Android|Touch|Tablet|iPad|iPhone/i.test(navigator.userAgent)) {
  //     return;
  //   }

  //   e.preventDefault();

  //   if (e.originalEvent.deltaY < 0) {
  //     $(this).slick('slickPrev');
  //   } else {
  //     $(this).slick('slickNext');
  //   }
  // });

  // $('.slider').on('afterChange', function(event, slick, currentSlide){
  //   $('.slider a').each(function(){
  //     this.style.display = 'none';
  //     this.offsetHeight;
  //     this.style.display = '';
  //   });
  // });
});