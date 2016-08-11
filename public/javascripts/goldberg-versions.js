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

	$('.show-more-button').click(function(e) {
		e.preventDefault();
		var group = '.hidden-group' + $(this).data('group');
		var buttons = '.show-more' + $(this).data('group');
		$(group).slideToggle("slow");
		var html = $(this).html();
		console.error(html);
		$(buttons).html(html == '<i aria-hidden="true" class="fa fa-angle-up"></i>&nbsp;&nbsp;Hide' ? '<i aria-hidden="true" class="fa fa-angle-down"></i>&nbsp;&nbsp;Show more' : '<i aria-hidden="true" class="fa fa-angle-up"></i>&nbsp;&nbsp;Hide');
	});
});
