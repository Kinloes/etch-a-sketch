document.addEventListener("mousedown", function(){
    trigger = true
})
document.addEventListener("mouseup", function(){
    trigger = false
})
//This creates the grid
for (i = 1; i <= 256; i++){
    let makeGrid = document.createElement("div");
    makeGrid.id = "makeGrid" + i;
    sketchContainer.appendChild(makeGrid);
//This adds the click element
    makeGrid.addEventListener("mousedown", placeSquare2)
    function placeSquare2(){
        makeGrid.style.backgroundColor = "black"
    }
    makeGrid.addEventListener("mouseover", placeSquare)
    function placeSquare(){
        if (trigger === true){
            makeGrid.style.backgroundColor = "black";
        }
    }
}