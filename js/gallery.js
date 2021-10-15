

$(document).ready(function () {
  $('.fadeOnLoad').fadeIn('slow');
});

$(document).ready(function () {
  $('.fadeOnLoadSmall').fadeIn('slow');
});

$(window).scroll(function(){
	$('.navbar').toggleClass('scrolled', $(this).scrollTop() > 50);
});




// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

