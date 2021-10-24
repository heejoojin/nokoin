
var element = document.createElement("img");
element.id = "loading"

setTimeout(function() {
	element.setAttribute("src", "images/screens/loading.gif");
	document.getElementById("container").appendChild(element);
}, 1000);

setTimeout(function() {
	element.style.display = 'none';
	window.location = "/end";
}, 7000);