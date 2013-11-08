jQuery.fn.extend({
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

jQuery(document).ready(function($){

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
			if(!($('.e-block').has($(e.target)).length > 0) && !$(e.target).closest('[data-form="link"]').length){
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
	
	//for product-page link hover

	$('[data-link]').each(function(){
		$(this).hover(function(e){
			$(this).next().toggleClass("show");
		});
	});
	
	$('[data-nutrition]').each(function(){
		$(this).on('click',function(e){
			$(this).next().toggleClass("show");
		});
	});

	//for recipe-form
	$('[data-recipe-form="link"]').each(function(){
		$(this).on('click',function(e){
			$(this).addClass("hide");
			$('[data-recipe-form="form"]').addClass('show');
			e.preventDefault();
		});
		$('[data-recipe-form="close"]').on('click',function(e){
			$('[data-recipe-form="link"]').removeClass("hide");
			$('[data-recipe-form="form"]').removeClass('show');
			e.preventDefault();
		});
	});
	
	
	// Video Gallery handler
	$('#js-video-gallery').exists(function() {
		var gallery = $(this),
			videos = gallery.find('.js-video-item'),
			preview = $('#js-video-preview'),
			iframe = $('#js-video-iframe');

		// Push clicked thumbnail to player continer
		videos.on('click', function(e) {
			e.preventDefault();
			slide( $(this) );
		});

		// Play video when preview is clicked
		preview.on('click', function(e) {
			e.preventDefault();

			iframe.attr('src', preview.attr('video'));
			gallery.addClass('playing');
		})

		// Push first video on page load
		slide( videos.get(0) );

		/**
		 * Setup video player
		 * @param  {object} video jQuery link object (contains video attribute and thumbnail inside)
		 * @return {void}
		 */
		function slide( video ) {

			video = $(video);

			// Reset previous video
			iframe.attr('src', '');
			gallery.removeClass('playing');

			// Set new video
			preview.attr( 'src', video.find('img').attr('src') );
			preview.attr( 'video', video.attr('data-video') );
		}
	});
});
