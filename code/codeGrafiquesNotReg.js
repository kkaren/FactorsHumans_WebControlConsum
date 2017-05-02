function onMouseOutB(idT){
	var graphicType = document.getElementById("selected");
	if(idT=='habitacions'){
		if(graphicType.className != 'upButton'){
			var imageB = document.getElementById("imageB");
			imageB.src= "./img/botoHabitacions.png"; 
		}
	}else if(idT=='aparells'){
		if(graphicType.className != 'downButton'){
			var imageB2 = document.getElementById("imageB2");
			imageB2.src= "./img/botoAparells.png"; 
		}
	}
}

function onMouseOverB(idT){
	var graphicType = document.getElementById("selected");
	if(idT=='habitacions'){
		if(graphicType.className != 'upButton'){
			var imageB = document.getElementById("imageB");
			imageB.src= "./img/botoHabitacionsHover.png"; 
		}
	}else if(idT=='aparells'){
		if(graphicType.className != 'downButton'){
			var imageB2 = document.getElementById("imageB2");
			imageB2.src= "./img/botoAparellsHover.png"; 
		}
	}
}

function changeUnitNotReg(){
	var graphicUnit = document.getElementsByClassName("switch")[0];
	var temp = graphicUnit.id;
	if(temp=="kw"){
		graphicUnit.id="euros";
	}else{
		graphicUnit.id="kw";
	}
	var graphicType = document.getElementsByClassName("upButton")[0];

	if(graphicType.id=="selected"){
		var idT='habitacions';			
	}else{
		var idT='aparells';
	}
	
	changeTypeNotReg(idT);
}

function changeTypeNotReg(idT){
	var graphicUnit = document.getElementsByClassName("switch")[0];
	if(idT=='habitacions'){
		var graphicType = document.getElementsByClassName("upButton")[0];
		var imageB = document.getElementById("imageB");
		imageB.src= "./img/botoHabitacionsHover.png"; 
		var otherType = document.getElementsByClassName("downButton")[0];
		var imageB2 = document.getElementById("imageB2");
		imageB2.src= "./img/botoAparells.png"; 
		
		if(graphicUnit.id=="kw"){
			var newGraphic = "./img/grafs/grafica1.png";
		} else {
			var newGraphic = "./img/grafs/grafica4.png";
		}
				
	}else if(idT=='aparells'){
		var graphicType = document.getElementsByClassName("downButton")[0];
		var imageB2 = document.getElementById("imageB2");
		imageB2.src= "./img/botoAparellsHover.png"; 
		var otherType = document.getElementsByClassName("upButton")[0];
		var imageB = document.getElementById("imageB");
		imageB.src= "./img/botoHabitacions.png"; 
	
		if(graphicUnit.id=="kw"){
			var newGraphic = "./img/grafs/grafica7.png";
		} else {
			var newGraphic = "./img/grafs/grafica10.png";
		}
	}
	graphicType.id = "selected";
	otherType.id = "notSelected";
	var imageGraphic = document.getElementById("graphic");
	imageGraphic.firstChild.src = newGraphic;
}

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