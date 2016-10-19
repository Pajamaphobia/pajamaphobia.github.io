$(document).ready(function(){
	$("#menu").bind("mousewheel", function(e){
		var curScroll = $("#menu").scrollLeft();
		if(e.originalEvent.wheelDelta > 0) {
			$("#menu").scrollLeft(curScroll-1936);
			console.log(curScroll);
		} else {
			$("#menu").scrollLeft(curScroll+1936);
			console.log(curScroll);
		}
	});

	$(".scroll").click(function() {
		var box = $("#menu"),
			x;
		if ($(this).hasClass("scrollRight")) {
			x = (1936) + box.scrollLeft();
			box.animate({
				scrollLeft: x,
			})
		} else {
			x = (1936) - box.scrollLeft();
			box.animate({
				scrollLeft: -x,
			})
		}
	});

	$(".system-menu").click(function(){
		$("#container").toggleClass("active");
		$('#' + $(this).data('info')).toggleClass("active");
	});
});