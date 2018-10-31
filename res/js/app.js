var header = $(".header");

var size = $("#main-menu").css("font-size");
var menu_init = parseInt(size.slice(0, size.length - 2));	
var menu_max = menu_init * 1.5;
var menu_diff = menu_max - menu_init;

$(window).scroll(function(){
	
	"use strict";
	var percent = $(document).scrollTop()/($(document).height() - $(window).height());
	console.log(percent);
	
	if(percent < 0.1){
		$("#home").css("display", "none");
		
		$("#flowers").css("opacity", 1 - 9.5 * percent);
	
		$("#names").css("opacity", 1 - 10 * percent);

		var size = $("#main-menu").css("font-size");
		var val = parseInt(size.slice(0, size.length - 2));			
		var diff = (percent/0.1) * menu_diff;				
		val = menu_init + diff;				
		$("#main-menu").css("background", "none");		
		$("#main-menu").css("font-size", val+"px");
		
		header.each(function(){
			var $this = $(this);
			var scrollTop = $(document).scrollTop();
			var scrollspeed = parseFloat($this.attr('data-scroll-speed'));
			console.log("speed",scrollspeed);
			var offset = - scrollTop / scrollspeed;
			$this.css('transform', 'translateY(' + offset + 'px)');
			console.log(offset);
		});
		
	}else{
		
		$("#flowers").css("opacity", 0.0640237);
		$("#names").css("opacity", 0.0172182);
		$("#main-menu").css("background", "white");
		$("#main-menu").css("font-size", menu_max+"px");		
		$("#home").css("display", "block");	
		
	}					  
});

function toTop(){
	"use strict";
	$(document).scrollTop(0);
}