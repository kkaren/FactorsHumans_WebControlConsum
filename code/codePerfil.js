var selectedRoom = 'cuina';

var aparellSelected = 'null'; //Devices selected from the right

var selected = 'day'; //Time type

var apSel = 'null'; //Devices selected from the left

//Room added
var numHabs = 4;

//Device position selected
var cPos = 1;
var lPos = 1;
var dPos = 1;
var sPos = 1;
var ePos = 1;

//Cuina (6)
var ap1CId = ""; //Device name
var ap1CH = ""; //Device hours
var ap1CHT = ""; //Device hours type
var ap1Cnum = ""; //Number of devices
var ap1CKw = ""; //Power

var ap2CId
var ap2CH = "";
var ap2CHT = "";
var ap2Cnum = "";
var ap2CKw = "";

var ap3CId
var ap3CH = "";
var ap3CHT = "";
var ap3Cnum = "";
var ap3CKw = "";

var ap4CId
var ap4CH = "";
var ap4CHT = "";
var ap4Cnum = "";
var ap4CKw = "";

var ap5CId
var ap5CH = "";
var ap5CHT = "";
var ap5Cnum = "";
var ap5CKw = "";

var ap6CId
var ap6CH = "";
var ap6CHT = "";
var ap6Cnum = "";
var ap6CKw = "";

//Lavabo (2)
var ap1LId = ""; //Device name
var ap1LH = ""; //Device hours
var ap1LHT = ""; //Device hours type
var ap1Lnum = ""; //Number of devices
var ap1LKw = ""; //Power

var ap2LId
var ap2LH = "";
var ap2LHT = "";
var ap2Lnum = "";
var ap2LKw = "";

//Dormitori 1 (4)
var ap1DId = ""; //Device name
var ap1DH = ""; //Device hours
var ap1DHT = ""; //Device hours type
var ap1Dnum = ""; //Number of devices
var ap1DKw = ""; //Power

var ap2DId
var ap2DH = "";
var ap2DHT = "";
var ap2Dnum = "";
var ap2DKw = "";

var ap3DId
var ap3DH = "";
var ap3DHT = "";
var ap3Dnum = "";
var ap3DKw = "";

var ap4DId
var ap4DH = "";
var ap4DHT = "";
var ap4Dnum = "";
var ap4DKw = "";

//Sala (5)
var ap1SId = ""; //Device name
var ap1SH = ""; //Device hours
var ap1SHT = ""; //Device hours type
var ap1Snum = ""; //Number of devices
var ap1SKw = ""; //Power

var ap2SId
var ap2SH = "";
var ap2SHT = "";
var ap2Snum = "";
var ap2SKw = "";

var ap3SId
var ap3SH = "";
var ap3SHT = "";
var ap3Snum = "";
var ap3SKw = "";

var ap4SId
var ap4SH = "";
var ap4SHT = "";
var ap4Snum = "";
var ap4SKw = "";

var ap5SId
var ap5SH = "";
var ap5SHT = "";
var ap5Snum = "";
var ap5SKw = "";

//Extra (3)
var ap1EId = ""; //Device name
var ap1EH = ""; //Device hours
var ap1EHT = ""; //Device hours type
var ap1Enum = ""; //Number of devices
var ap1EKw = ""; //Power

var ap2EId
var ap2EH = "";
var ap2EHT = "";
var ap2Enum = "";
var ap2EKw = "";

var ap3EId
var ap3EH = "";
var ap3EHT = "";
var ap3Enum = "";
var ap3EKw = "";

//Pop-up code
$(function() {
  var moveLeft = 20;
  var moveDown = -70;

  $('#trigger2').hover(function(e) {
    $('#pop-up').show();
  }, function() {
    $('#pop-up').hide();
  });

  $('#trigger2').mousemove(function(e) {
    $("#pop-up").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });

});

function cuinaSelected() {
  var ai = document.getElementById('ap1T');
  var bo = document.getElementById("ap2T");
  var fo = document.getElementById('ap3T');
  var mi = document.getElementById('ap4T');
  var ne = document.getElementById('ap5T');
  var or = document.getElementById('ap6T');
  var re = document.getElementById('ap7T'); //rentadora
  var rt = document.getElementById('ap8T'); //rentaplats
  var ro = document.getElementById('ap9T');
  var te = document.getElementById('ap10T');
  var vi = document.getElementById('ap11T');
  ai.style.textDecoration="none";
  bo.style.textDecoration="underline";
  fo.style.textDecoration="underline";
  mi.style.textDecoration="underline"
  ne.style.textDecoration="underline";
  or.style.textDecoration="none"
  re.style.textDecoration="none";
  rt.style.textDecoration="underline"
  ro.style.textDecoration="none";
  te.style.textDecoration="underline"
  vi.style.textDecoration="none";
}

function lavaboSelected() {
  var ai = document.getElementById('ap1T');
  var bo = document.getElementById("ap2T");
  var fo = document.getElementById('ap3T');
  var mi = document.getElementById('ap4T');
  var ne = document.getElementById('ap5T');
  var or = document.getElementById('ap6T');
  var re = document.getElementById('ap7T'); //rentadora
  var rt = document.getElementById('ap8T'); //rentaplats
  var ro = document.getElementById('ap9T');
  var te = document.getElementById('ap10T');
  var vi = document.getElementById('ap11T');
  ai.style.textDecoration="none"
  bo.style.textDecoration="underline";
  fo.style.textDecoration="none";
  mi.style.textDecoration="none"
  ne.style.textDecoration="none";
  or.style.textDecoration="none"
  re.style.textDecoration="none";
  rt.style.textDecoration="none"
  ro.style.textDecoration="none";
  te.style.textDecoration="none"
  vi.style.textDecoration="none";
}

function salaSelected() {
  var ai = document.getElementById('ap1T');
  var bo = document.getElementById("ap2T");
  var fo = document.getElementById('ap3T');
  var mi = document.getElementById('ap4T');
  var ne = document.getElementById('ap5T');
  var or = document.getElementById('ap6T');
  var re = document.getElementById('ap7T'); //rentadora
  var rt = document.getElementById('ap8T'); //rentaplats
  var ro = document.getElementById('ap9T');
  var te = document.getElementById('ap10T');
  var vi = document.getElementById('ap11T');
  ai.style.textDecoration="underline"
  bo.style.textDecoration="underline";
  fo.style.textDecoration="none";
  mi.style.textDecoration="none"
  ne.style.textDecoration="none";
  or.style.textDecoration="underline"
  re.style.textDecoration="none";
  rt.style.textDecoration="none"
  ro.style.textDecoration="underline";
  te.style.textDecoration="underline"
  vi.style.textDecoration="underline";
}

function dormitoriSelected() {
  var ai = document.getElementById('ap1T');
  var bo = document.getElementById("ap2T");
  var fo = document.getElementById('ap3T');
  var mi = document.getElementById('ap4T');
  var ne = document.getElementById('ap5T');
  var or = document.getElementById('ap6T');
  var re = document.getElementById('ap7T'); //rentadora
  var rt = document.getElementById('ap8T'); //rentaplats
  var ro = document.getElementById('ap9T');
  var te = document.getElementById('ap10T');
  var vi = document.getElementById('ap11T');
  ai.style.textDecoration="none"
  bo.style.textDecoration="underline";
  fo.style.textDecoration="none";
  mi.style.textDecoration="none"
  ne.style.textDecoration="none";
  or.style.textDecoration="none"
  re.style.textDecoration="none";
  rt.style.textDecoration="none"
  ro.style.textDecoration="underline";
  te.style.textDecoration="underline"
  vi.style.textDecoration="none";
}

$(document).ready(function() {
  $("#suprH").click(function () {
    var ai = document.getElementById('ap1T');
    var bo = document.getElementById("ap2T");
    var fo = document.getElementById('ap3T');
    var mi = document.getElementById('ap4T');
    var ne = document.getElementById('ap5T');
    var or = document.getElementById('ap6T');
    var re = document.getElementById('ap7T'); //rentadora
    var rt = document.getElementById('ap8T'); //rentaplats
    var ro = document.getElementById('ap9T');
    var te = document.getElementById('ap10T');
    var vi = document.getElementById('ap11T');
    ai.style.textDecoration="none";
    bo.style.textDecoration="underline";
    fo.style.textDecoration="underline";
    mi.style.textDecoration="underline"
    ne.style.textDecoration="underline";
    or.style.textDecoration="none"
    re.style.textDecoration="none";
    rt.style.textDecoration="underline"
    ro.style.textDecoration="none";
    te.style.textDecoration="underline"
    vi.style.textDecoration="none";
	  numHabs--;
		$("#extraRow").hide();
		$("#hab-box").hide();
    selectedRoom="cuina";//linies inserides
    tipoExtra="cuina";
    $("#cuinaT").css("background-image", "url(./img/hab/cuinaPF.png)");
    $("#lavaboT").css("background-image", "url(./img/hab/lavaboP.png)");
    $("#dormT").css("background-image", "url(./img/hab/dormitoriP.png)");
    $("#sala1T").css("background-image", "url(./img/hab/salaP.png)");
	});
});

$(document).ready(function() {
  $("#addH").click(function () {
	  	numHabs++;
		$("#hab-box").hide();
    $("#cuinaT").css("background-image", "url(./img/hab/cuinaP.png)");
		$('#divScroll').scrollTop($('#divScroll')[0].scrollHeight);
    $("cuinaE").css("background-color", "#CDE3F5");
    $("lavaboE").css("background-color", "#CDE3F5");
    $("dormE").css("background-color", "#CDE3F5");
    $("salaE").css("background-color", "#CDE3F5");
	});
});

$(document).ready(function() {
  $("#deleteH").click(function () {
    numHabs=numHabs-1;
    $("#cuinaT").css("background-image", "url(./img/hab/cuinaPF.png)");
    cuinaSelected();
    selectedRoom="cuina";
		$("#apE1T").css("visibility", "hidden");
    $("#apE2T").css("visibility", "hidden");
    $("#apE3T").css("visibility", "hidden");
    $("#apE4T").css("visibility", "hidden");
    $("#apE1").css("visibility", "hidden");
    $("#apE2").css("visibility", "hidden");
    $("#apE3").css("visibility", "hidden");
    $("#apE4").css("visibility", "hidden");
    ePos = 1;
    $("#extraRow").hide();
    $(window).scrollTop();
	});
});

$(document).ready(function() {
  $("#dormT").click(function () {
      /*if ($(this).css("background-image").indexOf("dormitoriPF")>=0) {
          $(this).css("background-image", "url(./img/hab/dormitoriP.png)");
      } else {*/
          $(this).css("background-image", "url(./img/hab/dormitoriPF.png)");
          $("#lavaboT").css("background-image", "url(./img/hab/lavaboP.png)");
          $("#sala1T").css("background-image", "url(./img/hab/salaP.png)");
          $("#cuinaT").css("background-image", "url(./img/hab/cuinaP.png)");

					if($("#extraT").css("background-image").indexOf("dormitori")>=0) {
						$("#extraT").css("background-image", "url(./img/hab/dormitoriP.png)");
					} else if ($("#extraT").css("background-image").indexOf("cuina")>=0) {
						$("#extraT").css("background-image", "url(./img/hab/cuinaP.png)");
					} else if ($("#extraT").css("background-image").indexOf("sala")>=0) {
						$("#extraT").css("background-image", "url(./img/hab/salaP.png)");
					} else if ($("#extraT").css("background-image").indexOf("lavabo")>=0) {
						$("#extraT").css("background-image", "url(./img/hab/lavaboP.png)");
					}
		  		selectedRoom = 'dorm';
          dormitoriSelected();
    //  }
  });
});

$(document).ready(function() {
  $("#sala1T").click(function () {
    /*  if ($(this).css("background-image").indexOf("salaPF")>=0) {
          $(this).css("background-image", "url(./img/hab/salaP.png)");
      } else {*/
          $(this).css("background-image", "url(./img/hab/salaPF.png)");
          $("#lavaboT").css("background-image", "url(./img/hab/lavaboP.png)");
          $("#dormT").css("background-image", "url(./img/hab/dormitoriP.png)");
          $("#cuinaT").css("background-image", "url(./img/hab/cuinaP.png)");
					if($("#extraT").css("background-image").indexOf("dormitori")>=0) {
						$("#extraT").css("background-image", "url(./img/hab/dormitoriP.png)");
					} else if ($("#extraT").css("background-image").indexOf("cuina")>=0) {
						$("#extraT").css("background-image", "url(./img/hab/cuinaP.png)");
					} else if ($("#extraT").css("background-image").indexOf("sala")>=0) {
						$("#extraT").css("background-image", "url(./img/hab/salaP.png)");
					} else if ($("#extraT").css("background-image").indexOf("lavabo")>=0) {
						$("#extraT").css("background-image", "url(./img/hab/lavaboP.png)");
					}
		  		selectedRoom = 'sala';
          salaSelected();
    //  }
  });
});
function scrollTo(idAparell) {
	var w = $(window);
	var row = table.find('tr').removeClass('active').eq( +$(idAparell).val() ).addClass('active');
		if (row.length){
			w.scrollTop( row.offset().top - (w.height()/2) );
		}
}
$(document).ready(function() {
  $("#cuinaT").click(function () {
			//scrollTo("#cuinaT");
    /*  if ($(this).css("background-image").indexOf("cuinaPF")>=0) {
          $(this).css("background-image", "url(./img/hab/cuinaP.png)");
      } else {*/
          $(this).css("background-image", "url(./img/hab/cuinaPF.png)");
          $('#lavaboT').css("background-image", "url(./img/hab/lavaboP.png)");
          $('#dormT').css("background-image", "url(./img/hab/dormitoriP.png)");
          $('#sala1T').css("background-image", "url(./img/hab/salaP.png)");
					if($("#extraT").css("background-image").indexOf("dormitori")>=0) {
						$("#extraT").css("background-image", "url(./img/hab/dormitoriP.png)");
					} else if ($("#extraT").css("background-image").indexOf("cuina")>=0) {
						$("#extraT").css("background-image", "url(./img/hab/cuinaP.png)");
					} else if ($("#extraT").css("background-image").indexOf("sala")>=0) {
						$("#extraT").css("background-image", "url(./img/hab/salaP.png)");
					} else if ($("#extraT").css("background-image").indexOf("lavabo")>=0) {
						$("#extraT").css("background-image", "url(./img/hab/lavaboP.png)");
					}
		  selectedRoom = 'cuina';
      cuinaSelected();
    //  }
  });
});

$(document).ready(function() {
	$("#lavaboT").click(function () {
  /*  	if ($(this).css("background-image").indexOf("lavaboPF")>=0) {
          	$(this).css("background-image", "url(./img/hab/lavaboP.png)");
		} else {*/
        	$(this).css("background-image", "url(./img/hab/lavaboPF.png)");
        	$('#cuinaT').css("background-image", "url(./img/hab/cuinaP.png)");
        	$('#dormT').css("background-image", "url(./img/hab/dormitoriP.png)");
        	$('#sala1T').css("background-image", "url(./img/hab/salaP.png)");
					if($("#extraT").css("background-image").indexOf("dormitori")>=0) {
						$("#extraT").css("background-image", "url(./img/hab/dormitoriP.png)");
					} else if ($("#extraT").css("background-image").indexOf("cuina")>=0) {
						$("#extraT").css("background-image", "url(./img/hab/cuinaP.png)");
					} else if ($("#extraT").css("background-image").indexOf("sala")>=0) {
						$("#extraT").css("background-image", "url(./img/hab/salaP.png)");
					} else if ($("#extraT").css("background-image").indexOf("lavabo")>=0) {
						$("#extraT").css("background-image", "url(./img/hab/lavaboP.png)");
					}
      		selectedRoom = 'lavabo';
          lavaboSelected();
	  //	}
  });
});

$(document).ready(function() {
	$("#cuinaE").click(function() {
		tipoExtra = "cuina";
    cuinaSelected();
    $(this).css("background-color", "#9DC2E0");
    $("#lavaboE").css("background-color", "#CDE3F5");
    $("#salaE").css("background-color", "#CDE3F5");
    $("#dormE").css("background-color", "#CDE3F5");
		$("#extraT").css("background-image", "url(./img/hab/cuinaPF.png)");
		$("#cuinaT").css("background-image", "url(./img/hab/cuinaP.png)");
		$("#lavaboT").css("background-image", "url(./img/hab/lavaboP.png)");
		$("#sala1T").css("background-image", "url(./img/hab/salaP.png)");
		$("#dormT").css("background-image", "url(./img/hab/dormitoriP.png)");
    $("#extraRow").show();
    $('#divScroll').scrollTop($('#divScroll')[0].scrollHeight);
	});
});

$(document).ready(function() {
	$("#lavaboE").click(function() {
		tipoExtra = "lavabo";
    lavaboSelected();
    $(this).css("background-color", "#9DC2E0");
    $("#salaE").css("background-color", "#CDE3F5");
    $("#dormE").css("background-color", "#CDE3F5");
    $("#cuinaE").css("background-color", "#CDE3F5");
		$("#extraT").css("background-image", "url(./img/hab/lavaboPF.png)");
		$("#cuinaT").css("background-image", "url(./img/hab/cuinaP.png)");
		$("#lavaboT").css("background-image", "url(./img/hab/lavaboP.png)");
		$("#sala1T").css("background-image", "url(./img/hab/salaP.png)");
		$("#dormT").css("background-image", "url(./img/hab/dormitoriP.png)");
    $("#extraRow").show();
    $('#divScroll').scrollTop($('#divScroll')[0].scrollHeight);
	});
});

$(document).ready(function() {
	$("#salaE").click(function() {
		tipoExtra = "sala";
    salaSelected();
    $(this).css("background-color", "#9DC2E0");
    $("#dormE").css("background-color", "#CDE3F5");
    $("#cuinaE").css("background-color", "#CDE3F5");
    $("#lavaboE").css("background-color", "#CDE3F5");
		$("#extraT").css("background-image", "url(./img/hab/salaPF.png)");
		$("#cuinaT").css("background-image", "url(./img/hab/cuinaP.png)");
		$("#lavaboT").css("background-image", "url(./img/hab/lavaboP.png)");
		$("#sala1T").css("background-image", "url(./img/hab/salaP.png)");
		$("#dormT").css("background-image", "url(./img/hab/dormitoriP.png)");
    $("#extraRow").show();
    $('#divScroll').scrollTop($('#divScroll')[0].scrollHeight);
	});
});

$(document).ready(function() {
	$("#dormE").click(function() {
		tipoExtra = "dorm";
    dormitoriSelected();
    $(this).css("background-color", "#9DC2E0");
    $("#cuinaE").css("background-color", "#CDE3F5");
    $("#salaE").css("background-color", "#CDE3F5");
    $("#lavaboE").css("background-color", "#CDE3F5");
		$("#extraT").css("background-image", "url(./img/hab/dormitoriPF.png)");
		$("#cuinaT").css("background-image", "url(./img/hab/cuinaP.png)");
		$("#lavaboT").css("background-image", "url(./img/hab/lavaboP.png)");
		$("#sala1T").css("background-image", "url(./img/hab/salaP.png)");
		$("#dormT").css("background-image", "url(./img/hab/dormitoriP.png)");
    $("#extraRow").show();
    $('#divScroll').scrollTop($('#divScroll')[0].scrollHeight);
	});
});


$(document).ready(function() {
	$("#extraT").click(function () {
  /*  	if ($(this).css("background-image").indexOf("salaPF")>=0) {
          	$(this).css("background-image", "url(./img/hab/salaP.png)");
		} else {*/
        /*	$(this).css("background-image", "url(./img/hab/lavaboPF.png)");
        	$('#cuinaT').css("background-image", "url(./img/hab/cuinaP.png)");
        	$('#dormT').css("background-image", "url(./img/hab/dormitoriP.png)");
        	$('#sala1T').css("background-image", "url(./img/hab/salaP.png)");
      		selectedRoom = 'extra';*/
	//  	}
			selectedRoom = 'extra';
			switch(tipoExtra) {
				case "lavabo":
				/*	if ($(this).css("background-image").indexOf("lavaboPF")>=0) {
								$(this).css("background-image", "url(./img/hab/lavaboP.png)");
					} else {*/
              tipoExtra="lavabo";
							$(this).css("background-image", "url(./img/hab/lavaboPF.png)");
							$('#cuinaT').css("background-image", "url(./img/hab/cuinaP.png)");
							$('#dormT').css("background-image", "url(./img/hab/dormitoriP.png)");
							$('#sala1T').css("background-image", "url(./img/hab/salaP.png)");
							$('#lavaboT').css("background-image", "url(./img/hab/lavaboP.png)");
              lavaboSelected();
				//	}
          break;
				case "cuina":
				/*	if ($(this).css("background-image").indexOf("cuinaPF")>=0) {
							$(this).css("background-image", "url(./img/hab/cuinaP.png)");
					} else {*/
              tipoExtra="cuina";
							$(this).css("background-image", "url(./img/hab/cuinaPF.png)");
							$('#lavaboT').css("background-image", "url(./img/hab/lavaboP.png)");
							$('#dormT').css("background-image", "url(./img/hab/dormitoriP.png)");
							$('#sala1T').css("background-image", "url(./img/hab/salaP.png)");
							$('#cuinaT').css("background-image", "url(./img/hab/cuinaP.png)");
              cuinaSelected();
					//}
          break;
				case "dorm":
				/*	if ($(this).css("background-image").indexOf("dormitoriPF")>=0) {
							$(this).css("background-image", "url(./img/hab/dormitoriP.png)");
					} else {*/
              tipoExtra="dorm";
							$(this).css("background-image", "url(./img/hab/dormitoriPF.png)");
							$('#lavaboT').css("background-image", "url(./img/hab/lavaboP.png)");
							$('#dormT').css("background-image", "url(./img/hab/dormitoriP.png)");
							$('#sala1T').css("background-image", "url(./img/hab/salaP.png)");
							$('#cuinaT').css("background-image", "url(./img/hab/cuinaP.png)");
              dormitoriSelected();
				//	}
          break;
				case "sala":
				/*	if ($(this).css("background-image").indexOf("salaPF")>=0) {
							$(this).css("background-image", "url(./img/hab/salaP.png)");
					} else {*/
              tipoExtra="sala";
							$(this).css("background-image", "url(./img/hab/salaPF.png)");
							$('#lavaboT').css("background-image", "url(./img/hab/lavaboP.png)");
							$('#dormT').css("background-image", "url(./img/hab/dormitoriP.png)");
							$('#sala1T').css("background-image", "url(./img/hab/salaP.png)");
							$('#cuinaT').css("background-image", "url(./img/hab/cuinaP.png)");
              salaSelected();
				//	}
          break;
			}
  });
});


/*** Increase/ decrease ***/
function minusOne(){
	var unitat = parseInt(document.getElementById("unitat").innerHTML);
	if(unitat > 1){
		document.getElementById("unitat").innerHTML= unitat - 1;
	}
}

function plusOne(){
	var unitat = parseInt(document.getElementById("unitat").innerHTML);
	document.getElementById("unitat").innerHTML= unitat + 1;
}

$(window).resize(function() {
  	var container = $("#aparell-box");
	var container2 = $("#hab-box");
	var container3 = $("#ap-box");
    container.hide();
	container2.hide();
	container3.hide();
});

/*** Update sliders ***/
function updateTime(time){
  document.getElementById("currentTime").innerHTML = time;
  document.getElementById("currentTime").title = Math.round(parseFloat(time/24).toFixed(1)*10)/10+" dies aprox.";
}

function changeTime(clicked) {
    var day = document.getElementById('dayB');
    var week = document.getElementById('weekB');
    var range = document.getElementById('timeRangeid');
    if (selected == "day"){
    	if (clicked != "day"){
    		selected = "week";
    		day.style.background = "#CDE3F5";
    		week.style.background = "#9DC2E0";
    		document.getElementById("r2").innerHTML = "168h";
    		document.getElementById("r2").title = "7 dies";
    		range.min = "0";
    		range.max = "168";
    		range.value = (range.value)*7;
    		updateTime(range.value);
    	}
    } else {
    	if (clicked != "week"){
    		selected = "day";
    		week.style.background = "#CDE3F5";
    		day.style.background = "#9DC2E0";
    		document.getElementById("r2").innerHTML = "24h";
    		document.getElementById("r2").title = "1 dia";
    		range.min = "0";
    		range.max = "24";
    		range.value = "12";
			updateTime("12");
		}
    }
}

/*** Afegir/ Descartar ****/
function okay() {
	$("#aparell-box").hide();
	switch(selectedAp){
		case document.getElementById('ap1'):
			deselect('ap1');
			break;
		case document.getElementById('ap2'):
			deselect('ap2');
			break;
		case document.getElementById('ap3'):
			deselect('ap3');
			break;
		case document.getElementById('ap4'):
			deselect('ap4');
			break;
		case document.getElementById('ap5'):
			deselect('ap5');
			break;
		case document.getElementById('ap6'):
			deselect('ap6');
			break;
		case document.getElementById('ap7'):
			deselect('ap7');
			break;
		case document.getElementById('ap8'):
			deselect('ap8');
			break;
		case document.getElementById('ap9'):
			deselect('ap9');
			break;
		case document.getElementById('ap10'):
			deselect('ap10');
			break;
		case document.getElementById('ap11'):
			deselect('ap11');
			break;
		case document.getElementById('apC1'):
			deselect('apC1');
			break;
		case document.getElementById('apC2'):
			deselect('apC2');
			break;
		case document.getElementById('apC3'):
			deselect('apC3');
			break;
		case document.getElementById('apC4'):
			deselect('apC4');
			break;
		case document.getElementById('apC5'):
			deselect('apC5');
			break;
		case document.getElementById('apC6'):
			deselect('apC6');
			break;
		case document.getElementById('apL1'):
			deselect('apL1');
			break;
		case document.getElementById('apL2'):
			deselect('apL2');
			break;
		case document.getElementById('apD1'):
			deselect('apD1');
			break;
		case document.getElementById('apD2'):
			deselect('apD2');
			break;
		case document.getElementById('apD3'):
			deselect('apD3');
			break;
		case document.getElementById('apD4'):
			deselect('apD4');
			break;
		case document.getElementById('apS1'):
			deselect('apS1');
			break;
		case document.getElementById('apS2'):
			deselect('apS2');
			break;
		case document.getElementById('apS3'):
			deselect('apS3');
			break;
		case document.getElementById('apS4'):
			deselect('apS4');
			break;
		case document.getElementById('apS5'):
			deselect('apS5');
			break;
		case document.getElementById('apE1'):
			deselect('apE1');
			break;
		case document.getElementById('apE2'):
			deselect('apE2');
			break;
		case document.getElementById('apE3'):
			deselect('apE3');
			break;
	}
	switch(selectedRoom){
		case 'cuina':
      cuinaSelected();
			switch(cPos){
				case 1:
					switch (aparellSelected){
						case 'aire':
							ap1CId = 'aire';
							ap1CH = document.getElementById('timeRangeid').value;
							ap1CHT = selected;
							ap1Cnum = document.getElementById("unitat").innerHTML;
							ap1CKw = document.getElementById("potencia").value;
							document.getElementById("apC1").src="./img/dev/aireP.png";
							document.getElementById("apC1T").innerHTML="Aire Condicionat";
							document.getElementById("apC1").style.visibility="visible";
							document.getElementById("apC1T").style.visibility="visible";
							cPos++;
							break;
						case 'bombeta':
							ap1CId = 'bombeta';
							ap1CH = document.getElementById('timeRangeid').value;
							ap1CHT = selected;
							ap1Cnum = document.getElementById("unitat").innerHTML;
							ap1CKw = document.getElementById("potencia").value;
							document.getElementById("apC1").src="./img/dev/bombetaP.png";
							document.getElementById("apC1T").innerHTML="Bombeta";
							document.getElementById("apC1").style.visibility="visible";
							document.getElementById("apC1T").style.visibility="visible";
							cPos++;
							break;
						case 'forn':
							ap1CId = 'forn';
							ap1CH = document.getElementById('timeRangeid').value;
							ap1CHT = selected;
							ap1Cnum = document.getElementById("unitat").innerHTML;
							ap1CKw = document.getElementById("potencia").value;
							document.getElementById("apC1").src="./img/dev/fornP.png";
							document.getElementById("apC1T").innerHTML="Forn";
							document.getElementById("apC1").style.visibility="visible";
							document.getElementById("apC1T").style.visibility="visible";
							cPos++;
							break;
						case 'micro':
							ap1CId = 'micro';
							ap1CH = document.getElementById('timeRangeid').value;
							ap1CHT = selected;
							ap1Cnum = document.getElementById("unitat").innerHTML;
							ap1CKw = document.getElementById("potencia").value;
							document.getElementById("apC1").src="./img/dev/microonesP.png";
							document.getElementById("apC1T").innerHTML="Microones";
							document.getElementById("apC1").style.visibility="visible";
							document.getElementById("apC1T").style.visibility="visible";
							cPos++;
							break;
						case 'nevera':
							ap1CId = 'nevera';
							ap1CH = document.getElementById('timeRangeid').value;
							ap1CHT = selected;
							ap1Cnum = document.getElementById("unitat").innerHTML;
							ap1CKw = document.getElementById("potencia").value;
							document.getElementById("apC1").src="./img/dev/neveraP.png";
							document.getElementById("apC1T").innerHTML="Nevera";
							document.getElementById("apC1").style.visibility="visible";
							document.getElementById("apC1T").style.visibility="visible";
							cPos++;
							break;
						case 'ordinador':
							ap1CId = 'ordinador';
							ap1CH = document.getElementById('timeRangeid').value;
							ap1CHT = selected;
							ap1Cnum = document.getElementById("unitat").innerHTML;
							ap1CKw = document.getElementById("potencia").value;
							document.getElementById("apC1").src="./img/dev/pcP.png";
							document.getElementById("apC1T").innerHTML="Ordinador";
							document.getElementById("apC1").style.visibility="visible";
							document.getElementById("apC1T").style.visibility="visible";
							cPos++;
							break;
						case 'rentadora':
							ap1CId = 'rentadora';
							ap1CH = document.getElementById('timeRangeid').value;
							ap1CHT = selected;
							ap1Cnum = document.getElementById("unitat").innerHTML;
							ap1CKw = document.getElementById("potencia").value;
							document.getElementById("apC1").src="./img/dev/rentadoraP.png";
							document.getElementById("apC1T").innerHTML="Rentadora";
							document.getElementById("apC1").style.visibility="visible";
							document.getElementById("apC1T").style.visibility="visible";
							cPos++;
							break;
						case 'rentaplats':
							ap1CId = 'rentaplats';
							ap1CH = document.getElementById('timeRangeid').value;
							ap1CHT = selected;
							ap1Cnum = document.getElementById("unitat").innerHTML;
							ap1CKw = document.getElementById("potencia").value;
							document.getElementById("apC1").src="./img/dev/rentaplatsP.png";
							document.getElementById("apC1T").innerHTML="Rentaplats";
							document.getElementById("apC1").style.visibility="visible";
							document.getElementById("apC1T").style.visibility="visible";
							cPos++;
							break;
						case 'router':
							ap1CId = 'router';
							ap1CH = document.getElementById('timeRangeid').value;
							ap1CHT = selected;
							ap1Cnum = document.getElementById("unitat").innerHTML;
							ap1CKw = document.getElementById("potencia").value;
							document.getElementById("apC1").src="./img/dev/routerP.png";
							document.getElementById("apC1T").innerHTML="Router";
							document.getElementById("apC1").style.visibility="visible";
							document.getElementById("apC1T").style.visibility="visible";
							cPos++;
							break;
						case 'tele':
							ap1CId = 'tele';
							ap1CH = document.getElementById('timeRangeid').value;
							ap1CHT = selected;
							ap1Cnum = document.getElementById("unitat").innerHTML;
							ap1CKw = document.getElementById("potencia").value;
							document.getElementById("apC1").src="./img/dev/teleP.png";
							document.getElementById("apC1T").innerHTML="Televisió";
							document.getElementById("apC1").style.visibility="visible";
							document.getElementById("apC1T").style.visibility="visible";
							cPos++;
							break;
						case 'consola':
							ap1CId = 'consola';
							ap1CH = document.getElementById('timeRangeid').value;
							ap1CHT = selected;
							ap1Cnum = document.getElementById("unitat").innerHTML;
							ap1CKw = document.getElementById("potencia").value;
							document.getElementById("apC1").src="./img/dev/consolaP.png";
							document.getElementById("apC1T").innerHTML="Consola";
							document.getElementById("apC1").style.visibility="visible";
							document.getElementById("apC1T").style.visibility="visible";
							cPos++;
							break;
					}
					break;
				case 2:
					switch (aparellSelected){
						case 'aire':
							ap2CId = 'aire';
							ap2CH = document.getElementById('timeRangeid').value;
							ap2CHT = selected;
							ap2Cnum = document.getElementById("unitat").innerHTML;
							ap2CKw = document.getElementById("potencia").value;
							document.getElementById("apC2").src="./img/dev/aireP.png";
							document.getElementById("apC2T").innerHTML="Aire Condicionat";
							document.getElementById("apC2").style.visibility="visible";
							document.getElementById("apC2T").style.visibility="visible";
							cPos++;
							break;
						case 'bombeta':
							ap2CId = 'bombeta';
							ap2CH = document.getElementById('timeRangeid').value;
							ap2CHT = selected;
							ap2Cnum = document.getElementById("unitat").innerHTML;
							ap2CKw = document.getElementById("potencia").value;
							document.getElementById("apC2").src="./img/dev/bombetaP.png";
							document.getElementById("apC2T").innerHTML="Bombeta";
							document.getElementById("apC2").style.visibility="visible";
							document.getElementById("apC2T").style.visibility="visible";
							cPos++;
							break;
						case 'forn':
							ap2CId = 'forn';
							ap2CH = document.getElementById('timeRangeid').value;
							ap2CHT = selected;
							ap2Cnum = document.getElementById("unitat").innerHTML;
							ap2CKw = document.getElementById("potencia").value;
							document.getElementById("apC2").src="./img/dev/fornP.png";
							document.getElementById("apC2T").innerHTML="Forn";
							document.getElementById("apC2").style.visibility="visible";
							document.getElementById("apC2T").style.visibility="visible";
							cPos++;
							break;
						case 'micro':
							ap2CId = 'micro';
							ap2CH = document.getElementById('timeRangeid').value;
							ap2CHT = selected;
							ap2Cnum = document.getElementById("unitat").innerHTML;
							ap2CKw = document.getElementById("potencia").value;
							document.getElementById("apC2").src="./img/dev/microonesP.png";
							document.getElementById("apC2T").innerHTML="Microones";
							document.getElementById("apC2").style.visibility="visible";
							document.getElementById("apC2T").style.visibility="visible";
							cPos++;
							break;
						case 'nevera':
							ap2CId = 'nevera';
							ap2CH = document.getElementById('timeRangeid').value;
							ap2CHT = selected;
							ap2Cnum = document.getElementById("unitat").innerHTML;
							ap2CKw = document.getElementById("potencia").value;
							document.getElementById("apC2").src="./img/dev/neveraP.png";
							document.getElementById("apC2T").innerHTML="Nevera";
							document.getElementById("apC2").style.visibility="visible";
							document.getElementById("apC2T").style.visibility="visible";
							cPos++;
							break;
						case 'ordinador':
							ap2CId = 'ordinador';
							ap2CH = document.getElementById('timeRangeid').value;
							ap2CHT = selected;
							ap2Cnum = document.getElementById("unitat").innerHTML;
							ap2CKw = document.getElementById("potencia").value;
							document.getElementById("apC2").src="./img/dev/pcP.png";
							document.getElementById("apC2T").innerHTML="Ordinador";
							document.getElementById("apC2").style.visibility="visible";
							document.getElementById("apC2T").style.visibility="visible";
							cPos++;
							break;
						case 'rentadora':
							ap2CId = 'rentadora';
							ap2CH = document.getElementById('timeRangeid').value;
							ap2CHT = selected;
							ap2Cnum = document.getElementById("unitat").innerHTML;
							ap2CKw = document.getElementById("potencia").value;
							document.getElementById("apC2").src="./img/dev/rentadoraP.png";
							document.getElementById("apC2T").innerHTML="Rentadora";
							document.getElementById("apC2").style.visibility="visible";
							document.getElementById("apC2T").style.visibility="visible";
							cPos++;
							break;
						case 'rentaplats':
							ap2CId = 'rentaplats';
							ap2CH = document.getElementById('timeRangeid').value;
							ap2CHT = selected;
							ap2Cnum = document.getElementById("unitat").innerHTML;
							ap2CKw = document.getElementById("potencia").value;
							document.getElementById("apC2").src="./img/dev/rentaplatsP.png";
							document.getElementById("apC2T").innerHTML="Rentaplats";
							document.getElementById("apC2").style.visibility="visible";
							document.getElementById("apC2T").style.visibility="visible";
							cPos++;
							break;
						case 'router':
							ap2CId = 'router';
							ap2CH = document.getElementById('timeRangeid').value;
							ap2CHT = selected;
							ap2Cnum = document.getElementById("unitat").innerHTML;
							ap2CKw = document.getElementById("potencia").value;
							document.getElementById("apC2").src="./img/dev/routerP.png";
							document.getElementById("apC2T").innerHTML="Router";
							document.getElementById("apC2").style.visibility="visible";
							document.getElementById("apC2T").style.visibility="visible";
							cPos++;
							break;
						case 'tele':
							ap2CId = 'tele';
							ap2CH = document.getElementById('timeRangeid').value;
							ap2CHT = selected;
							ap2Cnum = document.getElementById("unitat").innerHTML;
							ap2CKw = document.getElementById("potencia").value;
							document.getElementById("apC2").src="./img/dev/teleP.png";
							document.getElementById("apC2T").innerHTML="Televisió";
							document.getElementById("apC2").style.visibility="visible";
							document.getElementById("apC2T").style.visibility="visible";
							cPos++;
							break;
						case 'consola':
							ap2CId = 'consola';
							ap2CH = document.getElementById('timeRangeid').value;
							ap2CHT = selected;
							ap2Cnum = document.getElementById("unitat").innerHTML;
							ap2CKw = document.getElementById("potencia").value;
							document.getElementById("apC2").src="./img/dev/consolaP.png";
							document.getElementById("apC2T").innerHTML="Consola";
							document.getElementById("apC2").style.visibility="visible";
							document.getElementById("apC2T").style.visibility="visible";
							cPos++;
							break;
					}
					break;
				case 3:
					switch (aparellSelected){
						case 'aire':
							ap3CId = 'aire';
							ap3CH = document.getElementById('timeRangeid').value;
							ap3CHT = selected;
							ap3Cnum = document.getElementById("unitat").innerHTML;
							ap3CKw = document.getElementById("potencia").value;
							document.getElementById("apC3").src="./img/dev/aireP.png";
							document.getElementById("apC3T").innerHTML="Aire Condicionat";
							document.getElementById("apC3").style.visibility="visible";
							document.getElementById("apC3T").style.visibility="visible";
							cPos++;
							break;
						case 'bombeta':
							ap3CId = 'bombeta';
							ap3CH = document.getElementById('timeRangeid').value;
							ap3CHT = selected;
							ap3Cnum = document.getElementById("unitat").innerHTML;
							ap3CKw = document.getElementById("potencia").value;
							document.getElementById("apC3").src="./img/dev/bombetaP.png";
							document.getElementById("apC3T").innerHTML="Bombeta";
							document.getElementById("apC3").style.visibility="visible";
							document.getElementById("apC3T").style.visibility="visible";
							cPos++;
							break;
						case 'forn':
							ap3CId = 'forn';
							ap3CH = document.getElementById('timeRangeid').value;
							ap3CHT = selected;
							ap3Cnum = document.getElementById("unitat").innerHTML;
							ap3CKw = document.getElementById("potencia").value;
							document.getElementById("apC3").src="./img/dev/fornP.png";
							document.getElementById("apC3T").innerHTML="Forn";
							document.getElementById("apC3").style.visibility="visible";
							document.getElementById("apC3T").style.visibility="visible";
							cPos++;
							break;
						case 'micro':
							ap3CId = 'micro';
							ap3CH = document.getElementById('timeRangeid').value;
							ap3CHT = selected;
							ap3Cnum = document.getElementById("unitat").innerHTML;
							ap3CKw = document.getElementById("potencia").value;
							document.getElementById("apC3").src="./img/dev/microonesP.png";
							document.getElementById("apC3T").innerHTML="Microones";
							document.getElementById("apC3").style.visibility="visible";
							document.getElementById("apC3T").style.visibility="visible";
							cPos++;
							break;
						case 'nevera':
							ap3CId = 'nevera';
							ap3CH = document.getElementById('timeRangeid').value;
							ap3CHT = selected;
							ap3Cnum = document.getElementById("unitat").innerHTML;
							ap3CKw = document.getElementById("potencia").value;
							document.getElementById("apC3").src="./img/dev/neveraP.png";
							document.getElementById("apC3T").innerHTML="Nevera";
							document.getElementById("apC3").style.visibility="visible";
							document.getElementById("apC3T").style.visibility="visible";
							cPos++;
							break;
						case 'ordinador':
							ap3CId = 'ordinador';
							ap3CH = document.getElementById('timeRangeid').value;
							ap3CHT = selected;
							ap3Cnum = document.getElementById("unitat").innerHTML;
							ap3CKw = document.getElementById("potencia").value;
							document.getElementById("apC3").src="./img/dev/pcP.png";
							document.getElementById("apC3T").innerHTML="Ordinador";
							document.getElementById("apC3").style.visibility="visible";
							document.getElementById("apC3T").style.visibility="visible";
							cPos++;
							break;
						case 'rentadora':
							ap3CId = 'rentadora';
							ap3CH = document.getElementById('timeRangeid').value;
							ap3CHT = selected;
							ap3Cnum = document.getElementById("unitat").innerHTML;
							ap3CKw = document.getElementById("potencia").value;
							document.getElementById("apC3").src="./img/dev/rentadoraP.png";
							document.getElementById("apC3T").innerHTML="Rentadora";
							document.getElementById("apC3").style.visibility="visible";
							document.getElementById("apC3T").style.visibility="visible";
							cPos++;
							break;
						case 'rentaplats':
							ap3CId = 'rentaplats';
							ap3CH = document.getElementById('timeRangeid').value;
							ap3CHT = selected;
							ap3Cnum = document.getElementById("unitat").innerHTML;
							ap3CKw = document.getElementById("potencia").value;
							document.getElementById("apC3").src="./img/dev/rentaplatsP.png";
							document.getElementById("apC3T").innerHTML="Rentaplats";
							document.getElementById("apC3").style.visibility="visible";
							document.getElementById("apC3T").style.visibility="visible";
							cPos++;
							break;
						case 'router':
							ap3CId = 'router';
							ap3CH = document.getElementById('timeRangeid').value;
							ap3CHT = selected;
							ap3Cnum = document.getElementById("unitat").innerHTML;
							ap3CKw = document.getElementById("potencia").value;
							document.getElementById("apC3").src="./img/dev/routerP.png";
							document.getElementById("apC3T").innerHTML="Router";
							document.getElementById("apC3").style.visibility="visible";
							document.getElementById("apC3T").style.visibility="visible";
							cPos++;
							break;
						case 'tele':
							ap3CId = 'tele';
							ap3CH = document.getElementById('timeRangeid').value;
							ap3CHT = selected;
							ap3Cnum = document.getElementById("unitat").innerHTML;
							ap3CKw = document.getElementById("potencia").value;
							document.getElementById("apC3").src="./img/dev/teleP.png";
							document.getElementById("apC3T").innerHTML="Televisió";
							document.getElementById("apC3").style.visibility="visible";
							document.getElementById("apC3T").style.visibility="visible";
							cPos++;
							break;
						case 'consola':
							ap3CId = 'consola';
							ap3CH = document.getElementById('timeRangeid').value;
							ap3CHT = selected;
							ap3Cnum = document.getElementById("unitat").innerHTML;
							ap3CKw = document.getElementById("potencia").value;
							document.getElementById("apC3").src="./img/dev/consolaP.png";
							document.getElementById("apC3T").innerHTML="Consola";
							document.getElementById("apC3").style.visibility="visible";
							document.getElementById("apC3T").style.visibility="visible";
							cPos++;
							break;
					}
					break;
				case 4:
					switch (aparellSelected){
						case 'aire':
							ap4CId = 'aire';
							ap4CH = document.getElementById('timeRangeid').value;
							ap4CHT = selected;
							ap4Cnum = document.getElementById("unitat").innerHTML;
							ap4CKw = document.getElementById("potencia").value;
							document.getElementById("apC4").src="./img/dev/aireP.png";
							document.getElementById("apC4T").innerHTML="Aire Condicionat";
							document.getElementById("apC4").style.visibility="visible";
							document.getElementById("apC4T").style.visibility="visible";
							cPos++;
							break;
						case 'bombeta':
							ap4CId = 'bombeta';
							ap4CH = document.getElementById('timeRangeid').value;
							ap4CHT = selected;
							ap4Cnum = document.getElementById("unitat").innerHTML;
							ap4CKw = document.getElementById("potencia").value;
							document.getElementById("apC4").src="./img/dev/bombetaP.png";
							document.getElementById("apC4T").innerHTML="Bombeta";
							document.getElementById("apC4").style.visibility="visible";
							document.getElementById("apC4T").style.visibility="visible";
							cPos++;
							break;
						case 'forn':
							ap4CId = 'forn';
							ap4CH = document.getElementById('timeRangeid').value;
							ap4CHT = selected;
							ap4Cnum = document.getElementById("unitat").innerHTML;
							ap4CKw = document.getElementById("potencia").value;
							document.getElementById("apC4").src="./img/dev/fornP.png";
							document.getElementById("apC4T").innerHTML="Forn";
							document.getElementById("apC4").style.visibility="visible";
							document.getElementById("apC4T").style.visibility="visible";
							cPos++;
							break;
						case 'micro':
							ap4CId = 'micro';
							ap4CH = document.getElementById('timeRangeid').value;
							ap4CHT = selected;
							ap4Cnum = document.getElementById("unitat").innerHTML;
							ap4CKw = document.getElementById("potencia").value;
							document.getElementById("apC4").src="./img/dev/microonesP.png";
							document.getElementById("apC4T").innerHTML="Microones";
							document.getElementById("apC4").style.visibility="visible";
							document.getElementById("apC4T").style.visibility="visible";
							cPos++;
							break;
						case 'nevera':
							ap4CId = 'nevera';
							ap4CH = document.getElementById('timeRangeid').value;
							ap4CHT = selected;
							ap4Cnum = document.getElementById("unitat").innerHTML;
							ap4CKw = document.getElementById("potencia").value;
							document.getElementById("apC4").src="./img/dev/neveraP.png";
							document.getElementById("apC4T").innerHTML="Nevera";
							document.getElementById("apC4").style.visibility="visible";
							document.getElementById("apC4T").style.visibility="visible";
							cPos++;
							break;
						case 'ordinador':
							ap4CId = 'ordinador';
							ap4CH = document.getElementById('timeRangeid').value;
							ap4CHT = selected;
							ap4Cnum = document.getElementById("unitat").innerHTML;
							ap4CKw = document.getElementById("potencia").value;
							document.getElementById("apC4").src="./img/dev/pcP.png";
							document.getElementById("apC4T").innerHTML="Ordinador";
							document.getElementById("apC4").style.visibility="visible";
							document.getElementById("apC4T").style.visibility="visible";
							cPos++;
							break;
						case 'rentadora':
							ap4CId = 'rentadora';
							ap4CH = document.getElementById('timeRangeid').value;
							ap4CHT = selected;
							ap4Cnum = document.getElementById("unitat").innerHTML;
							ap4CKw = document.getElementById("potencia").value;
							document.getElementById("apC4").src="./img/dev/rentadoraP.png";
							document.getElementById("apC4T").innerHTML="Rentadora";
							document.getElementById("apC4").style.visibility="visible";
							document.getElementById("apC4T").style.visibility="visible";
							cPos++;
							break;
						case 'rentaplats':
							ap4CId = 'rentaplats';
							ap4CH = document.getElementById('timeRangeid').value;
							ap4CHT = selected;
							ap4Cnum = document.getElementById("unitat").innerHTML;
							ap4CKw = document.getElementById("potencia").value;
							document.getElementById("apC4").src="./img/dev/rentaplatsP.png";
							document.getElementById("apC4T").innerHTML="Rentaplats";
							document.getElementById("apC4").style.visibility="visible";
							document.getElementById("apC4T").style.visibility="visible";
							cPos++;
							break;
						case 'router':
							ap4CId = 'router';
							ap4CH = document.getElementById('timeRangeid').value;
							ap4CHT = selected;
							ap4Cnum = document.getElementById("unitat").innerHTML;
							ap4CKw = document.getElementById("potencia").value;
							document.getElementById("apC4").src="./img/dev/routerP.png";
							document.getElementById("apC4T").innerHTML="Router";
							document.getElementById("apC4").style.visibility="visible";
							document.getElementById("apC4T").style.visibility="visible";
							cPos++;
							break;
						case 'tele':
							ap4CId = 'tele';
							ap4CH = document.getElementById('timeRangeid').value;
							ap4CHT = selected;
							ap4Cnum = document.getElementById("unitat").innerHTML;
							ap4CKw = document.getElementById("potencia").value;
							document.getElementById("apC4").src="./img/dev/teleP.png";
							document.getElementById("apC4T").innerHTML="Televisió";
							document.getElementById("apC4").style.visibility="visible";
							document.getElementById("apC4T").style.visibility="visible";
							cPos++;
							break;
						case 'consola':
							ap4CId = 'consola';
							ap4CH = document.getElementById('timeRangeid').value;
							ap4CHT = selected;
							ap4Cnum = document.getElementById("unitat").innerHTML;
							ap4CKw = document.getElementById("potencia").value;
							document.getElementById("apC4").src="./img/dev/consolaP.png";
							document.getElementById("apC4T").innerHTML="Consola";
							document.getElementById("apC4").style.visibility="visible";
							document.getElementById("apC4T").style.visibility="visible";
							cPos++;
							break;
					}
					break;
				case 5:
					switch (aparellSelected){
						case 'aire':
							ap5CId = 'aire';
							ap5CH = document.getElementById('timeRangeid').value;
							ap5CHT = selected;
							ap5Cnum = document.getElementById("unitat").innerHTML;
							ap5CKw = document.getElementById("potencia").value;
							document.getElementById("apC5").src="./img/dev/aireP.png";
							document.getElementById("apC5T").innerHTML="Aire Condicionat";
							document.getElementById("apC5").style.visibility="visible";
							document.getElementById("apC5T").style.visibility="visible";
							cPos++;
							break;
						case 'bombeta':
							ap5CId = 'bombeta';
							ap5CH = document.getElementById('timeRangeid').value;
							ap5CHT = selected;
							ap5Cnum = document.getElementById("unitat").innerHTML;
							ap5CKw = document.getElementById("potencia").value;
							document.getElementById("apC5").src="./img/dev/bombetaP.png";
							document.getElementById("apC5T").innerHTML="Bombeta";
							document.getElementById("apC5").style.visibility="visible";
							document.getElementById("apC5T").style.visibility="visible";
							cPos++;
							break;
						case 'forn':
							ap5CId = 'forn';
							ap5CH = document.getElementById('timeRangeid').value;
							ap5CHT = selected;
							ap5Cnum = document.getElementById("unitat").innerHTML;
							ap5CKw = document.getElementById("potencia").value;
							document.getElementById("apC5").src="./img/dev/fornP.png";
							document.getElementById("apC5T").innerHTML="Forn";
							document.getElementById("apC5").style.visibility="visible";
							document.getElementById("apC5T").style.visibility="visible";
							cPos++;
							break;
						case 'micro':
							ap5CId = 'micro';
							ap5CH = document.getElementById('timeRangeid').value;
							ap5CHT = selected;
							ap5Cnum = document.getElementById("unitat").innerHTML;
							ap5CKw = document.getElementById("potencia").value;
							document.getElementById("apC5").src="./img/dev/microonesP.png";
							document.getElementById("apC5T").innerHTML="Microones";
							document.getElementById("apC5").style.visibility="visible";
							document.getElementById("apC5T").style.visibility="visible";
							cPos++;
							break;
						case 'nevera':
							ap5CId = 'nevera';
							ap5CH = document.getElementById('timeRangeid').value;
							ap5CHT = selected;
							ap5Cnum = document.getElementById("unitat").innerHTML;
							ap5CKw = document.getElementById("potencia").value;
							document.getElementById("apC5").src="./img/dev/neveraP.png";
							document.getElementById("apC5T").innerHTML="Nevera";
							document.getElementById("apC5").style.visibility="visible";
							document.getElementById("apC5T").style.visibility="visible";
							cPos++;
							break;
						case 'ordinador':
							ap5CId = 'ordinador';
							ap5CH = document.getElementById('timeRangeid').value;
							ap5CHT = selected;
							ap5Cnum = document.getElementById("unitat").innerHTML;
							ap5CKw = document.getElementById("potencia").value;
							document.getElementById("apC5").src="./img/dev/pcP.png";
							document.getElementById("apC5T").innerHTML="Ordinador";
							document.getElementById("apC5").style.visibility="visible";
							document.getElementById("apC5T").style.visibility="visible";
							cPos++;
							break;
						case 'rentadora':
							ap5CId = 'rentadora';
							ap5CH = document.getElementById('timeRangeid').value;
							ap5CHT = selected;
							ap5Cnum = document.getElementById("unitat").innerHTML;
							ap5CKw = document.getElementById("potencia").value;
							document.getElementById("apC5").src="./img/dev/rentadoraP.png";
							document.getElementById("apC5T").innerHTML="Rentadora";
							document.getElementById("apC5").style.visibility="visible";
							document.getElementById("apC5T").style.visibility="visible";
							cPos++;
							break;
						case 'rentaplats':
							ap5CId = 'rentaplats';
							ap5CH = document.getElementById('timeRangeid').value;
							ap5CHT = selected;
							ap5Cnum = document.getElementById("unitat").innerHTML;
							ap5CKw = document.getElementById("potencia").value;
							document.getElementById("apC5").src="./img/dev/rentaplatsP.png";
							document.getElementById("apC5T").innerHTML="Rentaplats";
							document.getElementById("apC5").style.visibility="visible";
							document.getElementById("apC5T").style.visibility="visible";
							cPos++;
							break;
						case 'router':
							ap5CId = 'router';
							ap5CH = document.getElementById('timeRangeid').value;
							ap5CHT = selected;
							ap5Cnum = document.getElementById("unitat").innerHTML;
							ap5CKw = document.getElementById("potencia").value;
							document.getElementById("apC5").src="./img/dev/routerP.png";
							document.getElementById("apC5T").innerHTML="Router";
							document.getElementById("apC5").style.visibility="visible";
							document.getElementById("apC5T").style.visibility="visible";
							cPos++;
							break;
						case 'tele':
							ap5CId = 'tele';
							ap5CH = document.getElementById('timeRangeid').value;
							ap5CHT = selected;
							ap5Cnum = document.getElementById("unitat").innerHTML;
							ap5CKw = document.getElementById("potencia").value;
							document.getElementById("apC5").src="./img/dev/teleP.png";
							document.getElementById("apC5T").innerHTML="Televisió";
							document.getElementById("apC5").style.visibility="visible";
							document.getElementById("apC5T").style.visibility="visible";
							cPos++;
							break;
						case 'consola':
							ap5CId = 'consola';
							ap5CH = document.getElementById('timeRangeid').value;
							ap5CHT = selected;
							ap5Cnum = document.getElementById("unitat").innerHTML;
							ap5CKw = document.getElementById("potencia").value;
							document.getElementById("apC5").src="./img/dev/consolaP.png";
							document.getElementById("apC5T").innerHTML="Consola";
							document.getElementById("apC5").style.visibility="visible";
							document.getElementById("apC5T").style.visibility="visible";
							cPos++;
							break;
					}
					break;
				case 6:
					switch (aparellSelected){
						case 'aire':
							ap6CId = 'aire';
							ap6CH = document.getElementById('timeRangeid').value;
							ap6CHT = selected;
							ap6Cnum = document.getElementById("unitat").innerHTML;
							ap6CKw = document.getElementById("potencia").value;
							document.getElementById("apC6").src="./img/dev/aireP.png";
							document.getElementById("apC6T").innerHTML="Aire Condicionat";
							document.getElementById("apC6").style.visibility="visible";
							document.getElementById("apC6T").style.visibility="visible";
							cPos++;
							break;
						case 'bombeta':
							ap6CId = 'bombeta';
							ap6CH = document.getElementById('timeRangeid').value;
							ap6CHT = selected;
							ap6Cnum = document.getElementById("unitat").innerHTML;
							ap6CKw = document.getElementById("potencia").value;
							document.getElementById("apC6").src="./img/dev/bombetaP.png";
							document.getElementById("apC6T").innerHTML="Bombeta";
							document.getElementById("apC6").style.visibility="visible";
							document.getElementById("apC6T").style.visibility="visible";
							cPos++;
							break;
						case 'forn':
							ap6CId = 'forn';
							ap6CH = document.getElementById('timeRangeid').value;
							ap6CHT = selected;
							ap6Cnum = document.getElementById("unitat").innerHTML;
							ap6CKw = document.getElementById("potencia").value;
							document.getElementById("apC6").src="./img/dev/fornP.png";
							document.getElementById("apC6T").innerHTML="Forn";
							document.getElementById("apC6").style.visibility="visible";
							document.getElementById("apC6T").style.visibility="visible";
							cPos++;
							break;
						case 'micro':
							ap6CId = 'micro';
							ap6CH = document.getElementById('timeRangeid').value;
							ap6CHT = selected;
							ap6Cnum = document.getElementById("unitat").innerHTML;
							ap6CKw = document.getElementById("potencia").value;
							document.getElementById("apC6").src="./img/dev/microonesP.png";
							document.getElementById("apC6T").innerHTML="Microones";
							document.getElementById("apC6").style.visibility="visible";
							document.getElementById("apC6T").style.visibility="visible";
							cPos++;
							break;
						case 'nevera':
							ap6CId = 'nevera';
							ap6CH = document.getElementById('timeRangeid').value;
							ap6CHT = selected;
							ap6Cnum = document.getElementById("unitat").innerHTML;
							ap6CKw = document.getElementById("potencia").value;
							document.getElementById("apC6").src="./img/dev/neveraP.png";
							document.getElementById("apC6T").innerHTML="Nevera";
							document.getElementById("apC6").style.visibility="visible";
							document.getElementById("apC6T").style.visibility="visible";
							cPos++;
							break;
						case 'ordinador':
							ap6CId = 'ordinador';
							ap6CH = document.getElementById('timeRangeid').value;
							ap6CHT = selected;
							ap6Cnum = document.getElementById("unitat").innerHTML;
							ap6CKw = document.getElementById("potencia").value;
							document.getElementById("apC6").src="./img/dev/pcP.png";
							document.getElementById("apC6T").innerHTML="Ordinador";
							document.getElementById("apC6").style.visibility="visible";
							document.getElementById("apC6T").style.visibility="visible";
							cPos++;
							break;
						case 'rentadora':
							ap6CId = 'rentadora';
							ap6CH = document.getElementById('timeRangeid').value;
							ap6CHT = selected;
							ap6Cnum = document.getElementById("unitat").innerHTML;
							ap6CKw = document.getElementById("potencia").value;
							document.getElementById("apC6").src="./img/dev/rentadoraP.png";
							document.getElementById("apC6T").innerHTML="Rentadora";
							document.getElementById("apC6").style.visibility="visible";
							document.getElementById("apC6T").style.visibility="visible";
							cPos++;
							break;
						case 'rentaplats':
							ap6CId = 'rentaplats';
							ap6CH = document.getElementById('timeRangeid').value;
							ap6CHT = selected;
							ap6Cnum = document.getElementById("unitat").innerHTML;
							ap6CKw = document.getElementById("potencia").value;
							document.getElementById("apC6").src="./img/dev/rentaplatsP.png";
							document.getElementById("apC6T").innerHTML="Rentaplats";
							document.getElementById("apC6").style.visibility="visible";
							document.getElementById("apC6T").style.visibility="visible";
							cPos++;
							break;
						case 'router':
							ap6CId = 'router';
							ap6CH = document.getElementById('timeRangeid').value;
							ap6CHT = selected;
							ap6Cnum = document.getElementById("unitat").innerHTML;
							ap6CKw = document.getElementById("potencia").value;
							document.getElementById("apC6").src="./img/dev/routerP.png";
							document.getElementById("apC6T").innerHTML="Router";
							document.getElementById("apC6").style.visibility="visible";
							document.getElementById("apC6T").style.visibility="visible";
							cPos++;
							break;
						case 'tele':
							ap6CId = 'tele';
							ap6CH = document.getElementById('timeRangeid').value;
							ap6CHT = selected;
							ap6Cnum = document.getElementById("unitat").innerHTML;
							ap6CKw = document.getElementById("potencia").value;
							document.getElementById("apC6").src="./img/dev/teleP.png";
							document.getElementById("apC6T").innerHTML="Televisió";
							document.getElementById("apC6").style.visibility="visible";
							document.getElementById("apC6T").style.visibility="visible";
							cPos++;
							break;
						case 'consola':
							ap6CId = 'consola';
							ap6CH = document.getElementById('timeRangeid').value;
							ap6CHT = selected;
							ap6Cnum = document.getElementById("unitat").innerHTML;
							ap6CKw = document.getElementById("potencia").value;
							document.getElementById("apC6").src="./img/dev/consolaP.png";
							document.getElementById("apC6T").innerHTML="Consola";
							document.getElementById("apC6").style.visibility="visible";
							document.getElementById("apC6T").style.visibility="visible";
							cPos++;
							break;
					}
					break;
			}
			break;
		case 'lavabo':
    lavaboSelected();
			switch(lPos){
				case 1:
					switch (aparellSelected){
						case 'aire':
							ap1LId = 'aire';
							ap1LH = document.getElementById('timeRangeid').value;
							ap1LHT = selected;
							ap1Lnum = document.getElementById("unitat").innerHTML;
							ap1LKw = document.getElementById("potencia").value;
							document.getElementById("apL1").src="./img/dev/aireP.png";
							document.getElementById("apL1T").innerHTML="Aire Condicionat";
							document.getElementById("apL1").style.visibility="visible";
							document.getElementById("apL1T").style.visibility="visible";
							lPos++;
							break;
						case 'bombeta':
							ap1LId = 'bombeta';
							ap1LH = document.getElementById('timeRangeid').value;
							ap1LHT = selected;
							ap1Lnum = document.getElementById("unitat").innerHTML;
							ap1LKw = document.getElementById("potencia").value;
							document.getElementById("apL1").src="./img/dev/bombetaP.png";
							document.getElementById("apL1T").innerHTML="Bombeta";
							document.getElementById("apL1").style.visibility="visible";
							document.getElementById("apL1T").style.visibility="visible";
							lPos++;
							break;
						case 'forn':
							ap1LId = 'forn';
							ap1LH = document.getElementById('timeRangeid').value;
							ap1LHT = selected;
							ap1Lnum = document.getElementById("unitat").innerHTML;
							ap1LKw = document.getElementById("potencia").value;
							document.getElementById("apL1").src="./img/dev/fornP.png";
							document.getElementById("apL1T").innerHTML="Forn";
							document.getElementById("apL1").style.visibility="visible";
							document.getElementById("apL1T").style.visibility="visible";
							lPos++;
							break;
						case 'micro':
							ap1LId = 'micro';
							ap1LH = document.getElementById('timeRangeid').value;
							ap1LHT = selected;
							ap1Lnum = document.getElementById("unitat").innerHTML;
							ap1LKw = document.getElementById("potencia").value;
							document.getElementById("apL1").src="./img/dev/microonesP.png";
							document.getElementById("apL1T").innerHTML="Microones";
							document.getElementById("apL1").style.visibility="visible";
							document.getElementById("apL1T").style.visibility="visible";
							lPos++;
							break;
						case 'nevera':
							ap1LId = 'nevera';
							ap1LH = document.getElementById('timeRangeid').value;
							ap1LHT = selected;
							ap1Lnum = document.getElementById("unitat").innerHTML;
							ap1LKw = document.getElementById("potencia").value;
							document.getElementById("apL1").src="./img/dev/neveraP.png";
							document.getElementById("apL1T").innerHTML="Nevera";
							document.getElementById("apL1").style.visibility="visible";
							document.getElementById("apL1T").style.visibility="visible";
							lPos++;
							break;
						case 'ordinador':
							ap1LId = 'ordinador';
							ap1LH = document.getElementById('timeRangeid').value;
							ap1LHT = selected;
							ap1Lnum = document.getElementById("unitat").innerHTML;
							ap1LKw = document.getElementById("potencia").value;
							document.getElementById("apL1").src="./img/dev/pcP.png";
							document.getElementById("apL1T").innerHTML="Ordinador";
							document.getElementById("apL1").style.visibility="visible";
							document.getElementById("apL1T").style.visibility="visible";
							lPos++;
							break;
						case 'rentadora':
							ap1LId = 'rentadora';
							ap1LH = document.getElementById('timeRangeid').value;
							ap1LHT = selected;
							ap1Lnum = document.getElementById("unitat").innerHTML;
							ap1LKw = document.getElementById("potencia").value;
							document.getElementById("apL1").src="./img/dev/rentadoraP.png";
							document.getElementById("apL1T").innerHTML="Rentadora";
							document.getElementById("apL1").style.visibility="visible";
							document.getElementById("apL1T").style.visibility="visible";
							lPos++;
							break;
						case 'rentaplats':
							ap1LId = 'rentaplats';
							ap1LH = document.getElementById('timeRangeid').value;
							ap1LHT = selected;
							ap1Lnum = document.getElementById("unitat").innerHTML;
							ap1LKw = document.getElementById("potencia").value;
							document.getElementById("apL1").src="./img/dev/rentaplatsP.png";
							document.getElementById("apL1T").innerHTML="Rentaplats";
							document.getElementById("apL1").style.visibility="visible";
							document.getElementById("apL1T").style.visibility="visible";
							lPos++;
							break;
						case 'router':
							ap1LId = 'router';
							ap1LH = document.getElementById('timeRangeid').value;
							ap1LHT = selected;
							ap1Lnum = document.getElementById("unitat").innerHTML;
							ap1LKw = document.getElementById("potencia").value;
							document.getElementById("apL1").src="./img/dev/routerP.png";
							document.getElementById("apL1T").innerHTML="Router";
							document.getElementById("apL1").style.visibility="visible";
							document.getElementById("apL1T").style.visibility="visible";
							lPos++;
							break;
						case 'tele':
							ap1LId = 'tele';
							ap1LH = document.getElementById('timeRangeid').value;
							ap1LHT = selected;
							ap1Lnum = document.getElementById("unitat").innerHTML;
							ap1LKw = document.getElementById("potencia").value;
							document.getElementById("apL1").src="./img/dev/teleP.png";
							document.getElementById("apL1T").innerHTML="Televisió";
							document.getElementById("apL1").style.visibility="visible";
							document.getElementById("apL1T").style.visibility="visible";
							lPos++;
							break;
						case 'consola':
							ap1LId = 'consola';
							ap1LH = document.getElementById('timeRangeid').value;
							ap1LHT = selected;
							ap1Lnum = document.getElementById("unitat").innerHTML;
							ap1LKw = document.getElementById("potencia").value;
							document.getElementById("apL1").src="./img/dev/consolaP.png";
							document.getElementById("apL1T").innerHTML="Consola";
							document.getElementById("apL1").style.visibility="visible";
							document.getElementById("apL1T").style.visibility="visible";
							lPos++;
							break;
					}
					break;
				case 2:
					switch (aparellSelected){
						case 'aire':
							ap2LId = 'aire';
							ap2LH = document.getElementById('timeRangeid').value;
							ap2LHT = selected;
							ap2Lnum = document.getElementById("unitat").innerHTML;
							ap2LKw = document.getElementById("potencia").value;
							document.getElementById("apL2").src="./img/dev/aireP.png";
							document.getElementById("apL2T").innerHTML="Aire Condicionat";
							document.getElementById("apL2").style.visibility="visible";
							document.getElementById("apL2T").style.visibility="visible";
							lPos++;
							break;
						case 'bombeta':
							ap2LId = 'bombeta';
							ap2LH = document.getElementById('timeRangeid').value;
							ap2LHT = selected;
							ap2Lnum = document.getElementById("unitat").innerHTML;
							ap2LKw = document.getElementById("potencia").value;
							document.getElementById("apL2").src="./img/dev/bombetaP.png";
							document.getElementById("apL2T").innerHTML="Bombeta";
							document.getElementById("apL2").style.visibility="visible";
							document.getElementById("apL2T").style.visibility="visible";
							lPos++;
							break;
						case 'forn':
							ap2LId = 'forn';
							ap2LH = document.getElementById('timeRangeid').value;
							ap2LHT = selected;
							ap2Lnum = document.getElementById("unitat").innerHTML;
							ap2LKw = document.getElementById("potencia").value;
							document.getElementById("apL2").src="./img/dev/fornP.png";
							document.getElementById("apL2T").innerHTML="Forn";
							document.getElementById("apL2").style.visibility="visible";
							document.getElementById("apL2T").style.visibility="visible";
							lPos++;
							break;
						case 'micro':
							ap2LId = 'micro';
							ap2LH = document.getElementById('timeRangeid').value;
							ap2LHT = selected;
							ap2Lnum = document.getElementById("unitat").innerHTML;
							ap2LKw = document.getElementById("potencia").value;
							document.getElementById("apL2").src="./img/dev/microonesP.png";
							document.getElementById("apL2T").innerHTML="Microones";
							document.getElementById("apL2").style.visibility="visible";
							document.getElementById("apL2T").style.visibility="visible";
							lPos++;
							break;
						case 'nevera':
							ap2LId = 'nevera';
							ap2LH = document.getElementById('timeRangeid').value;
							ap2LHT = selected;
							ap2Lnum = document.getElementById("unitat").innerHTML;
							ap2LKw = document.getElementById("potencia").value;
							document.getElementById("apL2").src="./img/dev/neveraP.png";
							document.getElementById("apL2T").innerHTML="Nevera";
							document.getElementById("apL2").style.visibility="visible";
							document.getElementById("apL2T").style.visibility="visible";
							lPos++;
							break;
						case 'ordinador':
							ap2LId = 'ordinador';
							ap2LH = document.getElementById('timeRangeid').value;
							ap2LHT = selected;
							ap2Lnum = document.getElementById("unitat").innerHTML;
							ap2LKw = document.getElementById("potencia").value;
							document.getElementById("apL2").src="./img/dev/pcP.png";
							document.getElementById("apL2T").innerHTML="Ordinador";
							document.getElementById("apL2").style.visibility="visible";
							document.getElementById("apL2T").style.visibility="visible";
							lPos++;
							break;
						case 'rentadora':
							ap2LId = 'rentadora';
							ap2LH = document.getElementById('timeRangeid').value;
							ap2LHT = selected;
							ap2Lnum = document.getElementById("unitat").innerHTML;
							ap2LKw = document.getElementById("potencia").value;
							document.getElementById("apL2").src="./img/dev/rentadoraP.png";
							document.getElementById("apL2T").innerHTML="Rentadora";
							document.getElementById("apL2").style.visibility="visible";
							document.getElementById("apL2T").style.visibility="visible";
							lPos++;
							break;
						case 'rentaplats':
							ap2LId = 'rentaplats';
							ap2LH = document.getElementById('timeRangeid').value;
							ap2LHT = selected;
							ap2Lnum = document.getElementById("unitat").innerHTML;
							ap2LKw = document.getElementById("potencia").value;
							document.getElementById("apL2").src="./img/dev/rentaplatsP.png";
							document.getElementById("apL2T").innerHTML="Rentaplats";
							document.getElementById("apL2").style.visibility="visible";
							document.getElementById("apL2T").style.visibility="visible";
							lPos++;
							break;
						case 'router':
							ap2LId = 'router';
							ap2LH = document.getElementById('timeRangeid').value;
							ap2LHT = selected;
							ap2Lnum = document.getElementById("unitat").innerHTML;
							ap2LKw = document.getElementById("potencia").value;
							document.getElementById("apL2").src="./img/dev/routerP.png";
							document.getElementById("apL2T").innerHTML="Router";
							document.getElementById("apL2").style.visibility="visible";
							document.getElementById("apL2T").style.visibility="visible";
							lPos++;
							break;
						case 'tele':
							ap2LId = 'tele';
							ap2LH = document.getElementById('timeRangeid').value;
							ap2LHT = selected;
							ap2Lnum = document.getElementById("unitat").innerHTML;
							ap2LKw = document.getElementById("potencia").value;
							document.getElementById("apL2").src="./img/dev/teleP.png";
							document.getElementById("apL2T").innerHTML="Televisió";
							document.getElementById("apL2").style.visibility="visible";
							document.getElementById("apL2T").style.visibility="visible";
							lPos++;
							break;
						case 'consola':
							ap2LId = 'consola';
							ap2LH = document.getElementById('timeRangeid').value;
							ap2LHT = selected;
							ap2Lnum = document.getElementById("unitat").innerHTML;
							ap2LKw = document.getElementById("potencia").value;
							document.getElementById("apL2").src="./img/dev/consolaP.png";
							document.getElementById("apL2T").innerHTML="Consola";
							document.getElementById("apL2").style.visibility="visible";
							document.getElementById("apL2T").style.visibility="visible";
							lPos++;
							break;
					}
					break;
			}
			break;
		case 'dorm':
      dormitoriSelected();
			switch(dPos){
				case 1:
					switch (aparellSelected){
						case 'aire':
							ap1DId = 'aire';
							ap1DH = document.getElementById('timeRangeid').value;
							ap1DHT = selected;
							ap1Dnum = document.getElementById("unitat").innerHTML;
							ap1DKw = document.getElementById("potencia").value;
							document.getElementById("apD1").src="./img/dev/aireP.png";
							document.getElementById("apD1T").innerHTML="Aire Condicionat";
							document.getElementById("apD1").style.visibility="visible";
							document.getElementById("apD1T").style.visibility="visible";
							dPos++;
							break;
						case 'bombeta':
							ap1DId = 'bombeta';
							ap1DH = document.getElementById('timeRangeid').value;
							ap1DHT = selected;
							ap1Dnum = document.getElementById("unitat").innerHTML;
							ap1DKw = document.getElementById("potencia").value;
							document.getElementById("apD1").src="./img/dev/bombetaP.png";
							document.getElementById("apD1T").innerHTML="Bombeta";
							document.getElementById("apD1").style.visibility="visible";
							document.getElementById("apD1T").style.visibility="visible";
							dPos++;
							break;
						case 'forn':
							ap1DId = 'forn';
							ap1DH = document.getElementById('timeRangeid').value;
							ap1DHT = selected;
							ap1Dnum = document.getElementById("unitat").innerHTML;
							ap1DKw = document.getElementById("potencia").value;
							document.getElementById("apD1").src="./img/dev/fornP.png";
							document.getElementById("apD1T").innerHTML="Forn";
							document.getElementById("apD1").style.visibility="visible";
							document.getElementById("apD1T").style.visibility="visible";
							dPos++;
							break;
						case 'micro':
							ap1DId = 'micro';
							ap1DH = document.getElementById('timeRangeid').value;
							ap1DHT = selected;
							ap1Dnum = document.getElementById("unitat").innerHTML;
							ap1DKw = document.getElementById("potencia").value;
							document.getElementById("apD1").src="./img/dev/microonesP.png";
							document.getElementById("apD1T").innerHTML="Microones";
							document.getElementById("apD1").style.visibility="visible";
							document.getElementById("apD1T").style.visibility="visible";
							dPos++;
							break;
						case 'nevera':
							ap1DId = 'nevera';
							ap1DH = document.getElementById('timeRangeid').value;
							ap1DHT = selected;
							ap1Dnum = document.getElementById("unitat").innerHTML;
							ap1DKw = document.getElementById("potencia").value;
							document.getElementById("apD1").src="./img/dev/neveraP.png";
							document.getElementById("apD1T").innerHTML="Nevera";
							document.getElementById("apD1").style.visibility="visible";
							document.getElementById("apD1T").style.visibility="visible";
							dPos++;
							break;
						case 'ordinador':
							ap1DId = 'ordinador';
							ap1DH = document.getElementById('timeRangeid').value;
							ap1DHT = selected;
							ap1Dnum = document.getElementById("unitat").innerHTML;
							ap1DKw = document.getElementById("potencia").value;
							document.getElementById("apD1").src="./img/dev/pcP.png";
							document.getElementById("apD1T").innerHTML="Ordinador";
							document.getElementById("apD1").style.visibility="visible";
							document.getElementById("apD1T").style.visibility="visible";
							dPos++;
							break;
						case 'rentadora':
							ap1DId = 'rentadora';
							ap1DH = document.getElementById('timeRangeid').value;
							ap1DHT = selected;
							ap1Dnum = document.getElementById("unitat").innerHTML;
							ap1DKw = document.getElementById("potencia").value;
							document.getElementById("apD1").src="./img/dev/rentadoraP.png";
							document.getElementById("apD1T").innerHTML="Rentadora";
							document.getElementById("apD1").style.visibility="visible";
							document.getElementById("apD1T").style.visibility="visible";
							dPos++;
							break;
						case 'rentaplats':
							ap1DId = 'rentaplats';
							ap1DH = document.getElementById('timeRangeid').value;
							ap1DHT = selected;
							ap1Dnum = document.getElementById("unitat").innerHTML;
							ap1DKw = document.getElementById("potencia").value;
							document.getElementById("apD1").src="./img/dev/rentaplatsP.png";
							document.getElementById("apD1T").innerHTML="Rentaplats";
							document.getElementById("apD1").style.visibility="visible";
							document.getElementById("apD1T").style.visibility="visible";
							dPos++;
							break;
						case 'router':
							ap1DId = 'router';
							ap1DH = document.getElementById('timeRangeid').value;
							ap1DHT = selected;
							ap1Dnum = document.getElementById("unitat").innerHTML;
							ap1DKw = document.getElementById("potencia").value;
							document.getElementById("apD1").src="./img/dev/routerP.png";
							document.getElementById("apD1T").innerHTML="Router";
							document.getElementById("apD1").style.visibility="visible";
							document.getElementById("apD1T").style.visibility="visible";
							dPos++;
							break;
						case 'tele':
							ap1DId = 'tele';
							ap1DH = document.getElementById('timeRangeid').value;
							ap1DHT = selected;
							ap1Dnum = document.getElementById("unitat").innerHTML;
							ap1DKw = document.getElementById("potencia").value;
							document.getElementById("apD1").src="./img/dev/teleP.png";
							document.getElementById("apD1T").innerHTML="Televisió";
							document.getElementById("apD1").style.visibility="visible";
							document.getElementById("apD1T").style.visibility="visible";
							dPos++;
							break;
						case 'consola':
							ap1DId = 'consola';
							ap1DH = document.getElementById('timeRangeid').value;
							ap1DHT = selected;
							ap1Dnum = document.getElementById("unitat").innerHTML;
							ap1DKw = document.getElementById("potencia").value;
							document.getElementById("apD1").src="./img/dev/consolaP.png";
							document.getElementById("apD1T").innerHTML="Consola";
							document.getElementById("apD1").style.visibility="visible";
							document.getElementById("apD1T").style.visibility="visible";
							dPos++;
							break;
					}
					break;
				case 2:
					switch (aparellSelected){
						case 'aire':
							ap2DId = 'aire';
							ap2DH = document.getElementById('timeRangeid').value;
							ap2DHT = selected;
							ap2Dnum = document.getElementById("unitat").innerHTML;
							ap2DKw = document.getElementById("potencia").value;
							document.getElementById("apD2").src="./img/dev/aireP.png";
							document.getElementById("apD2T").innerHTML="Aire Condicionat";
							document.getElementById("apD2").style.visibility="visible";
							document.getElementById("apD2T").style.visibility="visible";
							dPos++;
							break;
						case 'bombeta':
							ap2DId = 'bombeta';
							ap2DH = document.getElementById('timeRangeid').value;
							ap2DHT = selected;
							ap2Dnum = document.getElementById("unitat").innerHTML;
							ap2DKw = document.getElementById("potencia").value;
							document.getElementById("apD2").src="./img/dev/bombetaP.png";
							document.getElementById("apD2T").innerHTML="Bombeta";
							document.getElementById("apD2").style.visibility="visible";
							document.getElementById("apD2T").style.visibility="visible";
							dPos++;
							break;
						case 'forn':
							ap2DId = 'forn';
							ap2DH = document.getElementById('timeRangeid').value;
							ap2DHT = selected;
							ap2Dnum = document.getElementById("unitat").innerHTML;
							ap2DKw = document.getElementById("potencia").value;
							document.getElementById("apD2").src="./img/dev/fornP.png";
							document.getElementById("apD2T").innerHTML="Forn";
							document.getElementById("apD2").style.visibility="visible";
							document.getElementById("apD2T").style.visibility="visible";
							dPos++;
							break;
						case 'micro':
							ap2DId = 'micro';
							ap2DH = document.getElementById('timeRangeid').value;
							ap2DHT = selected;
							ap2Dnum = document.getElementById("unitat").innerHTML;
							ap2DKw = document.getElementById("potencia").value;
							document.getElementById("apD2").src="./img/dev/microonesP.png";
							document.getElementById("apD2T").innerHTML="Microones";
							document.getElementById("apD2").style.visibility="visible";
							document.getElementById("apD2T").style.visibility="visible";
							dPos++;
							break;
						case 'nevera':
							ap2DId = 'nevera';
							ap2DH = document.getElementById('timeRangeid').value;
							ap2DHT = selected;
							ap2Dnum = document.getElementById("unitat").innerHTML;
							ap2DKw = document.getElementById("potencia").value;
							document.getElementById("apD2").src="./img/dev/neveraP.png";
							document.getElementById("apD2T").innerHTML="Nevera";
							document.getElementById("apD2").style.visibility="visible";
							document.getElementById("apD2T").style.visibility="visible";
							dPos++;
							break;
						case 'ordinador':
							ap2DId = 'ordinador';
							ap2DH = document.getElementById('timeRangeid').value;
							ap2DHT = selected;
							ap2Dnum = document.getElementById("unitat").innerHTML;
							ap2DKw = document.getElementById("potencia").value;
							document.getElementById("apD2").src="./img/dev/pcP.png";
							document.getElementById("apD2T").innerHTML="Ordinador";
							document.getElementById("apD2").style.visibility="visible";
							document.getElementById("apD2T").style.visibility="visible";
							dPos++;
							break;
						case 'rentadora':
							ap2DId = 'rentadora';
							ap2DH = document.getElementById('timeRangeid').value;
							ap2DHT = selected;
							ap2Dnum = document.getElementById("unitat").innerHTML;
							ap2DKw = document.getElementById("potencia").value;
							document.getElementById("apD2").src="./img/dev/rentadoraP.png";
							document.getElementById("apD2T").innerHTML="Rentadora";
							document.getElementById("apD2").style.visibility="visible";
							document.getElementById("apD2T").style.visibility="visible";
							dPos++;
							break;
						case 'rentaplats':
							ap2DId = 'rentaplats';
							ap2DH = document.getElementById('timeRangeid').value;
							ap2DHT = selected;
							ap2Dnum = document.getElementById("unitat").innerHTML;
							ap2DKw = document.getElementById("potencia").value;
							document.getElementById("apD2").src="./img/dev/rentaplatsP.png";
							document.getElementById("apD2T").innerHTML="Rentaplats";
							document.getElementById("apD2").style.visibility="visible";
							document.getElementById("apD2T").style.visibility="visible";
							dPos++;
							break;
						case 'router':
							ap2DId = 'router';
							ap2DH = document.getElementById('timeRangeid').value;
							ap2DHT = selected;
							ap2Dnum = document.getElementById("unitat").innerHTML;
							ap2DKw = document.getElementById("potencia").value;
							document.getElementById("apD2").src="./img/dev/routerP.png";
							document.getElementById("apD2T").innerHTML="Router";
							document.getElementById("apD2").style.visibility="visible";
							document.getElementById("apD2T").style.visibility="visible";
							dPos++;
							break;
						case 'tele':
							ap2DId = 'tele';
							ap2DH = document.getElementById('timeRangeid').value;
							ap2DHT = selected;
							ap2Dnum = document.getElementById("unitat").innerHTML;
							ap2DKw = document.getElementById("potencia").value;
							document.getElementById("apD2").src="./img/dev/teleP.png";
							document.getElementById("apD2T").innerHTML="Televisió";
							document.getElementById("apD2").style.visibility="visible";
							document.getElementById("apD2T").style.visibility="visible";
							dPos++;
							break;
						case 'consola':
							ap2DId = 'consola';
							ap2DH = document.getElementById('timeRangeid').value;
							ap2DHT = selected;
							ap2Dnum = document.getElementById("unitat").innerHTML;
							ap2DKw = document.getElementById("potencia").value;
							document.getElementById("apD2").src="./img/dev/consolaP.png";
							document.getElementById("apD2T").innerHTML="Consola";
							document.getElementById("apD2").style.visibility="visible";
							document.getElementById("apD2T").style.visibility="visible";
							dPos++;
							break;
					}
					break;
				case 3:
					switch (aparellSelected){
						case 'aire':
							ap3DId = 'aire';
							ap3DH = document.getElementById('timeRangeid').value;
							ap3DHT = selected;
							ap3Dnum = document.getElementById("unitat").innerHTML;
							ap3DKw = document.getElementById("potencia").value;
							document.getElementById("apD3").src="./img/dev/aireP.png";
							document.getElementById("apD3T").innerHTML="Aire Condicionat";
							document.getElementById("apD3").style.visibility="visible";
							document.getElementById("apD3T").style.visibility="visible";
							dPos++;
							break;
						case 'bombeta':
							ap3DId = 'bombeta';
							ap3DH = document.getElementById('timeRangeid').value;
							ap3DHT = selected;
							ap3Dnum = document.getElementById("unitat").innerHTML;
							ap3DKw = document.getElementById("potencia").value;
							document.getElementById("apD3").src="./img/dev/bombetaP.png";
							document.getElementById("apD3T").innerHTML="Bombeta";
							document.getElementById("apD3").style.visibility="visible";
							document.getElementById("apD3T").style.visibility="visible";
							dPos++;
							break;
						case 'forn':
							ap3DId = 'forn';
							ap3DH = document.getElementById('timeRangeid').value;
							ap3DHT = selected;
							ap3Dnum = document.getElementById("unitat").innerHTML;
							ap3DKw = document.getElementById("potencia").value;
							document.getElementById("apD3").src="./img/dev/fornP.png";
							document.getElementById("apD3T").innerHTML="Forn";
							document.getElementById("apD3").style.visibility="visible";
							document.getElementById("apD3T").style.visibility="visible";
							dPos++;
							break;
						case 'micro':
							ap3DId = 'micro';
							ap3DH = document.getElementById('timeRangeid').value;
							ap3DHT = selected;
							ap3Dnum = document.getElementById("unitat").innerHTML;
							ap3DKw = document.getElementById("potencia").value;
							document.getElementById("apD3").src="./img/dev/microonesP.png";
							document.getElementById("apD3T").innerHTML="Microones";
							document.getElementById("apD3").style.visibility="visible";
							document.getElementById("apD3T").style.visibility="visible";
							dPos++;
							break;
						case 'nevera':
							ap3DId = 'nevera';
							ap3DH = document.getElementById('timeRangeid').value;
							ap3DHT = selected;
							ap3Dnum = document.getElementById("unitat").innerHTML;
							ap3DKw = document.getElementById("potencia").value;
							document.getElementById("apD3").src="./img/dev/neveraP.png";
							document.getElementById("apD3T").innerHTML="Nevera";
							document.getElementById("apD3").style.visibility="visible";
							document.getElementById("apD3T").style.visibility="visible";
							dPos++;
							break;
						case 'ordinador':
							ap3DId = 'ordinador';
							ap3DH = document.getElementById('timeRangeid').value;
							ap3DHT = selected;
							ap3Dnum = document.getElementById("unitat").innerHTML;
							ap3DKw = document.getElementById("potencia").value;
							document.getElementById("apD3").src="./img/dev/pcP.png";
							document.getElementById("apD3T").innerHTML="Ordinador";
							document.getElementById("apD3").style.visibility="visible";
							document.getElementById("apD3T").style.visibility="visible";
							dPos++;
							break;
						case 'rentadora':
							ap3DId = 'rentadora';
							ap3DH = document.getElementById('timeRangeid').value;
							ap3DHT = selected;
							ap3Dnum = document.getElementById("unitat").innerHTML;
							ap3DKw = document.getElementById("potencia").value;
							document.getElementById("apD3").src="./img/dev/rentadoraP.png";
							document.getElementById("apD3T").innerHTML="Rentadora";
							document.getElementById("apD3").style.visibility="visible";
							document.getElementById("apD3T").style.visibility="visible";
							dPos++;
							break;
						case 'rentaplats':
							ap3DId = 'rentaplats';
							ap3DH = document.getElementById('timeRangeid').value;
							ap3DHT = selected;
							ap3Dnum = document.getElementById("unitat").innerHTML;
							ap3DKw = document.getElementById("potencia").value;
							document.getElementById("apD3").src="./img/dev/rentaplatsP.png";
							document.getElementById("apD3T").innerHTML="Rentaplats";
							document.getElementById("apD3").style.visibility="visible";
							document.getElementById("apD3T").style.visibility="visible";
							dPos++;
							break;
						case 'router':
							ap3DId = 'router';
							ap3DH = document.getElementById('timeRangeid').value;
							ap3DHT = selected;
							ap3Dnum = document.getElementById("unitat").innerHTML;
							ap3DKw = document.getElementById("potencia").value;
							document.getElementById("apD3").src="./img/dev/routerP.png";
							document.getElementById("apD3T").innerHTML="Router";
							document.getElementById("apD3").style.visibility="visible";
							document.getElementById("apD3T").style.visibility="visible";
							dPos++;
							break;
						case 'tele':
							ap3DId = 'tele';
							ap3DH = document.getElementById('timeRangeid').value;
							ap3DHT = selected;
							ap3Dnum = document.getElementById("unitat").innerHTML;
							ap3DKw = document.getElementById("potencia").value;
							document.getElementById("apD3").src="./img/dev/teleP.png";
							document.getElementById("apD3T").innerHTML="Televisió";
							document.getElementById("apD3").style.visibility="visible";
							document.getElementById("apD3T").style.visibility="visible";
							dPos++;
							break;
						case 'consola':
							ap3DId = 'consola';
							ap3DH = document.getElementById('timeRangeid').value;
							ap3DHT = selected;
							ap3Dnum = document.getElementById("unitat").innerHTML;
							ap3DKw = document.getElementById("potencia").value;
							document.getElementById("apD3").src="./img/dev/consolaP.png";
							document.getElementById("apD3T").innerHTML="Consola";
							document.getElementById("apD3").style.visibility="visible";
							document.getElementById("apD3T").style.visibility="visible";
							dPos++;
							break;
					}
					break;
				case 4:
					switch (aparellSelected){
						case 'aire':
							ap4DId = 'aire';
							ap4DH = document.getElementById('timeRangeid').value;
							ap4DHT = selected;
							ap4Dnum = document.getElementById("unitat").innerHTML;
							ap4DKw = document.getElementById("potencia").value;
							document.getElementById("apD4").src="./img/dev/aireP.png";
							document.getElementById("apD4T").innerHTML="Aire Condicionat";
							document.getElementById("apD4").style.visibility="visible";
							document.getElementById("apD4T").style.visibility="visible";
							dPos++;
							break;
						case 'bombeta':
							ap4DId = 'bombeta';
							ap4DH = document.getElementById('timeRangeid').value;
							ap4DHT = selected;
							ap4Dnum = document.getElementById("unitat").innerHTML;
							ap4DKw = document.getElementById("potencia").value;
							document.getElementById("apD4").src="./img/dev/bombetaP.png";
							document.getElementById("apD4T").innerHTML="Bombeta";
							document.getElementById("apD4").style.visibility="visible";
							document.getElementById("apD4T").style.visibility="visible";
							dPos++;
							break;
						case 'forn':
							ap4DId = 'forn';
							ap4DH = document.getElementById('timeRangeid').value;
							ap4DHT = selected;
							ap4Dnum = document.getElementById("unitat").innerHTML;
							ap4DKw = document.getElementById("potencia").value;
							document.getElementById("apD4").src="./img/dev/fornP.png";
							document.getElementById("apD4T").innerHTML="Forn";
							document.getElementById("apD4").style.visibility="visible";
							document.getElementById("apD4T").style.visibility="visible";
							dPos++;
							break;
						case 'micro':
							ap4DId = 'micro';
							ap4DH = document.getElementById('timeRangeid').value;
							ap4DHT = selected;
							ap4Dnum = document.getElementById("unitat").innerHTML;
							ap4DKw = document.getElementById("potencia").value;
							document.getElementById("apD4").src="./img/dev/microonesP.png";
							document.getElementById("apD4T").innerHTML="Microones";
							document.getElementById("apD4").style.visibility="visible";
							document.getElementById("apD4T").style.visibility="visible";
							dPos++;
							break;
						case 'nevera':
							ap4DId = 'nevera';
							ap4DH = document.getElementById('timeRangeid').value;
							ap4DHT = selected;
							ap4Dnum = document.getElementById("unitat").innerHTML;
							ap4DKw = document.getElementById("potencia").value;
							document.getElementById("apD4").src="./img/dev/neveraP.png";
							document.getElementById("apD4T").innerHTML="Nevera";
							document.getElementById("apD4").style.visibility="visible";
							document.getElementById("apD4T").style.visibility="visible";
							dPos++;
							break;
						case 'ordinador':
							ap4DId = 'ordinador';
							ap4DH = document.getElementById('timeRangeid').value;
							ap4DHT = selected;
							ap4Dnum = document.getElementById("unitat").innerHTML;
							ap4DKw = document.getElementById("potencia").value;
							document.getElementById("apD4").src="./img/dev/pcP.png";
							document.getElementById("apD4T").innerHTML="Ordinador";
							document.getElementById("apD4").style.visibility="visible";
							document.getElementById("apD4T").style.visibility="visible";
							dPos++;
							break;
						case 'rentadora':
							ap4DId = 'rentadora';
							ap4DH = document.getElementById('timeRangeid').value;
							ap4DHT = selected;
							ap4Dnum = document.getElementById("unitat").innerHTML;
							ap4DKw = document.getElementById("potencia").value;
							document.getElementById("apD4").src="./img/dev/rentadoraP.png";
							document.getElementById("apD4T").innerHTML="Rentadora";
							document.getElementById("apD4").style.visibility="visible";
							document.getElementById("apD4T").style.visibility="visible";
							dPos++;
							break;
						case 'rentaplats':
							ap4DId = 'rentaplats';
							ap4DH = document.getElementById('timeRangeid').value;
							ap4DHT = selected;
							ap4Dnum = document.getElementById("unitat").innerHTML;
							ap4DKw = document.getElementById("potencia").value;
							document.getElementById("apD4").src="./img/dev/rentaplatsP.png";
							document.getElementById("apD4T").innerHTML="Rentaplats";
							document.getElementById("apD4").style.visibility="visible";
							document.getElementById("apD4T").style.visibility="visible";
							dPos++;
							break;
						case 'router':
							ap4DId = 'router';
							ap4DH = document.getElementById('timeRangeid').value;
							ap4DHT = selected;
							ap4Dnum = document.getElementById("unitat").innerHTML;
							ap4DKw = document.getElementById("potencia").value;
							document.getElementById("apD4").src="./img/dev/routerP.png";
							document.getElementById("apD4T").innerHTML="Router";
							document.getElementById("apD4").style.visibility="visible";
							document.getElementById("apD4T").style.visibility="visible";
							dPos++;
							break;
						case 'tele':
							ap4DId = 'tele';
							ap4DH = document.getElementById('timeRangeid').value;
							ap4DHT = selected;
							ap4Dnum = document.getElementById("unitat").innerHTML;
							ap4DKw = document.getElementById("potencia").value;
							document.getElementById("apD4").src="./img/dev/teleP.png";
							document.getElementById("apD4T").innerHTML="Televisió";
							document.getElementById("apD4").style.visibility="visible";
							document.getElementById("apD4T").style.visibility="visible";
							dPos++;
							break;
						case 'consola':
							ap4DId = 'consola';
							ap4DH = document.getElementById('timeRangeid').value;
							ap4DHT = selected;
							ap4Dnum = document.getElementById("unitat").innerHTML;
							ap4DKw = document.getElementById("potencia").value;
							document.getElementById("apD4").src="./img/dev/consolaP.png";
							document.getElementById("apD4T").innerHTML="Consola";
							document.getElementById("apD4").style.visibility="visible";
							document.getElementById("apD4T").style.visibility="visible";
							dPos++;
							break;
					}
					break;
			}
			break;
		case 'sala':
      salaSelected();
			switch(sPos){
				case 1:
					switch (aparellSelected){
						case 'aire':
							ap1SId = 'aire';
							ap1SH = document.getElementById('timeRangeid').value;
							ap1SHT = selected;
							ap1Snum = document.getElementById("unitat").innerHTML;
							ap1SKw = document.getElementById("potencia").value;
							document.getElementById("apS1").src="./img/dev/aireP.png";
							document.getElementById("apS1T").innerHTML="Aire Condicionat";
							document.getElementById("apS1").style.visibility="visible";
							document.getElementById("apS1T").style.visibility="visible";
							sPos++;
							break;
						case 'bombeta':
							ap1SId = 'bombeta';
							ap1SH = document.getElementById('timeRangeid').value;
							ap1SHT = selected;
							ap1Snum = document.getElementById("unitat").innerHTML;
							ap1SKw = document.getElementById("potencia").value;
							document.getElementById("apS1").src="./img/dev/bombetaP.png";
							document.getElementById("apS1T").innerHTML="Bombeta";
							document.getElementById("apS1").style.visibility="visible";
							document.getElementById("apS1T").style.visibility="visible";
							sPos++;
							break;
						case 'forn':
							ap1SId = 'forn';
							ap1SH = document.getElementById('timeRangeid').value;
							ap1SHT = selected;
							ap1Snum = document.getElementById("unitat").innerHTML;
							ap1SKw = document.getElementById("potencia").value;
							document.getElementById("apS1").src="./img/dev/fornP.png";
							document.getElementById("apS1T").innerHTML="Forn";
							document.getElementById("apS1").style.visibility="visible";
							document.getElementById("apS1T").style.visibility="visible";
							sPos++;
							break;
						case 'micro':
							ap1SId = 'micro';
							ap1SH = document.getElementById('timeRangeid').value;
							ap1SHT = selected;
							ap1Snum = document.getElementById("unitat").innerHTML;
							ap1SKw = document.getElementById("potencia").value;
							document.getElementById("apS1").src="./img/dev/microonesP.png";
							document.getElementById("apS1T").innerHTML="Microones";
							document.getElementById("apS1").style.visibility="visible";
							document.getElementById("apS1T").style.visibility="visible";
							sPos++;
							break;
						case 'nevera':
							ap1SId = 'nevera';
							ap1SH = document.getElementById('timeRangeid').value;
							ap1SHT = selected;
							ap1Snum = document.getElementById("unitat").innerHTML;
							ap1SKw = document.getElementById("potencia").value;
							document.getElementById("apS1").src="./img/dev/neveraP.png";
							document.getElementById("apS1T").innerHTML="Nevera";
							document.getElementById("apS1").style.visibility="visible";
							document.getElementById("apS1T").style.visibility="visible";
							sPos++;
							break;
						case 'ordinador':
							ap1SId = 'ordinador';
							ap1SH = document.getElementById('timeRangeid').value;
							ap1SHT = selected;
							ap1Snum = document.getElementById("unitat").innerHTML;
							ap1SKw = document.getElementById("potencia").value;
							document.getElementById("apS1").src="./img/dev/pcP.png";
							document.getElementById("apS1T").innerHTML="Ordinador";
							document.getElementById("apS1").style.visibility="visible";
							document.getElementById("apS1T").style.visibility="visible";
							sPos++;
							break;
						case 'rentadora':
							ap1SId = 'rentadora';
							ap1SH = document.getElementById('timeRangeid').value;
							ap1SHT = selected;
							ap1Snum = document.getElementById("unitat").innerHTML;
							ap1SKw = document.getElementById("potencia").value;
							document.getElementById("apS1").src="./img/dev/rentadoraP.png";
							document.getElementById("apS1T").innerHTML="Rentadora";
							document.getElementById("apS1").style.visibility="visible";
							document.getElementById("apS1T").style.visibility="visible";
							sPos++;
							break;
						case 'rentaplats':
							ap1SId = 'rentaplats';
							ap1SH = document.getElementById('timeRangeid').value;
							ap1SHT = selected;
							ap1Snum = document.getElementById("unitat").innerHTML;
							ap1SKw = document.getElementById("potencia").value;
							document.getElementById("apS1").src="./img/dev/rentaplatsP.png";
							document.getElementById("apS1T").innerHTML="Rentaplats";
							document.getElementById("apS1").style.visibility="visible";
							document.getElementById("apS1T").style.visibility="visible";
							sPos++;
							break;
						case 'router':
							ap1SId = 'router';
							ap1SH = document.getElementById('timeRangeid').value;
							ap1SHT = selected;
							ap1Snum = document.getElementById("unitat").innerHTML;
							ap1SKw = document.getElementById("potencia").value;
							document.getElementById("apS1").src="./img/dev/routerP.png";
							document.getElementById("apS1T").innerHTML="Router";
							document.getElementById("apS1").style.visibility="visible";
							document.getElementById("apS1T").style.visibility="visible";
							sPos++;
							break;
						case 'tele':
							ap1SId = 'tele';
							ap1SH = document.getElementById('timeRangeid').value;
							ap1SHT = selected;
							ap1Snum = document.getElementById("unitat").innerHTML;
							ap1SKw = document.getElementById("potencia").value;
							document.getElementById("apS1").src="./img/dev/teleP.png";
							document.getElementById("apS1T").innerHTML="Televisió";
							document.getElementById("apS1").style.visibility="visible";
							document.getElementById("apS1T").style.visibility="visible";
							sPos++;
							break;
						case 'consola':
							ap1SId = 'consola';
							ap1SH = document.getElementById('timeRangeid').value;
							ap1SHT = selected;
							ap1Snum = document.getElementById("unitat").innerHTML;
							ap1SKw = document.getElementById("potencia").value;
							document.getElementById("apS1").src="./img/dev/consolaP.png";
							document.getElementById("apS1T").innerHTML="Consola";
							document.getElementById("apS1").style.visibility="visible";
							document.getElementById("apS1T").style.visibility="visible";
							sPos++;
							break;
					}
					break;
				case 2:
					switch (aparellSelected){
						case 'aire':
							ap2SId = 'aire';
							ap2SH = document.getElementById('timeRangeid').value;
							ap2SHT = selected;
							ap2Snum = document.getElementById("unitat").innerHTML;
							ap2SKw = document.getElementById("potencia").value;
							document.getElementById("apS2").src="./img/dev/aireP.png";
							document.getElementById("apS2T").innerHTML="Aire Condicionat";
							document.getElementById("apS2").style.visibility="visible";
							document.getElementById("apS2T").style.visibility="visible";
							sPos++;
							break;
						case 'bombeta':
							ap2SId = 'bombeta';
							ap2SH = document.getElementById('timeRangeid').value;
							ap2SHT = selected;
							ap2Snum = document.getElementById("unitat").innerHTML;
							ap2SKw = document.getElementById("potencia").value;
							document.getElementById("apS2").src="./img/dev/bombetaP.png";
							document.getElementById("apS2T").innerHTML="Bombeta";
							document.getElementById("apS2").style.visibility="visible";
							document.getElementById("apS2T").style.visibility="visible";
							sPos++;
							break;
						case 'forn':
							ap2SId = 'forn';
							ap2SH = document.getElementById('timeRangeid').value;
							ap2SHT = selected;
							ap2Snum = document.getElementById("unitat").innerHTML;
							ap2SKw = document.getElementById("potencia").value;
							document.getElementById("apS2").src="./img/dev/fornP.png";
							document.getElementById("apS2T").innerHTML="Forn";
							document.getElementById("apS2").style.visibility="visible";
							document.getElementById("apS2T").style.visibility="visible";
							sPos++;
							break;
						case 'micro':
							ap2SId = 'micro';
							ap2SH = document.getElementById('timeRangeid').value;
							ap2SHT = selected;
							ap2Snum = document.getElementById("unitat").innerHTML;
							ap2SKw = document.getElementById("potencia").value;
							document.getElementById("apS2").src="./img/dev/microonesP.png";
							document.getElementById("apS2T").innerHTML="Microones";
							document.getElementById("apS2").style.visibility="visible";
							document.getElementById("apS2T").style.visibility="visible";
							sPos++;
							break;
						case 'nevera':
							ap2SId = 'nevera';
							ap2SH = document.getElementById('timeRangeid').value;
							ap2SHT = selected;
							ap2Snum = document.getElementById("unitat").innerHTML;
							ap2SKw = document.getElementById("potencia").value;
							document.getElementById("apS2").src="./img/dev/neveraP.png";
							document.getElementById("apS2T").innerHTML="Nevera";
							document.getElementById("apS2").style.visibility="visible";
							document.getElementById("apS2T").style.visibility="visible";
							sPos++;
							break;
						case 'ordinador':
							ap2SId = 'ordinador';
							ap2SH = document.getElementById('timeRangeid').value;
							ap2SHT = selected;
							ap2Snum = document.getElementById("unitat").innerHTML;
							ap2SKw = document.getElementById("potencia").value;
							document.getElementById("apS2").src="./img/dev/pcP.png";
							document.getElementById("apS2T").innerHTML="Ordinador";
							document.getElementById("apS2").style.visibility="visible";
							document.getElementById("apS2T").style.visibility="visible";
							sPos++;
							break;
						case 'rentadora':
							ap2SId = 'rentadora';
							ap2SH = document.getElementById('timeRangeid').value;
							ap2SHT = selected;
							ap2Snum = document.getElementById("unitat").innerHTML;
							ap2SKw = document.getElementById("potencia").value;
							document.getElementById("apS2").src="./img/dev/rentadoraP.png";
							document.getElementById("apS2T").innerHTML="Rentadora";
							document.getElementById("apS2").style.visibility="visible";
							document.getElementById("apS2T").style.visibility="visible";
							sPos++;
							break;
						case 'rentaplats':
							ap2SId = 'rentaplats';
							ap2SH = document.getElementById('timeRangeid').value;
							ap2SHT = selected;
							ap2Snum = document.getElementById("unitat").innerHTML;
							ap2SKw = document.getElementById("potencia").value;
							document.getElementById("apS2").src="./img/dev/rentaplatsP.png";
							document.getElementById("apS2T").innerHTML="Rentaplats";
							document.getElementById("apS2").style.visibility="visible";
							document.getElementById("apS2T").style.visibility="visible";
							sPos++;
							break;
						case 'router':
							ap2SId = 'router';
							ap2SH = document.getElementById('timeRangeid').value;
							ap2SHT = selected;
							ap2Snum = document.getElementById("unitat").innerHTML;
							ap2SKw = document.getElementById("potencia").value;
							document.getElementById("apS2").src="./img/dev/routerP.png";
							document.getElementById("apS2T").innerHTML="Router";
							document.getElementById("apS2").style.visibility="visible";
							document.getElementById("apS2T").style.visibility="visible";
							sPos++;
							break;
						case 'tele':
							ap2SId = 'tele';
							ap2SH = document.getElementById('timeRangeid').value;
							ap2SHT = selected;
							ap2Snum = document.getElementById("unitat").innerHTML;
							ap2SKw = document.getElementById("potencia").value;
							document.getElementById("apS2").src="./img/dev/teleP.png";
							document.getElementById("apS2T").innerHTML="Televisió";
							document.getElementById("apS2").style.visibility="visible";
							document.getElementById("apS2T").style.visibility="visible";
							sPos++;
							break;
						case 'consola':
							ap2SId = 'consola';
							ap2SH = document.getElementById('timeRangeid').value;
							ap2SHT = selected;
							ap2Snum = document.getElementById("unitat").innerHTML;
							ap2SKw = document.getElementById("potencia").value;
							document.getElementById("apS2").src="./img/dev/consolaP.png";
							document.getElementById("apS2T").innerHTML="Consola";
							document.getElementById("apS2").style.visibility="visible";
							document.getElementById("apS2T").style.visibility="visible";
							sPos++;
							break;
					}
					break;
				case 3:
					switch (aparellSelected){
						case 'aire':
							ap3SId = 'aire';
							ap3SH = document.getElementById('timeRangeid').value;
							ap3SHT = selected;
							ap3Snum = document.getElementById("unitat").innerHTML;
							ap3SKw = document.getElementById("potencia").value;
							document.getElementById("apS3").src="./img/dev/aireP.png";
							document.getElementById("apS3T").innerHTML="Aire Condicionat";
							document.getElementById("apS3").style.visibility="visible";
							document.getElementById("apS3T").style.visibility="visible";
							sPos++;
							break;
						case 'bombeta':
							ap3SId = 'bombeta';
							ap3SH = document.getElementById('timeRangeid').value;
							ap3SHT = selected;
							ap3Snum = document.getElementById("unitat").innerHTML;
							ap3SKw = document.getElementById("potencia").value;
							document.getElementById("apS3").src="./img/dev/bombetaP.png";
							document.getElementById("apS3T").innerHTML="Bombeta";
							document.getElementById("apS3").style.visibility="visible";
							document.getElementById("apS3T").style.visibility="visible";
							sPos++;
							break;
						case 'forn':
							ap3SId = 'forn';
							ap3SH = document.getElementById('timeRangeid').value;
							ap3SHT = selected;
							ap3Snum = document.getElementById("unitat").innerHTML;
							ap3SKw = document.getElementById("potencia").value;
							document.getElementById("apS3").src="./img/dev/fornP.png";
							document.getElementById("apS3T").innerHTML="Forn";
							document.getElementById("apS3").style.visibility="visible";
							document.getElementById("apS3T").style.visibility="visible";
							sPos++;
							break;
						case 'micro':
							ap3SId = 'micro';
							ap3SH = document.getElementById('timeRangeid').value;
							ap3SHT = selected;
							ap3Snum = document.getElementById("unitat").innerHTML;
							ap3SKw = document.getElementById("potencia").value;
							document.getElementById("apS3").src="./img/dev/microonesP.png";
							document.getElementById("apS3T").innerHTML="Microones";
							document.getElementById("apS3").style.visibility="visible";
							document.getElementById("apS3T").style.visibility="visible";
							sPos++;
							break;
						case 'nevera':
							ap3SId = 'nevera';
							ap3SH = document.getElementById('timeRangeid').value;
							ap3SHT = selected;
							ap3Snum = document.getElementById("unitat").innerHTML;
							ap3SKw = document.getElementById("potencia").value;
							document.getElementById("apS3").src="./img/dev/neveraP.png";
							document.getElementById("apS3T").innerHTML="Nevera";
							document.getElementById("apS3").style.visibility="visible";
							document.getElementById("apS3T").style.visibility="visible";
							sPos++;
							break;
						case 'ordinador':
							ap3SId = 'ordinador';
							ap3SH = document.getElementById('timeRangeid').value;
							ap3SHT = selected;
							ap3Snum = document.getElementById("unitat").innerHTML;
							ap3SKw = document.getElementById("potencia").value;
							document.getElementById("apS3").src="./img/dev/pcP.png";
							document.getElementById("apS3T").innerHTML="Ordinador";
							document.getElementById("apS3").style.visibility="visible";
							document.getElementById("apS3T").style.visibility="visible";
							sPos++;
							break;
						case 'rentadora':
							ap3SId = 'rentadora';
							ap3SH = document.getElementById('timeRangeid').value;
							ap3SHT = selected;
							ap3Snum = document.getElementById("unitat").innerHTML;
							ap3SKw = document.getElementById("potencia").value;
							document.getElementById("apS3").src="./img/dev/rentadoraP.png";
							document.getElementById("apS3T").innerHTML="Rentadora";
							document.getElementById("apS3").style.visibility="visible";
							document.getElementById("apS3T").style.visibility="visible";
							sPos++;
							break;
						case 'rentaplats':
							ap3SId = 'rentaplats';
							ap3SH = document.getElementById('timeRangeid').value;
							ap3SHT = selected;
							ap3Snum = document.getElementById("unitat").innerHTML;
							ap3SKw = document.getElementById("potencia").value;
							document.getElementById("apS3").src="./img/dev/rentaplatsP.png";
							document.getElementById("apS3T").innerHTML="Rentaplats";
							document.getElementById("apS3").style.visibility="visible";
							document.getElementById("apS3T").style.visibility="visible";
							sPos++;
							break;
						case 'router':
							ap3SId = 'router';
							ap3SH = document.getElementById('timeRangeid').value;
							ap3SHT = selected;
							ap3Snum = document.getElementById("unitat").innerHTML;
							ap3SKw = document.getElementById("potencia").value;
							document.getElementById("apS3").src="./img/dev/routerP.png";
							document.getElementById("apS3T").innerHTML="Router";
							document.getElementById("apS3").style.visibility="visible";
							document.getElementById("apS3T").style.visibility="visible";
							sPos++;
							break;
						case 'tele':
							ap3SId = 'tele';
							ap3SH = document.getElementById('timeRangeid').value;
							ap3SHT = selected;
							ap3Snum = document.getElementById("unitat").innerHTML;
							ap3SKw = document.getElementById("potencia").value;
							document.getElementById("apS3").src="./img/dev/teleP.png";
							document.getElementById("apS3T").innerHTML="Televisió";
							document.getElementById("apS3").style.visibility="visible";
							document.getElementById("apS3T").style.visibility="visible";
							sPos++;
							break;
						case 'consola':
							ap3SId = 'consola';
							ap3SH = document.getElementById('timeRangeid').value;
							ap3SHT = selected;
							ap3Snum = document.getElementById("unitat").innerHTML;
							ap3SKw = document.getElementById("potencia").value;
							document.getElementById("apS3").src="./img/dev/consolaP.png";
							document.getElementById("apS3T").innerHTML="Consola";
							document.getElementById("apS3").style.visibility="visible";
							document.getElementById("apS3T").style.visibility="visible";
							sPos++;
							break;
					}
					break;
				case 4:
					switch (aparellSelected){
						case 'aire':
							ap4SId = 'aire';
							ap4SH = document.getElementById('timeRangeid').value;
							ap4SHT = selected;
							ap4Snum = document.getElementById("unitat").innerHTML;
							ap4SKw = document.getElementById("potencia").value;
							document.getElementById("apS4").src="./img/dev/aireP.png";
							document.getElementById("apS4T").innerHTML="Aire Condicionat";
							document.getElementById("apS4").style.visibility="visible";
							document.getElementById("apS4T").style.visibility="visible";
							sPos++;
							break;
						case 'bombeta':
							ap4SId = 'bombeta';
							ap4SH = document.getElementById('timeRangeid').value;
							ap4SHT = selected;
							ap4Snum = document.getElementById("unitat").innerHTML;
							ap4SKw = document.getElementById("potencia").value;
							document.getElementById("apS4").src="./img/dev/bombetaP.png";
							document.getElementById("apS4T").innerHTML="Bombeta";
							document.getElementById("apS4").style.visibility="visible";
							document.getElementById("apS4T").style.visibility="visible";
							sPos++;
							break;
						case 'forn':
							ap4SId = 'forn';
							ap4SH = document.getElementById('timeRangeid').value;
							ap4SHT = selected;
							ap4Snum = document.getElementById("unitat").innerHTML;
							ap4SKw = document.getElementById("potencia").value;
							document.getElementById("apS4").src="./img/dev/fornP.png";
							document.getElementById("apS4T").innerHTML="Forn";
							document.getElementById("apS4").style.visibility="visible";
							document.getElementById("apS4T").style.visibility="visible";
							sPos++;
							break;
						case 'micro':
							ap4SId = 'micro';
							ap4SH = document.getElementById('timeRangeid').value;
							ap4SHT = selected;
							ap4Snum = document.getElementById("unitat").innerHTML;
							ap4SKw = document.getElementById("potencia").value;
							document.getElementById("apS4").src="./img/dev/microonesP.png";
							document.getElementById("apS4T").innerHTML="Microones";
							document.getElementById("apS4").style.visibility="visible";
							document.getElementById("apS4T").style.visibility="visible";
							sPos++;
							break;
						case 'nevera':
							ap4SId = 'nevera';
							ap4SH = document.getElementById('timeRangeid').value;
							ap4SHT = selected;
							ap4Snum = document.getElementById("unitat").innerHTML;
							ap4SKw = document.getElementById("potencia").value;
							document.getElementById("apS4").src="./img/dev/neveraP.png";
							document.getElementById("apS4T").innerHTML="Nevera";
							document.getElementById("apS4").style.visibility="visible";
							document.getElementById("apS4T").style.visibility="visible";
							sPos++;
							break;
						case 'ordinador':
							ap4SId = 'ordinador';
							ap4SH = document.getElementById('timeRangeid').value;
							ap4SHT = selected;
							ap4Snum = document.getElementById("unitat").innerHTML;
							ap4SKw = document.getElementById("potencia").value;
							document.getElementById("apS4").src="./img/dev/pcP.png";
							document.getElementById("apS4T").innerHTML="Ordinador";
							document.getElementById("apS4").style.visibility="visible";
							document.getElementById("apS4T").style.visibility="visible";
							sPos++;
							break;
						case 'rentadora':
							ap4SId = 'rentadora';
							ap4SH = document.getElementById('timeRangeid').value;
							ap4SHT = selected;
							ap4Snum = document.getElementById("unitat").innerHTML;
							ap4SKw = document.getElementById("potencia").value;
							document.getElementById("apS4").src="./img/dev/rentadoraP.png";
							document.getElementById("apS4T").innerHTML="Rentadora";
							document.getElementById("apS4").style.visibility="visible";
							document.getElementById("apS4T").style.visibility="visible";
							sPos++;
							break;
						case 'rentaplats':
							ap4SId = 'rentaplats';
							ap4SH = document.getElementById('timeRangeid').value;
							ap4SHT = selected;
							ap4Snum = document.getElementById("unitat").innerHTML;
							ap4SKw = document.getElementById("potencia").value;
							document.getElementById("apS4").src="./img/dev/rentaplatsP.png";
							document.getElementById("apS4T").innerHTML="Rentaplats";
							document.getElementById("apS4").style.visibility="visible";
							document.getElementById("apS4T").style.visibility="visible";
							sPos++;
							break;
						case 'router':
							ap4SId = 'router';
							ap4SH = document.getElementById('timeRangeid').value;
							ap4SHT = selected;
							ap4Snum = document.getElementById("unitat").innerHTML;
							ap4SKw = document.getElementById("potencia").value;
							document.getElementById("apS4").src="./img/dev/routerP.png";
							document.getElementById("apS4T").innerHTML="Router";
							document.getElementById("apS4").style.visibility="visible";
							document.getElementById("apS4T").style.visibility="visible";
							sPos++;
							break;
						case 'tele':
							ap4SId = 'tele';
							ap4SH = document.getElementById('timeRangeid').value;
							ap4SHT = selected;
							ap4Snum = document.getElementById("unitat").innerHTML;
							ap4SKw = document.getElementById("potencia").value;
							document.getElementById("apS4").src="./img/dev/teleP.png";
							document.getElementById("apS4T").innerHTML="Televisió";
							document.getElementById("apS4").style.visibility="visible";
							document.getElementById("apS4T").style.visibility="visible";
							sPos++;
							break;
						case 'consola':
							ap4SId = 'consola';
							ap4SH = document.getElementById('timeRangeid').value;
							ap4SHT = selected;
							ap4Snum = document.getElementById("unitat").innerHTML;
							ap4SKw = document.getElementById("potencia").value;
							document.getElementById("apS4").src="./img/dev/consolaP.png";
							document.getElementById("apS4T").innerHTML="Consola";
							document.getElementById("apS4").style.visibility="visible";
							document.getElementById("apS4T").style.visibility="visible";
							sPos++;
							break;
					}
					break;
				case 5:
					switch (aparellSelected){
						case 'aire':
							ap5SId = 'aire';
							ap5SH = document.getElementById('timeRangeid').value;
							ap5SHT = selected;
							ap5Snum = document.getElementById("unitat").innerHTML;
							ap5SKw = document.getElementById("potencia").value;
							document.getElementById("apS5").src="./img/dev/aireP.png";
							document.getElementById("apS5T").innerHTML="Aire Condicionat";
							document.getElementById("apS5").style.visibility="visible";
							document.getElementById("apS5T").style.visibility="visible";
							sPos++;
							break;
						case 'bombeta':
							ap5SId = 'bombeta';
							ap5SH = document.getElementById('timeRangeid').value;
							ap5SHT = selected;
							ap5Snum = document.getElementById("unitat").innerHTML;
							ap5SKw = document.getElementById("potencia").value;
							document.getElementById("apS5").src="./img/dev/bombetaP.png";
							document.getElementById("apS5T").innerHTML="Bombeta";
							document.getElementById("apS5").style.visibility="visible";
							document.getElementById("apS5T").style.visibility="visible";
							sPos++;
							break;
						case 'forn':
							ap5SId = 'forn';
							ap5SH = document.getElementById('timeRangeid').value;
							ap5SHT = selected;
							ap5Snum = document.getElementById("unitat").innerHTML;
							ap5SKw = document.getElementById("potencia").value;
							document.getElementById("apS5").src="./img/dev/fornP.png";
							document.getElementById("apS5T").innerHTML="Forn";
							document.getElementById("apS5").style.visibility="visible";
							document.getElementById("apS5T").style.visibility="visible";
							sPos++;
							break;
						case 'micro':
							ap5SId = 'micro';
							ap5SH = document.getElementById('timeRangeid').value;
							ap5SHT = selected;
							ap5Snum = document.getElementById("unitat").innerHTML;
							ap5SKw = document.getElementById("potencia").value;
							document.getElementById("apS5").src="./img/dev/microonesP.png";
							document.getElementById("apS5T").innerHTML="Microones";
							document.getElementById("apS5").style.visibility="visible";
							document.getElementById("apS5T").style.visibility="visible";
							sPos++;
							break;
						case 'nevera':
							ap5SId = 'nevera';
							ap5SH = document.getElementById('timeRangeid').value;
							ap5SHT = selected;
							ap5Snum = document.getElementById("unitat").innerHTML;
							ap5SKw = document.getElementById("potencia").value;
							document.getElementById("apS5").src="./img/dev/neveraP.png";
							document.getElementById("apS5T").innerHTML="Nevera";
							document.getElementById("apS5").style.visibility="visible";
							document.getElementById("apS5T").style.visibility="visible";
							sPos++;
							break;
						case 'ordinador':
							ap5SId = 'ordinador';
							ap5SH = document.getElementById('timeRangeid').value;
							ap5SHT = selected;
							ap5Snum = document.getElementById("unitat").innerHTML;
							ap5SKw = document.getElementById("potencia").value;
							document.getElementById("apS5").src="./img/dev/pcP.png";
							document.getElementById("apS5T").innerHTML="Ordinador";
							document.getElementById("apS5").style.visibility="visible";
							document.getElementById("apS5T").style.visibility="visible";
							sPos++;
							break;
						case 'rentadora':
							ap5SId = 'rentadora';
							ap5SH = document.getElementById('timeRangeid').value;
							ap5SHT = selected;
							ap5Snum = document.getElementById("unitat").innerHTML;
							ap5SKw = document.getElementById("potencia").value;
							document.getElementById("apS5").src="./img/dev/rentadoraP.png";
							document.getElementById("apS5T").innerHTML="Rentadora";
							document.getElementById("apS5").style.visibility="visible";
							document.getElementById("apS5T").style.visibility="visible";
							sPos++;
							break;
						case 'rentaplats':
							ap5SId = 'rentaplats';
							ap5SH = document.getElementById('timeRangeid').value;
							ap5SHT = selected;
							ap5Snum = document.getElementById("unitat").innerHTML;
							ap5SKw = document.getElementById("potencia").value;
							document.getElementById("apS5").src="./img/dev/rentaplatsP.png";
							document.getElementById("apS5T").innerHTML="Rentaplats";
							document.getElementById("apS5").style.visibility="visible";
							document.getElementById("apS5T").style.visibility="visible";
							sPos++;
							break;
						case 'router':
							ap5SId = 'router';
							ap5SH = document.getElementById('timeRangeid').value;
							ap5SHT = selected;
							ap5Snum = document.getElementById("unitat").innerHTML;
							ap5SKw = document.getElementById("potencia").value;
							document.getElementById("apS5").src="./img/dev/routerP.png";
							document.getElementById("apS5T").innerHTML="Router";
							document.getElementById("apS5").style.visibility="visible";
							document.getElementById("apS5T").style.visibility="visible";
							sPos++;
							break;
						case 'tele':
							ap5SId = 'tele';
							ap5SH = document.getElementById('timeRangeid').value;
							ap5SHT = selected;
							ap5Snum = document.getElementById("unitat").innerHTML;
							ap5SKw = document.getElementById("potencia").value;
							document.getElementById("apS5").src="./img/dev/teleP.png";
							document.getElementById("apS5T").innerHTML="Televisió";
							document.getElementById("apS5").style.visibility="visible";
							document.getElementById("apS5T").style.visibility="visible";
							sPos++;
							break;
						case 'consola':
							ap5SId = 'consola';
							ap5SH = document.getElementById('timeRangeid').value;
							ap5SHT = selected;
							ap5Snum = document.getElementById("unitat").innerHTML;
							ap5SKw = document.getElementById("potencia").value;
							document.getElementById("apS5").src="./img/dev/consolaP.png";
							document.getElementById("apS5T").innerHTML="Consola";
							document.getElementById("apS5").style.visibility="visible";
							document.getElementById("apS5T").style.visibility="visible";
							sPos++;
							break;
					}
					break;
			}
			break;
		case 'extra':
			switch(ePos){
				case 1:
					switch (aparellSelected){
						case 'aire':
							ap1EId = 'aire';
							ap1EH = document.getElementById('timeRangeid').value;
							ap1EHT = selected;
							ap1Enum = document.getElementById("unitat").innerHTML;
							ap1EKw = document.getElementById("potencia").value;
							document.getElementById("apE1").src="./img/dev/aireP.png";
							document.getElementById("apE1T").innerHTML="Aire Condicionat";
							document.getElementById("apE1").style.visibility="visible";
							document.getElementById("apE1T").style.visibility="visible";
							ePos++;
							break;
						case 'bombeta':
							ap1EId = 'bombeta';
							ap1EH = document.getElementById('timeRangeid').value;
							ap1EHT = selected;
							ap1Enum = document.getElementById("unitat").innerHTML;
							ap1EKw = document.getElementById("potencia").value;
							document.getElementById("apE1").src="./img/dev/bombetaP.png";
							document.getElementById("apE1T").innerHTML="Bombeta";
							document.getElementById("apE1").style.visibility="visible";
							document.getElementById("apE1T").style.visibility="visible";
							ePos++;
							break;
						case 'forn':
							ap1EId = 'forn';
							ap1EH = document.getElementById('timeRangeid').value;
							ap1EHT = selected;
							ap1Enum = document.getElementById("unitat").innerHTML;
							ap1EKw = document.getElementById("potencia").value;
							document.getElementById("apE1").src="./img/dev/fornP.png";
							document.getElementById("apE1T").innerHTML="Forn";
							document.getElementById("apE1").style.visibility="visible";
							document.getElementById("apE1T").style.visibility="visible";
							ePos++;
							break;
						case 'micro':
							ap1EId = 'micro';
							ap1EH = document.getElementById('timeRangeid').value;
							ap1EHT = selected;
							ap1Enum = document.getElementById("unitat").innerHTML;
							ap1EKw = document.getElementById("potencia").value;
							document.getElementById("apE1").src="./img/dev/microonesP.png";
							document.getElementById("apE1T").innerHTML="Microones";
							document.getElementById("apE1").style.visibility="visible";
							document.getElementById("apE1T").style.visibility="visible";
							ePos++;
							break;
						case 'nevera':
							ap1EId = 'nevera';
							ap1EH = document.getElementById('timeRangeid').value;
							ap1EHT = selected;
							ap1Enum = document.getElementById("unitat").innerHTML;
							ap1EKw = document.getElementById("potencia").value;
							document.getElementById("apE1").src="./img/dev/neveraP.png";
							document.getElementById("apE1T").innerHTML="Nevera";
							document.getElementById("apE1").style.visibility="visible";
							document.getElementById("apE1T").style.visibility="visible";
							ePos++;
							break;
						case 'ordinador':
							ap1EId = 'ordinador';
							ap1EH = document.getElementById('timeRangeid').value;
							ap1EHT = selected;
							ap1Enum = document.getElementById("unitat").innerHTML;
							ap1EKw = document.getElementById("potencia").value;
							document.getElementById("apE1").src="./img/dev/pcP.png";
							document.getElementById("apE1T").innerHTML="Ordinador";
							document.getElementById("apE1").style.visibility="visible";
							document.getElementById("apE1T").style.visibility="visible";
							ePos++;
							break;
						case 'rentadora':
							ap1EId = 'rentadora';
							ap1EH = document.getElementById('timeRangeid').value;
							ap1EHT = selected;
							ap1Enum = document.getElementById("unitat").innerHTML;
							ap1EKw = document.getElementById("potencia").value;
							document.getElementById("apE1").src="./img/dev/rentadoraP.png";
							document.getElementById("apE1T").innerHTML="Rentadora";
							document.getElementById("apE1").style.visibility="visible";
							document.getElementById("apE1T").style.visibility="visible";
							ePos++;
							break;
						case 'rentaplats':
							ap1EId = 'rentaplats';
							ap1EH = document.getElementById('timeRangeid').value;
							ap1EHT = selected;
							ap1Enum = document.getElementById("unitat").innerHTML;
							ap1EKw = document.getElementById("potencia").value;
							document.getElementById("apE1").src="./img/dev/rentaplatsP.png";
							document.getElementById("apE1T").innerHTML="Rentaplats";
							document.getElementById("apE1").style.visibility="visible";
							document.getElementById("apE1T").style.visibility="visible";
							ePos++;
							break;
						case 'router':
							ap1EId = 'router';
							ap1EH = document.getElementById('timeRangeid').value;
							ap1EHT = selected;
							ap1Enum = document.getElementById("unitat").innerHTML;
							ap1EKw = document.getElementById("potencia").value;
							document.getElementById("apE1").src="./img/dev/routerP.png";
							document.getElementById("apE1T").innerHTML="Router";
							document.getElementById("apE1").style.visibility="visible";
							document.getElementById("apE1T").style.visibility="visible";
							ePos++;
							break;
						case 'tele':
							ap1EId = 'tele';
							ap1EH = document.getElementById('timeRangeid').value;
							ap1EHT = selected;
							ap1Enum = document.getElementById("unitat").innerHTML;
							ap1EKw = document.getElementById("potencia").value;
							document.getElementById("apE1").src="./img/dev/teleP.png";
							document.getElementById("apE1T").innerHTML="Televisió";
							document.getElementById("apE1").style.visibility="visible";
							document.getElementById("apE1T").style.visibility="visible";
							ePos++;
							break;
						case 'consola':
							ap1EId = 'consola';
							ap1EH = document.getElementById('timeRangeid').value;
							ap1EHT = selected;
							ap1Enum = document.getElementById("unitat").innerHTML;
							ap1EKw = document.getElementById("potencia").value;
							document.getElementById("apE1").src="./img/dev/consolaP.png";
							document.getElementById("apE1T").innerHTML="Consola";
							document.getElementById("apE1").style.visibility="visible";
							document.getElementById("apE1T").style.visibility="visible";
							ePos++;
							break;
					}
					break;
				case 2:
					switch (aparellSelected){
						case 'aire':
							ap2EId = 'aire';
							ap2EH = document.getElementById('timeRangeid').value;
							ap2EHT = selected;
							ap2Enum = document.getElementById("unitat").innerHTML;
							ap2EKw = document.getElementById("potencia").value;
							document.getElementById("apE2").src="./img/dev/aireP.png";
							document.getElementById("apE2T").innerHTML="Aire Condicionat";
							document.getElementById("apE2").style.visibility="visible";
							document.getElementById("apE2T").style.visibility="visible";
							ePos++;
							break;
						case 'bombeta':
							ap2EId = 'bombeta';
							ap2EH = document.getElementById('timeRangeid').value;
							ap2EHT = selected;
							ap2Enum = document.getElementById("unitat").innerHTML;
							ap2EKw = document.getElementById("potencia").value;
							document.getElementById("apE2").src="./img/dev/bombetaP.png";
							document.getElementById("apE2T").innerHTML="Bombeta";
							document.getElementById("apE2").style.visibility="visible";
							document.getElementById("apE2T").style.visibility="visible";
							ePos++;
							break;
						case 'forn':
							ap2EId = 'forn';
							ap2EH = document.getElementById('timeRangeid').value;
							ap2EHT = selected;
							ap2Enum = document.getElementById("unitat").innerHTML;
							ap2EKw = document.getElementById("potencia").value;
							document.getElementById("apE2").src="./img/dev/fornP.png";
							document.getElementById("apE2T").innerHTML="Forn";
							document.getElementById("apE2").style.visibility="visible";
							document.getElementById("apE2T").style.visibility="visible";
							ePos++;
							break;
						case 'micro':
							ap2EId = 'micro';
							ap2EH = document.getElementById('timeRangeid').value;
							ap2EHT = selected;
							ap2Enum = document.getElementById("unitat").innerHTML;
							ap2EKw = document.getElementById("potencia").value;
							document.getElementById("apE2").src="./img/dev/microonesP.png";
							document.getElementById("apE2T").innerHTML="Microones";
							document.getElementById("apE2").style.visibility="visible";
							document.getElementById("apE2T").style.visibility="visible";
							ePos++;
							break;
						case 'nevera':
							ap2EId = 'nevera';
							ap2EH = document.getElementById('timeRangeid').value;
							ap2EHT = selected;
							ap2Enum = document.getElementById("unitat").innerHTML;
							ap2EKw = document.getElementById("potencia").value;
							document.getElementById("apE2").src="./img/dev/neveraP.png";
							document.getElementById("apE2T").innerHTML="Nevera";
							document.getElementById("apE2").style.visibility="visible";
							document.getElementById("apE2T").style.visibility="visible";
							ePos++;
							break;
						case 'ordinador':
							ap2EId = 'ordinador';
							ap2EH = document.getElementById('timeRangeid').value;
							ap2EHT = selected;
							ap2Enum = document.getElementById("unitat").innerHTML;
							ap2EKw = document.getElementById("potencia").value;
							document.getElementById("apE2").src="./img/dev/pcP.png";
							document.getElementById("apE2T").innerHTML="Ordinador";
							document.getElementById("apE2").style.visibility="visible";
							document.getElementById("apE2T").style.visibility="visible";
							ePos++;
							break;
						case 'rentadora':
							ap2EId = 'rentadora';
							ap2EH = document.getElementById('timeRangeid').value;
							ap2EHT = selected;
							ap2Enum = document.getElementById("unitat").innerHTML;
							ap2EKw = document.getElementById("potencia").value;
							document.getElementById("apE2").src="./img/dev/rentadoraP.png";
							document.getElementById("apE2T").innerHTML="Rentadora";
							document.getElementById("apE2").style.visibility="visible";
							document.getElementById("apE2T").style.visibility="visible";
							ePos++;
							break;
						case 'rentaplats':
							ap2EId = 'rentaplats';
							ap2EH = document.getElementById('timeRangeid').value;
							ap2EHT = selected;
							ap2Enum = document.getElementById("unitat").innerHTML;
							ap2EKw = document.getElementById("potencia").value;
							document.getElementById("apE2").src="./img/dev/rentaplatsP.png";
							document.getElementById("apE2T").innerHTML="Rentaplats";
							document.getElementById("apE2").style.visibility="visible";
							document.getElementById("apE2T").style.visibility="visible";
							ePos++;
							break;
						case 'router':
							ap2EId = 'router';
							ap2EH = document.getElementById('timeRangeid').value;
							ap2EHT = selected;
							ap2Enum = document.getElementById("unitat").innerHTML;
							ap2EKw = document.getElementById("potencia").value;
							document.getElementById("apE2").src="./img/dev/routerP.png";
							document.getElementById("apE2T").innerHTML="Router";
							document.getElementById("apE2").style.visibility="visible";
							document.getElementById("apE2T").style.visibility="visible";
							ePos++;
							break;
						case 'tele':
							ap2EId = 'tele';
							ap2EH = document.getElementById('timeRangeid').value;
							ap2EHT = selected;
							ap2Enum = document.getElementById("unitat").innerHTML;
							ap2EKw = document.getElementById("potencia").value;
							document.getElementById("apE2").src="./img/dev/teleP.png";
							document.getElementById("apE2T").innerHTML="Televisió";
							document.getElementById("apE2").style.visibility="visible";
							document.getElementById("apE2T").style.visibility="visible";
							ePos++;
							break;
						case 'consola':
							ap2EId = 'consola';
							ap2EH = document.getElementById('timeRangeid').value;
							ap2EHT = selected;
							ap2Enum = document.getElementById("unitat").innerHTML;
							ap2EKw = document.getElementById("potencia").value;
							document.getElementById("apE2").src="./img/dev/consolaP.png";
							document.getElementById("apE2T").innerHTML="Consola";
							document.getElementById("apE2").style.visibility="visible";
							document.getElementById("apE2T").style.visibility="visible";
							ePos++;
							break;
					}
					break;
				case 3:
					switch (aparellSelected){
						case 'aire':
							ap3EId = 'aire';
							ap3EH = document.getElementById('timeRangeid').value;
							ap3EHT = selected;
							ap3Enum = document.getElementById("unitat").innerHTML;
							ap3EKw = document.getElementById("potencia").value;
							document.getElementById("apE3").src="./img/dev/aireP.png";
							document.getElementById("apE3T").innerHTML="Aire Condicionat";
							document.getElementById("apE3").style.visibility="visible";
							document.getElementById("apE3T").style.visibility="visible";
							ePos++;
							break;
						case 'bombeta':
							ap3EId = 'bombeta';
							ap3EH = document.getElementById('timeRangeid').value;
							ap3EHT = selected;
							ap3Enum = document.getElementById("unitat").innerHTML;
							ap3EKw = document.getElementById("potencia").value;
							document.getElementById("apE3").src="./img/dev/bombetaP.png";
							document.getElementById("apE3T").innerHTML="Bombeta";
							document.getElementById("apE3").style.visibility="visible";
							document.getElementById("apE3T").style.visibility="visible";
							ePos++;
							break;
						case 'forn':
							ap3EId = 'forn';
							ap3EH = document.getElementById('timeRangeid').value;
							ap3EHT = selected;
							ap3Enum = document.getElementById("unitat").innerHTML;
							ap3EKw = document.getElementById("potencia").value;
							document.getElementById("apE3").src="./img/dev/fornP.png";
							document.getElementById("apE3T").innerHTML="Forn";
							document.getElementById("apE3").style.visibility="visible";
							document.getElementById("apE3T").style.visibility="visible";
							ePos++;
							break;
						case 'micro':
							ap3EId = 'micro';
							ap3EH = document.getElementById('timeRangeid').value;
							ap3EHT = selected;
							ap3Enum = document.getElementById("unitat").innerHTML;
							ap3EKw = document.getElementById("potencia").value;
							document.getElementById("apE3").src="./img/dev/microonesP.png";
							document.getElementById("apE3T").innerHTML="Microones";
							document.getElementById("apE3").style.visibility="visible";
							document.getElementById("apE3T").style.visibility="visible";
							ePos++;
							break;
						case 'nevera':
							ap3EId = 'nevera';
							ap3EH = document.getElementById('timeRangeid').value;
							ap3EHT = selected;
							ap3Enum = document.getElementById("unitat").innerHTML;
							ap3EKw = document.getElementById("potencia").value;
							document.getElementById("apE3").src="./img/dev/neveraP.png";
							document.getElementById("apE3T").innerHTML="Nevera";
							document.getElementById("apE3").style.visibility="visible";
							document.getElementById("apE3T").style.visibility="visible";
							ePos++;
							break;
						case 'ordinador':
							ap3EId = 'ordinador';
							ap3EH = document.getElementById('timeRangeid').value;
							ap3EHT = selected;
							ap3Enum = document.getElementById("unitat").innerHTML;
							ap3EKw = document.getElementById("potencia").value;
							document.getElementById("apE3").src="./img/dev/pcP.png";
							document.getElementById("apE3T").innerHTML="Ordinador";
							document.getElementById("apE3").style.visibility="visible";
							document.getElementById("apE3T").style.visibility="visible";
							ePos++;
							break;
						case 'rentadora':
							ap3EId = 'rentadora';
							ap3EH = document.getElementById('timeRangeid').value;
							ap3EHT = selected;
							ap3Enum = document.getElementById("unitat").innerHTML;
							ap3EKw = document.getElementById("potencia").value;
							document.getElementById("apE3").src="./img/dev/rentadoraP.png";
							document.getElementById("apE3T").innerHTML="Rentadora";
							document.getElementById("apE3").style.visibility="visible";
							document.getElementById("apE3T").style.visibility="visible";
							ePos++;
							break;
						case 'rentaplats':
							ap3EId = 'rentaplats';
							ap3EH = document.getElementById('timeRangeid').value;
							ap3EHT = selected;
							ap3Enum = document.getElementById("unitat").innerHTML;
							ap3EKw = document.getElementById("potencia").value;
							document.getElementById("apE3").src="./img/dev/rentaplatsP.png";
							document.getElementById("apE3T").innerHTML="Rentaplats";
							document.getElementById("apE3").style.visibility="visible";
							document.getElementById("apE3T").style.visibility="visible";
							ePos++;
							break;
						case 'router':
							ap3EId = 'router';
							ap3EH = document.getElementById('timeRangeid').value;
							ap3EHT = selected;
							ap3Enum = document.getElementById("unitat").innerHTML;
							ap3EKw = document.getElementById("potencia").value;
							document.getElementById("apE3").src="./img/dev/routerP.png";
							document.getElementById("apE3T").innerHTML="Router";
							document.getElementById("apE3").style.visibility="visible";
							document.getElementById("apE3T").style.visibility="visible";
							ePos++;
							break;
						case 'tele':
							ap3EId = 'tele';
							ap3EH = document.getElementById('timeRangeid').value;
							ap3EHT = selected;
							ap3Enum = document.getElementById("unitat").innerHTML;
							ap3EKw = document.getElementById("potencia").value;
							document.getElementById("apE3").src="./img/dev/teleP.png";
							document.getElementById("apE3T").innerHTML="Televisió";
							document.getElementById("apE3").style.visibility="visible";
							document.getElementById("apE3T").style.visibility="visible";
							ePos++;
							break;
						case 'consola':
							ap3EId = 'consola';
							ap3EH = document.getElementById('timeRangeid').value;
							ap3EHT = selected;
							ap3Enum = document.getElementById("unitat").innerHTML;
							ap3EKw = document.getElementById("potencia").value;
							document.getElementById("apE3").src="./img/dev/consolaP.png";
							document.getElementById("apE3T").innerHTML="Consola";
							document.getElementById("apE3").style.visibility="visible";
							document.getElementById("apE3T").style.visibility="visible";
							ePos++;
							break;
					}
					break;
			}
			break;
	}
}

function cancel() {
	$("#aparell-box").hide();
	switch(selectedAp){
		case document.getElementById('ap1'):
			deselect('ap1');
			break;
		case document.getElementById('ap2'):
			deselect('ap2');
			break;
		case document.getElementById('ap3'):
			deselect('ap3');
			break;
		case document.getElementById('ap4'):
			deselect('ap4');
			break;
		case document.getElementById('ap5'):
			deselect('ap5');
			break;
		case document.getElementById('ap6'):
			deselect('ap6');
			break;
		case document.getElementById('ap7'):
			deselect('ap7');
			break;
		case document.getElementById('ap8'):
			deselect('ap8');
			break;
		case document.getElementById('ap9'):
			deselect('ap9');
			break;
		case document.getElementById('ap10'):
			deselect('ap10');
			break;
		case document.getElementById('ap11'):
			deselect('ap11');
			break;
		case document.getElementById('apC1'):
			deselect('apC1');
			break;
		case document.getElementById('apC2'):
			deselect('apC2');
			break;
		case document.getElementById('apC3'):
			deselect('apC3');
			break;
		case document.getElementById('apC4'):
			deselect('apC4');
			break;
		case document.getElementById('apC5'):
			deselect('apC5');
			break;
		case document.getElementById('apC6'):
			deselect('apC6');
			break;
		case document.getElementById('apL1'):
			deselect('apL1');
			break;
		case document.getElementById('apL2'):
			deselect('apL2');
			break;
		case document.getElementById('apD1'):
			deselect('apD1');
			break;
		case document.getElementById('apD2'):
			deselect('apD2');
			break;
		case document.getElementById('apD3'):
			deselect('apD3');
			break;
		case document.getElementById('apD4'):
			deselect('apD4');
			break;
		case document.getElementById('apS1'):
			deselect('apS1');
			break;
		case document.getElementById('apS2'):
			deselect('apS2');
			break;
		case document.getElementById('apS3'):
			deselect('apS3');
			break;
		case document.getElementById('apS4'):
			deselect('apS4');
			break;
		case document.getElementById('apS5'):
			deselect('apS5');
			break;
		case document.getElementById('apE1'):
			deselect('apE1');
			break;
		case document.getElementById('apE2'):
			deselect('apE2');
			break;
		case document.getElementById('apE3'):
			deselect('apE3');
			break;
	}
}

/*** Codi dialeg ***/
$('body').click(function(e) {
    if ($(e.target).closest('#ap1').length === 0 && $(e.target).closest('#ap2').length === 0 && $(e.target).closest('#ap3').length === 0 &&
	$(e.target).closest('#ap4').length === 0 && $(e.target).closest('#ap5').length === 0 && $(e.target).closest('#ap6').length === 0 &&
	$(e.target).closest('#ap7').length === 0 && $(e.target).closest('#ap8').length === 0 && $(e.target).closest('#ap9').length === 0 &&
	$(e.target).closest('#ap10').length === 0 && $(e.target).closest('#ap11').length === 0 && $(e.target).closest('#aparell-box').length === 0 &&
	$(e.target).closest('#apC1').length === 0 && $(e.target).closest('#apC2').length === 0 && $(e.target).closest('#apC3').length === 0 &&
	$(e.target).closest('#apC4').length === 0 && $(e.target).closest('#apC5').length === 0 && $(e.target).closest('#apC6').length === 0 &&
	$(e.target).closest('#apC7').length === 0 && $(e.target).closest('#apC8').length === 0 && $(e.target).closest('#apC9').length === 0 &&
	$(e.target).closest('#apL1').length === 0 && $(e.target).closest('#apL2').length === 0 && $(e.target).closest('#apL3').length === 0 &&
	$(e.target).closest('#apL4').length === 0 && $(e.target).closest('#apL5').length === 0 && $(e.target).closest('#apL6').length === 0 &&
	$(e.target).closest('#apL7').length === 0 && $(e.target).closest('#apL8').length === 0 && $(e.target).closest('#apL9').length === 0 &&
	$(e.target).closest('#apD1').length === 0 && $(e.target).closest('#apD2').length === 0 && $(e.target).closest('#apD3').length === 0 &&
	$(e.target).closest('#apD4').length === 0 && $(e.target).closest('#apD5').length === 0 && $(e.target).closest('#apD6').length === 0 &&
	$(e.target).closest('#apD7').length === 0 && $(e.target).closest('#apD8').length === 0 && $(e.target).closest('#apD9').length === 0 &&
	$(e.target).closest('#apS1').length === 0 && $(e.target).closest('#apS2').length === 0 && $(e.target).closest('#apS3').length === 0 &&
	$(e.target).closest('#apS4').length === 0 && $(e.target).closest('#apS5').length === 0 && $(e.target).closest('#apS6').length === 0 &&
	$(e.target).closest('#apS7').length === 0 && $(e.target).closest('#apS8').length === 0 && $(e.target).closest('#apS9').length === 0 &&
	$(e.target).closest('#apE1').length === 0 && $(e.target).closest('#apE2').length === 0 && $(e.target).closest('#apE3').length === 0 &&
	$(e.target).closest('#apE4').length === 0 && $(e.target).closest('#apE5').length === 0 && $(e.target).closest('#apE6').length === 0 &&
	$(e.target).closest('#apE7').length === 0 && $(e.target).closest('#apE8').length === 0 && $(e.target).closest('#apE9').length === 0){
		var container = $("#aparell-box");
		container.hide();
		switch(selectedAp){
			case document.getElementById('ap1'):
				deselect('ap1');
				break;
			case document.getElementById('ap2'):
				deselect('ap2');
				break;
			case document.getElementById('ap3'):
				deselect('ap3');
				break;
			case document.getElementById('ap4'):
				deselect('ap4');
				break;
			case document.getElementById('ap5'):
				deselect('ap5');
				break;
			case document.getElementById('ap6'):
				deselect('ap6');
				break;
			case document.getElementById('ap7'):
				deselect('ap7');
				break;
			case document.getElementById('ap8'):
				deselect('ap8');
				break;
			case document.getElementById('ap9'):
				deselect('ap9');
				break;
			case document.getElementById('ap10'):
				deselect('ap10');
				break;
			case document.getElementById('ap11'):
				deselect('ap11');
				break;
			case document.getElementById('apC1'):
				deselect('apC1');
				break;
			case document.getElementById('apC2'):
				deselect('apC2');
				break;
			case document.getElementById('apC3'):
				deselect('apC3');
				break;
			case document.getElementById('apC4'):
				deselect('apC4');
				break;
			case document.getElementById('apC5'):
				deselect('apC5');
				break;
			case document.getElementById('apC6'):
				deselect('apC6');
				break;
			case document.getElementById('apL1'):
				deselect('apL1');
				break;
			case document.getElementById('apL2'):
				deselect('apL2');
				break;
			case document.getElementById('apD1'):
				deselect('apD1');
				break;
			case document.getElementById('apD2'):
				deselect('apD2');
				break;
			case document.getElementById('apD3'):
				deselect('apD3');
				break;
			case document.getElementById('apD4'):
				deselect('apD4');
				break;
			case document.getElementById('apS1'):
				deselect('apS1');
				break;
			case document.getElementById('apS2'):
				deselect('apS2');
				break;
			case document.getElementById('apS3'):
				deselect('apS3');
				break;
			case document.getElementById('apS4'):
				deselect('apS4');
				break;
			case document.getElementById('apS5'):
				deselect('apS5');
				break;
			case document.getElementById('apE1'):
				deselect('apE1');
				break;
			case document.getElementById('apE2'):
				deselect('apE2');
				break;
			case document.getElementById('apE3'):
				deselect('apE3');
				break;
		}
    }
});

$(document).ready(function() {
	//Show div on click
	$('#ap1').click(function(e) {
		aparellSelected = 'aire';
		showDialog(e);
	});

	//Show div on click
	$('#ap2').click(function(e) {
		aparellSelected = 'bombeta';
		showDialog(e);
	});

	//Show div on click
	$('#ap3').click(function(e) {
		aparellSelected = 'forn';
		showDialog(e);
	});

	//Show div on click
	$('#ap4').click(function(e) {
		aparellSelected = 'micro';
		showDialog(e);
	});

	//Show div on click
	$('#ap5').click(function(e) {
		aparellSelected = 'nevera';
		showDialog(e);
	});

	//Show div on click
	$('#ap6').click(function(e) {
		aparellSelected = 'ordinador';
		showDialog(e);
	});

	//Show div on click
	$('#ap7').click(function(e) {
		aparellSelected = 'rentadora';
		showDialog(e);
	});

	//Show div on click
	$('#ap8').click(function(e) {
		aparellSelected = 'rentaplats';
		showDialog(e);
	});

	//Show div on click
	$('#ap9').click(function(e) {
		aparellSelected = 'router';
		showDialog(e);
	});

	//Show div on click
	$('#ap10').click(function(e) {
		aparellSelected = 'tele';
		showDialog(e);
	});

	//Show div on click
	$('#ap11').click(function(e) {
		aparellSelected = 'consola';
		showDialog(e);
	});

	$('#apC1').click(function(e) {
		apSel = 'apC1';
		showNewDialog(e);
	});

	$('#apC2').click(function(e) {
		apSel = 'apC2';
		showNewDialog(e);
	});

	$('#apC3').click(function(e) {
		apSel = 'apC3';
		showNewDialog(e);
	});

	$('#apC4').click(function(e) {
		apSel = 'apC4';
		showNewDialog(e);
	});

	$('#apC5').click(function(e) {
		apSel = 'apC5';
		showNewDialog(e);
	});

	$('#apC6').click(function(e) {
		apSel = 'apC6';
		showNewDialog(e);
	});

	$('#apL1').click(function(e) {
		apSel = 'apL1';
		showNewDialog(e);
	});

	$('#apL2').click(function(e) {
		apSel = 'apL2';
		showNewDialog(e);
	});

	$('#apD1').click(function(e) {
		apSel = 'apD1';
		showNewDialog(e);
	});

	$('#apD2').click(function(e) {
		apSel = 'apD2';
		showNewDialog(e);
	});

	$('#apD3').click(function(e) {
		apSel = 'apD3';
		showNewDialog(e);
	});

	$('#apD4').click(function(e) {
		apSel = 'apD4';
		showNewDialog(e);
	});

	$('#apS1').click(function(e) {
		apSel = 'apS1';
		showNewDialog(e);
	});

	$('#apS2').click(function(e) {
		apSel = 'apS2';
		showNewDialog(e);
	});

	$('#apS3').click(function(e) {
		apSel = 'apS3';
		showNewDialog(e);
	});

	$('#apS4').click(function(e) {
		apSel = 'apS4';
		showNewDialog(e);
	});

	$('#apS5').click(function(e) {
		apSel = 'apS5';
		showNewDialog(e);
	});

	$('#apE1').click(function(e) {
		apSel = 'apE1';
		showNewDialog(e);
	});

	$('#apE2').click(function(e) {
		apSel = 'apE2';
		showNewDialog(e);
	});

	$('#apE3').click(function(e) {
		apSel = 'apE3';
		showNewDialog(e);
	});
});

function showDialog(e){
	var dialog = 'true';
	var moveLeft = -330;
    var moveDown = -200;
	var topP = e.pageY -100;
	var leftP= e.pageX -250;

	switch(selectedRoom){
		case 'cuina':

			if(cPos==7){
				dialog = 'false';
			}
			break;

		case 'lavabo':

			if(lPos==3){
				dialog = 'false';
			}
			break;

		case 'sala':
			if(sPos==6){
				dialog = 'false';
			}
			break;

		case 'dorm':
			if(dPos==5){
				dialog = 'false';
			}
			break;

		case 'extra':
			if(ePos==4){
				dialog = 'false';
			}
			break;

	}

	if(dialog == 'true'){
		var potencia = document.getElementById('potencia');
		document.getElementById("timeRangeid").value = '12';
		document.getElementById("timeRangeid").max='24';
		document.getElementById("r2").innerHTML = '24h';
		document.getElementById("currentTime").innerHTML = '12';
		document.getElementById("unitat").innerHTML = '1';
		document.getElementById("dayB").style.backgroundColor="#9DC2E0";
		document.getElementById("weekB").style.backgroundColor="#CDE3F5";
		document.getElementById("ok").innerHTML="Afegir";
		document.getElementById("cancel").innerHTML="Descartar";
		document.getElementById("ok").style.pointerEvents = 'auto';
		document.getElementById("cancel").style.pointerEvents = 'auto';
		document.getElementById("ok").style.color = 'black';
		document.getElementById("cancel").style.color = 'black';
		document.getElementById("ok").style.padding = "0.5em 2em 0.7em 2em";
		selected="day";
		switch(aparellSelected){
			case 'aire':
				potencia.value = '2000';
				break;

			case 'bombeta':
				potencia.value = '11';
				break;

			case 'forn':
				potencia.value = '2200';
				break;

			case 'micro':
				potencia.value = '1200';
				break;

			case 'nevera':
				potencia.value = '500';
				break;

			case 'ordinador':
				potencia.value = '400';
				break;

			case 'rentadora':
				potencia.value = '1800';
				moveLeft = -330;
    			moveDown = -420;
				break;

			case 'rentaplats':
				potencia.value = '2100';
				moveLeft = -330;
    			moveDown = -420;
				break;

			case 'router':
				potencia.value = '200';
				moveLeft = -330;
    			moveDown = -420;
				break;

			case 'tele':
				potencia.value = '600';
				moveLeft = -330;
    			moveDown = -420;
				break;

			case 'consola':
				potencia.value = '120';
				moveLeft = -330;
   				moveDown = -420;
				break;
		}
		$('#aparell-box').css({
    		top:  e.pageY + moveDown,
    		left: e.pageX + moveLeft
   		}).show();
	}else{
		$('#noMoreAp-box').css({
    		top:  topP,
    		left: leftP
   		}).show();
	}
}

function showNewDialog(e){
	var moveLeft = 30;
    var moveDown = -200;
	var potencia = document.getElementById('potencia');
	var timeRange = document.getElementById("timeRangeid");
	var currTime = document.getElementById("currentTime");
	var unitat = document.getElementById("unitat");
	var dayB = document.getElementById("dayB");
	var weekB = document.getElementById("weekB");
	document.getElementById("ok").innerHTML="Guardar";
	document.getElementById("cancel").innerHTML="Esborrar";
	document.getElementById("ok").style.pointerEvents = 'none';
	document.getElementById("cancel").style.pointerEvents = 'none';
	document.getElementById("ok").style.color = '#E4F0FB';
	document.getElementById("cancel").style.color = '#E4F0FB';
	document.getElementById("ok").style.padding = "0.5em 1em 0.7em 1em";
	switch(apSel){
		case 'apC1':
			potencia.value = ap1CKw;
			timeRange.value = ap1CH;
			currTime.innerHTML = ap1CH;
			unitat.innerHTML = ap1Cnum;
			if(ap1CHT=='day'){
				dayB.style.backgroundColor="#9DC2E0";
				weekB.style.backgroundColor="#CDE3F5";
				timeRange.max="24";
				document.getElementById("r2").innerHTML = "24h";
				selected="day";
			} else {
				weekB.style.backgroundColor="#9DC2E0";
				dayB.style.backgroundColor="#CDE3F5";
				timeRange.max="168";
				document.getElementById("r2").innerHTML = "168h";
				selected="week";
			}
			break;
		case 'apC2':
			potencia.value = ap2CKw;
			timeRange.value = ap2CH;
			currTime.innerHTML = ap2CH;
			unitat.innerHTML = ap2Cnum;
			if(ap2CHT=='day'){
				dayB.style.backgroundColor="#9DC2E0";
				weekB.style.backgroundColor="#CDE3F5";
				timeRange.max="24";
				document.getElementById("r2").innerHTML = "24h";
				selected="day";
			} else {
				weekB.style.backgroundColor="#9DC2E0";
				dayB.style.backgroundColor="#CDE3F5";
				timeRange.max="168";
				document.getElementById("r2").innerHTML = "168h";
				selected="week";
			}
			break;
		case 'apC3':
			potencia.value = ap3CKw;
			timeRange.value = ap3CH;
			currTime.innerHTML = ap3CH;
			unitat.innerHTML = ap3Cnum;
			if(ap3CHT=='day'){
				dayB.style.backgroundColor="#9DC2E0";
				weekB.style.backgroundColor="#CDE3F5";
				timeRange.max="24";
				document.getElementById("r2").innerHTML = "24h";
				selected="day";
			} else {
				weekB.style.backgroundColor="#9DC2E0";
				dayB.style.backgroundColor="#CDE3F5";
				timeRange.max="168";
				document.getElementById("r2").innerHTML = "168h";
				selected="week";
			}
			break;
		case 'apC4':
			potencia.value = ap4CKw;
			timeRange.value = ap4CH;
			currTime.innerHTML = ap4CH;
			unitat.innerHTML = ap4Cnum;
			if(ap4CHT=='day'){
				dayB.style.backgroundColor="#9DC2E0";
				weekB.style.backgroundColor="#CDE3F5";
				timeRange.max="24";
				document.getElementById("r2").innerHTML = "24h";
				selected="day";
			} else {
				weekB.style.backgroundColor="#9DC2E0";
				dayB.style.backgroundColor="#CDE3F5";
				timeRange.max="168";
				document.getElementById("r2").innerHTML = "168h";
				selected="week";
			}
			break;
		case 'apC5':
			potencia.value = ap5CKw;
			timeRange.value = ap5CH;
			currTime.innerHTML = ap5CH;
			unitat.innerHTML = ap5Cnum;
			if(ap5CHT=='day'){
				dayB.style.backgroundColor="#9DC2E0";
				weekB.style.backgroundColor="#CDE3F5";
				timeRange.max="24";
				document.getElementById("r2").innerHTML = "24h";
				selected="day";
			} else {
				weekB.style.backgroundColor="#9DC2E0";
				dayB.style.backgroundColor="#CDE3F5";
				timeRange.max="168";
				document.getElementById("r2").innerHTML = "168h";
				selected="week";
			}
			break;
		case 'apC6':
			potencia.value = ap6CKw;
			timeRange.value = ap6CH;
			currTime.innerHTML = ap6CH;
			unitat.innerHTML = ap6Cnum;
			if(ap6CHT=='day'){
				dayB.style.backgroundColor="#9DC2E0";
				weekB.style.backgroundColor="#CDE3F5";
				timeRange.max="24";
				document.getElementById("r2").innerHTML = "24h";
				selected="day";
			} else {
				weekB.style.backgroundColor="#9DC2E0";
				dayB.style.backgroundColor="#CDE3F5";
				timeRange.max="168";
				document.getElementById("r2").innerHTML = "168h";
				selected="week";
			}
			break;
		case 'apL1':
			potencia.value = ap1LKw;
			timeRange.value = ap1LH;
			currTime.innerHTML = ap1LH;
			unitat.innerHTML = ap1Lnum;
			if(ap1LHT=='day'){
				dayB.style.backgroundColor="#9DC2E0";
				weekB.style.backgroundColor="#CDE3F5";
				timeRange.max="24";
				document.getElementById("r2").innerHTML = "24h";
				selected="day";
			} else {
				weekB.style.backgroundColor="#9DC2E0";
				dayB.style.backgroundColor="#CDE3F5";
				timeRange.max="168";
				document.getElementById("r2").innerHTML = "168h";
				selected="week";
			}
			break;
		case 'apL2':
			potencia.value = ap2LKw;
			timeRange.value = ap2LH;
			currTime.innerHTML = ap2LH;
			unitat.innerHTML = ap2Lnum;
			if(ap2LHT=='day'){
				dayB.style.backgroundColor="#9DC2E0";
				weekB.style.backgroundColor="#CDE3F5";
				timeRange.max="24";
				document.getElementById("r2").innerHTML = "24h";
				selected="day";
			} else {
				weekB.style.backgroundColor="#9DC2E0";
				dayB.style.backgroundColor="#CDE3F5";
				timeRange.max="168";
				document.getElementById("r2").innerHTML = "168h";
				selected="week";
			}
			break;
		case 'apD1':
			potencia.value = ap1DKw;
			timeRange.value = ap1DH;
			currTime.innerHTML = ap1DH;
			unitat.innerHTML = ap1Dnum;
			if(ap1DHT=='day'){
				dayB.style.backgroundColor="#9DC2E0";
				weekB.style.backgroundColor="#CDE3F5";
				timeRange.max="24";
				document.getElementById("r2").innerHTML = "24h";
				selected="day";
			} else {
				weekB.style.backgroundColor="#9DC2E0";
				dayB.style.backgroundColor="#CDE3F5";
				timeRange.max="168";
				document.getElementById("r2").innerHTML = "168h";
				selected="week";
			}
			break;
		case 'apD2':
			potencia.value = ap2DKw;
			timeRange.value = ap2DH;
			currTime.innerHTML = ap2DH;
			unitat.innerHTML = ap2Dnum;
			if(ap2DHT=='day'){
				dayB.style.backgroundColor="#9DC2E0";
				weekB.style.backgroundColor="#CDE3F5";
				timeRange.max="24";
				document.getElementById("r2").innerHTML = "24h";
				selected="day";
			} else {
				weekB.style.backgroundColor="#9DC2E0";
				dayB.style.backgroundColor="#CDE3F5";
				timeRange.max="168";
				document.getElementById("r2").innerHTML = "168h";
				selected="week";
			}
			break;
		case 'apD3':
			potencia.value = ap3DKw;
			timeRange.value = ap3DH;
			currTime.innerHTML = ap3DH;
			unitat.innerHTML = ap3Dnum;
			if(ap3DHT=='day'){
				dayB.style.backgroundColor="#9DC2E0";
				weekB.style.backgroundColor="#CDE3F5";
				timeRange.max="24";
				document.getElementById("r2").innerHTML = "24h";
				selected="day";
			} else {
				weekB.style.backgroundColor="#9DC2E0";
				dayB.style.backgroundColor="#CDE3F5";
				timeRange.max="168";
				document.getElementById("r2").innerHTML = "168h";
				selected="week";
			}
			break;
		case 'apD4':
			potencia.value = ap4DKw;
			timeRange.value = ap4DH;
			currTime.innerHTML = ap4DH;
			unitat.innerHTML = ap4Dnum;
			if(ap4DHT=='day'){
				dayB.style.backgroundColor="#9DC2E0";
				weekB.style.backgroundColor="#CDE3F5";
				timeRange.max="24";
				document.getElementById("r2").innerHTML = "24h";
				selected="day";
			} else {
				weekB.style.backgroundColor="#9DC2E0";
				dayB.style.backgroundColor="#CDE3F5";
				timeRange.max="168";
				document.getElementById("r2").innerHTML = "168h";
				selected="week";
			}
			break;
		case 'apS1':
			potencia.value = ap1SKw;
			timeRange.value = ap1SH;
			currTime.innerHTML = ap1SH;
			unitat.innerHTML = ap1Snum;
			if(ap1SHT=='day'){
				dayB.style.backgroundColor="#9DC2E0";
				weekB.style.backgroundColor="#CDE3F5";
				timeRange.max="24";
				document.getElementById("r2").innerHTML = "24h";
				selected="day";
			} else {
				weekB.style.backgroundColor="#9DC2E0";
				dayB.style.backgroundColor="#CDE3F5";
				timeRange.max="168";
				document.getElementById("r2").innerHTML = "168h";
				selected="week";
			}
			break;
		case 'apS2':
			potencia.value = ap2SKw;
			timeRange.value = ap2SH;
			currTime.innerHTML = ap2SH;
			unitat.innerHTML = ap2Snum;
			if(ap2SHT=='day'){
				dayB.style.backgroundColor="#9DC2E0";
				weekB.style.backgroundColor="#CDE3F5";
				timeRange.max="24";
				document.getElementById("r2").innerHTML = "24h";
				selected="day";
			} else {
				weekB.style.backgroundColor="#9DC2E0";
				dayB.style.backgroundColor="#CDE3F5";
				timeRange.max="168";
				document.getElementById("r2").innerHTML = "168h";
				selected="week";
			}
			break;
		case 'apS3':
			potencia.value = ap3SKw;
			timeRange.value = ap3SH;
			currTime.innerHTML = ap3SH;
			unitat.innerHTML = ap3Snum;
			if(ap3SHT=='day'){
				dayB.style.backgroundColor="#9DC2E0";
				weekB.style.backgroundColor="#CDE3F5";
				timeRange.max="24";
				document.getElementById("r2").innerHTML = "24h";
				selected="day";
			} else {
				weekB.style.backgroundColor="#9DC2E0";
				dayB.style.backgroundColor="#CDE3F5";
				timeRange.max="168";
				document.getElementById("r2").innerHTML = "168h";
				selected="week";
			}
			break;
		case 'apS4':
			potencia.value = ap4SKw;
			timeRange.value = ap4SH;
			currTime.innerHTML = ap4SH;
			unitat.innerHTML = ap4Snum;
			if(ap4SHT=='day'){
				dayB.style.backgroundColor="#9DC2E0";
				weekB.style.backgroundColor="#CDE3F5";
				timeRange.max="24";
				document.getElementById("r2").innerHTML = "24h";
				selected="day";
			} else {
				weekB.style.backgroundColor="#9DC2E0";
				dayB.style.backgroundColor="#CDE3F5";
				timeRange.max="168";
				document.getElementById("r2").innerHTML = "168h";
				selected="week";
			}
			break;
		case 'apS5':
			potencia.value = ap5SKw;
			timeRange.value = ap5SH;
			currTime.innerHTML = ap5SH;
			unitat.innerHTML = ap5Snum;
			if(ap5SHT=='day'){
				dayB.style.backgroundColor="#9DC2E0";
				weekB.style.backgroundColor="#CDE3F5";
				timeRange.max="24";
				document.getElementById("r2").innerHTML = "24h";
				selected="day";
			} else {
				weekB.style.backgroundColor="#9DC2E0";
				dayB.style.backgroundColor="#CDE3F5";
				timeRange.max="168";
				document.getElementById("r2").innerHTML = "168h";
				selected="week";
			}
			break;
		case 'apE1':
			potencia.value = ap1EKw;
			timeRange.value = ap1EH;
			currTime.innerHTML = ap1EH;
			unitat.innerHTML = ap1Enum;
			if(ap1EHT=='day'){
				dayB.style.backgroundColor="#9DC2E0";
				weekB.style.backgroundColor="#CDE3F5";
				timeRange.max="24";
				document.getElementById("r2").innerHTML = "24h";
				selected="day";
			} else {
				weekB.style.backgroundColor="#9DC2E0";
				dayB.style.backgroundColor="#CDE3F5";
				timeRange.max="168";
				document.getElementById("r2").innerHTML = "168h";
				selected="week";
			}
			break;
		case 'apE2':
			potencia.value = ap2EKw;
			timeRange.value = ap2EH;
			currTime.innerHTML = ap2EH;
			unitat.innerHTML = ap2Enum;
			if(ap2EHT=='day'){
				dayB.style.backgroundColor="#9DC2E0";
				weekB.style.backgroundColor="#CDE3F5";
				timeRange.max="24";
				document.getElementById("r2").innerHTML = "24h";
				selected="day";
			} else {
				weekB.style.backgroundColor="#9DC2E0";
				dayB.style.backgroundColor="#CDE3F5";
				timeRange.max="168";
				document.getElementById("r2").innerHTML = "168h";
				selected="week";
			}
			break;
		case 'apE3':
			potencia.value = ap3EKw;
			timeRange.value = ap3EH;
			currTime.innerHTML = ap3EH;
			unitat.innerHTML = ap3Enum;
			if(ap3EHT=='day'){
				dayB.style.backgroundColor="#9DC2E0";
				weekB.style.backgroundColor="#CDE3F5";
				timeRange.max="24";
				document.getElementById("r2").innerHTML = "24h";
				selected="day";
			} else {
				weekB.style.backgroundColor="#9DC2E0";
				dayB.style.backgroundColor="#CDE3F5";
				timeRange.max="168";
				document.getElementById("r2").innerHTML = "168h";
				selected="week";
			}
			break;
	}
	$('#aparell-box').css({
    	top:  e.pageY + moveDown,
    	left: e.pageX + moveLeft
   	}).show();
}

/****************************************************************************************************/
/**** Div tipus d'habitacions ****/
$(document).ready(function() {
	$('#moreH').click(function (e) {
		if(numHabs<5){
    		$("#salaE").css("background-color", "#9DC2E0");
    		$("#cuinaE").css("background-color", "#CDE3F5");
    		$("#dormE").css("background-color", "#CDE3F5");
    		$("#lavaboE").css("background-color", "#CDE3F5");
    		$("#extraT").css("background-image", "url(./img/hab/salaPF.png)");
    		$("#lavaboT").css("background-image", "url(./img/hab/lavaboP.png)");
    		$("#dormT").css("background-image", "url(./img/hab/dormitoriP.png)");
    		$("#cuinaT").css("background-image", "url(./img/hab/cuinaP.png)");
    		$("#sala1T").css("background-image", "url(./img/hab/salaP.png)");
    		$("#extraRow").show();
    		$('#divScroll').scrollTop($('#divScroll')[0].scrollHeight);
    		selectedRoom="extra";
    		tipoExtra="sala";
    		salaSelected();
			moveLeft = 40;
    		moveDown = -40;
			$('#hab-box').css({
    			top:  e.pageY + moveDown,
    			left: e.pageX + moveLeft
   			}).show();
		}else{
			$('#noMoreHab-box').css({
    			top:  e.pageY + moveDown,
    			left: e.pageX + moveLeft
   			}).show();

		}

	});
	$('#moreA').click(function (e) {
		moveLeft = -280;
    	moveDown = -400;
		$('#ap-box').css({
    		top:  e.pageY + moveDown,
    		left: e.pageX + moveLeft
   		}).toggle();
	});
});

$('body').click(function(e) {
    if ($(e.target).closest('#moreA').length === 0 && $(e.target).closest('#ap-box').length === 0){
		var container = $("#ap-box");
		container.hide();
    }
});

$(document).ready(function() {
	$('#okay').click(function(e) {
		var container = $("#noMoreAp-box");
		container.hide();
    });
	$('#okayH').click(function(e) {
		var container = $("#noMoreHab-box");
		container.hide();
    });
});

function roomChosen() {
  alert("hola");
  $(this).css("background-color", "#9DC2E0");
}

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

$(document).ready(function() {
	$('#closeD').click(function() {
    	$('#ap-box').hide();
	});
});


/****************************************************************************************************/
//Hover functions
var selectedAp = "null"; //The selected image
var selectedSrc = "null"; //The NON selected picture of the selected image

/* AIRE CONDICIONAT*/
function changeAp1() {
    var image = document.getElementById('ap1');
    if (selectedAp != "null"){ //If there is something selected
    	if (selectedAp != image){ //If it is NOT the clicked img
    		image.src = "./img/dev/airePHover.png"; //The clicked img is selected
    		selectedAp.src = selectedSrc;
    		selectedAp = image; //The clicked img now is the selected one and its data is saved
    		selectedSrc = "./img/dev/aireP.png";
    	}
    } else { //If not
    	image.src = "./img/dev/airePHover.png"; //The clicked img is selected
    	selectedAp = image;
    	selectedSrc = "./img/dev/aireP.png";
    }
}

function mouseOverAp1() {
	var image = document.getElementById('ap1');
	if ((selectedAp != image)){
    	image.src = "./img/dev/airePHover.png";
    }
}

function mouseOutAp1(){
	var image = document.getElementById('ap1');
	if ((selectedAp != image)){
    	image.src = "./img/dev/aireP.png";
    }
}

/* BOMBETA */
function changeAp2() {
    var image = document.getElementById('ap2');
    if (selectedAp != "null"){ //If there is something selected
    	if (selectedAp != image){ //If it is NOT the clicked img
    		image.src = "./img/dev/bombetaPHover.png"; //The clicked img is selected
    		selectedAp.src = selectedSrc;
    		selectedAp = image; //The clicked img now is the selected one and its data is saved
    		selectedSrc = "./img/dev/bombetaP.png";
    	}
    } else { //If not
    	image.src = "./img/dev/bombetaPHover.png"; //The clicked img is selected
    	selectedAp = image;
    	selectedSrc = "./img/dev/bombetaP.png";
    }
}

function mouseOverAp2() {
	var image = document.getElementById('ap2');
	if ((selectedAp != image)){
    	image.src = "./img/dev/bombetaPHover.png";
    }
}

function mouseOutAp2(){
	var image = document.getElementById('ap2');
	if ((selectedAp != image)){
    	image.src = "./img/dev/bombetaP.png";
    }
}

/* FORN */
function changeAp3() {
    var image = document.getElementById('ap3');
    if (selectedAp != "null"){ //If there is something selected
    	if (selectedAp != image){ //If it is NOT the clicked img
    		image.src = "./img/dev/fornPHover.png"; //The clicked img is selected
    		selectedAp.src = selectedSrc;
    		selectedAp = image; //The clicked img now is the selected one and its data is saved
    		selectedSrc = "./img/dev/fornP.png";
    	}
    } else { //If not
    	image.src = "./img/dev/fornPHover.png"; //The clicked img is selected
    	selectedAp = image;
    	selectedSrc = "./img/dev/fornP.png";
    }
}

function mouseOverAp3() {
	var image = document.getElementById('ap3');
	if ((selectedAp != image)){
    	image.src = "./img/dev/fornPHover.png";
    }
}

function mouseOutAp3(){
	var image = document.getElementById('ap3');
	if ((selectedAp != image)){
    	image.src = "./img/dev/fornP.png";
    }
}

/* MICROONES */
function changeAp4() {
    var image = document.getElementById('ap4');
    if (selectedAp != "null"){ //If there is something selected
    	if (selectedAp != image){ //If it is NOT the clicked img
    		image.src = "./img/dev/microonesPHover.png"; //The clicked img is selected
    		selectedAp.src = selectedSrc;
    		selectedAp = image; //The clicked img now is the selected one and its data is saved
    		selectedSrc = "./img/dev/microonesP.png";
    	}
    } else { //If not
    	image.src = "./img/dev/microonesPHover.png"; //The clicked img is selected
    	selectedAp = image;
    	selectedSrc = "./img/dev/microonesP.png";
    }
}

function mouseOverAp4() {
	var image = document.getElementById('ap4');
	if ((selectedAp != image)){
    	image.src = "./img/dev/microonesPHover.png";
    }
}

function mouseOutAp4(){
	var image = document.getElementById('ap4');
	if ((selectedAp != image)){
    	image.src = "./img/dev/microonesP.png";
    }
}

/* NEVERA */
function changeAp5() {
    var image = document.getElementById('ap5');
    if (selectedAp != "null"){ //If there is something selected
    	if (selectedAp != image){ //If it is NOT the clicked img
    		image.src = "./img/dev/neveraPHover.png"; //The clicked img is selected
    		selectedAp.src = selectedSrc;
    		selectedAp = image; //The clicked img now is the selected one and its data is saved
    		selectedSrc = "./img/dev/neveraP.png";
    	}
    } else { //If not
    	image.src = "./img/dev/neveraPHover.png"; //The clicked img is selected
    	selectedAp = image;
    	selectedSrc = "./img/dev/neveraP.png";
    }
}

function mouseOverAp5() {
	var image = document.getElementById('ap5');
	if ((selectedAp != image)){
    	image.src = "./img/dev/neveraPHover.png";
    }
}

function mouseOutAp5(){
	var image = document.getElementById('ap5');
	if ((selectedAp != image)){
    	image.src = "./img/dev/neveraP.png";
    }
}

/* ORDINADOR */
function changeAp6() {
    var image = document.getElementById('ap6');
    if (selectedAp != "null"){ //If there is something selected
    	if (selectedAp != image){ //If it is NOT the clicked img
    		image.src = "./img/dev/pcPHover.png"; //The clicked img is selected
    		selectedAp.src = selectedSrc;
    		selectedAp = image; //The clicked img now is the selected one and its data is saved
    		selectedSrc = "./img/dev/pcP.png";
    	}
    } else { //If not
    	image.src = "./img/dev/pcPHover.png"; //The clicked img is selected
    	selectedAp = image;
    	selectedSrc = "./img/dev/pcP.png";
    }
}

function mouseOverAp6() {
	var image = document.getElementById('ap6');
	if ((selectedAp != image)){
    	image.src = "./img/dev/pcPHover.png";
    }
}

function mouseOutAp6(){
	var image = document.getElementById('ap6');
	if ((selectedAp != image)){
    	image.src = "./img/dev/pcP.png";
    }
}

/* RENTADORA */
function changeAp7() {
    var image = document.getElementById('ap7');
    if (selectedAp != "null"){ //If there is something selected
    	if (selectedAp != image){ //If it is NOT the clicked img
    		image.src = "./img/dev/rentadoraPHover.png"; //The clicked img is selected
    		selectedAp.src = selectedSrc;
    		selectedAp = image; //The clicked img now is the selected one and its data is saved
    		selectedSrc = "./img/dev/rentadoraP.png";
    	}
    } else { //If not
    	image.src = "./img/dev/rentadoraPHover.png"; //The clicked img is selected
    	selectedAp = image;
    	selectedSrc = "./img/dev/rentadoraP.png";
    }
}

function mouseOverAp7() {
	var image = document.getElementById('ap7');
	if ((selectedAp != image)){
    	image.src = "./img/dev/rentadoraPHover.png";
    }
}

function mouseOutAp7(){
	var image = document.getElementById('ap7');
	if ((selectedAp != image)){
    	image.src = "./img/dev/rentadoraP.png";
    }
}

/* RENTAPLATS */
function changeAp8() {
    var image = document.getElementById('ap8');
    if (selectedAp != "null"){ //If there is something selected
    	if (selectedAp != image){ //If it is NOT the clicked img
    		image.src = "./img/dev/rentaplatsPHover.png"; //The clicked img is selected
    		selectedAp.src = selectedSrc;
    		selectedAp = image; //The clicked img now is the selected one and its data is saved
    		selectedSrc = "./img/dev/rentaplatsP.png";
    	}
    } else { //If not
    	image.src = "./img/dev/rentaplatsPHover.png"; //The clicked img is selected
    	selectedAp = image;
    	selectedSrc = "./img/dev/rentaplatsP.png";
    }
}

function mouseOverAp8() {
	var image = document.getElementById('ap8');
	if ((selectedAp != image)){
    	image.src = "./img/dev/rentaplatsPHover.png";
    }
}

function mouseOutAp8(){
	var image = document.getElementById('ap8');
	if ((selectedAp != image)){
    	image.src = "./img/dev/rentaplatsP.png";
    }
}

/* ROUTER WIFI */
function changeAp9() {
    var image = document.getElementById('ap9');
    if (selectedAp != "null"){ //If there is something selected
    	if (selectedAp != image){ //If it is NOT the clicked img
    		image.src = "./img/dev/routerPHover.png"; //The clicked img is selected
    		selectedAp.src = selectedSrc;
    		selectedAp = image; //The clicked img now is the selected one and its data is saved
    		selectedSrc = "./img/dev/routerP.png";
    	}
    } else { //If not
    	image.src = "./img/dev/routerPHover.png"; //The clicked img is selected
    	selectedAp = image;
    	selectedSrc = "./img/dev/routerP.png";
    }
}

function mouseOverAp9() {
	var image = document.getElementById('ap9');
	if ((selectedAp != image)){
    	image.src = "./img/dev/routerPHover.png";
    }
}

function mouseOutAp9(){
	var image = document.getElementById('ap9');
	if ((selectedAp != image)){
    	image.src = "./img/dev/routerP.png";
    }
}

/* TELEVISIÓ */
function changeAp10() {
    var image = document.getElementById('ap10');
    if (selectedAp != "null"){ //If there is something selected
    	if (selectedAp != image){ //If it is NOT the clicked img
    		image.src = "./img/dev/telePHover.png"; //The clicked img is selected
    		selectedAp.src = selectedSrc;
    		selectedAp = image; //The clicked img now is the selected one and its data is saved
    		selectedSrc = "./img/dev/teleP.png";
    	}
    } else { //If not
    	image.src = "./img/dev/telePHover.png"; //The clicked img is selected
    	selectedAp = image;
    	selectedSrc = "./img/dev/teleP.png";
    }
}

function mouseOverAp10() {
	var image = document.getElementById('ap10');
	if ((selectedAp != image)){
    	image.src = "./img/dev/telePHover.png";
    }
}

function mouseOutAp10(){
	var image = document.getElementById('ap10');
	if ((selectedAp != image)){
    	image.src = "./img/dev/teleP.png";
    }
}

/* VIDEOCONSOLA */
function changeAp11() {
    var image = document.getElementById('ap11');
    if (selectedAp != "null"){ //If there is something selected
    	if (selectedAp != image){ //If it is NOT the clicked img
    		image.src = "./img/dev/consolaPHover.png"; //The clicked img is selected
    		selectedAp.src = selectedSrc;
    		selectedAp = image; //The clicked img now is the selected one and its data is saved
    		selectedSrc = "./img/dev/consolaP.png";
    	}
    } else { //If not
    	image.src = "./img/dev/consolaPHover.png"; //The clicked img is selected
    	selectedAp = image;
    	selectedSrc = "./img/dev/consolaP.png";
    }
}

function mouseOverAp11() {
	var image = document.getElementById('ap11');
	if ((selectedAp != image)){
    	image.src = "./img/dev/consolaPHover.png";
    }
}

function mouseOutAp11(){
	var image = document.getElementById('ap11');
	if ((selectedAp != image)){
    	image.src = "./img/dev/consolaP.png";
    }
}


//DEVICE PICTURE SELECTION
function deviceP(ap){
	switch(ap){
		case 'aire':
			return "./img/dev/aireP.png";
			break;
		case 'bombeta':
			return "./img/dev/bombetaP.png";
			break;
		case 'forn':
			return "./img/dev/fornP.png";
			break;
		case 'micro':
			return "./img/dev/microonesP.png";
			break;
		case 'nevera':
			return "./img/dev/neveraP.png";
			break;
		case 'ordinador':
			return "./img/dev/pcP.png";
			break;
		case 'rentadora':
			return "./img/dev/rentadoraP.png";
			break;
		case 'rentaplats':
			return "./img/dev/rentaplatsP.png";
			break;
		case 'router':
			return "./img/dev/routerP.png";
			break;
		case 'tele':
			return "./img/dev/teleP.png";
			break;
		case 'consola':
			return "./img/dev/consolaP.png";
			break;
	}
}

function devicePHover(ap){
	switch(ap){
		case 'aire':
			return "./img/dev/airePHover.png";
			break;
		case 'bombeta':
			return "./img/dev/bombetaPHover.png";
			break;
		case 'forn':
			return "./img/dev/fornPHover.png";
			break;
		case 'micro':
			return "./img/dev/microonesPHover.png";
			break;
		case 'nevera':
			return "./img/dev/neveraPHover.png";
			break;
		case 'ordinador':
			return "./img/dev/pcPHover.png";
			break;
		case 'rentadora':
			return "./img/dev/rentadoraPHover.png";
			break;
		case 'rentaplats':
			return "./img/dev/rentaplatsPHover.png";
			break;
		case 'router':
			return "./img/dev/routerPHover.png";
			break;
		case 'tele':
			return "./img/dev/telePHover.png";
			break;
		case 'consola':
			return "./img/dev/consolaPHover.png";
			break;
	}
}

/* APC1*/
function changeApC1() {
    var image = document.getElementById('apC1');
    if (selectedAp != "null"){ //If there is something selected
    	if (selectedAp != image){ //If it is NOT the clicked img
    		image.src = devicePHover(ap1CId); //The clicked img is selected
    		selectedAp.src = selectedSrc;
    		selectedAp = image; //The clicked img now is the selected one and its data is saved
    		selectedSrc = deviceP(ap1CId);
    	}
    } else { //If not
    	image.src = devicePHover(ap1CId); //The clicked img is selected
    	selectedAp = image;
    	selectedSrc = deviceP(ap1CId);
    }
}

function mouseOverApC1() {
	var image = document.getElementById('apC1');
	if ((selectedAp != image)){
    	image.src = devicePHover(ap1CId);
    }
}

function mouseOutApC1(){
	var image = document.getElementById('apC1');
	if ((selectedAp != image)){
    	image.src = deviceP(ap1CId);
    }
}

/* APC2*/
function changeApC2() {
    var image = document.getElementById('apC2');
    if (selectedAp != "null"){ //If there is something selected
    	if (selectedAp != image){ //If it is NOT the clicked img
    		image.src = devicePHover(ap2CId); //The clicked img is selected
    		selectedAp.src = selectedSrc;
    		selectedAp = image; //The clicked img now is the selected one and its data is saved
    		selectedSrc = deviceP(ap2CId);
    	}
    } else { //If not
    	image.src = devicePHover(ap2CId); //The clicked img is selected
    	selectedAp = image;
    	selectedSrc = deviceP(ap2CId);
    }
}

function mouseOverApC2() {
	var image = document.getElementById('apC2');
	if ((selectedAp != image)){
    	image.src = devicePHover(ap2CId);
    }
}

function mouseOutApC2(){
	var image = document.getElementById('apC2');
	if ((selectedAp != image)){
    	image.src = deviceP(ap2CId);
    }
}

/* APC3*/
function changeApC3() {
    var image = document.getElementById('apC3');
    if (selectedAp != "null"){ //If there is something selected
    	if (selectedAp != image){ //If it is NOT the clicked img
    		image.src = devicePHover(ap3CId); //The clicked img is selected
    		selectedAp.src = selectedSrc;
    		selectedAp = image; //The clicked img now is the selected one and its data is saved
    		selectedSrc = deviceP(ap3CId);
    	}
    } else { //If not
    	image.src = devicePHover(ap3CId); //The clicked img is selected
    	selectedAp = image;
    	selectedSrc = deviceP(ap3CId);
    }
}

function mouseOverApC3() {
	var image = document.getElementById('apC3');
	if ((selectedAp != image)){
    	image.src = devicePHover(ap3CId);
    }
}

function mouseOutApC3(){
	var image = document.getElementById('apC3');
	if ((selectedAp != image)){
    	image.src = deviceP(ap3CId);
    }
}

/* APC4*/
function changeApC4() {
    var image = document.getElementById('apC4');
    if (selectedAp != "null"){ //If there is something selected
    	if (selectedAp != image){ //If it is NOT the clicked img
    		image.src = devicePHover(ap4CId); //The clicked img is selected
    		selectedAp.src = selectedSrc;
    		selectedAp = image; //The clicked img now is the selected one and its data is saved
    		selectedSrc = deviceP(ap4CId);
    	}
    } else { //If not
    	image.src = devicePHover(ap4CId); //The clicked img is selected
    	selectedAp = image;
    	selectedSrc = deviceP(ap4CId);
    }
}

function mouseOverApC4() {
	var image = document.getElementById('apC4');
	if ((selectedAp != image)){
    	image.src = devicePHover(ap4CId);
    }
}

function mouseOutApC4(){
	var image = document.getElementById('apC4');
	if ((selectedAp != image)){
    	image.src = deviceP(ap4CId);
    }
}

/* APC5*/
function changeApC5() {
    var image = document.getElementById('apC5');
    if (selectedAp != "null"){ //If there is something selected
    	if (selectedAp != image){ //If it is NOT the clicked img
    		image.src = devicePHover(ap5CId); //The clicked img is selected
    		selectedAp.src = selectedSrc;
    		selectedAp = image; //The clicked img now is the selected one and its data is saved
    		selectedSrc = deviceP(ap5CId);
    	}
    } else { //If not
    	image.src = devicePHover(ap5CId); //The clicked img is selected
    	selectedAp = image;
    	selectedSrc = deviceP(ap5CId);
    }
}

function mouseOverApC5() {
	var image = document.getElementById('apC5');
	if ((selectedAp != image)){
    	image.src = devicePHover(ap5CId);
    }
}

function mouseOutApC5(){
	var image = document.getElementById('apC5');
	if ((selectedAp != image)){
    	image.src = deviceP(ap5CId);
    }
}

/* APC6*/
function changeApC6() {
    var image = document.getElementById('apC6');
    if (selectedAp != "null"){ //If there is something selected
    	if (selectedAp != image){ //If it is NOT the clicked img
    		image.src = devicePHover(ap6CId); //The clicked img is selected
    		selectedAp.src = selectedSrc;
    		selectedAp = image; //The clicked img now is the selected one and its data is saved
    		selectedSrc = deviceP(ap6CId);
    	}
    } else { //If not
    	image.src = devicePHover(ap6CId); //The clicked img is selected
    	selectedAp = image;
    	selectedSrc = deviceP(ap6CId);
    }
}

function mouseOverApC6() {
	var image = document.getElementById('apC6');
	if ((selectedAp != image)){
    	image.src = devicePHover(ap6CId);
    }
}

function mouseOutApC6(){
	var image = document.getElementById('apC6');
	if ((selectedAp != image)){
    	image.src = deviceP(ap6CId);
    }
}

/* APL1*/
function changeApL1() {
    var image = document.getElementById('apL1');
    if (selectedAp != "null"){ //If there is something selected
    	if (selectedAp != image){ //If it is NOT the clicked img
    		image.src = devicePHover(ap1LId); //The clicked img is selected
    		selectedAp.src = selectedSrc;
    		selectedAp = image; //The clicked img now is the selected one and its data is saved
    		selectedSrc = deviceP(ap1LId);
    	}
    } else { //If not
    	image.src = devicePHover(ap1LId); //The clicked img is selected
    	selectedAp = image;
    	selectedSrc = deviceP(ap1LId);
    }
}

function mouseOverApL1() {
	var image = document.getElementById('apL1');
	if ((selectedAp != image)){
    	image.src = devicePHover(ap1LId);
    }
}

function mouseOutApL1(){
	var image = document.getElementById('apL1');
	if ((selectedAp != image)){
    	image.src = deviceP(ap1LId);
    }
}

/* APL2*/
function changeApL2() {
    var image = document.getElementById('apL2');
    if (selectedAp != "null"){ //If there is something selected
    	if (selectedAp != image){ //If it is NOT the clicked img
    		image.src = devicePHover(ap2LId); //The clicked img is selected
    		selectedAp.src = selectedSrc;
    		selectedAp = image; //The clicked img now is the selected one and its data is saved
    		selectedSrc = deviceP(ap2LId);
    	}
    } else { //If not
    	image.src = devicePHover(ap2LId); //The clicked img is selected
    	selectedAp = image;
    	selectedSrc = deviceP(ap2LId);
    }
}

function mouseOverApL2() {
	var image = document.getElementById('apL2');
	if ((selectedAp != image)){
    	image.src = devicePHover(ap2LId);
    }
}

function mouseOutApL2(){
	var image = document.getElementById('apL2');
	if ((selectedAp != image)){
    	image.src = deviceP(ap2LId);
    }
}

/* APD1*/
function changeApD1() {
    var image = document.getElementById('apD1');
    if (selectedAp != "null"){ //If there is something selected
    	if (selectedAp != image){ //If it is NOT the clicked img
    		image.src = devicePHover(ap1DId); //The clicked img is selected
    		selectedAp.src = selectedSrc;
    		selectedAp = image; //The clicked img now is the selected one and its data is saved
    		selectedSrc = deviceP(ap1DId);
    	}
    } else { //If not
    	image.src = devicePHover(ap1DId); //The clicked img is selected
    	selectedAp = image;
    	selectedSrc = deviceP(ap1DId);
    }
}

function mouseOverApD1() {
	var image = document.getElementById('apD1');
	if ((selectedAp != image)){
    	image.src = devicePHover(ap1DId);
    }
}

function mouseOutApD1(){
	var image = document.getElementById('apD1');
	if ((selectedAp != image)){
    	image.src = deviceP(ap1DId);
    }
}

/* APD2*/
function changeApD2() {
    var image = document.getElementById('apD2');
    if (selectedAp != "null"){ //If there is something selected
    	if (selectedAp != image){ //If it is NOT the clicked img
    		image.src = devicePHover(ap2DId); //The clicked img is selected
    		selectedAp.src = selectedSrc;
    		selectedAp = image; //The clicked img now is the selected one and its data is saved
    		selectedSrc = deviceP(ap2DId);
    	}
    } else { //If not
    	image.src = devicePHover(ap2DId); //The clicked img is selected
    	selectedAp = image;
    	selectedSrc = deviceP(ap2DId);
    }
}

function mouseOverApD2() {
	var image = document.getElementById('apD2');
	if ((selectedAp != image)){
    	image.src = devicePHover(ap2DId);
    }
}

function mouseOutApD2(){
	var image = document.getElementById('apD2');
	if ((selectedAp != image)){
    	image.src = deviceP(ap2DId);
    }
}

/* APD3*/
function changeApD3() {
    var image = document.getElementById('apD3');
    if (selectedAp != "null"){ //If there is something selected
    	if (selectedAp != image){ //If it is NOT the clicked img
    		image.src = devicePHover(ap3DId); //The clicked img is selected
    		selectedAp.src = selectedSrc;
    		selectedAp = image; //The clicked img now is the selected one and its data is saved
    		selectedSrc = deviceP(ap3DId);
    	}
    } else { //If not
    	image.src = devicePHover(ap3DId); //The clicked img is selected
    	selectedAp = image;
    	selectedSrc = deviceP(ap3DId);
    }
}

function mouseOverApD3() {
	var image = document.getElementById('apD3');
	if ((selectedAp != image)){
    	image.src = devicePHover(ap3DId);
    }
}

function mouseOutApD3(){
	var image = document.getElementById('apD3');
	if ((selectedAp != image)){
    	image.src = deviceP(ap3DId);
    }
}

/* APD4*/
function changeApD4() {
    var image = document.getElementById('apD4');
    if (selectedAp != "null"){ //If there is something selected
    	if (selectedAp != image){ //If it is NOT the clicked img
    		image.src = devicePHover(ap4DId); //The clicked img is selected
    		selectedAp.src = selectedSrc;
    		selectedAp = image; //The clicked img now is the selected one and its data is saved
    		selectedSrc = deviceP(ap4DId);
    	}
    } else { //If not
    	image.src = devicePHover(ap4DId); //The clicked img is selected
    	selectedAp = image;
    	selectedSrc = deviceP(ap4DId);
    }
}

function mouseOverApD4() {
	var image = document.getElementById('apD4');
	if ((selectedAp != image)){
    	image.src = devicePHover(ap4DId);
    }
}

function mouseOutApD4(){
	var image = document.getElementById('apD4');
	if ((selectedAp != image)){
    	image.src = deviceP(ap4DId);
    }
}

/* APS1*/
function changeApS1() {
    var image = document.getElementById('apS1');
    if (selectedAp != "null"){ //If there is something selected
    	if (selectedAp != image){ //If it is NOT the clicked img
    		image.src = devicePHover(ap1SId); //The clicked img is selected
    		selectedAp.src = selectedSrc;
    		selectedAp = image; //The clicked img now is the selected one and its data is saved
    		selectedSrc = deviceP(ap1SId);
    	}
    } else { //If not
    	image.src = devicePHover(ap1SId); //The clicked img is selected
    	selectedAp = image;
    	selectedSrc = deviceP(ap1SId);
    }
}

function mouseOverApS1() {
	var image = document.getElementById('apS1');
	if ((selectedAp != image)){
    	image.src = devicePHover(ap1SId);
    }
}

function mouseOutApS1(){
	var image = document.getElementById('apS1');
	if ((selectedAp != image)){
    	image.src = deviceP(ap1SId);
    }
}

/* APS2*/
function changeApS2() {
    var image = document.getElementById('apS2');
    if (selectedAp != "null"){ //If there is something selected
    	if (selectedAp != image){ //If it is NOT the clicked img
    		image.src = devicePHover(ap2SId); //The clicked img is selected
    		selectedAp.src = selectedSrc;
    		selectedAp = image; //The clicked img now is the selected one and its data is saved
    		selectedSrc = deviceP(ap2SId);
    	}
    } else { //If not
    	image.src = devicePHover(ap2SId); //The clicked img is selected
    	selectedAp = image;
    	selectedSrc = deviceP(ap2SId);
    }
}

function mouseOverApS2() {
	var image = document.getElementById('apS2');
	if ((selectedAp != image)){
    	image.src = devicePHover(ap2SId);
    }
}

function mouseOutApS2(){
	var image = document.getElementById('apS2');
	if ((selectedAp != image)){
    	image.src = deviceP(ap2SId);
    }
}

/* APS3*/
function changeApS3() {
    var image = document.getElementById('apS3');
    if (selectedAp != "null"){ //If there is something selected
    	if (selectedAp != image){ //If it is NOT the clicked img
    		image.src = devicePHover(ap3SId); //The clicked img is selected
    		selectedAp.src = selectedSrc;
    		selectedAp = image; //The clicked img now is the selected one and its data is saved
    		selectedSrc = deviceP(ap3SId);
    	}
    } else { //If not
    	image.src = devicePHover(ap3SId); //The clicked img is selected
    	selectedAp = image;
    	selectedSrc = deviceP(ap3SId);
    }
}

function mouseOverApS3() {
	var image = document.getElementById('apS3');
	if ((selectedAp != image)){
    	image.src = devicePHover(ap3SId);
    }
}

function mouseOutApS3(){
	var image = document.getElementById('apS3');
	if ((selectedAp != image)){
    	image.src = deviceP(ap3SId);
    }
}

/* APS4*/
function changeApS4() {
    var image = document.getElementById('apS4');
    if (selectedAp != "null"){ //If there is something selected
    	if (selectedAp != image){ //If it is NOT the clicked img
    		image.src = devicePHover(ap4SId); //The clicked img is selected
    		selectedAp.src = selectedSrc;
    		selectedAp = image; //The clicked img now is the selected one and its data is saved
    		selectedSrc = deviceP(ap4SId);
    	}
    } else { //If not
    	image.src = devicePHover(ap4SId); //The clicked img is selected
    	selectedAp = image;
    	selectedSrc = deviceP(ap4SId);
    }
}

function mouseOverApS4() {
	var image = document.getElementById('apS4');
	if ((selectedAp != image)){
    	image.src = devicePHover(ap4SId);
    }
}

function mouseOutApS4(){
	var image = document.getElementById('apS4');
	if ((selectedAp != image)){
    	image.src = deviceP(ap4SId);
    }
}

/* APS5*/
function changeApS5() {
    var image = document.getElementById('apS5');
    if (selectedAp != "null"){ //If there is something selected
    	if (selectedAp != image){ //If it is NOT the clicked img
    		image.src = devicePHover(ap5SId); //The clicked img is selected
    		selectedAp.src = selectedSrc;
    		selectedAp = image; //The clicked img now is the selected one and its data is saved
    		selectedSrc = deviceP(ap5SId);
    	}
    } else { //If not
    	image.src = devicePHover(ap5SId); //The clicked img is selected
    	selectedAp = image;
    	selectedSrc = deviceP(ap5SId);
    }
}

function mouseOverApS5() {
	var image = document.getElementById('apS5');
	if ((selectedAp != image)){
    	image.src = devicePHover(ap5SId);
    }
}

function mouseOutApS5(){
	var image = document.getElementById('apS5');
	if ((selectedAp != image)){
    	image.src = deviceP(ap5SId);
    }
}

/* APE1*/
function changeApE1() {
    var image = document.getElementById('apE1');
    if (selectedAp != "null"){ //If there is something selected
    	if (selectedAp != image){ //If it is NOT the clicked img
    		image.src = devicePHover(ap1EId); //The clicked img is selected
    		selectedAp.src = selectedSrc;
    		selectedAp = image; //The clicked img now is the selected one and its data is saved
    		selectedSrc = deviceP(ap1EId);
    	}
    } else { //If not
    	image.src = devicePHover(ap1EId); //The clicked img is selected
    	selectedAp = image;
    	selectedSrc = deviceP(ap1EId);
    }
}

function mouseOverApE1() {
	var image = document.getElementById('apE1');
	if ((selectedAp != image)){
    	image.src = devicePHover(ap1EId);
    }
}

function mouseOutApE1(){
	var image = document.getElementById('apE1');
	if ((selectedAp != image)){
    	image.src = deviceP(ap1EId);
    }
}

/* APE2*/
function changeApE2() {
    var image = document.getElementById('apE2');
    if (selectedAp != "null"){ //If there is something selected
    	if (selectedAp != image){ //If it is NOT the clicked img
    		image.src = devicePHover(ap2EId); //The clicked img is selected
    		selectedAp.src = selectedSrc;
    		selectedAp = image; //The clicked img now is the selected one and its data is saved
    		selectedSrc = deviceP(ap2EId);
    	}
    } else { //If not
    	image.src = devicePHover(ap2EId); //The clicked img is selected
    	selectedAp = image;
    	selectedSrc = deviceP(ap2EId);
    }
}

function mouseOverApE2() {
	var image = document.getElementById('apE2');
	if ((selectedAp != image)){
    	image.src = devicePHover(ap2EId);
    }
}

function mouseOutApE2(){
	var image = document.getElementById('apE2');
	if ((selectedAp != image)){
    	image.src = deviceP(ap2EId);
    }
}

/* APE3*/
function changeApE3() {
    var image = document.getElementById('apE3');
    if (selectedAp != "null"){ //If there is something selected
    	if (selectedAp != image){ //If it is NOT the clicked img
    		image.src = devicePHover(ap3EId); //The clicked img is selected
    		selectedAp.src = selectedSrc;
    		selectedAp = image; //The clicked img now is the selected one and its data is saved
    		selectedSrc = deviceP(ap3EId);
    	}
    } else { //If not
    	image.src = devicePHover(ap3EId); //The clicked img is selected
    	selectedAp = image;
    	selectedSrc = deviceP(ap3EId);
    }
}

function mouseOverApE3() {
	var image = document.getElementById('apE3');
	if ((selectedAp != image)){
    	image.src = devicePHover(ap3EId);
    }
}

function mouseOutApE3(){
	var image = document.getElementById('apE3');
	if ((selectedAp != image)){
    	image.src = deviceP(ap3EId);
    }
}

//DESELECT FUNCTION
function deselect(id){
	var image = document.getElementById(id);
	switch(id){
		case 'ap1':
			image.src = "./img/dev/aireP.png"; //The clicked img is unselected
    		selectedAp = "null";
    		selectedSrc = "null";
    		break;
    	case 'ap2':
    		image.src = "./img/dev/bombetaP.png"; //The clicked img is unselected
    		selectedAp = "null";
    		selectedSrc = "null";
    		break;
    	case 'ap3':
    		image.src = "./img/dev/fornP.png"; //The clicked img is unselected
    		selectedAp = "null";
    		selectedSrc = "null";
    		break;
    	case 'ap4':
    		image.src = "./img/dev/microonesP.png"; //The clicked img is unselected
    		selectedAp = "null";
    		selectedSrc = "null";
    		break;
    	case 'ap5':
    		image.src = "./img/dev/neveraP.png"; //The clicked img is unselected
    		selectedAp = "null";
    		selectedSrc = "null";
    		break;
    	case 'ap6':
    		image.src = "./img/dev/pcP.png"; //The clicked img is unselected
    		selectedAp = "null";
    		selectedSrc = "null";
    		break;
    	case 'ap7':
    		image.src = "./img/dev/rentadoraP.png"; //The clicked img is unselected
    		selectedAp = "null";
    		selectedSrc = "null";
    		break;
    	case 'ap8':
    		image.src = "./img/dev/rentaplatsP.png"; //The clicked img is unselected
    		selectedAp = "null";
    		selectedSrc = "null";
    		break;
    	case 'ap9':
    		image.src = "./img/dev/routerP.png"; //The clicked img is unselected
    		selectedAp = "null";
    		selectedSrc = "null";
    		break;
    	case 'ap10':
    		image.src = "./img/dev/teleP.png"; //The clicked img is unselected
    		selectedAp = "null";
    		selectedSrc = "null";
    		break;
    	case 'ap11':
    		image.src = "./img/dev/consolaP.png"; //The clicked img is unselected
    		selectedAp = "null";
    		selectedSrc = "null";
    		break;
    	case 'apC1':
    		image.src = deviceP(ap1CId); //The clicked img is unselected
    		selectedAp = "null";
    		selectedSrc = "null";
    		break;
    	case 'apC2':
    		image.src = deviceP(ap2CId); //The clicked img is unselected
    		selectedAp = "null";
    		selectedSrc = "null";
    		break;
    	case 'apC3':
    		image.src = deviceP(ap3CId); //The clicked img is unselected
    		selectedAp = "null";
    		selectedSrc = "null";
    		break;
    	case 'apC4':
    		image.src = deviceP(ap4CId); //The clicked img is unselected
    		selectedAp = "null";
    		selectedSrc = "null";
    		break;
    	case 'apC5':
    		image.src = deviceP(ap5CId); //The clicked img is unselected
    		selectedAp = "null";
    		selectedSrc = "null";
    		break;
    	case 'apC6':
    		image.src = deviceP(ap6CId); //The clicked img is unselected
    		selectedAp = "null";
    		selectedSrc = "null";
    		break;
    	case 'apL1':
    		image.src = deviceP(ap1LId); //The clicked img is unselected
    		selectedAp = "null";
    		selectedSrc = "null";
    		break;
    	case 'apL2':
    		image.src = deviceP(ap2LId); //The clicked img is unselected
    		selectedAp = "null";
    		selectedSrc = "null";
    		break;
    	case 'apD1':
    		image.src = deviceP(ap1DId); //The clicked img is unselected
    		selectedAp = "null";
    		selectedSrc = "null";
    		break;
    	case 'apD2':
    		image.src = deviceP(ap2DId); //The clicked img is unselected
    		selectedAp = "null";
    		selectedSrc = "null";
    		break;
    	case 'apD3':
    		image.src = deviceP(ap3DId); //The clicked img is unselected
    		selectedAp = "null";
    		selectedSrc = "null";
    		break;
    	case 'apD4':
    		image.src = deviceP(ap4DId); //The clicked img is unselected
    		selectedAp = "null";
    		selectedSrc = "null";
    		break;
    	case 'apS1':
    		image.src = deviceP(ap1SId); //The clicked img is unselected
    		selectedAp = "null";
    		selectedSrc = "null";
    		break;
    	case 'apS2':
    		image.src = deviceP(ap2SId); //The clicked img is unselected
    		selectedAp = "null";
    		selectedSrc = "null";
    		break;
    	case 'apS3':
    		image.src = deviceP(ap3SId); //The clicked img is unselected
    		selectedAp = "null";
    		selectedSrc = "null";
    		break;
    	case 'apS4':
    		image.src = deviceP(ap4SId); //The clicked img is unselected
    		selectedAp = "null";
    		selectedSrc = "null";
    		break;
    	case 'apS5':
    		image.src = deviceP(ap5SId); //The clicked img is unselected
    		selectedAp = "null";
    		selectedSrc = "null";
    		break;
    	case 'apE1':
    		image.src = deviceP(ap1EId); //The clicked img is unselected
    		selectedAp = "null";
    		selectedSrc = "null";
    		break;
    	case 'apE2':
    		image.src = deviceP(ap2EId); //The clicked img is unselected
    		selectedAp = "null";
    		selectedSrc = "null";
    		break;
    	case 'apE3':
    		image.src = deviceP(ap3EId); //The clicked img is unselected
    		selectedAp = "null";
    		selectedSrc = "null";
    		break;
	}
}
