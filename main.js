const objekt = document.getElementById("objekt")
const startButton = document.getElementById("startButton")

startButton.onclick =()=>{
    movePoint(objekt, 100, 400);
}
const movePoint = (element, x, y) => {
    element.style.top=`${y}px`;
    element.style.left=`${x}px`;
}