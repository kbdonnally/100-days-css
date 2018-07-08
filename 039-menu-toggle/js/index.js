// CLICK IT
$('.menu-icon').bind('click', function() {
	$('.menu-icon').removeClass('paused').addClass('active');
	$('.menu').removeClass('paused').addClass('active');
});

$('.menu').bind('click', function() {
	$('.menu-icon').removeClass('active');
	$('.menu').removeClass('active');
});