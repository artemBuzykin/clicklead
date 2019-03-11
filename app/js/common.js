$(function() {
	$(window).on("load", function() {
		if (!(navigator.appVersion.indexOf("Mac")!=-1)){
			$("html").niceScroll({
				mousescrollstep: 65,
				cursoropacitymax: 0.95,
				autohidemode: false,
				cursorcolor: '#D4D4D4'
			});
		}
	});
	var $hamburger = $(".hamburger");
	$hamburger.on("click", function(e) {
		$hamburger.toggleClass("is-active");
		if ($(".mobile-mnu").hasClass('open')){
			$('.mobile-mnu').removeClass('open')
		} else{
			$(".mobile-mnu").addClass('open')
		};
	});
	$('.navigation a, a.logo, .mouse__btn a, .bottomMenu a').click(function () {
	var elementHref = $(this).attr('href');
	var dist = $(elementHref).offset().top;
	$('html, body').animate({
		scrollTop: dist
	}, 800);
	if ($(".mobile-mnu").hasClass('open')){
		$('.mobile-mnu').removeClass('open');
		$hamburger.toggleClass("is-active");
	};
	return false;
	});
	$(".comments__carousel").owlCarousel({
		nav: true,
		loop: true,
		margin: 15,
		mouseDrag: false,
		touchDrag: false,
		pullDrag: false,
		freeDrag: false,
		items: 3,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			992:{
				items: 3
			}
		},
		navText: ['<i class="fa fa-chevron-left"> </i>','<i class="fa fa-chevron-right"> </i>' ]
	});
	$(".news__preview").owlCarousel({
		items: 3,
		nav: false,
		navText: ['<i class="fa fa-chevron-left"> </i>','<i class="fa fa-chevron-right"> </i>' ],
		dots: false,
		responsiveClass: true,
		margin: 30,
		loop: false,
		responsive: {
			0: {
				items: 1
			},
			768:{
				items: 2
			},
			992:{
				items: 3
			}
		}
	});
	$(".verticaly__carousel").owlCarousel({
		loop: true,
		items: 1
	});
	$(".clients__carousel").owlCarousel({
		nav: true,
		loop: true,
		margin: 50,
		items: 5,
		navText: ['<i class="fa fa-chevron-left"> </i>','<i class="fa fa-chevron-right"> </i>' ],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			768:{
				items: 3
			},
			992:{
				items: 5
			}
		}
	});
	var cookieNumber = $.cookie('cookieRandom');
	var randomNumber;
	if (cookieNumber !== null){
		$(".randomNumber").html(cookieNumber);
	} else {
		randomNumber = randomAboutUs(20000, 28000);
		$(".randomNumber").html(randomNumber);
		$.cookie("cookieRandom", randomNumber, {expires: 1, path: '/'});
	}
	function randomAboutUs(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
	 };
	var showNumber = false;
	$(window).on("scroll resize", function () {
		var countbox = ".aboutUs";
    if (showNumber) return false;
    var w_top = $(window).scrollTop();
    var e_top = $(countbox).offset().top;
    var w_height = $(window).height();
    var d_height = $(document).height();
    var e_height = $(countbox).outerHeight();
    if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
        $('.aboutUs__number').css('opacity', '1');
        $('.aboutUs__number').spincrement({
            thousandSeparator: "",
            duration: 2200
        });
        showNumber = true;
    };
  });
	$(".aboutUs__number").spincrement({
		duration: 1200,
		thousandSeparator: ""
	});
	function comments__big() {
		$(".comments__item-text").hide();
		$(".comments__item").closest(".active").eq(1).find(".comments__item-text").show();
		$(".comments__carousel .owl-nav>div.owl-prev, .comments__carousel .owl-nav>div.owl-next").click(function () {
		$(".comments__item-text").hide().closest(".active").eq(1).find(".comments__item-text").show();
		});
	};
	if($(window).width() >= 992){
		comments__big();
	};
	//TIMER! Format date: "month/day/year hour:minute:second"
	$(".countdown").downCount({
		date: "05/01/2019 12:00:00"
	});
});
