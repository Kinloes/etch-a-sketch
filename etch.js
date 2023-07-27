drawButton = false;
eraseButton = false;

//This allows the "click and drag" drawing functionality
document.addEventListener("mousedown", function(){
    trigger = true
})
document.addEventListener("mouseup", function(){
    trigger = false
})

//eventlisteners for buttons
document.getElementById("draw").onclick = function(){
    draw.style.boxShadow = "inset 0px 0px 4px";
    drawButton = true;
}
document.getElementById("erase").onclick = function(){
    erase.style.boxShadow = "inset 0px 0px 4px";
    eraseButton = true;
}

//This creates the grid
for (i = 1; i <= 256; i++){
    let makeGrid = document.createElement("div");
    makeGrid.id = "makeGrid" + i;
    sketchContainer.appendChild(makeGrid);

//This adds the click element
    makeGrid.addEventListener("mousedown", placeSquare)
    function placeSquare(){
        if (drawButton === true){
        makeGrid.style.backgroundColor = "black"
        }
        if (eraseButton === true){
            makeGrid.style.backgroundColor = "white"
        }
    }
    makeGrid.addEventListener("mouseover", placeSquare2)
    function placeSquare2(){
        if (trigger === true){
            if (drawButton === true){
                makeGrid.style.backgroundColor = "black"
                }
            if (eraseButton === true){
                makeGrid.style.backgroundColor = "white"
            }
        }
    }
}