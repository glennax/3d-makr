
	var logo = Snap.select("#logo"),
		mountain = logo.select("#mountain"),
		timer;

		mountain.attr({
			fill:"#C7C7C7"
		});

var colorArray =["#435374", "#AEBFDC","#627881","#a8a8aa" ];
function changeColor(){
	var colorTemp = colorArray[Math.floor(Math.random()*3)]; 
	mountain.animate({
		fill: colorTemp
	},2000, mina.bounce);

}

setInterval(changeColor, 500);

var dots = window.setInterval( function() {

    var wait = document.getElementById("wait");
    if ( wait.innerHTML.length > 2 ) 
        wait.innerHTML = "";
    else 
        wait.innerHTML += ".";
    }, 1000);

