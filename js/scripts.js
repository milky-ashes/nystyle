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

	//for slider

	$('[data-slider]').exists(function(){
		$(this).flexslider({
	        animation: "slide",
	        controlNav: false
	      });

	});

	//for animate on index page

	$('[data-animate]').exists(function(){
		$(this).on('click', function(e){
			$(this).toggleClass("hover");

			e.preventDefault();
		});
	});

	// for e-mail form

	$('[data-form]').exists(function(){
		$('[data-form="link"]').on('click', function(e){

			$('[data-form="form"]').toggleClass("show");

			e.preventDefault();

		});

		$(document).on('click', function(e){
			if (!$(e.target).closest('[data-form="link"]').length) {
				$('[data-form="form"]').removeClass('show');
			}
		});

	});

	// for recipe

	$('[data-recipe]').exists(function(){ //change for css
		/*
		$('[data-recipe="true"]').on('click', function(e){
			$('[data-recipe="open"]').addClass("open");
			e.preventDefault();
		});
		$('[data-cls]').on('click', function(e){
			$('[data-recipe="open"]').removeClass("open");
			e.preventDefault();
		});
		*/
		$('[data-recipe="true"]').on('click', function(e){
			$('[data-recipe="open"]').slideDown();
			e.preventDefault();
		});
		$('[data-cls]').on('click', function(e){
			$('[data-recipe="open"]').slideUp();
			e.preventDefault();
		});
	});

	// for brand
	$('[data-brand]').exists(function(){ //change for css
		$('[data-brand="true"]').on('click', function(e){
			$('[data-brand="open"]').slideToggle();
			e.preventDefault();
		});
	});

	$('[data-gallery-item]').on('click', function(e){
		e.preventDefault()
		var galleryMain = $('[data-gallery-main]')
		var mainSrc = galleryMain.attr('src')
		galleryMain.attr('src', $(this).find('img').attr('src'))
		$(this).find('img').attr('src', mainSrc)

	})

});
