$(document).ready(function () {   
	$('.q1').delay(1000).fadeIn(300).delay(1500).fadeOut(300, function () {
		$('.q2').delay(1000).fadeIn(300 ).delay(1500).fadeOut(300, function () {
			$('.quotes').fadeOut(300);
          	$('.main-section').delay(1000).fadeIn(300, function () {
            	
          	});
		});
	});
});

$("#top").lettering();
$("#bottom").lettering();