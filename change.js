	$(window).scroll(function() {
  	if($(document).scrollTop() > 100) {
    	$('nav').addClass('change');
    }
    else {
      $('nav').removeClass('change');
    }
});