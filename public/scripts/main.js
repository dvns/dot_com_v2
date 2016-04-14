'use strict';

// Manipulate navigation based on active section
var sectionScroll = function sectionScroll() {
	$(window).on('scroll', function () {

		// Measure current position from top of page
		var currentPosition = $(this).scrollTop();

		// Measure top of each section's distance from top of page
		$('section').each(function () {
			var sectionPosition = $(this).offset().top;
			sectionPosition -= 200;
			var sectionId = $(this).attr('id');

			// If current position is equal or greater than (aka further down) section's top, add active class
			if (currentPosition >= sectionPosition) {
				$('nav a').removeClass('active');
				$('nav a[href=#' + sectionId + ']').addClass('active');
			}
		});
	});
}; // sectionScroll

$(function () {

	sectionScroll();

	$('nav a').on('click', function () {
		$('nav a').removeClass('active');
		$(this).addClass('active');
		$(this).smoothScroll();
	});
});
//# sourceMappingURL=main.js.map
