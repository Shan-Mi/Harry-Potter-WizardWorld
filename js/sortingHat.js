$(".js-sort").on("click", function() {
	$(".main-content__wrapper")
		.removeClass()
		.addClass("main-content__wrapper");
	$(".sorting-hat,.avatar__mouth").removeClass("animate");

	var houses = ["hufflepuff", "gryffindor", "ravenclaw", "slytherin"];
	var item = houses[Math.floor(Math.random() * houses.length)];

	setTimeout(function() {
		$(".sorting-hat").addClass("animate");
		$(".sorting-hat__answer").text(item + "!");
	}, 1000);
	setTimeout(function() {
		$(".avatar__mouth").addClass("animate");
	}, 1500);
	setTimeout(function() {
		$(".main-content__wrapper").addClass(item);
	}, 4000);
});


$('input[name=avatar-gender]').on('change', function(){
	var value = $('input[name=avatar-gender]:checked').val();
	if (value == 1) {
		$('.avatar__hair').removeClass('female');
	} else if (value == 2) {
		$('.avatar__hair').addClass('female');
	}
});
