//This creates the grid
let makeGrid = document.createElement("div");
makeGrid.id = "makeGrid";
let makeGrid2 = sketchContainer.appendChild(makeGrid);
const etch = document.getElementById("sketchContainer");
etch.addEventListener("click", placeSquare);

for (i = 1; i <= 256; i++){
    let nextDiv = document.createElement("div");
    nextDiv.id = "clickemDiv" + i;
    sketchContainer.appendChild(nextDiv);
    }
function placeSquare(){
    
}