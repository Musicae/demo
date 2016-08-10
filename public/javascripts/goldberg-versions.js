$(document).ready(function() {
  var timeOut;

  $('.perfomer-img-div').mouseenter(function() {
    var imgDiv = $(this);
    timeOut = setTimeout(function() {
      imgDiv.children().first().animate({'top': '0'}, 400);
    }, 500);
  });

  $('.perfomer-img-div').mouseleave(function() {
    clearTimeout(timeOut);
    $(this).children().first().animate({'top': '300'}, 400);
  });

  $('#nav-open').click(function(e) {
    e.preventDefault();
    $('#sidebar').show();
    $("#page-content").toggleClass('col-sm-10', true);
    $(".content-box").children().toggleClass('col-lg-4', false);
    $(".content-box").children().toggleClass('col-lg-6', true);
    $(this).hide();
    $('#nav-close').show();
  });

  $('#nav-close').click(function(e) {
    e.preventDefault();
    $('#sidebar').hide();
    $("#page-content").toggleClass('col-sm-10', false);
    $(".content-box").children().toggleClass('col-lg-4', true);
    $(".content-box").children().toggleClass('col-lg-6', false);
    $(this).hide();
    $('#nav-open').show();
  });

  // $('.sidebar-dropdown').first().show();

  // $('.sidebar-nav > a').click(function(e) {
  //   e.preventDefault();
  //   $(this).next().toggle();
  // });

  $('body').scrollspy({ target: '#sidebar', offset: 250 });
});
