$('.pic').bind('click', function() {
	$('.pic').toggleClass('away');
	$(this).removeClass('away').toggleClass('active');
});