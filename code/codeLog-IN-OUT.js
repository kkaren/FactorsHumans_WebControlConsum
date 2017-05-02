/*** Pop-up code ***/
$(document).ready(function() {
	$("#extraRow").hide();
	var moveLeft = -200;
    var moveDown = 25;
	//Show div on click
	$('#login').click(function(e) {
		if(isLogged() == 'true'){
			$('#logout-box').css({
        		top:  e.pageY + moveDown,
        		left: e.pageX + moveLeft
    		}).toggle();
		}else{
    		$('#login-box').css({
        		top:  e.pageY + moveDown,
        		left: e.pageX + moveLeft
    		}).toggle();
		}
	});
});

//Hide pop-up if the window resizes
$(window).resize(function() {
  	var container = $("#logout-box");
	var container2 = $("#login-box");
	var container3 = $("#warning-box");
	var container4 = $("#consum-box");
	var container5 = $("#leave-box");
    container.hide();
	container2.hide();
	container3.hide();
	container4.hide();
	container5.hide();
});

//Hide pop-up if the user clicks on the screen
$('body').click(function(e) {
    if ($(e.target).closest('#login').length === 0 && $(e.target).closest('#login-box').length === 0){
		var container = $("#login-box");
		container.hide();
    }
    if ($(e.target).closest('#login').length === 0 && $(e.target).closest('#logout-box').length === 0){
		var container2 = $("#logout-box");
		container2.hide();
    }
    if ($(e.target).closest('#verdB').length === 0 && $(e.target).closest('#warning-box').length === 0 && $(e.target).closest('#verdB2').length === 0){
		var container3 = $("#warning-box");
		container3.hide();
    }
    if ($(e.target).closest('#consum').length === 0 && $(e.target).closest('#consum-box').length === 0){
		var container4 = $("#consum-box");
		container4.hide();
    }
    if ($(e.target).closest('#logo').length === 0 && $(e.target).closest('#verd').length === 0 &&
		$(e.target).closest('#perfil').length === 0 && $(e.target).closest('#leave-box').length === 0){
		var container5 = $("#leave-box");
		container5.hide();
    }
});

function isLogged() {
	var id = $("#idUser");
	var query = window.location.search;
	//Saltar el ?
	if (query.substring(0, 1) == '?'){
		query = query.substring(1);
	}
	var logged = unescape(query);
	var login =  $("#login");
	if(logged == 'true'){
		id.css({
			top: login.offset().top + 48,
			left: login.offset().left - 10
		}).show();
	} else {
		id.hide();
	}
	return logged;
}

$(window).resize(function() {
	isLogged();
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


function passLogPerfil(){
	if(isLogged() == 'true'){
		var packed = "";
		packed += escape("true");
		window.location = "Perfil.html?"+packed;
	}else{
		window.location = "Perfil.html";
	}
}

function passLogVerd(){
	if(isLogged() == 'true'){
		var packed = "";
		packed += escape("true");
		window.location = "CompromisEnergetic.html?"+packed;
	}else{
		window.location = "CompromisEnergetic.html";
	}
}

function passLogAparell(){
	if(isLogged() == 'true'){
		window.location = "ConsumAparell4.html";
	}else{
		window.location = "ConsumAparell1.html";
	}
}

function passLogHome(){
	if(isLogged() == 'true'){
		var packed = "";
		packed += escape("true");
		window.location = "HomePage.html?"+packed;
	}else{
		window.location = "HomePage.html";
	}
}


/*** Pop-up Comportament Verd ***/
$(document).ready(function() {
	//Show div on click
	$('#verdB').click(function(e) {
		if(isLogged() == 'true'){
			window.location = "ComportamentVerd.html";
		}else{
    		$('#warning-box').css({
        		top:  e.pageY + 20,
        		left: e.pageX - 110
    		}).toggle();
		}
	});
	$('#verdB2').click(function(e) {
		if(isLogged() == 'true'){
			window.location = "ComportamentVerd.html";
		}else{
    		$('#warning-box').css({
        		top:  e.pageY - 80,
        		left: e.pageX + 40
    		}).toggle();
		}
	});
	$('#consum').click(function(e) {
		if(isLogged() == 'true'){
			window.location = "Consum.html";
		}else{
    		$('#consum-box').css({
        		top:  e.pageY + 20,
        		left: e.pageX - 110
    		}).toggle();
		}
	});

	$('#perfil').click(function(e) {
		if(isLogged() == 'true'){
			passLogPerfil();
		}else{
    		$('#leave-box').css({
        		top:  e.pageY + 20,
        		left: e.pageX - 110
    		}).toggle();
		}
	});

	$('#logo').click(function(e) {
		if(isLogged() == 'true'){
			passLogHome();
		}else{
    		$('#leave-box').css({
        		top:  e.pageY + 20,
        		left: e.pageX - 110
    		}).toggle();
		}
	});

	$('#verd').click(function(e) {
		if(isLogged() == 'true'){
			passLogVerd();
		}else{
    		$('#leave-box').css({
        		top:  e.pageY + 20,
        		left: e.pageX - 110
    		}).toggle();
		}
	});

	$('#close').click(function(e) {
		var container = $("#warning-box");
    	container.hide();
	});
	$('#closeC').click(function(e) {
		var container = $("#consum-box");
    	container.hide();
	});
	$('#closeL').click(function(e) {
		var container = $("#leave-box");
    	container.hide();
	});
});
