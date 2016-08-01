$(document).ready(function(){
  $(".more-link").click(function() {
    $(this).parent().next().slideToggle();
  });

  $('.single-item').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
});
