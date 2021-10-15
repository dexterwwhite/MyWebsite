function changeBackgroundColor(color){
	var element = document.body;
	element.classList.toggle("dark-mode");
}

window.onload = function(){
	var color = localStorage.getItem("changedColor");
	changeBackground(color);
}