$(document).ready(function(){
	$("#my-button").click(function(e){
		console.log("event", e);
		console.log("event.target", e.target);
		console.log("this", $(this));
		console.log("this", this);
	});

	
});