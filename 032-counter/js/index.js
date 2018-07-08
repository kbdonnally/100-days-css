var number = 0;
var $number = $('.number');

$('.minus').bind('click', function() {
	updateNumber(-1);
});

$('.plus').bind('click', function() {
	updateNumber(1);
});

function updateNumber(value) {
	number += value;
	$number.find('.fadeOutDown').remove(); // remove old numbers
	$number.find('.fadeOutUp').remove(); // remove old numbers
	$number.find('span').removeClass(); // clear current number
	if (value > 0) { // fadeUp Animation
		$number.find('span').addClass('fadeOutUp');
		$number.append('<span class="fadeInUp">' + number + '</span>');
	} else { // fadeDown Animation
		$number.find('span').addClass('fadeOutDown');
		$number.append('<span class="fadeInDown">' + number + '</span>');
	}
}