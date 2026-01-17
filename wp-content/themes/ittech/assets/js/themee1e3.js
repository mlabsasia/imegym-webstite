(function ($) {
	'use strict';

	// 6.EM MOBILE MENU
	$('.mobile-menu nav').meanmenu({
		meanScreenWidth: "991",
		meanMenuContainer: ".mobile-menu",
		onePage: true,
	});
	
	 /*faqs*/
    $(document).ready(function() {
  $(".faqs-container .faq-singular:first-child").addClass("active").children(".faq-answer").slideDown();//Remove this line if you dont want the first item to be opened automatically.
  $(".faq-question").on("click", function(){
    if( $(this).parent().hasClass("active") ){
      $(this).next().slideUp();
      $(this).parent().removeClass("active");
    }
    else{
      $(".faq-answer").slideUp();
      $(".faq-singular").removeClass("active");
      $(this).parent().addClass("active");
      $(this).next().slideDown();
    }
  });
});


			/* Text Effect Animation */
	if ($('.text-anime-3').length) {		
		let	animatedTextElements = document.querySelectorAll('.text-anime-3');
		
		 animatedTextElements.forEach((element) => {
			//Reset if needed
			if (element.animation) {
				element.animation.progress(1).kill();
				element.split.revert();
			}

			element.split = new SplitText(element, {
				type: "lines,words,chars",
				linesClass: "split-line",
			});
			gsap.set(element, { perspective: 400 });

			gsap.set(element.split.chars, {
				opacity: 0,
				x: "50",
			});

			element.animation = gsap.to(element.split.chars, {
				scrollTrigger: { trigger: element,	start: "top 90%" },
				x: "0",
				y: "0",
				rotateX: "0",
				opacity: 1,
				duration: 1,
				ease: Back.easeOut,
				stagger: 0.02,
			});
		});		
	}

	// Title Animation
    let splitTitleLines = gsap.utils.toArray(".title-anim");

    splitTitleLines.forEach(splitTextLine => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: splitTextLine,
          start: 'top 90%',
          end: 'bottom 90%',
          scrub: false,
          markers: false,
          toggleActions: 'play none none none'
        }
      });
      const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
      gsap.set(splitTextLine, { perspective: 400 });
      itemSplitted.split({ type: "lines" })
      tl.from(itemSplitted.lines, { duration: 1, delay: 0.3, opacity: 0, rotationX: -80, force3D: true, transformOrigin: "top center -50", stagger: 0.1 });
    });


	
	// sidebar
	jQuery(document).ready(function (o) {
		0 < o(".offset-side-bar").length &&
			o(".offset-side-bar").on("click", function (e) {
				e.preventDefault(), e.stopPropagation(), o(".cart-group").addClass("isActive");
			}),
			0 < o(".bar-close").length &&
				o(".bar-close").on("click", function (e) {
					e.preventDefault(), o(".cart-group").removeClass("isActive");
				}),
			0 < o(".navSidebar-button").length &&
				o(".navSidebar-button").on("click", function (e) {
					e.preventDefault(), e.stopPropagation(), o(".info-group").addClass("isActive");
				}),
			0 < o(".bar-close").length &&
				o(".bar-close").on("click", function (e) {
					e.preventDefault(), o(".info-group").removeClass("isActive");
				}),
			o("body").on("click", function (e) {
				o(".info-group").removeClass("isActive"), o(".cart-group").removeClass("isActive");
			}),
			o(".dt-sidebar-widget").on("click", function (e) {
				e.stopPropagation();
			}),
			0 < o(".xs-modal-popup").length &&
				o(".xs-modal-popup").magnificPopup({
					type: "inline",
					fixedContentPos: !1,
					fixedBgPos: !0,
					overflowX: "auto",
					closeBtnInside: !1,
					callbacks: {
						beforeOpen: function () {
							this.st.mainClass = "my-mfp-slide-bottom xs-promo-popup";
						},
					},
				});
	});

	// Script nav
        $(".team-share").click(function(){
            $(this).siblings(".social-icon").toggleClass('active');
        });
	// 6.HOME 2 HERO CAROUSEL
	$('.em-slick-slider-new').slick({
		dots: false,
		speed: 900,
		arrows: true,
		autoplay: true,
		fade: false,
		autoplaySpeed: 6000,
		responsive: [{
			breakpoint: 769,
			settings: {
				arrows: false,
			}
		}]
	});
		
	// 6.EM SLICK SLIDER
	$('.em-slick-testi-description').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		fade: true,
		asNavFor: '.em-slick-testi-wraper'
	});
	$('.em-slick-testi-wraper').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.em-slick-testi-description',
		dots: false,
		arrows: false,
		centerMode: true,
		focusOnSelect: true
	});		
		
	//* Parallaxmouse js
	function parallaxMouse() {
		if ($('#parallax').length) {
			var scene = document.getElementById('parallax');
			var parallax = new Parallax(scene);
		};
	};	
	parallaxMouse();
	
	
	// 6.EM WOW ACTIVE JS
	    new WOW().init();
	
	
	// 6.SCROLLUP JS
		$.scrollUp({
			scrollText: '<i class="fa fa-angle-up"></i>',
			easingType: 'linear',
			scrollSpeed: 900,
			animation: 'fade'
		});
		
		
	// VenuboX
		$('.venobox').venobox({
			numeratio: true,
			infinigall: true
		});
		
	// 6.ONEPAGE MENU
	var top_offset = $('.one_page').height() + 0;
	$('.one_page .techno_menu .nav_scroll').onePageNav({
		currentClass: 'current',
		changeHash: false,
		scrollSpeed: 1000,
		scrollOffset: top_offset,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'swing',
	});

	$(".nav_scroll li:first-child").addClass("current");
	/* sticky nav 1 */
	$('.one_page').scrollToFixed({
		preFixed: function () {
			$(this).find('.scroll_fixed').addClass('prefix');
		},
		postFixed: function () {
			$(this).find('.scroll_fixed').addClass('postfix').removeClass('prefix');
		}
	});
	
	// 6.EM STIKY NAV
	var headers1 = $('.trp_nav_area');
	$(window).on('scroll', function () {

		if ($(window).scrollTop() > 200) {
			headers1.addClass('hbg2');
		} else {
			headers1.removeClass('hbg2');
		}

	});
	
	// 6.EM COUNTARUP 
	$('.countr_text').counterUp({
		delay: 10,
		time: 1000
	});
	
	
	
	// 6.EM PORTFOLIO
	$('.em_load').imagesLoaded(function () {

		if ($.fn.isotope) {

			var $portfolio = $('.em_load');

			$portfolio.isotope({

				itemSelector: '.grid-item',

				filter: '*',

				resizesContainer: true,

				layoutMode: 'masonry',

				transitionDuration: '0.8s'

			});
			$('.filters li').on('click', function () {

				$('.filters li').removeClass('current_menu_item');

				$(this).addClass('current_menu_item');

				var selector = $(this).attr('data-filter');

				$portfolio.isotope({

					filter: selector,

				});

			});

		};

	});
	

	
	
	
	
	// 6.EM BLOG MASONARY
	$('.bgimgload').imagesLoaded(function () {
		if ($.fn.isotope) {
			var $blogmassonary = $('.blog-messonary');
			$blogmassonary.isotope({
				itemSelector: '.grid-item',
				filter: '*',
				resizesContainer: true,
				layoutMode: 'masonry',
				transitionDuration: '0.8s'
			});

		};
	});
	
	
	// 6.EM TESTIMONIAL
	$('.client-testimonial').owlCarousel({
		loop: true,
		autoplay: false,
		autoplayTimeout: 10000,
		dots: false,
		nav: false,
		navText: ["<i class='flaticon-back''></i>", "<i class='flaticon-next-1''></i>"],
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 2
			},
			1000: {
				items: 3
			},
			1920: {
				items: 3
			}
		}
	})
	
		// 6.EM TESTIMONIAL
	$('.blog_carousel').owlCarousel({
        loop: true,
        margin: 0,
        center: true,
        dots: false,
        nav: false,
        autoplay: true,
		navText: ["<i class='flaticon-back''></i>", "<i class='flaticon-next-1''></i>"],
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1000: {
				items: 3
			},
			1920: {
				items: 3
			}
		}
	})
	
	
	// 6.EM TESTIMONIAL
	$('.brand_carousel').owlCarousel({
        autoplay: true,
        loop: true,
        margin:15,
        dots:false,
        slideTransition:'linear',
        autoplayTimeout:4500,
        autoplayHoverPause:true,
        autoplaySpeed:4500,
		navText: ["<i class='flaticon-back''></i>", "<i class='flaticon-next-1''></i>"],
		responsive: {
			0: {
				items: 2
			},
			768: {
				items: 3
			},
			992: {
				items: 5
			},
			1000: {
				items: 5
			},
			1920: {
				items: 6
			}
		}
	})
	
	
	
	// 9. c-slider
    if (jQuery(".c-slider")[0]){
        jQuery('.c-slider').slick({

            slidesToShow: 1,

            slidesToScroll: 1,

            arrows: true,
            nav:true,
            navText: ["<i class='flaticon-back-1'></i>", "<i class='fa fa-angle-right'></i>"],

            dots: false,

            draggable: true,

            waitForAnimate: false,
            
             loop:true,
             
             autoplay: true,

             fade: false,

             speed: 2000,

        });
    }
    // C-Slider

    jQuery('.next-slide').on('click', function() {

    var img_src = "";

    jQuery('.next-slide.nav-active').removeClass('nav-active');

    jQuery(this).addClass('nav-active');

    img_src = jQuery(this).html();

    jQuery('.slider-main-img').html(img_src);

    var slideno = jQuery(this).data('slide');

    jQuery('.c-slider').slick('slickGoTo', slideno - 1, true);

    });


window.addEventListener("load", () => {
  gsap.registerPlugin(ScrollTrigger);

  const width = window.innerWidth; 
  const endEl = ".project-section-one"; 

  const panels = gsap.utils.toArray(".project-box-item");

  panels.forEach((panel, i) => {
    gsap.set(panel, { zIndex: 0 + i });

    ScrollTrigger.create({
      trigger: panel,
      start: "top 10%",
      end:
        width >= 1600
          ? "bottom 90%"
          : width >= 1400
          ? "bottom 160%"
          : "bottom 170%",
      endTrigger: endEl,
      pin: true,
      pinSpacing: false,
      scrub: true
    });
  });

  ScrollTrigger.refresh();
});


(function () {
  let lastWidth = window.innerWidth;
  let lastHeight = window.innerHeight;

  const forceRefresh = () => {
    document.body.style.transform = "scale(1)";
    setTimeout(() => {
      document.body.style.transform = "";
      ScrollTrigger.refresh();
    }, 100);
  };

  setInterval(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (Math.abs(width - lastWidth) > 100 || Math.abs(height - lastHeight) > 100) {
      lastWidth = width;
      lastHeight = height;
      forceRefresh();
    }
  }, 500);
})();


window.addEventListener("keydown", (e) => {
  if (e.key === "F12") {
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);
  }
});







})(jQuery);

