var selectedSrc = "null"; //The NON selected picture of the selected image
var selectedName = "null"; //The selected img name

/* Send data to next screen */
function sendData() {
	var packed = "";
	packed += escape(selectedName);
	packed += ",";
	packed += escape(selectedSrc);
	window.location = "ConsumAparell2.html?"+packed;
}

/* AIRE CONDICIONAT*/
function changeAire() {
    selectedSrc = "./img/dev/aireV.png";
    selectedName = "Aire condicionat";
    sendData(); //And the data is sent to the next screen
}

function mouseOverAire() {
	var image = document.getElementById('aire');
    image.src = "./img/dev/aireVHover.png";
}

function mouseOutAire(){
	var image = document.getElementById('aire');
    image.src = "./img/dev/aireV.png";
}

/* BOMBETA */
function changeBombeta() {
    selectedSrc = "./img/dev/bombetaV.png";
    selectedName = "Bombeta";
    sendData(); //And the data is sent to the next screen
}

function mouseOverBombeta() {
	var image = document.getElementById('bombeta');
    image.src = "./img/dev/bombetaVHover.png";
}

function mouseOutBombeta(){
	var image = document.getElementById('bombeta');
    image.src = "./img/dev/bombetaV.png";
}

/* FORN */
function changeForn() {
    selectedSrc = "./img/dev/fornV.png";
    selectedName = "Forn";
    sendData(); //And the data is sent to the next screen
}

function mouseOverForn() {
	var image = document.getElementById('forn');
    image.src = "./img/dev/fornVHover.png";
}

function mouseOutForn(){
	var image = document.getElementById('forn');
    image.src = "./img/dev/fornV.png";
}

/* MICROONES */
function changeMicroones() {
    selectedSrc = "./img/dev/microonesV.png";
    selectedName = "Microones";
    sendData(); //And the data is sent to the next screen
}

function mouseOverMicroones() {
	var image = document.getElementById('microones');
    image.src = "./img/dev/microonesVHover.png";
}

function mouseOutMicroones(){
	var image = document.getElementById('microones');
    image.src = "./img/dev/microonesV.png";
}

/* NEVERA */
function changeNevera() {
    selectedSrc = "./img/dev/neveraV.png";
    selectedName = "Nevera";
    sendData(); //And the data is sent to the next screen
}

function mouseOverNevera() {
	var image = document.getElementById('nevera');
    image.src = "./img/dev/neveraVHover.png";
}

function mouseOutNevera(){
	var image = document.getElementById('nevera');
    image.src = "./img/dev/neveraV.png";
}

/* ORDINADOR */
function changePc() {
    selectedSrc = "./img/dev/pcV.png";
    selectedName = "Ordinador";
    sendData(); //And the data is sent to the next screen
}

function mouseOverPc() {
	var image = document.getElementById('pc');
    image.src = "./img/dev/pcVHover.png";
}

function mouseOutPc(){
	var image = document.getElementById('pc');
    image.src = "./img/dev/pcV.png";
}

/* RENTADORA */
function changeRentadora() {
    selectedSrc = "./img/dev/rentadoraV.png";
    selectedName = "Rentadora";
    sendData(); //And the data is sent to the next screen
}

function mouseOverRentadora() {
	var image = document.getElementById('rentadora');
    image.src = "./img/dev/rentadoraVHover.png";
}

function mouseOutRentadora(){
	var image = document.getElementById('rentadora');
    image.src = "./img/dev/rentadoraV.png";
}

/* RENTAPLATS */
function changeRentaplats() {
    selectedSrc = "./img/dev/rentaplatsV.png";
    selectedName = "Rentaplats";
    sendData(); //And the data is sent to the next screen
}

function mouseOverRentaplats() {
	var image = document.getElementById('rentaplats');
    image.src = "./img/dev/rentaplatsVHover.png";
}

function mouseOutRentaplats(){
	var image = document.getElementById('rentaplats');
    image.src = "./img/dev/rentaplatsV.png";
}

/* ROUTER WIFI */
function changeRouter() {
    selectedSrc = "./img/dev/routerV.png";
    selectedName = "Router WiFi";
    sendData(); //And the data is sent to the next screen
}

function mouseOverRouter() {
	var image = document.getElementById('router');
    image.src = "./img/dev/routerVHover.png";
}

function mouseOutRouter(){
	var image = document.getElementById('router');
    image.src = "./img/dev/routerV.png";
}

/* TELEVISIÓ */
function changeTele() {
    selectedSrc = "./img/dev/teleV.png";
    selectedName = "Televisió";
    sendData(); //And the data is sent to the next screen
}

function mouseOverTele() {
	var image = document.getElementById('tele');
    image.src = "./img/dev/teleVHover.png";
}

function mouseOutTele(){
	var image = document.getElementById('tele');
    image.src = "./img/dev/teleV.png";
}

/* VIDEOCONSOLA */
function changeConsola() {
    selectedSrc = "./img/dev/consolaV.png";
    selectedName = "Videoconsola";
    sendData(); //And the data is sent to the next screen
}

function mouseOverConsola() {
	var image = document.getElementById('consola');
    image.src = "./img/dev/consolaVHover.png";
}

function mouseOutConsola(){
	var image = document.getElementById('consola');
    image.src = "./img/dev/consolaV.png";
}

/*** Pop-up code ***/
$(function() {
  var moveLeft = -270;
  var moveDown = -330;
  
  //Hover on
  var enter = function() {
        $('#trigger').attr("src","./img/moreVHover.png");
  	};
  //Hover off
  var exit = function() {
        $('#trigger').attr("src","./img/moreV.png");
  	};

  //Show div on click
  $('#trigger').click(function(e) {
    $('#pop-up').show()
      .css('top', e.pageY + moveDown)
      .css('left', e.pageX + moveLeft)
      .appendTo('body');
    $('#sendDevice').show();
	$('#modText').html("No trobes l'aparell <br>que busques?");
    $("#apTB").css({'border': '0.15em solid black'});
	$("#apTB").val("");
	$("#mail").val("");
    $('#trigger').attr("src","./img/moreVHover.png");
    $('#trigger').unbind('mouseenter').unbind('mouseleave');
  });
  
  //Hide div if close button has been clicked
  $('#closeD').click(function() {
    $('#pop-up').hide();
    $('#trigger').attr("src","./img/moreV.png");
    $('#trigger').bind('mouseenter',(enter)).bind('mouseleave',(exit));
  });
  
  //Hover function
  $("#trigger").hover(enter,exit);
});

//Hide pop-up if the user clicks on the screen
$(document).mousedown(function (e)
{
    var container = $("#pop-up");
    
    //Hover on
  	var enter = function() {
        $('#trigger').attr("src","./img/moreVHover.png");
  		};
  	//Hover off
  	var exit = function() {
        $('#trigger').attr("src","./img/moreV.png");
  	};

    if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide();
    	$('#trigger').attr("src","./img/moreV.png");
        $('#trigger').bind('mouseenter',(enter)).bind('mouseleave',(exit));
    }
});

//Hide pop-up if the window resizes
$(window).resize(function() {
  	var container = $("#pop-up");
    
    //Hover on
  	var enter = function() {
        $('#trigger').attr("src","./img/moreVHover.png");
  		};
  	//Hover off
  	var exit = function() {
        $('#trigger').attr("src","./img/moreV.png");
  	};

    container.hide();
    $('#trigger').attr("src","./img/moreV.png");
    $('#trigger').bind('mouseenter',(enter)).bind('mouseleave',(exit));
});

/*** Send device ***/
$(document).ready(function() {
  	
    $("#sendDevice").submit(function() {
        if($("#apTB").val().length<=0){
        	$("#apTB").css({'border': '0.2em solid red'});
        } else {
        	$('#sendDevice').hide();
        	$('#modText').html("<br><br>Hem rebut la teva petició de manera correcta.<br><br><br>Gràcies per ajudar a millorar la pàgina web!");
        	$('#modText').css({'font-size':'0.9em'});
			$('#modText').css({'font-family':'"Arial", "Gadget", "sans-serif"'});
        	$('#modText').css({'text-decoration':'none'});
			$('#modText').css({'text-align':'center'});
        }
    });
});
