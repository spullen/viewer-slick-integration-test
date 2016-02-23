$(function() {
  var viewer = $('.images').viewer();

  $('.images').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      }
    ]
  });

  $('.open-viewer').on('click', function(e) {
    e.preventDefault();

    var $button = $(this);
    $button.prev('img').click();
  });
});