$(document).ready(function() {
	$('.slider__sliders').slick();
	$(".slider__sliders").on('afterChange', function(event, slick, currentSlide){
		$("#cp").text(currentSlide + 1);
	});
});