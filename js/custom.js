/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Home Slider
5. Init News Slider
6. Init Milestones


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var ctrl = new ScrollMagic.Controller();

	setHeader();
	initMenu();
	initHomeSlider();
	initNewsSlider();
	initMilestones();
	initHeroBanner();

	$(window).on('resize', function()
	{
		setHeader();

		setTimeout(function()
		{
			$(window).trigger('resize.px.parallax');
		}, 375);
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	/* 

	2. Set Header

	*/

	function setHeader()
	{
		var header = $('.header');

		if($(window).scrollTop() > 91)
		{
			header.addClass('scrolled');
		}
		else
		{
			header.removeClass('scrolled');
		}
	}

	/* 

	3. Init Menu

	*/

	function initMenu()
	{
		if($('.menu').length)
		{
			var menu = $('.menu');
			var hamburger = $('.hamburger');
			var close = $('.menu_close');

			hamburger.on('click', function()
			{
				menu.toggleClass('active');
			});

			close.on('click', function()
			{
				menu.toggleClass('active');
			});
		}
	}

	/* 

	4. Init Home Slider

	*/

	function initHomeSlider()
	{
		if($('.home_slider').length)
		{
			var homeSlider = $('.home_slider');
			homeSlider.owlCarousel(
			{
				items:1,
				autoplay:true,
				loop:true,
				nav:false,
				dots:false,
				smartSpeed:1200
			});

			// add animate.css class(es) to the elements to be animated
			function setAnimation ( _elem, _InOut )
			{
				// Store all animationend event name in a string.
				// cf animate.css documentation
				var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

				_elem.each ( function ()
				{
					var $elem = $(this);
					var $animationType = 'animated ' + $elem.data( 'animation-' + _InOut );

					$elem.addClass($animationType).one(animationEndEvent, function ()
					{
						$elem.removeClass($animationType); // remove animate.css Class at the end of the animations
					});
				});
			}

			// Fired before current slide change
			homeSlider.on('change.owl.carousel', function(event)
			{
				var $currentItem = $('.home_slide', homeSlider).eq(event.item.index);
				var $elemsToanim = $currentItem.find("[data-animation-out]");
				setAnimation ($elemsToanim, 'out');
			});

			// Fired after current slide has been changed
			homeSlider.on('changed.owl.carousel', function(event)
			{
				var $currentItem = $('.home_slide', homeSlider).eq(event.item.index);
				var $elemsToanim = $currentItem.find("[data-animation-in]");
				setAnimation ($elemsToanim, 'in');
			});

			// Custom Next Nav
			if($('.home_slider_nav').length)
			{
				var next = $('.home_slider_nav');
				next.on('click', function()
				{
					homeSlider.trigger('next.owl.carousel');
				});
			}
		}
	}

	/* 

	5. Init News Slider

	*/

	function initNewsSlider()
	{
		if($('.breaking_news_slider').length)
		{
			var newsSlider = $('.breaking_news_slider');
			newsSlider.owlCarousel(
			{
				items:1,
				autoplay:true,
				autoplayTimeout:4000,
				autoplayHoverPause:true,
				loop:true,
				dots:false,
				nav:false,
				smartSpeed:1200
			});
		}
	}

	/* 

	6. Init Milestones

	*/

	function initMilestones()
	{
		if($('.milestone_counter').length)
		{
			var milestoneItems = $('.milestone_counter');

	    	milestoneItems.each(function(i)
	    	{
	    		var ele = $(this);
	    		var endValue = ele.data('end-value');
	    		var eleValue = ele.text();

	    		/* Use data-sign-before and data-sign-after to add signs
	    		infront or behind the counter number */
	    		var signBefore = "";
	    		var signAfter = "";

	    		if(ele.attr('data-sign-before'))
	    		{
	    			signBefore = ele.attr('data-sign-before');
	    		}

	    		if(ele.attr('data-sign-after'))
	    		{
	    			signAfter = ele.attr('data-sign-after');
	    		}

	    		var milestoneScene = new ScrollMagic.Scene({
		    		triggerElement: this,
		    		triggerHook: 'onEnter',
		    		reverse:false
		    	})
		    	.on('start', function()
		    	{
		    		var counter = {value:eleValue};
		    		var counterTween = TweenMax.to(counter, 4,
		    		{
		    			value: endValue,
		    			roundProps:"value", 
						ease: Circ.easeOut, 
						onUpdate:function()
						{
							document.getElementsByClassName('milestone_counter')[i].innerHTML = signBefore + counter.value + signAfter;
						}
		    		});
		    	})
			    .addTo(ctrl);
	    	});
		}
	}
	
	/* 

	7. Hero Banner

	*/
	
	function initHeroBanner(){
		var schedule=[]
		var sunSchedule=[]
		schedule.push({'Date' : new Date('2020','00','25'),'Home' : 'Nightmare','Away' : 'RealRaccoons'});
		sunSchedule.push({'Date' : new Date('2020','00','26'),'Home' : 'Mighty Tigers','Away' : 'Ball Busters'});
		schedule.push({'Date' : new Date('2020','01','01'),'Home' : 'Real Raccoons','Away' : 'Mighty Tigers'});
		sunSchedule.push({'Date' : new Date('2020','01','02'),'Home' : 'Dragons','Away' : 'Nightmare'});
		schedule.push({'Date' : new Date('2020','01','08'),'Home' : 'Mighty Tigers','Away' : 'Dragons'});
		sunSchedule.push({'Date' : new Date('2020','01','09'),'Home' : 'Ball Busters','Away' : 'Real RealRaccoons'});
		schedule.push({'Date' : new Date('2020','01','15'),'Home' : 'Ball Busters','Away' : 'Dragons'});
		sunSchedule.push({'Date' : new Date('2020','01','16'),'Home' : 'Mighty Tigers','Away' : 'Nightmare'});
		schedule.push({'Date' : new Date('2020','01','22'),'Home' : 'Nightmare','Away' : 'Ball Busters'});
		sunSchedule.push({'Date' : new Date('2020','01','23'),'Home' : 'Dragons','Away' : 'Real RealRaccoons'});
		schedule.push({'Date' : new Date('2020','01','29'),'Home' : 'Ball Busters','Away' : 'Mighty Tigers'});
		sunSchedule.push({'Date' : new Date('2020','02','01'),'Home' : 'Real Raccoons','Away' : 'Nightmare'});
		schedule.push({'Date' : new Date('2020','02','07'),'Home' : 'Nightmare','Away' : 'Dragons'});
		sunSchedule.push({'Date' : new Date('2020','02','08'),'Home' : 'Mighty Tigers','Away' : 'Real RealRaccoons'});
		schedule.push({'Date' : new Date('2020','02','14'),'Home' : 'Real Raccoons','Away' : 'Ball Busters'});
		sunSchedule.push({'Date' : new Date('2020','02','15'),'Home' : 'Dragons','Away' : 'Mighty Tigers'});
		schedule.push({'Date' : new Date('2020','02','21'),'Home' : 'Nightmare','Away' : 'Mighty Tigers'});
		sunSchedule.push({'Date' : new Date('2020','02','22'),'Home' : 'Dragons','Away' : 'Ball Busters'});
		schedule.push({'Date' : new Date('2020','02','28'),'Home' : 'Real Raccoons','Away' : 'Dragons'});
		sunSchedule.push({'Date' : new Date('2020','02','29'),'Home' : 'Ball Busters','Away' : 'Nightmare'});
		schedule.push({'Date' : new Date('2020','03','04'),'Home' : 'TBD','Away' : 'TBD'});
		schedule.push({'Date' : new Date('2020','03','11'),'Home' : 'TBD','Away' : 'TBD'});
		
		var i;
		for(i=0;i<schedule.length;i++)
		{
			if(schedule[i]['Date']>(new Date()))
			{
				var timeDiff=Math.abs(schedule[i]['Date'] - (new Date()))
				$(".no_days").text(Math.ceil(timeDiff / (1000 * 60 * 60 * 24)));
				$(".home_team").text(schedule[i]['Home']);
				$(".away_team").text(schedule[i]['Away']);
				break;
			}
		}
		
		for(i=0;i<sunSchedule.length;i++)
		{
			if(sunSchedule[i]['Date']>(new Date()))
			{
				var timeDiff=Math.abs(sunSchedule[i]['Date'] - (new Date()))
				$(".no_days_sun").text(Math.ceil(timeDiff / (1000 * 60 * 60 * 24)));
				$(".home_team_sun").text(sunSchedule[i]['Home']);
				$(".away_team_sun").text(sunSchedule[i]['Away']);
				break;
			}
		}
	}
	
	

});