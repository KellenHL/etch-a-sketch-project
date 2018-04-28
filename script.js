
let container = document.getElementById("container");

function createGrid(x) {
	for (var rows = 0; rows < x; rows++) {
		for (var columns = 0; columns < x; columns++) {
			container.append("div class='grid'></div>");
		};
	};
	document.getElementsByClassName("grid").width(960/x);
	document.getElementsByClassName("grid").width(960/x);
}

createGrid(16);

