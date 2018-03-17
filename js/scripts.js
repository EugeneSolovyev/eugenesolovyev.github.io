$(document).ready(function () {
	
	//date
	
	var deadline = 'April 1 2018 23:59:59';
	
	function getTimeRemaining(endtime) {
		var t = Date.parse(endtime) - Date.parse(new Date());
		var seconds = Math.floor((t / 1000) % 60);
		var minutes = Math.floor((t / 1000 / 60) % 60);
		var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
		var days = Math.floor(t / (1000 * 60 * 60 * 24));
		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}
	
	var timeObj = {
		days: 'timer_days',
		hours: 'timer_hours',
		minutes: 'timer_minutes',
		seconds: 'timer_seconds'
	}
	
	function firstInitializeClock(objId, endtime) {
		var t = getTimeRemaining(endtime);
		if (t.total > 0) {
			var days = document.getElementById(objId.days);
			var hours = document.getElementById(objId.hours);
			var minutes = document.getElementById(objId.minutes);
			var seconds = document.getElementById(objId.seconds);
			
			
			days.innerHTML = ('0' + t.days).slice(-2);
			hours.innerHTML = ('0' + t.hours).slice(-2);
			minutes.innerHTML = ('0' + t.minutes).slice(-2);
			seconds.innerHTML = ('0' + t.seconds).slice(-2);
		}
	}
	
	function initializeClock(objId, endtime) {
		var days = document.getElementById(objId.days);
		var hours = document.getElementById(objId.hours);
		var minutes = document.getElementById(objId.minutes);
		var seconds = document.getElementById(objId.seconds);
		
		var timeinterval = setInterval(function () {
			var t = getTimeRemaining(endtime);
			
			days.innerHTML = ('0' + t.days).slice(-2);
			hours.innerHTML = ('0' + t.hours).slice(-2);
			minutes.innerHTML = ('0' + t.minutes).slice(-2);
			seconds.innerHTML = ('0' + t.seconds).slice(-2);
			if (t.total <= 0) {
				clearInterval(timeinterval);
			}
		}, 1000);
	}
	
	firstInitializeClock(timeObj, deadline);
	initializeClock(timeObj, deadline);
	
	
	$('span.economy__tab').on('click', function () {
		$('span.economy__tab').removeClass('active');
		$(this).addClass('active');
		var currentPage = $(this).data('tab');
		
		$('div.economy__page__wrap').removeClass('active');
		$($('div.economy__page__wrap')[currentPage]).addClass('active');
	});
	
	$('.questions__item__title').on('click', function () {
		$('.questions__item__desc:visible').slideUp(250);
		$('.questions__item__title').not(this).find('img').removeClass('active');
		$(this).next().stop().slideToggle(250);
		$(this).find('img').toggleClass('active');
	});
	
	
	$('.footer__social__input').on('input', function () {
		if ($(this).val().length > 0) {
			$(this).siblings('span.placeholder').addClass('active');
		}
		else {
			$(this).siblings('span.placeholder').removeClass('active');
		}
	});
	
	// var timer;
	
	$('.team__item__more--btn')
		.on('click', function () {
			var item = $(this).siblings('.team__item__desc');
			item.addClass('active');
		});
	
	$('.team__item__desc').blur(function (e) {
		$(this).removeClass('active');
	});
	
	// $('.team__item__desc').on('click', function () {
	// 	$(this).removeClass('active');
	// });
	
	$('.social__media__btn').on('click', function () {
		$('.social__media').toggleClass('active');
	});
	
	var menu_selector = "nav";
	
	function onScroll() {
		var scroll_top = $(document).scrollTop();
		$(menu_selector + " a.nav__link").each(function () {
			var hash = $(this).attr("href");
			var target = $(hash);
			if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
				$(menu_selector + " a.active").removeClass("active");
				$(this).addClass("active");
				if ($(target).is('#features')) {
					$('.features__item__wrap').delay(500).addClass('active');
				}
			}
		});
		if ($(window).scrollTop() > 75) {
			$('header').addClass('active');
		} else {
			$('header').removeClass('active');
		}
		
		$('.nav__lang').removeClass('active');
		$('.social__media').removeClass('active');
	}
	
	$(document).on("scroll", onScroll);
	$("a[href^=\\#]").click(function (e) {
		e.preventDefault();
		$(document).off("scroll");
		$(menu_selector + " a.active").removeClass("active");
		$(this).addClass("active");
		var hash = $(this).attr("href");
		var target = $(hash);
		$("html, body").animate({
			scrollTop: target.offset().top
		}, 500, function () {
			window.location.hash = hash;
			$(document).on("scroll", onScroll);
			if ($(target).is('#features')) {
				$('.features__item__wrap').delay(500).addClass('active');
			}
		});
	});
	
	$('.nav__lang').on('click', function (e) {
		if ($(e.target).is('.nav__lang__short')) {
			$('.nav__lang').toggleClass('active');
		}
	});
	
	$('.counter__docs__whitepaper').on('click', function () {
		$('main, footer').addClass('blur');
		$('#popup__whitepaper').fadeIn(700);
	});
	
	$('.popup__whitepaper__close').on('click', function () {
		$('#popup__whitepaper').fadeOut(200);
		$('main, footer').removeClass('blur');
	})

//    $('#road-map').bind('mousewheel', function(e) {
//        e.preventDefault();
//        var delta = e.originalEvent.deltaY;
//
//
//        if(delta === -100) {
//            this.scrollLeft -= 150;
//        }
//        else {
//            this.scrollLeft += 150;
//        }
//    });

//    $('#road-map').bind('scroll', function(e) {
//
//        console.log(e);
//        console.log($('#road-map').scrollLeft());
//
//        if ($('#road-map').scrollLeft() == 0) {
//            $(this).unbind('mousewheel');
//        }
//    });
	jQuery('#road-map').scrollbar();
});
