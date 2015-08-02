'use strict';

(function($) {
  $(document).ready(function() {
    $('.nav').on('click', function() {
    	$(this).toggleClass('is-active');
    });
    $('#nav-toggle').on('click', function(eventObject) {
    	eventObject.preventDefault();
    	$(this).add('#menu').toggleClass('open');
    });
  });
})(jQuery);