


$(document).ready(function () {
  $('.fadeOnLoad').fadeIn('slow');
});

$(document).ready(function () {
  $('.fadeOnLoadSmall').fadeIn('slow');
});

$(window).scroll(function(){
	$('.navbar').toggleClass('scrolled', $(this).scrollTop() > 50);
});




