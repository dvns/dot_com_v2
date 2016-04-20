/* ====================
	GLOBAL APP
======================= */
var app = {};

/* ====================
	GLOBAL OBJECTS
======================= */
var activeNav = {}; // Nav animation for active section
var highlightNav = {} // Change the nav's colour for some sections
var smoothScroll = {}; // SmoothScroll

// Create array of nav items
var aNavArray = $('header a');
// Creat empty array to store href
var hrefNavArray = [];

// For each nav item, get href and store in hrefNavArray
for (var i = 0; i < aNavArray.length; i++) {
	// Get href
	activeNav.href = $(aNavArray[i]).attr('href');
	// Push to new array
	hrefNavArray.push(activeNav.href);
}
// console.log(hrefNavArray);

/* ====================
	activeNav.animate
======================= */
activeNav.animate = function() {

	$(window).on('scroll', function() {

		// get offset of the window from top of page
		activeNav.windowPos = $(this).scrollTop();
		// get height of window
		activeNav.windowHeight = $(this).height();
		// get height of entire document page
		activeNav.docHeight = $(document).height(); 

		// Add active class to nav item when section with the same ID is at top of page
		for (var i = 0; i < hrefNavArray.length; i++) {
			var sectionId = hrefNavArray[i];
			// get offset of each section from top of page
			activeNav.sectionPos = $(sectionId).offset().top;
			activeNav.sectionPos -= 200;
			// get height of each section
			activeNav.sectionHeight = $(sectionId).height();

			// See if top of window is within top and bottom range of section
			if (activeNav.windowPos >= activeNav.sectionPos && activeNav.windowPos < (activeNav.sectionPos + activeNav.sectionHeight)) {
				$('a[href="' + sectionId + '"]').addClass('active');
			} 
			else {
				$('a[href="' + sectionId + '"]').removeClass('active');
			} // if

		}; // for

		// If offset of window from top of page is greater than or equal to offset of skills section from top of page then add class headerLight
		if (activeNav.windowPos >= $('#skills').offset().top) {
			$('nav , header .logo').addClass('headerLight');
		}
		else {
			$('nav , header .logo').removeClass('headerLight');
		} // if

	}); // on scroll

} // activeNav.animate


/* ====================
	activeNav.showLogo
======================= */
activeNav.showLogo = function() {

	activeNav.windowWidth = window.innerWidth;

	if (activeNav.windowWidth <= 600) {
		$('header .logo').show();
	}
	else {
		if(activeNav.windowPos >= $('#about').offset().top) {
			$('header .logo').fadeIn();
		} else {
			$('header .logo').fadeOut();
		}
	}

} // activeNav.showLogo


/* ====================
	smoothScroll.smooth
======================= */
smoothScroll.smooth = function() {

	smoothScroll.windowWidth = window.innerWidth;

	if (smoothScroll.windowWidth <= 600) {
		$('header a').smoothScroll({
			offset: -70
		});
	} else {
		$('header a').smoothScroll({
			offset: 0
		});
	}

} //smoothScroll.smooth


/* ====================
	APP INIT
======================= */
app.init = function() {
	activeNav.animate();
	activeNav.showLogo();
	smoothScroll.smooth();
	$(window).on('resize', function() {
		smoothScroll.smooth();
		activeNav.showLogo();
	});
	$(window).on('scroll',function() {
		activeNav.showLogo();
	});
}


$(function() {
		app.init();
});