//This allows the "click and drag" drawing functionality
document.addEventListener("mousedown", function(){
    trigger = true
})
document.addEventListener("mouseup", function(){
    trigger = false
})
//eventlisteners for buttons
test.addEventListener("click", function(){
    test.style.boxShadow = "inset 0px 0px 4px";
})
erase.addEventListener("click", clickButton)
    function clickButton(){
    erase.style.boxShadow = "inset 0px 0px 4px";
    eraseTrigger = true;
    }
//This creates the grid
for (i = 1; i <= 256; i++){
    let makeGrid = document.createElement("div");
    makeGrid.id = "makeGrid" + i;
    sketchContainer.appendChild(makeGrid);
//This adds the click element
    makeGrid.addEventListener("mousedown", placeSquare)
    function placeSquare(){
        makeGrid.style.backgroundColor = "black"
    }
    makeGrid.addEventListener("mouseover", placeSquare2)
    function placeSquare2(){
        if (trigger === true){
            makeGrid.style.backgroundColor = "black";
        }
    }
}