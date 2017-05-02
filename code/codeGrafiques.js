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

function changeType(idT) {
	if(idT=='habitacions'){
		var graphicType = document.getElementsByClassName("upButton")[0];
		var imageB = document.getElementById("imageB");
		imageB.src= "./img/botoHabitacionsHover.png"; 
		var otherType = document.getElementsByClassName("downButton")[0];
		var imageB2 = document.getElementById("imageB2");
		imageB2.src= "./img/botoAparells.png"; 
	}else if(idT=='aparells'){
		var graphicType = document.getElementsByClassName("downButton")[0];
		var imageB2 = document.getElementById("imageB2");
		imageB2.src= "./img/botoAparellsHover.png"; 
		var otherType = document.getElementsByClassName("upButton")[0];
		var imageB = document.getElementById("imageB");
		imageB.src= "./img/botoHabitacions.png"; 
	}
	graphicType.id = "selected";
	otherType.id = "notSelected";
	
	var tab1 = document.getElementById("actual");
	var tab2 = document.getElementById("previ");
	var tab3 = document.getElementById("millor");
	if(tab1.style.backgroundColor=="#CE9668"){
		var id='actual';
	}else if(tab2.style.backgroundColor=="#CE9668"){
		var id='previ';
	}else if(tab3.style.backgroundColor=="#CE9668"){
		var id='millor';
	}
	changeTab(id);
}

function changeUnit(){
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

	changeType(idT);
}
			
function changeTab(id) {
	var graphicType = document.getElementById("selected");
	var graphicUnit = document.getElementsByClassName("switch")[0];
	if(graphicType.className=='upButton'){
		if(graphicUnit.id=="kw"){			
			if(id=='actual'){
				var newGraphic = "./img/grafs/grafica1.png";	
				var otherTab1 = document.getElementById("millor");
				var otherTab2 = document.getElementById("previ");
			}else{
				if(id=='previ'){
					var newGraphic = "./img/grafs/grafica2.png";
					var otherTab1 = document.getElementById("millor");
					var otherTab2 = document.getElementById("actual");
				} else {
					var newGraphic = "./img/grafs/grafica3.png";
					var otherTab1 = document.getElementById("actual");
					var otherTab2 = document.getElementById("previ");
				}
			}				
		} else {
			if(id=='actual'){
				var newGraphic = "./img/grafs/grafica4.png";	
				var otherTab1 = document.getElementById("millor");
				var otherTab2 = document.getElementById("previ");
			}else{
				if(id=='previ'){
					var newGraphic = "./img/grafs/grafica5.png";
					var otherTab1 = document.getElementById("millor");
					var otherTab2 = document.getElementById("actual");
				} else {
					var newGraphic = "./img/grafs/grafica6.png";
					var otherTab1 = document.getElementById("actual");
					var otherTab2 = document.getElementById("previ");
				}
			}		
		}
	}else{	
		if(graphicUnit.id=="kw"){						
			if(id=='actual'){
				var newGraphic = "./img/grafs/grafica7.png";	
				var otherTab1 = document.getElementById("millor");
				var otherTab2 = document.getElementById("previ");
			}else{
				if(id=='previ'){
					var newGraphic = "./img/grafs/grafica8.png";
					var otherTab1 = document.getElementById("millor");
					var otherTab2 = document.getElementById("actual");
				} else {
					var newGraphic = "./img/grafs/grafica9.png";
					var otherTab1 = document.getElementById("actual");
					var otherTab2 = document.getElementById("previ");
				}
			}				
		} else {
			if(id=='actual'){
				var newGraphic = "./img/grafs/grafica10.png";	
				var otherTab1 = document.getElementById("millor");
				var otherTab2 = document.getElementById("previ");
			}else{
				if(id=='previ'){
					var newGraphic = "./img/grafs/grafica11.png";
					var otherTab1 = document.getElementById("millor");
					var otherTab2 = document.getElementById("actual");
				} else {
					var newGraphic = "./img/grafs/grafica12.png";
					var otherTab1 = document.getElementById("actual");
					var otherTab2 = document.getElementById("previ");
				}
			}
		}
	}			
	var selectedTab = document.getElementById(id);
	var imageGraphic = document.getElementById("graphic");
	imageGraphic.firstChild.src = newGraphic;
	selectedTab.style.backgroundColor= "#CE9668";
	otherTab1.style.backgroundColor= "#FFDBBE";
	otherTab2.style.backgroundColor= "#FFDBBE";
}