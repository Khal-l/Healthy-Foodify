

function rand(y){
	var x = Math.floor(Math.random() * 6) + 1;
	let recipe = document.getElementById("rand");
	if(y==undefined)
		y="";
	recipe.href = y + "recipe" + x + ".html";
}
function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut();

