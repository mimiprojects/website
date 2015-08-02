
  $(document).ready(function() {
	$('.image-popup-link').magnificPopup({ 
  		type: 'image'
	});

	$('#nav-toggle').on('click', function() {
    	$(this).toggleClass('is-active');
    });
    
    $('#nav-toggle').on('click', function(eventObject) {
    	eventObject.preventDefault();
    	$(this).add('#menu').toggleClass('is-open');
    });
});


