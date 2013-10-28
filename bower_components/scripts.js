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
	
	$('[data-animate]').exists(function(){
		$(this).on('click', function(e){
			$(this).toggleClass("hover");
			
			e.preventDefault();
		});
	});
	
	$('[data-form]').exists(function(){ //change leater for css
		$('[data-form="link"]').on('click', function(e){
			
			$('[data-form="form"]').slideToggle();
			
			e.preventDefault();
		});
	});
	
});
