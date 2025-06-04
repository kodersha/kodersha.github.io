$(document).ready(function(){
  $('.slider').slick({
    infinite: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    prevArrow: '',
    nextArrow: ''
  });

  $('.slider').on('wheel', function(e){
    e.preventDefault();

    if (e.originalEvent.deltaY < 0) {
      $(this).slick('slickPrev');
    } else {
      $(this).slick('slickNext');
    }
  });

  $('.slider').on('afterChange', function(event, slick, currentSlide){
    $('.slider a').each(function(){
      this.style.display = 'none';
      this.offsetHeight;
      this.style.display = '';
    });
  });
});
