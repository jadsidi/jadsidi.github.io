	$(window).scroll(function() {
  	if($(document).scrollTop() > 600) {
    	$('nav').addClass('change');
    }
    else {
      $('nav').removeClass('change');
    }
});