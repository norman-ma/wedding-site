var header = $(".header");

var size = $("#main-menu").css("font-size");
var menu_init = parseInt(size.slice(0, size.length - 2));	
var menu_max = menu_init * 1.2;
var menu_diff = menu_max - menu_init;

var weddingOrigin = ($("#our-wedding h1.desktop")[0].getBoundingClientRect().top > 0) ? $("#our-wedding h1.desktop")[0].getBoundingClientRect().top:$("#our-wedding h1.mobile")[0].getBoundingClientRect().top;
var thereOrigin = ($("#getting-there h1.desktop")[0].getBoundingClientRect().top > 0) ? $("#getting-there h1.desktop")[0].getBoundingClientRect().top:$("#getting-there h1.mobile")[0].getBoundingClientRect().top;
var photosOrigin = ($("#photos h1.desktop")[0].getBoundingClientRect().top > 0) ? $("#photos h1.desktop")[0].getBoundingClientRect().top:$("#photos h1.mobile")[0].getBoundingClientRect().top;
var registryOrigin = ($("#registry h1.desktop")[0].getBoundingClientRect().top > 0) ? $("#registry h1.desktop")[0].getBoundingClientRect().top:$("#registry h1.mobile")[0].getBoundingClientRect().top;
var rsvpOrigin = ($("#rsvp h1.desktop")[0].getBoundingClientRect().top > 0) ? $("#rsvp h1.desktop")[0].getBoundingClientRect().top:$("#rsvp h1.mobile")[0].getBoundingClientRect().top;

$(window).scroll(function(){	
	"use strict";
	
	var wedding = ($("#our-wedding h1.desktop")[0].getBoundingClientRect().top > 0) ? $("#our-wedding h1.desktop")[0].getBoundingClientRect().top:$("#our-wedding h1.mobile")[0].getBoundingClientRect().top;
	var there = ($("#getting-there h1.desktop")[0].getBoundingClientRect().top > 0) ? $("#getting-there h1.desktop")[0].getBoundingClientRect().top:$("#getting-there h1.mobile")[0].getBoundingClientRect().top;
	var photos = ($("#photos h1.desktop")[0].getBoundingClientRect().top > 0) ? $("#photos h1.desktop")[0].getBoundingClientRect().top:$("#photos h1.mobile")[0].getBoundingClientRect().top;
	var registry = ($("#registry h1.desktop")[0].getBoundingClientRect().top > 0) ? $("#registry h1.desktop")[0].getBoundingClientRect().top:$("#registry h1.mobile")[0].getBoundingClientRect().top;
	var rsvp = ($("#rsvp h1.desktop")[0].getBoundingClientRect().top > 0) ? $("#rsvp h1.desktop")[0].getBoundingClientRect().top:$("#rsvp h1.mobile")[0].getBoundingClientRect().top;
	console.log("w", wedding, "t",there ,"p", photos, "r", registry, "rs", rsvp);

	var $scrollTop = $(document).scrollTop();
	var $scrollArea = $(document).height() - $(window).height();
	var percent = $scrollTop/$scrollArea;
	//console.log(percent);
	if(percent < 0.1){

		
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
			//console.log(offset);
		});
		$("#home").css("opacity", 0);
		$("#countdown").css("opacity", 0);
		$("#header").removeClass("top");
		
	}else{
		
		$("#flowers").css("opacity", 0.0640237);
		$("#names").css("opacity", 0.0172182);
		$("#header").addClass("top");
		$("#main-menu").css("font-size", menu_max+"px");		
		$("#home").css("opacity", 1);		
		$("#countdown").css("opacity", 1);
		
	}

	var $offset = 0.1 * $(window).height();
	var $offset2 = 0.9 * $(window).height();
	var $offset3 = 0.5 * $(window).height();
	
	var current = "";
	
	if(Math.floor(wedding) <= Math.floor($offset) && Math.floor(wedding) > 0){
		menuFormat("wedding");
		$("*").removeClass("to-blue");
		current = weddingOrigin;
		console.log(1);
	}else if(Math.floor(there) <= Math.floor($offset) && Math.floor(there) > 0){
		menuFormat("gettingthere");
		$("*").removeClass("to-blue");
		current = thereOrigin;
		console.log(2);
	}else if(Math.floor(photos) <= Math.floor($offset) && Math.floor(photos) > 0){
		menuFormat("photos");
		current = photosOrigin;
		console.log(3);
	}else if(Math.floor(registry) <= Math.floor($offset) && Math.floor(registry) > 0){
		menuFormat("registry");
		$("*").removeClass("to-blue");
		current = registryOrigin;
		console.log(4);
	}else if(Math.floor(rsvp) <= Math.floor($offset) && Math.floor(rsvp) > 0){
		menuFormat("rsvp");
		$("*").removeClass("to-blue");
		current = rsvpOrigin;
		console.log(5);
	}else{
		menuFormat("other");
		$("*").removeClass("to-blue");
		current = "";
	}	
	
	if(Math.floor(photos) <= Math.floor($offset2) && Math.floor(photos) > 0){
		$("#header").addClass("to-blue");
		$("#bg").addClass("to-blue");
		$("*").addClass("to-blue");
	}

	var currentHead = $("h1.current");	
		
	
	if($(document).scrollTop() <= current + $offset3 && $(document).scrollTop() >= current){
		var x = (current + $offset3 - $(document).scrollTop())/$offset3;
		currentHead.css("opacity", x);
		//console.log(x);
		
		//console.log((topPosition + $offset2 - $(document).scrollTop())/$offset2);
		//console.log($(document).scrollTop(), topPosition, topPosition + $offset2);
	}
	
});

function menuFormat(current){
	"use strict";
	var pages={
		wedding:["#our-wedding h1", "#main-menu .wedding .menu-button"],
		gettingthere:["#getting-there h1", "#main-menu .there .menu-button"],
		photos:["#photos h1", "#main-menu .photos .menu-button"],
		registry:["#registry h1", "#main-menu .registry .menu-button"],
		rsvp:["#rsvp h1", "#main-menu .rsvp .menu-button"],
	};
	
	if(current === "none"){
		$(".menu-button").removeClass("current");
		$("h1").removeClass("current");
	}else{
		$(".menu-button").removeClass("current");
		$("h1").removeClass("current");
		$(pages[current][0]).addClass("current");
		$(pages[current][1]).addClass("current");	
		console.log(pages[current]);
	}
	
		
	
	
	/*
	if(current === "Our Wedding"){
		$(".menu-button").removeClass("current")
		$("h1").removeClass("current")
		$("#main-menu .wedding .menu-button").addClass("current");		
		$("#our-wedding h1").addClass("current");
	}else if(current === "Getting There"){
		$(".menu-button").removeClass("current")
		$("h1").removeClass("current")
		$("#main-menu .there .menu-button").addClass("current");
		$("#getting-there h1").addClass("current");
	}else if(current === "Photos"){
		$("#main-menu .wedding .menu-button").removeClass("current");
		$("#main-menu .there .menu-button").removeClass("current");
		$("#main-menu .photos .menu-button").addClass("current");
		$("#main-menu .registry .menu-button").removeClass("current");
		$("#our-wedding h1").removeClass("current");
		$("#getting-there h1").removeClass("current");
		$("#photos h1").addClass("current");
		$("#registry h1").removeClass("current");
	}else if(current === "Registry"){
		$("#main-menu .wedding .menu-button").removeClass("current");
		$("#main-menu .there .menu-button").removeClass("current");
		$("#main-menu .photos .menu-button").removeClass("current");
		$("#main-menu .registry .menu-button").addClass("current");
		$("#our-wedding h1").removeClass("current");
		$("#getting-there h1").removeClass("current");
		$("#photos h1").removeClass("current");
		$("#registry h1").addClass("current");
	}else{
		$("#main-menu .wedding .menu-button").removeClass("current");
		$("#main-menu .there .menu-button").removeClass("current");
		$("#main-menu .photos .menu-button").removeClass("current");
		$("#main-menu .registry .menu-button").removeClass("current");
		$("#our-wedding h1").removeClass("current");
		$("#getting-there h1").removeClass("current");
		$("#photos h1").removeClass("current");
		$("#registry h1").removeClass("current");
	}*/
}

function toggleMaps(key){
	"use strict";
	var maps = {
		kendal:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2681.7858853700372!2d-77.48911321264521!3d18.089231923405777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8edbbebe172e832b%3A0x47bd588f7d5cf85b!2sKendal+Conference+Center!5e0!3m2!1sen!2sjm!4v1553104191860",
		jdv: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3792.312850404201!2d-77.50930398479734!3d18.103338386525188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8edbbed0181b23c1%3A0x82584fde0d153264!2sJamaica+Deaf+Village+Retreat+Centre!5e0!3m2!1sen!2sjm!4v1553115832312",
		directions: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d9846.933337051016!2d-77.49927966929364!3d18.094582436322682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x8edbbed0181b23c1%3A0x82584fde0d153264!2sJamaica+Deaf+Village+Retreat+Centre!3m2!1d18.1033333!2d-77.5071153!4m5!1s0x8edbbebe172e832b%3A0x47bd588f7d5cf85b!2sKendal+Conference+Center!3m2!1d18.0893303!2d-77.4885035!5e0!3m2!1sen!2sjm!4v1553115589485"
	};
	
	$("#map").attr("src",maps[key]);
	$.scrollTo("#map",{offset: -0.3 * $(window).height() });	
}

$("#rsvpform").on("submit", function(event){
	"use strict";
	event.preventDefault();
	
	var name = $("#rsvpname").val();
	var attending = ($("#rsvpaccept").is(":checked")) ? "Accept with pleasure":"Decline with regrets";
	var num = (attending === "decline") ? 0:$("#attendingnum").val();
	
	console.log(name, attending, num);
	
	var formData = new FormData(this);
	formData.append("service_id", "aislegowithnorman");
	formData.append("template_id", "template_UdCZDolE");
	formData.append("user_id", "user_ZrWXKupH6MTY01y5pTaeW");
	formData.append("name", name);
	formData.append("attending", attending);
	formData.append("num", num);
	
	$.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
        type: 'POST',
        data: formData,
        contentType: false, // auto-detection
        processData: false // no need to parse formData to string
    }).done(function() {
        $("form div").html("<h1 id='thankyou'>Thank You!</h1>");
    }).fail(function(error) {});
});

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
		var wedding_date = new Date("July 6, 2019 00:00:00 GMT -5");
		
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

app.controller("ImageController",["$scope", function($scope){
	"use strict";
	
	$scope.photos = [
		{
			src:"https://lh3.googleusercontent.com/8druIfbKLRU_hCV8J9UR5KIt96g5zEbDA2t3LCJU4f-sTcm9tZ37cspiZUTDYLQTD4UcrLDJAQjRsBMzUVd0Z3wAK6EgcitaoskabLuqtRLRObroszGC26v3QxLS0vunbYAOkQcyQA=w2400",
		 	caption:"",
		 	position: 1
		},
		{
			src:"https://lh3.googleusercontent.com/nR_LLL0qsoYiVHJPDyjhvufBCGzx-An0jq7Rs8eJXiniCcHqT21Ez9R9Y8LYQDm0YYyFopVV084xcHFT5GkjEGD5KsPDMlKM0LaoXRnMWiK5vHFj1fQdH0wZjPSaeUFH8AbrVq3FgQ=w2400",
		 	caption:"",
		 	position: 2
		},
		{
			src:"https://lh3.googleusercontent.com/zQxC1LMyNKzp1lZpS9Y3bNQ-ZX8bUbm_pd_Yejx9E_-up4SlaFLWpaT9MthhTxw1UxacggNcxiGX0UCg54QPs6S59wnYjv1GV-SjcyjInhTjsEFvXRnqQ9RER-pYBGXnYU1smPCYCA=w2400",
		 	caption:"",
		 	position: 3
		},
		{
			src:"https://lh3.googleusercontent.com/xRe4v0ZkcI0Z6BQnTEgZyboABMDukaxWiHYAS68gtAE5HGMkE_Ifpgc_3BfSnJnWBorxEhb6p1UFfdF_OVB9wP9qjVM6x8aSbLnTknORHF1vdCUI6O0eek5GfWfTIDpQ58-27I6Jzw=w2400",
		 	caption:"",
		 	position: 4
		},
		{
			src:"https://lh3.googleusercontent.com/3IjglklINYEb_h_5mauwWd_5i9oDl64zX5hqxLAkNikVFFX3hKp15fgNWSKnwiemila6k8QGwtI0l6j9gTAnkNN-uzwl5lOmqo0LGnDkFjmscg4sHSPXUOLcPP-5cEnHqgXlfV9VGw=w2400",
		 	caption:"",
		 	position: 5
		},
		{
			src:"https://lh3.googleusercontent.com/9ay2lwbSzb8IADq1NTIELHdCwLJJRdKTJPpHG5MQXQoSGK8D7UYB5A5D3r0p-S7ESCRbpaV2ga3g9miAB_vkQOBgvV4qmvPmnAp1AZSg59IMdF6xDwnt8Oxlf2nKJKQdK8qQaCBjtA=w2400",
		 	caption:"",
		 	position: 6
		},
		{
			src:"https://lh3.googleusercontent.com/q1PWE6woXjBTZrMaG0U44O3jx8pG9kHLNggGeH7kig9PvGKsUQCkuZ1a8qWLWf-acvYJl6el6TK1vuPjgX-CJcMa6ficoaGNiw_VZx6goOEvXDbbMw62gUvTvwE2Vzq8K8PYOzcnMw=w2400",
		 	caption:"",
		 	position: 7
		},
		{
			src:"https://lh3.googleusercontent.com/ADcl5mz0B61AXVD70tt6Xluw5nU3cMoDoZRUNjVNGuIJDeOBCjNPfAfnDJjLnlj9s105DD1q5QcKRHZ8ONq1Z1WkJUmsaNYxies_pOCSTVCIJRV39ZppzmAHRcF1wXaqhsNIILATzQ=w2400",
		 	caption:"",
		 	position: 8
		},
		{
			src:"https://lh3.googleusercontent.com/SSAwf1tzkZKEzQeV4e_ABK1iOJn-Mj27NM1fT4l-wx-cgGYhnQNPIH6br1e8eZ7P4ntAxeCZeBGfYHqj9bQTvVGuMpcNDIx0CoINHN4wUAcu29mcN9-z9ONFT7GTiiFnj-gzWf_n5Q=w2400",
		 	caption:"",
		 	position: 9
		},
		{
			src:"https://lh3.googleusercontent.com/jCR_AF3ZGTtIR4gIpS56kESyP2niHKVroMmlbJ7VoQHfeTM2zFQKFX7ziJX4OcI42qYUM1ROZXAdJsTKDR-RuLrjvgitozNIiX4LvxeBXuYOhCMRwuYOUWu8Jv1wzB5xBEFoYeXEmg=w2400",
		 	caption:"",
		 	position: 10
		},
		{
			src:"https://lh3.googleusercontent.com/99mzl-G3E1jmt2p-8JZUZANGO-TcwvbmLgwKtR3PuZhLFuhSlulwXqWYEs-QvvI1NShF895vkg_oMXYol8W81qjFkiliwtV2VZ9euSjs7NF8vvOhwfIWi6-_wcgLE1NCXkMnoFjNPw=w2400",
		 	caption:"",
		 	position: 11
		},
		{
			src:"https://lh3.googleusercontent.com/q8IAKKIyIZS3OWY4Im4CRZ9n2r3cDJbnen-kwVqRSP0W4maT3PmgPRzr4oZqoDj0B_pjkP4D0_yUpTRUm-QiN4aJ0LjhgebPiSq0Vyd-an1O7pUVGYRcQ9_giJ2kE0EtO7TeOG5dTA=w2400",
		 	caption:"",
		 	position: 12
		},
		{
			src:"https://lh3.googleusercontent.com/k8VKbzmGj81buCKbmDMAtqfx8G5gHBbbxbhN5vCNX7zswQYq_yVqA2FD70J6zI-yeeFJbRPyYMcOMTj-ouZQksL-ul-v0atAPn10TRysE6H50fnqBx67CItOGRciV9bBnEpzM35WYA=w2400",
		 	caption:"",
		 	position: 13
		},
		{
			src:"https://lh3.googleusercontent.com/Fp1VVWEaLU5lKhazkv192L7xs2_69BDE2KxihiprdS3GKgRJl6GHq1XYmXjfvUnbOp0iwdl8wDDh9ZTpnd2QDlTa4byJeEs_tq1zJG2Dhse9J1k1zyBaVq4u_UjGAA3nenTIPIZJ2w=w2400",
		 	caption:"",
		 	position: 14
		},
		{
			src:"https://lh3.googleusercontent.com/BZV7UTnebIRKjuLvzJ0kRFs0uSVA87LKngwIeK6gC-AQrV-DTvHCcnzf3a-eFmo_jBQuf1qbz3slApQc3xYRpEB9p2qdXek9VCzt5NswkOBqdPo5uRMRPeg4PaXWMYi3DUgmggA4rg=w2400",
		 	caption:"",
		 	position: 15
		},
		{
			src:"https://lh3.googleusercontent.com/Dl8xak2SsohuY5vNVuip0BTwSo17f4vSTBhU2FfA13peTNsAbY-7to7aNTJzlteFSCdHIlmuSpZz9Irsk9Qcd1ZvJCw2pbHIHz7IoetT0TWp2vmO1AsjshDNWhe0kULrcN3RYvU8eg=w2400",
		 	caption:"",
		 	position: 16
		},
		{
			src:"https://lh3.googleusercontent.com/WqU_QHMdKeTLe9htz6nZuG69TcKqyjXMx-fNfxdYPHWNWwPKRZx8Z66OUc_f5I5c8Pp7IwjDdayNlLYJ83LWqVb7at8Vbuzo8WykBkdmRAhnCLz3WuaT8tYIcd3vNAhmYDwMa-O6bQ=w2400",
		 	caption:"",
		 	position: 17
		},
		{
			src:"https://lh3.googleusercontent.com/8Nw7Nf-VL8shZGt9U3DYI3KFXWX6fSsOjr3TpvMGLSQI4xJj4_ObxAyzMxo1SJzpJu-8I4l3QvQxwGk1vEt2l_2ZNEQz1ROkBbpw1QxTwlNSkO5Nzjmk25C6L0v6rF3GoPAbM5a4wg=w2400",
		 	caption:"",
		 	position: 18
		},
		{
			src:"https://lh3.googleusercontent.com/gz1Xv1XkQ129aXewbPCBOar22ElupXTxNSA3EX5Vz3dhVyVNr54yBefltGTp1JBcUMDgiPDd5Ek0mEwYkyqy3LkglxXvd3OYYUKAN-Z4X2gWx5PxEv-iWnzuEznkRS-S3jOBq2Qrvg=w2400",
		 	caption:"",
		 	position: 19
		},
		{
			src:"https://lh3.googleusercontent.com/6BRG964vdln0EeTjinSDAkKTa6BfnQK-X87GQZ-m1XTIoTp6RvgRziN9OjYQ3exhAAC9HW8mUR-PgnMzZfPzJbsw6bxxoe5kiIf3Vks0bFfR3vBKhQU5su45cwJiRTJaVYqX20DI2A=w2400",
		 	caption:"",
		 	position: 20
		},
		{
			src:"https://lh3.googleusercontent.com/J8VZFSInJtRn88FuRQxNuq9a_0eEW1WdGYkTEFMFSROciQeaFrID1l8KBFB_IzJ_yBCnvIl_N3RDk1hPIX_bRZEAnQ4RjIBXuz4EOhIE6-2pISGnRlZ98ji28lnZvjemnpsRXs85sQ=w2400",
		 	caption:"",
		 	position: 21
		},
		{
			src:"https://lh3.googleusercontent.com/QPlmw6h7KPAORnYMOoJUhYPSjOgExh8x2CtKbU1tGK2a9JAlC7tA8F0eI_s5KuKsa211cMRnOHtIUlo4kXZyrvWWLVK3Af-5_IV9_PLr2AsJFpC6mGfgN-tICKR9vjFkPF2gC5jTzw=w2400",
		 	caption:"",
		 	position: 22
		},
		{
			src:"https://lh3.googleusercontent.com/OVsqNy9uBkk583lIHkBb1Js_g8CedXGxo2EXXdj1HELaNpvmNMc3jxQ6xyO-jKIyYHRwvAYYDmJs7i3GClDtgMpN4SiO-hDPjNb0A9ZlV4amDS2AWao92Qg6876zgF9xLr8x6QcIEw=w2400",
		 	caption:"",
		 	position: 23
		},
		{
			src:"https://lh3.googleusercontent.com/jRA82P41iVsVvsFnLJFROB4Ru9O_e1PSIxds57HiT6CHVUVed1ka_vtaVAbVOrK78QBqZek8wECRr2F87gXdt2j45R-lHk_QYhbtJff8bcamUVHsjFwE313sm8Qq9njtlDSJoy9S7Q=w2400",
		 	caption:"",
		 	position: 24
		},
		{
			src:"https://lh3.googleusercontent.com/qdnKB9QYrnsIgmIWDpC8OW2WFMSnJaudcL6d6SadLp0Pygb7DkDtojaqOYlhxXm88u9940caYywBTV9RZn_pyKyajcVwxcTZtSAXabdwg_P04lE-j6zVlFgvTiskhfBabYBYDJ7OlQ=w2400",
		 	caption:"",
		 	position: 25
		}
	];	
	
	$scope.num = $scope.photos.length;
	
	$scope.currentPhoto = {};
	
	$scope.showSlide = function(num){
		$scope.currentPhoto = $scope.photos[num - 1];		
	};
	
	$scope.nextSlide = function(){
		var n = ($scope.currentPhoto.position + 1) % $scope.num;
		if(n > 0){
			$scope.showSlide(n);
		}else{
			$scope.showSlide($scope.num - n);
		}
		console.log($scope.currentPhoto);
	};
	
	$scope.prevSlide = function(){
		var n = ($scope.currentPhoto.position - 1) % $scope.num;
		if(n > 0){
			$scope.showSlide(n);
		}else{
			$scope.showSlide($scope.num - n);
		}
		console.log($scope.currentPhoto);		
	};
	
	$scope.openLightbox = function(s){
		$("#lightbox").css("display","block");
		//$("body").css("overflow","hidden");
		$("body").css("position","fixed");
		$scope.showSlide(s);
	};
	
	$scope.closeLightbox = function(){
		$("#lightbox").css("display","none");
		//$("body").css("overflow","auto");
		$("body").css("position","relative");
		//$.scrollTo("#photos");
		$.scrollTo("#img-"+$scope.currentPhoto.position,{offset:-400});
		console.log($scope.currentPhoto.position);
	};		
	
	$("#lightbox").swipe({
		swipeLeft:function(event, direction, distance, duration, fingerCount) {
			$scope.$apply(function(){
				$scope.nextSlide();
				console.log("You swiped " + direction );
			});
		}
	});
	
	$("#lightbox").swipe({
		swipeRight:function(event, direction, distance, duration, fingerCount) {
			$scope.$apply(function(){
				$scope.prevSlide();
				console.log("You swiped " + direction );
			});
		}
	});
}]);