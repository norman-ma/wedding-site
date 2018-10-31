var header = $(".header");

var size = $("#main-menu").css("font-size");
var menu_init = parseInt(size.slice(0, size.length - 2));	
var menu_max = menu_init * 1.5;
var menu_diff = menu_max - menu_init;

$(window).scroll(function(){	
	"use strict";
	
	var wedding = $("#our-wedding").position().top;
	var photos = $("#photos").position().top;
	var registry = $("#registry").position().top;
	console.log("w", wedding, "p", photos, "r", registry);

	var $scrollTop = $(document).scrollTop();
	var $scrollArea = $(document).height() - $(window).height();
	var percent = $scrollTop/$scrollArea;
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
			var scrollspeed = parseFloat($this.attr('data-scroll-speed'));
			console.log("speed",scrollspeed);
			var offset = - $scrollTop / scrollspeed;
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
	
	var current = "";
	if($scrollTop >= wedding - 0.01 * $scrollArea && $scrollTop < photos){
		current = "wedding";
	}else if($scrollTop >= photos - 0.01 * $scrollArea && $scrollTop < registry){
		current = "photos";
	}else if($scrollTop >= registry - 0.01 * $scrollArea && $scrollTop < registry + $("#registry").height()){
		current = "registry";
	}
	
	menuFormat(current);
});

if("onhashchange" in window){
	switch(location.hash){
		case("#our-wedding"):
			menuFormat("wedding");
			break;
		case("#photos"):
			menuFormat("photos");
			break;
		case("#registry"):
			menuFormat("registry");
			break;
	}
}

function menuFormat(current){
	"use strict";
	if(current === "wedding"){
		$("#main-menu .wedding .menu-button").css("border-bottom", "solid #400711 1.5px");
		$("#main-menu .photos .menu-button").css("border-bottom", "none");
		$("#main-menu .registry .menu-button").css("border-bottom", "none");
	}else if(current === "photos"){
		$("#main-menu .wedding .menu-button").css("border-bottom", "none");
		$("#main-menu .photos .menu-button").css("border-bottom", "solid #400711 1.5px");
		$("#main-menu .registry .menu-button").css("border-bottom", "none");
	}else if(current === "registry"){
		$("#main-menu .wedding .menu-button").css("border-bottom", "none");
		$("#main-menu .photos .menu-button").css("border-bottom", "none");
		$("#main-menu .registry .menu-button").css("border-bottom", "solid #400711 1.5px");
	}else{
		$("#main-menu .wedding .menu-button").css("border-bottom", "none");
		$("#main-menu .photos .menu-button").css("border-bottom", "none");
		$("#main-menu .registry .menu-button").css("border-bottom", "none");	
	}
}

function toTop(){
	"use strict";
	$(document).scrollTop(0);
}