// This function creates a grid using a given input and 
// changes the background color of the divs that make 
// up the grid when they are moused over.
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
	const boxes = document.querySelectorAll(".grid")

	function colorDiv(event) {
	event.target.classList.add('moused-grid')
	}

	boxes.forEach((div) => {
	div.addEventListener("mouseover", colorDiv);
	});
}

// This loads a 16x16 grid automatically when the page 
// is loaded.
window.onload=createGrid(16);


// Function to clear the grid, removing the divs inside of
// the container.
function clearGrid() {
	document.getElementById("container").innerHTML = "";
}

// Function to reset the grid, first clearing it, then
// storing a user-entered number and creating a new grid
// using the user's seletion.
function reset() {
	clearGrid();
	let z = prompt("Pick a number...");
	createGrid(z);
}

// This adds an event listener to the 'reset' button in the 
// html document, calling the reset() function when it is clicked.
document.getElementById("reset").addEventListener("click", reset);