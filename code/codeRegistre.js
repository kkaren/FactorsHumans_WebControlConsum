/*** Pop-up Warning ***/
$(document).ready(function() {
	//Show div on click
	$('#verd').click(function(e) {
   		$('#warning-box').css({
       		top:  e.pageY + 20,
       		left: e.pageX - 110
   		}).toggle();			
	});	
	$('#logo').click(function(e) {
   		$('#warning-box').css({
       		top:  e.pageY + 20,
       		left: e.pageX - 110
   		}).toggle();			
	});	
	$('#close').click(function(e) {
		var container = $("#warning-box");
    	container.hide();
	});	
});

//Hide pop-up if the window resizes
$(window).resize(function() {
	var container = $("#warning-box");
	var container2 = $("#login-box");
	container.hide();
	container2.hide();
});

//Hide pop-up if the user clicks on the screen
$('body').click(function(e) {
	var container = $("#warning-box");
    if ($(e.target).closest('#warning-box').length === 0 && $(e.target).closest('#verd').length === 0 && $(e.target).closest('#logo').length === 0){
		container.hide();
    }
});

/**** Login ****/
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

$('body').click(function(e) {
    if ($(e.target).closest('#login').length === 0 && $(e.target).closest('#login-box').length === 0){
		var container = $("#login-box");
		container.hide();
    }
});

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

/**** Codi + o - habitants ****/
function minusOne(){
	var unitat = parseInt(document.getElementById("numHab").innerHTML);
	if(unitat > 1){
		document.getElementById("numHab").innerHTML= unitat - 1;
	}
}

function plusOne(){
	var unitat = parseInt(document.getElementById("numHab").innerHTML);
	document.getElementById("numHab").innerHTML= unitat + 1;
}


/**** Confirmar ****/
function checkConfirm(){
		var user = $("#userNew");
		var passw = $("#passNew");

		if(user.val() == ''){
			user.css('border-color', 'red');
		}
		
		if(passw.val() == ''){
			passw.css('border-color', 'red');
		}
		
		if(user.val() != '' && passw.val() != ''){
			window.location = "DashboardReg.html";
		}
}


$(document).ready(function() {
    $("#userNew").click(function(){
		var user = $("#userNew");
		user.css('border-color', 'black');
	});
});


$(document).ready(function() {
    $("#passNew").click(function(){
		var passw = $("#passNew");
		passw.css('border-color', 'black');
	});
});
