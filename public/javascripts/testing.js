$(document).ready(function() {
  var html, expanded = false;

  // $('#player').css("margin-bottom", "-80px");

  $('#image-player').mouseenter(function() {
    $('#player').animate({'margin-bottom': '0px'}, 200);
  });

  $('#image-player').mouseleave(function() {
    if (!expanded) {
      $('#player').animate({'margin-bottom': '-80px'}, 200);
    } else {
      $('#player').animate({'margin-bottom': '-300px'}, 200);
    }
  });

  $('#image-player').click(function() {
    html = '<iframe src="https://embed.spotify.com/?uri=spotify:album:1aCpHSQE5ghxibsQ5gkBe0" width="400" height="300" frameborder="0" allowtransparency="true"></iframe>';
    $('#player').html(html);
    $('#player').animate({'margin-bottom': '0px'}, 200);
    expanded = true;
  });

});
