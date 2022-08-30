window.onload = defaultGrid();

let gridSize = 16;

function defaultGrid() {

	let grid = document.getElementById("gridContainer");

	for(let i=1; i<16; i++) {
		for(let j=1; j<16; j++) {
			grid.innerHTML += "<div id='pixel'>"
		}
	}
}

