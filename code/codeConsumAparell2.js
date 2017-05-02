var selectedSrc = "null"; //The NON selected picture of the selected image
var selectedName = "null"; //The selected img name

//Reads data sent from the previous page
function readData() {
	var query = window.location.search;
	//Saltar el ?
	if (query.substring(0, 1) == '?'){
		query = query.substring(1);
	}
	var data = query.split(',');
	selectedName = unescape(data[0]);
	selectedSrc = unescape(data[1]);
	
	var name = document.getElementById('devName');
	var image = document.getElementById('devImg');
	
	name.innerHTML = selectedName;
	image.src = selectedSrc;
}

//Updates the time selected in the range
function updateTime(time){
	document.getElementById("currentTime").innerHTML = time;
	document.getElementById("currentTime").title = Math.round(parseFloat(time/24).toFixed(1)*10)/10+" dies aprox.";
}

var selected = "day"; //The selected time type

//Changes all text to fit the selected time type
function changeTime(clicked) {
    var day = document.getElementById('dayB');
    var week = document.getElementById('weekB');
    var range = document.getElementById('timeRangeid');
    if (selected == "day"){ //If h/day is selected
    	if (clicked != "day"){
    		selected = "week";
    		day.style.background = "#C7E5AA";
    		week.style.background = "#8AB95D";
    		document.getElementById("r2").innerHTML = "168h";
    		document.getElementById("r2").title = "7 dies";
    		range.min = "0";
    		range.max = "168";
    		range.value = (range.value)*7;
    		updateTime(range.value);
    	}
    } else {
    	if (clicked != "week"){ //If h/week is selected
    		selected = "day";
    		week.style.background = "#C7E5AA";
    		day.style.background = "#8AB95D";
    		document.getElementById("r2").innerHTML = "24h";
    		document.getElementById("r2").title = "1 dia";
    		range.min = "0";
    		range.max = "24";
    		range.value = "12";
			updateTime("12");
		}
    }
}

//Pop-up code
$(function() {
  var moveLeft = 20;
  var moveDown = -270;

  $('#trigger').hover(function(e) {
    $('#pop-up').show();
  }, function() {
    $('#pop-up').hide();
  });

  $('#trigger').mousemove(function(e) {
    $("#pop-up").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });

});

/* Send data to next screen */
function sendData() {
	var packed = "";
	var range = document.getElementById('timeRangeid');
	packed += escape(selectedName);
	packed += ",";
	packed += escape(selectedSrc);
	packed += ",";
	packed += escape(range.value);
	packed += ",";
	packed += escape(selected);
	window.location = "ConsumAparell3.html?"+packed;
}
