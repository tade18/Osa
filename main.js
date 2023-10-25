const objekt = document.getElementById("objekt")
const startButton = document.getElementById("startButton")
let gameInterval;
startButton.onclick =()=>{
    hideElement(startButton);
    startGameInterval(objekt);

}
const movePoint = (element, x, y) => {
    element.style.top=`${y}px`;
    element.style.left=`${x}px`;
}

const getRandomNumber =(minimum,maximum)=> Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

const hideElement = (element) => {
    element.style.display = "none";
}

const startGameInterval = (element) => {
    clearInterval(gameInterval);
    gameInterval=setInterval(()=>{
        movePoint(element, getRandomNumber(80,600), getRandomNumber(80,600));
    },550)
}