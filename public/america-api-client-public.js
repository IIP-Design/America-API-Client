(function($) {
 
  function initialize() {
    window.addEventListener('onReadyModule', function() {
      let container = $( '.course-container' );
      let placeholder = $('.course-placeholder');
      let preloader = $( '.plugin-preloader' );
      container.addClass('course-fade-in');
      placeholder.hide();
      preloader.hide();
    });
  }

  initialize();

})( jQuery );