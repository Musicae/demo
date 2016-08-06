$(document).ready(function() {

  $('.perfomer-img-div').mouseenter(function() {
    $(this).children().first().animate({'top': '0'}, 400);
  });

  $('.perfomer-img-div').mouseleave(function() {
    $(this).children().first().animate({'top': '300'}, 400);
  });




});
