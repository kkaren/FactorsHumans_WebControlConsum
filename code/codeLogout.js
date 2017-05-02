/*** Pop-up code ***/
$(document).ready(function() {
	var moveLeft = -200;
    var moveDown = 25;
	//Show div on click
	$('#login').click(function(e) {
		$('#logout-box').css({
        	top:  e.pageY + moveDown,
        	left: e.pageX + moveLeft
    	}).toggle();
	});
});

//Hide pop-up if the user clicks on the screen
$('body').click(function(e) {
    if ($(e.target).closest('#login').length === 0 && $(e.target).closest('#logout-box').length === 0){
		var container = $("#logout-box");
		container.hide();
    }
});

//Hide pop-up if the window resizes
$(window).resize(function() {
	var container = $("#logout-box");
	container.hide();
	Log();
});

function Log(){
	var id = $("#idUser");
	var login =  $("#login");
	id.css({
		top: login.offset().top + 48,
		left: login.offset().left - 10
	}).show();
}

function passLogPerfil(){
	var packed = "";
	packed += escape("true");
	window.location = "Perfil.html?"+packed;
}

function passLogVerd(){
	var packed = "";
	packed += escape("true");
	window.location = "CompromisEnergetic.html?"+packed;
}

function passLogHome(){
	var packed = "";
	packed += escape("true");
	window.location = "HomePage.html?"+packed;
}
