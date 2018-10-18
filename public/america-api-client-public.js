(function($) {
 
  function initialize() {
    window.addEventListener('onReadyModule', function() {
      var container = $( '.course-container' );
      var placeholder = $('.course-placeholder');
      var preloader = $( '.plugin-preloader' );
      container.addClass('course-fade-in');
      placeholder.hide();
      preloader.hide();
    });
  }

  initialize();

})( jQuery );