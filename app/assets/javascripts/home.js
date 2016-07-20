$(document).ready(function() {
	// greeting on homepage
	var timeNow = new Date();

	if ( timeNow.getHours() < 12 ) {
		$(".greeting").html("Good morning, DBC!");
	}
	else if ( timeNow.getHours() >= 12 && timeNow.getHours() <= 17 ) {
		$(".greeting").html("Good afternoon, DBC!");
	}
	else if ( timeNow.getHours() > 17 && timeNow.getHours() <= 24 ) {
		$(".greeting").html("Good evening, DBC!");
	}

	// Hide login on right if already logged in:

		// send ajax request to custom cohorts#user_logged_in method, return true or false and set equal to variable logged_in
		$.ajax({
			url: '/cohorts/user_logged_in'
		})

		.done(function(response) {
			var logged_in = response.logged_in;
			if ( logged_in === true ) {
				$("#welcome .right").css("display", "none");
			}
		})
		
	
})








