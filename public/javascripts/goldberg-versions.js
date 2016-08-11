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
		$(".col-xs-12").css('paddingRight', '0');
		$("#page-content").toggleClass('col-sm-10', true);
		$("#page-content").css('paddingRight', '30px');
		$(this).hide();
		$('#nav-close').show();
	});

	$('#nav-close').click(function(e) {
		e.preventDefault();
		$('#sidebar').hide();
		$(".col-xs-12").css('paddingRight', '15px');
		$("#page-content").toggleClass('col-sm-10', false);
		$("#page-content").css('paddingRight', '30px');
		$(this).hide();
		$('#nav-open').show();
	});

	$('body').scrollspy({ target: '#sidebar', offset: 250 });
});
