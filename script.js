function createGrid(x) {
	let container = document.getElementById("container");
	for (let i = 0; i < x; i++) {
		for (let j = 0; j < x; j++) {
			let divs = document.createElement("div").innerHTML = "<div class='grid'></div>";
			divs.className = "grid";
			container.append("div");
		};
	};
	document.getElementsByClassName("grid").width = 960 / x;
	document.getElementsByClassName("grid").height = 960 / x;
}

createGrid(16);