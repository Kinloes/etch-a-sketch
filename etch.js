drawButton = false;
eraseButton = false;
rainbowButton = false;
//Random number generator for rainbow button
function randomnum(min, max){
    return Math.floor(Math.random() * 255) + 1;
}
const rng = randomnum();
console.log (rng)

//Allows the "click and drag" drawing functionality
document.addEventListener("mousedown", function(){
    trigger = true
})
document.addEventListener("mouseup", function(){
    trigger = false
})

//eventlisteners for buttons
document.getElementById("draw").onclick = function(){
    drawButton = true;
    if (drawButton = true){
    draw.style.boxShadow = "inset 0px 0px 4px";
    drawButtonTru();
    }
}
document.getElementById("erase").onclick = function(){
    eraseButton = true;
    if (eraseButton = true){
    erase.style.boxShadow = "inset 0px 0px 4px";
    eraseButtonTru();
    }
}

document.getElementById("rainbow").onclick = function(){
    rainbowButton = true;
    if (rainbowButton = true){
        rainbow.style.boxShadow = "inset 0px 0px 4px";
        rainbowButtonTru();
    }
}

//Removes the "button press" CSS and functionality for non-active buttons
function drawButtonTru(){
    erase.style.boxShadow = "inset 0px 0px 0px";
    eraseButton = false;
    rainbow.style.boxShadow = "inset 0px 0px 0px";
    rainbowButton = false;
}
function eraseButtonTru(){
    draw.style.boxShadow = "inset 0px 0px 0px";
    drawButton = false;
    rainbow.style.boxShadow = "inset 0px 0px 0px";
    rainbowButton = false;
}
function rainbowButtonTru(){
    erase.style.boxShadow = "inset 0px 0px 0px";
    eraseButton = false;
    draw.style.boxShadow = "inset 0px 0px 0px";
    drawButton = false;
}
//This creates the grid
for (i = 1; i <= 256; i++){
    let makeGrid = document.createElement("div");
    makeGrid.id = "makeGrid" + i;
    sketchContainer.appendChild(makeGrid);

//This adds a pixel of the selected button wherever the user clicks
    makeGrid.addEventListener("mousedown", placeSquare)
    function placeSquare(){
        if (drawButton === true){
        makeGrid.style.backgroundColor = "black"
        }
        if (eraseButton === true){
            makeGrid.style.backgroundColor = "white"
        }
        if (rainbowButton === true){
            makeGrid.style.backgroundColor = "rgb(" + randomnum() + "," + randomnum() + "," + randomnum() + ")";
        }
    }
//This adds a "drag" functionality that continually adds colored squares as the user holds the button
    makeGrid.addEventListener("mouseover", placeSquare2)
    function placeSquare2(){
        if (trigger === true){
            if (drawButton === true){
                makeGrid.style.backgroundColor = "black"
                }
            if (eraseButton === true){
                makeGrid.style.backgroundColor = "white"
                }
            if (rainbowButton === true){
                makeGrid.style.backgroundColor = "rgb(" + randomnum() + "," + randomnum() + "," + randomnum() + ")";
                }
        }
    }
}