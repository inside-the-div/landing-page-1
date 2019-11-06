$(document).ready(function(){


// feature nav
	$(".side-nav-li").click(function(){

		$(".side-nav-li").removeClass("active");
		$(this).addClass("active");

		var target_div = $(this).data('div');
		$(".right-child").hide();
		$("."+target_div).show()

	})


// product image gallery
	$('.gallery-img').owlCarousel({
	    loop:true,
	    margin:0,
	    dots:false,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            
	        },
	        600:{
	            items:1,
	            
	        },
	        1000:{
	            items:3,
	            nav:true,
	            loop:true
	        }
	    }
	})

// feedback slider
	$('.feedback-slider').owlCarousel({
	    loop:true,
	   	autoplay:true,
	    dots:true,
	    nav:false,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1
	            
	        },
	        600:{
	            items:1
	            
	        },
	        1000:{
	            items:1
	           
	            
	        }
	    }
	})


})