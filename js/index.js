









$(document).ready(function () {
  $('.fadeOnLoad').fadeIn('slow');
});

$(document).ready(function () {
  $('.fadeOnLoadSmall').fadeIn('slow');
});

$(window).scroll(function(){
	$('.navbar').toggleClass('scrolled', $(this).scrollTop() > 50);
});









$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();

  $('.mainOverlay').css({
    opacity: function() {
      var elementHeight = $(this).height(),
          opacity = ((1 - (elementHeight - scrollTop) / elementHeight) * 0.8) + 0.2;
          
      return opacity;
    }
  });
});

var rellax = new Rellax('.rellax');
 

