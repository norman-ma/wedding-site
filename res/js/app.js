var header = $(".header");

var size = $("#main-menu").css("font-size");
var menu_init = parseInt(size.slice(0, size.length - 2));	
var menu_max = menu_init * 1.5;
var menu_diff = menu_max - menu_init;

$(window).scroll(function(){	
	"use strict";
	
	var wedding = $("#our-wedding h1")[0].getBoundingClientRect().top;
	var there = $("#getting-there h1")[0].getBoundingClientRect().top;
	var photos = $("#photos h1")[0].getBoundingClientRect().top;
	var registry = $("#registry h1")[0].getBoundingClientRect().top;
	//console.log("w", wedding, "p", photos, "r", registry);

	var $scrollTop = $(document).scrollTop();
	var $scrollArea = $(document).height() - $(window).height();
	var percent = $scrollTop/$scrollArea;
	//console.log(percent);
	
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
			//console.log("speed",scrollspeed);
			var offset = - $scrollTop / scrollspeed;
			$this.css('transform', 'translateY(' + offset + 'px)');
			if($this.attr("id") === "flowers"){
				$this.css('transform', 'translateY(' + offset + 'px) rotate(-15deg)');
			}
			//console.log(offset);
		});
		
		$("#countdown").css("display", "none");
	}else{
		
		$("#flowers").css("opacity", 0.0640237);
		$("#names").css("opacity", 0.0172182);
		$("#main-menu").css("background", "white");
		$("#main-menu").css("font-size", menu_max+"px");		
		$("#home").css("display", "block");		
		$("#countdown").css("display", "flex");
		
	}

	var $offset = 0.08 * $(window).height();
	if(Math.floor(wedding) === Math.floor($offset)){
		menuFormat("Our Wedding");
	}else if(Math.floor(there) === Math.floor($offset)){
		menuFormat("Getting There");
	}else if(Math.floor(photos) === Math.floor($offset)){
		menuFormat("Photos");
	}else if(Math.floor(registry) === Math.floor($offset)){
		menuFormat("Registry");
	}else{
		menuFormat("");
	}
	
	
	
	
});

function menuFormat(current){
	"use strict";
	if(current === "Our Wedding"){
		$("#main-menu .wedding .menu-button").addClass("current");
		$("#main-menu .there .menu-button").removeClass("current");
		$("#main-menu .photos .menu-button").removeClass("current");
		$("#main-menu .registry .menu-button").removeClass("current");
	}else if(current === "Getting There"){
		$("#main-menu .wedding .menu-button").removeClass("current");
		$("#main-menu .there .menu-button").addClass("current");
		$("#main-menu .photos .menu-button").removeClass("current");
		$("#main-menu .registry .menu-button").removeClass("current");
	}else if(current === "Photos"){
		$("#main-menu .wedding .menu-button").removeClass("current");
		$("#main-menu .there .menu-button").removeClass("current");
		$("#main-menu .photos .menu-button").addClass("current");
		$("#main-menu .registry .menu-button").removeClass("current");
	}else if(current === "Registry"){
		$("#main-menu .wedding .menu-button").removeClass("current");
		$("#main-menu .there .menu-button").removeClass("current");
		$("#main-menu .photos .menu-button").removeClass("current");
		$("#main-menu .registry .menu-button").addClass("current");
	}else{
		$("#main-menu .wedding .menu-button").removeClass("current");
		$("#main-menu .there .menu-button").removeClass("current");
		$("#main-menu .photos .menu-button").removeClass("current");
		$("#main-menu .registry .menu-button").removeClass("current");
	}
}

function toTop(){
	"use strict";
	$(document).scrollTop(0);
}

var app = angular.module("WeddingApp",[]);

app.controller("CountdownController",["$scope",function($scope){
	"use strict";
	
	$scope.countdown = 0;
	
	$scope.message = "";
	
	$scope.update = function(){
		var today = new Date();
		var wedding_date = new Date("July 6, 2019 17:00:00 GMT -5");
		
		var days = days_between(today, wedding_date);
		
		$scope.countdown = days;
		
		if(days > 1){
			$scope.message = "days to go";
		}else{
			$scope.message = "day to go";
		}
	};
	
	setInterval($scope.update(), 1000 * 60 * 60 * 60);
	
}]);

function days_between(date1, date2) {
	"use strict";
    // The number of milliseconds in one day
    var ONE_DAY = 1000 * 60 * 60 * 24;

    // Convert both dates to milliseconds
    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime();

    // Calculate the difference in milliseconds
    var difference_ms = Math.abs(date1_ms - date2_ms);

    // Convert back to days and return
    return Math.floor(difference_ms/ONE_DAY);

}