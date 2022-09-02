// Variables

const defaultGridSize = 16;
const defaultPenColor = "black";

const gridContainer = document.getElementById("gridContainer");

let gridSize = 16;
let rows = gridSize;
let cols = gridSize;

// function definitions

function defaultGrid() {

	gridSize = defaultGridSize;
	rows = gridSize;
	cols = gridSize;
	makeRows(rows, cols);

};

function makeRows(rows, cols) {

	gridContainer.style.setProperty('--grid-rows', rows);
	gridContainer.style.setProperty('--grid-cols', cols);

	for (c = 0; c < (rows * cols); c++) {
		let cell = document.createElement("div");
		cell.innerText = (c + 1);
		gridContainer.appendChild(cell).className = "cell";
	};
};

defaultGrid();

function updateGrid(gridSize) {
	
	makeRows(gridSize);
	makeColumns(gridSize);
}

function reset() {

	// code...

}


