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

	var image = document.getElementById('devImg');
	
	image.src = selectedSrc;
	
	var consum = "null"; //It will contain "el Consum en Kw/h" (based on the average)
	var mitjana = "null"; //It will contain "Hores que utilitza l'aparell la mitjana"
	var percentatge = "null"; //It will contain "Percentatge del consum de l'aparell al dia/a la setmana"
	
	switch(selectedName) { //Depending on the selected device, the information is diferent but the code format is the same
	
		case "Aire condicionat": //In case this device is selected
			time=12; //Some information that the user introduced time ago is supposed (no data base)
			consum = 0.7*time;
			consum = parseFloat(consum).toFixed(2);
			mitjana = 6;
			percentatge = parseFloat((consum*100)/24).toFixed(2);
			document.getElementById("info1").innerHTML = "Utilitzes l'aire condicionat "+
				time+" hores al dia.";
			if(time>=mitjana){
				document.getElementById("info2").innerHTML = (time-mitjana)+" hores més que la mitjana!";
			} else {
				document.getElementById("info2").innerHTML = (mitjana-time)+" hores menys que la mitjana!";
			}
			document.getElementById("info3").innerHTML = "La majoria d'aires condicionats si s'utilitzaren "+time+" hores al dia consumirien "+consum+"Kw,<br> el "+percentatge+"% del consum mitjà diari d'una vivenda!";
			document.getElementById("adv1T").innerHTML = "Tanca les finestres mentre l'utilitzes";
			document.getElementById("adv2T").innerHTML = "Apaga l'aparell si no l'utilitzes";
			document.getElementById("adv3T").innerHTML = "Augmenta la temperatura de l'aire condicionat";
			document.getElementById("adv1I").src = "./img/adv/finestra.png";
			document.getElementById("adv2I").src = "./img/adv/apagar.png";
			document.getElementById("adv3I").src = "./img/adv/temperatura.png";
			break;
		
		case "Bombeta":
			time=2;
			consum = 0.06*time;
			consum = parseFloat(consum).toFixed(2);
			mitjana = 2;
			percentatge = parseFloat((consum*100)/24).toFixed(2);
			document.getElementById("info1").innerHTML = "Utilitzes la bombeta "+
				time+" hores al dia.";
			if(time>=mitjana){
				document.getElementById("info2").innerHTML = (time-mitjana)+" hores més que la mitjana!";
			} else {
				document.getElementById("info2").innerHTML = (mitjana-time)+" hores menys que la mitjana!";
			}
			//Advices text and pictures
			document.getElementById("info3").innerHTML = "La majoria de bombetes si s'utilitzaren "+time+" hores al dia consumirien "+consum+"Kw,<br> el "+percentatge+"% del consum mitjà diari d'una vivenda!";
			document.getElementById("adv2T").innerHTML = "Apaga les llums si no les utilitzes";
			document.getElementById("adv2I").src = "./img/adv/apagar.png";
			document.getElementById("adv1").style.visibility = "collapse";
			document.getElementById("adv3").style.visibility = "collapse";
			break;
		
		case "Forn":
			time=3;
			consum = 0.8*time;
			consum = parseFloat(consum).toFixed(2);
			mitjana = 7;
			percentatge = parseFloat((consum*100)/160).toFixed(2);
			document.getElementById("info1").innerHTML = "Utilitzes el forn "+
				time+" hores a la setmana.";
			if(time>=mitjana){
				document.getElementById("info2").innerHTML = (time-mitjana)+" hores més que la mitjana!";
			} else {
				document.getElementById("info2").innerHTML = (mitjana-time)+" hores menys que la mitjana!";
			}
			document.getElementById("info3").innerHTML = "La majoria de forns si s'utilitzaren "+time+" hores a la setmana consumirien "+consum+"Kw,<br> el "+percentatge+"% del consum mitjà setmanal d'una vivenda!";
			document.getElementById("adv2T").innerHTML = "Apaga el forn si no l'utilitzes";
			document.getElementById("adv2I").src = "./img/adv/apagar.png";
			document.getElementById("adv1").style.visibility = "collapse";
			document.getElementById("adv3").style.visibility = "collapse";
			break;
			
		case "Microones":
			time=0.5;
			consum = 1*time;
			consum = parseFloat(consum).toFixed(2);
			mitjana = 0.5;
			percentatge = parseFloat((consum*100)/24).toFixed(2);
			document.getElementById("info1").innerHTML = "Utilitzes el microones "+
				time+" hores al dia.";
			if(time>=mitjana){
				document.getElementById("info2").innerHTML = (time-mitjana)+" hores més que la mitjana!";
			} else {
				document.getElementById("info2").innerHTML = (mitjana-time)+" hores menys que la mitjana!";
			}
			document.getElementById("info3").innerHTML = "La majoria de microones si s'utilitzaren "+time+" hores al dia consumirien "+consum+"Kw,<br> el "+percentatge+"% del consum mitjà diari d'una vivenda!";
			document.getElementById("adv2T").innerHTML = "Apaga l'aparell si no l'utilitzes";
			document.getElementById("adv2I").src = "./img/adv/apagar.png";
			document.getElementById("adv1").style.visibility = "collapse";
			document.getElementById("adv3").style.visibility = "collapse";
			break;
		
		case "Nevera":
			time=24;
			consum = 0.5*time;
			consum = parseFloat(consum).toFixed(2);
			mitjana = 24;
			percentatge = parseFloat((consum*100)/24).toFixed(2);
			document.getElementById("info1").innerHTML = "Utilitzes la nevera "+
				time+" hores al dia.";
			if(time>=mitjana){
				document.getElementById("info2").innerHTML = (time-mitjana)+" hores més que la mitjana!";
			} else {
				document.getElementById("info2").innerHTML = (mitjana-time)+" hores menys que la mitjana!";
			}
			document.getElementById("info3").innerHTML = "La majoria de neveres si s'utilitzaren "+time+" hores al dia consumirien "+consum+"Kw,<br> el "+percentatge+"% del consum mitjà diari d'una vivenda!";
			document.getElementById("adv2T").innerHTML = "No tinguis la temperatura més baixa del que cal";
			document.getElementById("adv2I").src = "./img/adv/temperatura.png";
			document.getElementById("adv1").style.visibility = "collapse";
			document.getElementById("adv3").style.visibility = "collapse";
			break;
			
		case "Ordinador":
			time=10;
			consum = 0.1*time;
			consum = parseFloat(consum).toFixed(2);
			mitjana = 21;
			percentatge = parseFloat((consum*100)/160).toFixed(2);
			document.getElementById("info1").innerHTML = "Utilitzes l'ordinador "+
				time+" hores a la setmana.";
			if(time>=mitjana){
				document.getElementById("info2").innerHTML = (time-mitjana)+" hores més que la mitjana!";
			} else {
				document.getElementById("info2").innerHTML = (mitjana-time)+" hores menys que la mitjana!";
			}
			document.getElementById("info3").innerHTML = "La majoria d'ordinadors si s'utilitzaren "+time+" hores a la setmana consumirien "+consum+"Kw,<br> el "+percentatge+"% del consum mitjà setmanal d'una vivenda!";
			document.getElementById("adv2T").innerHTML = "Apaga l'ordinador si no l'utilitzes";
			document.getElementById("adv2I").src = "./img/adv/apagar.png";
			document.getElementById("adv1").style.visibility = "collapse";
			document.getElementById("adv3").style.visibility = "collapse";
			break;
			
		case "Rentadora":
			time=5;
			consum = 0.5*time;
			consum = parseFloat(consum).toFixed(2);
			mitjana = 3.5;
			percentatge = parseFloat((consum*100)/160).toFixed(2);
			document.getElementById("info1").innerHTML = "Utilitzes la rentadora "+
				time+" hores a la setmana.";
			if(time>=mitjana){
				document.getElementById("info2").innerHTML = (time-mitjana)+" hores més que la mitjana!";
			} else {
				document.getElementById("info2").innerHTML = (mitjana-time)+" hores menys que la mitjana!";
			}
			document.getElementById("info3").innerHTML = "La majoria de rentadores si s'utilitzaren "+time+" hores a la setmana consumirien "+consum+"Kw,<br> el "+percentatge+"% del consum mitjà setmanal d'una vivenda!";
			document.getElementById("adv2T").innerHTML = "Apaga l'aparell si no l'utilitzes";
			document.getElementById("adv2I").src = "./img/adv/apagar.png";
			document.getElementById("adv1").style.visibility = "collapse";
			document.getElementById("adv3").style.visibility = "collapse";
			break;
			
		case "Rentaplats":
			time=0.5;
			consum = 1*time;
			consum = parseFloat(consum).toFixed(2);
			mitjana = 1;
			percentatge = parseFloat((consum*100)/24).toFixed(2);
			document.getElementById("info1").innerHTML = "Utilitzes el rentaplats "+
				time+" hores al dia.";
			if(time>=mitjana){
				document.getElementById("info2").innerHTML = (time-mitjana)+" hores més que la mitjana!";
			} else {
				document.getElementById("info2").innerHTML = (mitjana-time)+" hores menys que la mitjana!";
			}
			document.getElementById("info3").innerHTML = "La majoria de rentaplats si s'utilitzaren "+time+" hores al dia consumirien "+consum+"Kw,<br> el "+percentatge+"% del consum mitjà diari d'una vivenda!";
			document.getElementById("adv2T").innerHTML = "Apaga l'aparell si no l'utilitzes";
			document.getElementById("adv2I").src = "./img/adv/apagar.png";
			document.getElementById("adv1").style.visibility = "collapse";
			document.getElementById("adv3").style.visibility = "collapse";
			break;
			
		case "Router WiFi":
			time=24;
			consum = 0.01*time;
			consum = parseFloat(consum).toFixed(2);
			mitjana = 16;
			percentatge = parseFloat((consum*100)/24).toFixed(2);
			document.getElementById("info1").innerHTML = "Utilitzes el router WiFi "+
				time+" hores al dia.";
			if(time>=mitjana){
				document.getElementById("info2").innerHTML = (time-mitjana)+" hores més que la mitjana!";
			} else {
				document.getElementById("info2").innerHTML = (mitjana-time)+" hores menys que la mitjana!";
			}
			document.getElementById("info3").innerHTML = "La majoria de routers WiFi si s'utilitzaren "+time+" hores al dia consumirien "+consum+"Kw,<br> el "+percentatge+"% del consum mitjà diari d'una vivenda!";
			document.getElementById("adv2T").innerHTML = "Apaga l'aparell si no l'utilitzes";
			document.getElementById("adv2I").src = "./img/adv/apagar.png";
			document.getElementById("adv1").style.visibility = "collapse";
			document.getElementById("adv3").style.visibility = "collapse";
			break;
			
		case "Televisió":
			time=2;
			consum = 0.2*time;
			consum = parseFloat(consum).toFixed(2);
			mitjana = 2.5;
			percentatge = parseFloat((consum*100)/24).toFixed(2);
			document.getElementById("info1").innerHTML = "Utilitzes la televisió "+
				time+" hores al dia.";
			if(time>=mitjana){
				document.getElementById("info2").innerHTML = (time-mitjana)+" hores més que la mitjana!";
			} else {
				document.getElementById("info2").innerHTML = (mitjana-time)+" hores menys que la mitjana!";
			}
			document.getElementById("info3").innerHTML = "La majoria de televisions si s'utilitzaren "+time+" hores al dia consumirien "+consum+"Kw,<br> el "+percentatge+"% del consum mitjà diari d'una vivenda!";
			document.getElementById("adv2T").innerHTML = "Apaga la televisió si no l'estàs mirant";
			document.getElementById("adv2I").src = "./img/adv/apagar.png";
			document.getElementById("adv1").style.visibility = "collapse";
			document.getElementById("adv3").style.visibility = "collapse";
			break;
			
		case "Videoconsola":
			time=4;
			consum = 0.05*time;
			consum = parseFloat(consum).toFixed(2);
			mitjana = 3.5;
			percentatge = parseFloat((consum*100)/160).toFixed(2);
			document.getElementById("info1").innerHTML = "Utilitzes la videoconsola "+
				time+" hores a la setmana.";
			if(time>=mitjana){
				document.getElementById("info2").innerHTML = (time-mitjana)+" hores més que la mitjana!";
			} else {
				document.getElementById("info2").innerHTML = (mitjana-time)+" hores menys que la mitjana!";
			}
			document.getElementById("info3").innerHTML = "La majoria de videoconsoles si s'utilitzaren "+time+" hores a la setmana consumirien "+consum+"Kw,<br> el "+percentatge+"% del consum mitjà setmanal d'una vivenda!";
			document.getElementById("adv2T").innerHTML = "Apaga la videoconsola si no l'utilitzes";
			document.getElementById("adv2I").src = "./img/adv/apagar.png";
			document.getElementById("adv1").style.visibility = "collapse";
			document.getElementById("adv3").style.visibility = "collapse";
			break;
	}

	var id = $("#idUser");
	var login =  $("#login");
	id.css({
		top: login.offset().top + 48,
		left: login.offset().left - 10
	}).show();
}
