// $('#slideshow > *:first').addClass('active');
		
// $('#slideshowContainer #next').click(function(e) {
//   e.preventDefault();

//   $('#slideshow > .active').fadeOut('slow');
		
// 	var index = $('#slideshow > *.active').index();
			
// 	if(index === $('#slideshow > *').size() -1) {
// 		index = -1;
// 	}
			
// 	$('#slideshow > .active').removeClass('active');
			
// 	var nextSlide = $('#slideshow > *').get(index + 1);  
// 	$(nextSlide).addClass('active');
			
// 	$('#slideshow > .active').fadeIn('slow');
// });
		
// $('#slideshowContainer #prev').click(function(e) {
// 	e.preventDefault();

// 	$('#slideshow .active').fadeOut('slow');
		
// 	var index = $('#slideshow img.active').index();
	
//   if(index === 0) {
// 		index = $('#slideshow img').size();
// 	}
			
// 	$('#slideshow .active').removeClass('active');
			
// 	var prevSlide = $('#slideshow img').get(index - 1);  
// 	$(prevSlide).addClass('active');
			
// 	$('#slideshow .active').fadeIn('slow');
// });

// //object 1

// $('#slideshow > *:first1').addClass('active');
		
// $('#slideshowContainer #next1').click(function(e) {
//   e.preventDefault();

//   $('#slideshow > .active').fadeOut('slow');
		
// 	var index = $('#slideshow > *.active').index();
			
// 	if(index === $('#slideshow > *').size() -1) {
// 		index = -1;
// 	}
			
// 	$('#slideshow > .active').removeClass('active');
			
// 	var nextSlide = $('#slideshow > *').get(index + 1);  
// 	$(nextSlide).addClass('active');
			
// 	$('#slideshow > .active').fadeIn('slow');
// });
		
// $('#slideshowContainer #prev').click(function(e) {
// 	e.preventDefault();

// 	$('#slideshow .active').fadeOut('slow');
		
// 	var index = $('#slideshow img.active').index();
	
//   if(index === 0) {
// 		index = $('#slideshow img').size();
// 	}
			
// 	$('#slideshow .active').removeClass('active');
			
// 	var prevSlide = $('#slideshow img').get(index - 1);  
// 	$(prevSlide).addClass('active');
			
// 	$('#slideshow .active').fadeIn('slow');
// });

$(document).ready(function(){
	$('.carousel1').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:true,
	    touchDrag:true,
	    navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
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
	});
	$('.carousel2').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:true,
	    touchDrag:true,
	    navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
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
	});
})