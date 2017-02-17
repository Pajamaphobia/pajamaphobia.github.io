$(document).ready(function(){
	$("#menu").bind("mousewheel", function(e){
		var curScroll = $("#menu").scrollLeft();
		if(e.originalEvent.wheelDelta > 0) {
			$("#menu").scrollLeft(curScroll-1936);
		} else {
			$("#menu").scrollLeft(curScroll+1936);
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
		$("#games").fadeToggle(300);
		$("#games").toggleClass("active");
		console.log("shift!")
	});

window.addEventListener("keydown", (function(canMove) {
  return function(event) {
    if (!canMove) return false;
    canMove = false;
    setTimeout(function() { canMove = true; }, 400);
    switch (event.keyCode) {
		case 37:
			var x = (1936) - $("#menu").scrollLeft();
			$("#menu").animate({ scrollLeft: -x })
			break;
    	case 39:
			var x = (1936) + $("#menu").scrollLeft();
			$("#menu").animate({ scrollLeft: +x })
			console.log("new test!")
			break;
    	case 38:
			$("#container").toggleClass("active");
			$("#games").fadeToggle(300);
			$("#games").toggleClass("active");
			break;
		case 40:
			$("#container").removeClass("active");
			$("#games").fadeOut(300);
			$("#games").removeClass("active");
			break;		
    }  
  };
})(true), false);



/*
	document.onkeydown = function(e) {
		console.log("keypressed!");
		var box = $("#menu");
		var canMove = false;
		setTimeout(function() { canMove = true; }, 250);
		switch (e.keyCode) {
			case 37:
				console.log("left!");
				var x = (1936) - box.scrollLeft();
				box.animate({ scrollLeft: -x })
				break;
			case 39:
				console.log("right!");
				clearTimeout(scrolling);
				scrolling = setTimeout(function(){
					var x = (1936) + box.scrollLeft();
					box.animate({ scrollLeft: x })
				}, x);
				break;
			case 38:
				$("#container").toggleClass("active");
				$("#games").fadeToggle(300);
				$("#games").toggleClass("active");
				break;
			case 40:
				$("#container").removeClass("active");
				$("#games").fadeOut(300);
				$("#games").removeClass("active");
				break;
		}
	}*/
});