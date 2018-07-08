var active = 1;
$('.button').bind('click', function() {
	$('.card:nth-child(' + active + ')').removeClass('active').addClass('inactive');
	if (active == 3) {
		active = 0;
	}
	active++;
	$('.card:nth-child(' + active + ')').removeClass('inactive').addClass('active');
});