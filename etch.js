const etch = document.getElementById("sketchContainer");
const div = document.getElementById("1")
div.addEventListener("click", placeSquare);
function placeSquare(){
    div.style.backgroundColor = "blue";
}