$('.profile').bind('click', function() {
	
	$('.detail').addClass('active');
});

$('.close').bind('click', function() {
	$('.detail').removeClass('active');
});