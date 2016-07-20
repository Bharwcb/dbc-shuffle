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

	// hide login on right if already logged in

	// $("#welcome .right").css("display", "none");
	
})