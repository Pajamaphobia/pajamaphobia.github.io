$(document).ready(function(){
	$('#menu').bind('mousewheel', function(e){
		var curScroll = $("#menu").scrollLeft();
		if(e.originalEvent.wheelDelta > 0) {
			$("#menu").scrollLeft(curScroll-50);
		} else {
			$("#menu").scrollLeft(curScroll+50);
		}
	});

	$(".scroll").click(function() {
		var box = $("#menu"),
			x;
		if ($(this).hasClass("scrollRight")) {
			x = ((box.width() / 10)) + box.scrollLeft();
			box.animate({
				scrollLeft: x,
			})
		} else {
			x = ((box.width() / 10)) - box.scrollLeft();
			box.animate({
				scrollLeft: -x,
			})
		}
	});

	$(".system-menu").click(function(e) {
		e.preventDefault();
		$('#games div').hide();
		$('#' + $(this).data('info')).slideDown('400');
	});
});