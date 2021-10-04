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


$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();

  $('.smallOverlay').css({
    opacity: function() {
      var elementHeight = $(this).height(),
          opacity = ((1 - (elementHeight - scrollTop) / elementHeight) * 0.8) - 0.2;
          
      return opacity;
    }
  });
});
