jQuery(document).ready(function($) {
	// animation couner number
	// increment and decrement number on list product
	var clickCounter = () => {
		var value = parseInt($('#js-get-value').val());
		$('.js-increment').click(function() {
			$(this)
				.next()
				.val((value += 1));
		});

		$('.js-decrement').click(function() {
			$(this)
				.next()
				.val((value -= 1));
		});
	};
	clickCounter();
});
