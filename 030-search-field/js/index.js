$('.searchfield').keyup(function() {
	var $suggestions = $('.suggestions');
	var text = $(this).val();
	if(text.length){
		$suggestions.html('').addClass('active');
		$suggestions.append( $('<li />', {html: '<b>' + text + '</b>'}) );
		$suggestions.append( $('<li />', {html: 'Veritatis et <b>' + text + '</b>'}) );
		$suggestions.append( $('<li />', {html: 'ut aliquid ex <b>' + text + '</b> vero eos'}) );
	} else {
		$suggestions.html('').removeClass('active');
	}
});