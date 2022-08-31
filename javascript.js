const defaultGridSize = 16;
const defaultPenColor = "black";

const grid = document.querySelector(".gridContainer");

let gridSize = 16;

function defaultGrid() {
	
	const grid = document.querySelector("#gridContainer");

	for (let i = 0; i < gridSize; i++) {

		for (let j = 0; j < gridSize; j++) {
			const p = document.createElement("div.pixel");
			p.innerHTML = j + 1;
			grid.append(p);
			
			if (j == gridSize) {
				grid.write("<br>");
			}
		}
	}
}

defaultGrid();

function updateGrid(gridSize) {
	
	// code...

}

function reset() {

	// code...

}


