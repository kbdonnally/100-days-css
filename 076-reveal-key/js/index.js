$(".input").on("keyup change blur paste cut click", function() { 
	var input = $(this).val();
	if (input == "password" || input == "Password") {
		$('.inputWrapper').addClass('valid');
		$(this).blur();
	} else {
		$('.inputWrapper').removeClass('valid');
	}
});