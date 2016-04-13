'use strict';

$(function () {

	$('nav a').on('click', function () {
		$('nav a').removeClass('active');
		$(this).addClass('active');
		console.log('click');
	});
});
//# sourceMappingURL=main.js.map
