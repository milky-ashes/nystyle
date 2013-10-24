$.fn.extend({
  exists: function(callback) {
    if (this.length > 0) {
      if (callback != null) {
        callback.call(this);
      }
      return true;
    } else {
      return false;
    }
  }
});

jQuery(document).ready(function(){

	$('[data-slider]').exists(function(){
		$(this).flexslider({
	        animation: "slide",
	        controlNav: false
	      });

	});
	

	
});
