const objekt = document.getElementById("objekt");
const startButton = document.getElementById("startButton");
const timer = document.getElementById("timer");
let gameInterval;
let timeStart;
startButton.onclick =()=>{
    hideElement(startButton);
    startGameInterval(objekt);
    setPointClick(objekt);
    timeStart = performance.now();
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
        movePoint(element, getRandomNumber(80,window.innerWidth-parseInt(element.style.width)), getRandomNumber(80,window.innerHeight-parseInt(element.style.height)));
        setSize(element, getRandomNumber(40, 80));
    },550)
}

const setPointClick = (element) => {
    element.onclick = () => {
        element.innerText++;
        movePoint(element, getRandomNumber(80,window.innerWidth-parseInt(element.style.width)), getRandomNumber(80,window.innerHeight-parseInt.style.height));
        setSize(element, getRandomNumber(40, 80));
        let timeEnd = performance.now();
        let result = timeEnd - timeStart;
        timer.innerText = `Time: ${result}ms`;
    }
}

const setSize = (element, size) => {
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
}