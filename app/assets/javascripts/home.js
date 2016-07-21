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

	// Move cohorts to positioned center if logged in, (since login form hidden)
	if ( $("#welcome .right").length === 0 ) {
		$("#welcome .left").css({"left": "0", "margin-left": "auto", "margin-right": "auto", "float": "none", "width": "30%"});
		$("#welcome .left h3").css("text-align", "center");
	} 	
	
})








