function createGrid(x) {
	let container = document.getElementById("container");
	for (let i = 0; i < x; i++) {
		for (let j = 0; j < x; j++) {
			let divs = document.createElement("div");
			divs.className = "grid";
			divs.style.height = 960 / x + "px";
			divs.style.width = 960 / x + "px";

			container.appendChild(divs);
		};
	};
}



const boxes = document.querySelectorAll(".grid")

function colorDiv(event) {
	event.target.classList.add('moused-grid')
}

boxes.forEach((div) => {
	div.addEventListener("mouseover", colorDiv);
});
