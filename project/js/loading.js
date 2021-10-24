
var element = document.createElement("img");

setTimeout(function() {
	element.setAttribute("src", "images/screens/loading.gif");
	document.getElementById("loading").appendChild(element);
}, 2000);

setTimeout(function() {
	element.style.display = 'none';
	document.body.style.backgroundImage = "url('/images/screens/5.png')";
}, 7000);