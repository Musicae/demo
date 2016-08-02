$(document).ready(function(){

  var playerProvider;

  var playerHideTimeout = setTimeout(function() {
    $('#player-div').animate({'margin-right': '-300px'}, 300);
  }, 2000);

  $(".more-link").click(function(event) {
    event.preventDefault();
    $(this).parent().next().slideToggle();
    if ($(this).html() == 'Read more') {
      $(this).html('Hide');
    } else {
      $(this).html('Read more');
    }
  });

  $(".player-choice").click(function(event) {
    event.preventDefault();
    playerProvider = $(this).attr("data-player");

    var html;

    if (playerProvider == "spotify") {
      html = '<iframe src="https://embed.spotify.com/?uri=spotify:trackset:Glenn:5bu9A6uphPWg39RC3ZKeku,14V6VqJXHZ08pM6Fu3vUsO,2mXVCqoNE6otHBcmRz4IHv,5SJFZnECoKeTLy7PPVLLbF,14lyZKpPu1ECQpfXhgrip6,325xUomC1NKDerrKIn0zfD,0L5cUf2OgB2GeVzxwGJv3q,4w3aG0qWqCQKhvsQYzX3nY,3HoLpLgT5M6U5TaWqFKgqi,3DRZuYDArzcoTniRTkaax4,7Aw2j9reBy7YeXiqBHvjhE,73NwMH0ND2cUkLe0kn9Ljz,7gAYYUV8mC5Vfsp825sqiS,2CI5exhYgmUhVMR8Mrunk4,4PqCIpr1uWNxakSW79FDaZ,7cKXSyVa3TXEksYArDQRpW,3Kx6ONEfaAGQ4FnzIlTd0O,3c7s2PsmdNUqGaOd3zHDxb,2kjMTSO59RHUp76E4QnGMW,6b1w0rV1rQ7o22QytG4MD4,54VrtN6vHC3gXyqhDulUcW,6AAsNisZwKxgJUmMHOAYAO,0COIj47ajICK5W2See8XSr,3uKsFbdcE8I44qGuE0Hwas,3ibPePT3mJfjgcjwg2lSuG,3WtLQJEmFO5QojdOsuEOGs,7w1t3fHbDG3XCehlTST8mC,55Vz4uotMyR5nIzgeqSroD,0rtuph9t0tzEHZh8n5UlZ8,2cUR4W0mDmx1vOxPjO6ijc,1Ef6KfsIBJpZe2OwvHHrpe,172J2JqVRzR74ILc2eBvta" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>';
    } else if (playerProvider == "applemusic") {
      html = '<iframe src="//tools.applemusic.com/embed/v1/album/1016523593?country=us" height="380px" width="100%" frameborder="0"></iframe>';
    } else if (playerProvider == "deezer") {
      // TODO: FIX FOR SAFARI
      html = '<iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=300&height=380&color=4688bf&layout=dark&size=medium&type=album&id=11126022&app_id=1" width="300" height="380"></iframe>';
    }
    $("#player-part").html(html);
  });

  $('.slider-div').slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('#player-div').mouseenter(function() {
    clearTimeout(playerHideTimeout);
    $('#player-div').animate({'margin-right': '0px'}, 300);
  });

  $('#player-div').mouseleave(function() {
    playerHideTimeout = setTimeout(function() {
      $('#player-div').animate({'margin-right': '-300px'}, 300);
    }, 500);
  });

});
