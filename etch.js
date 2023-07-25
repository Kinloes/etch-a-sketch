//This creates the grid
for (i = 1; i <= 256; i++){
    let makeGrid = document.createElement("div");
    makeGrid.id = "makeGrid" + i;
    sketchContainer.appendChild(makeGrid);
//This adds the click element
    makeGrid.addEventListener("click", placeSquare);
    function placeSquare(){
        makeGrid.style.backgroundColor = "black";
    }
}