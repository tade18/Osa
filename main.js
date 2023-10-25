const objekt = document.getElementById("objekt")
const startButton = document.getElementById("startButton")

startButton.onclick =()=>{
    movePoint(objekt, getRandomNumber(80,600), getRandomNumber(80,600));
}
const movePoint = (element, x, y) => {
    element.style.top=`${y}px`;
    element.style.left=`${x}px`;
}

const getRandomNumber =(minimum,maximum)=> Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;