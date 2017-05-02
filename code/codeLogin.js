/*** Pop-up code ***/
$(document).ready(function() {
	var moveLeft = -200;
    var moveDown = 25;
	//Show div on click
	$('#login').click(function(e) {
    	$('#login-box').css({
        	top:  e.pageY + moveDown,
        	left: e.pageX + moveLeft
    	}).toggle();
	});
});

//Hide pop-up if the window resizes
$(window).resize(function() {
  	var container = $("#login-box");
	var container2 = $("#warning-box");
	var container3 = $("#consum-box");
	container.hide();
	container2.hide();
	container3.hide();
});

//Hide pop-up if the user clicks on the screen
$('body').click(function(e) {
    if ($(e.target).closest('#login').length === 0 && $(e.target).closest('#login-box').length === 0){
		var container = $("#login-box");
		container.hide();
    }
    if ($(e.target).closest('#verdB').length === 0 && $(e.target).closest('#warning-box').length === 0){
		var container2 = $("#warning-box");
		container2.hide();
    }
    if ($(e.target).closest('#consum').length === 0 && $(e.target).closest('#consum-box').length === 0){
		var container3 = $("#consum-box");
		container3.hide();
    }
});

function checkInput(){
		var user = $("#user");
		var passw = $("#password");

		if(user.val() != 'user'){
			user.css('border-color', 'red');
		}
		if(passw.val() != 'user1234'){
			passw.css('border-color', 'red');
		}
		if(user.val() == 'user' && passw.val() == 'user1234'){
			window.location = "Dashboard.html";
		}
}

$(document).ready(function() {
    $("#user").click(function(){
		var user = $("#user");
		user.css('border-color', 'black');
	});
});


$(document).ready(function() {
    $("#password").click(function(){
		var passw = $("#password");
		passw.css('border-color', 'black');
	});
});

function passLogHome(){
	window.location = "HomePage.html";
}

/*** Pop-up Comportament Verd i Consum ***/
$(document).ready(function() {
	//Show div on click
	$('#verdB').click(function(e) {
   		$('#warning-box').css({
       		top:  e.pageY + 20,
       		left: e.pageX - 110
   		}).toggle();			
	});
	$('#consum').click(function(e) {
   		$('#consum-box').css({
       		top:  e.pageY + 20,
       		left: e.pageX - 110
   		}).toggle();			
	});	
	$('#close').click(function(e) {
		var container = $("#warning-box");
    	container.hide();
	});	
	$('#closeC').click(function(e) {
		var container = $("#consum-box");
    	container.hide();
	});	
});