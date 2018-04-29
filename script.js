function createGrid(x) {
	let container = document.getElementById("container");
	for (let i = 0; i < x; i++) {
		for (let j = 0; j < x; j++) {
			let divs = document.createElement("div");
			divs.className = "grid";
			container.appendChild(divs);
		};
	};
	let grid = document.getElementsByClassName("grid");
	grid.width = 960 / x;
	grid.height = 960 / x;
}

createGrid(16);