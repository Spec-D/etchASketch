const defaultGridSize = 16;
const defaultColor = "black";

let gridSize = 16;
let currentColor = "black";

function defaultGrid() {
	
	let grid = document.getElementById("gridContainer");
	
	let width = ((1 / gridSize) * 100); 
	
	window.alert("width: " + width);

	document.getElementsByClassName("pixel").style.width(width);


	for(let i=1; i<defaultGridSize; i++) {
		if (i == 1) {grid.innerHTML = grid.innerHTML + "<tr>";}
		
		for(let j=1; j<defaultGridSize; j++) {
			grid.innerHTML = grid.innerHTML + "<td class='pixel'>" + j + "</td>";
		}
		
		if (i == defaultGridSize) {grid.innerHTML = grid.innerHTML + "</tr>";}

	}
}

defaultGrid();

function updateGrid(gridSize) {
	
	// code...

}

function reset() {

	// code...

}


