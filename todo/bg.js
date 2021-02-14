const clockContainer = document.querySelector(".js-clock"), 
    clockTitle = clockContainer.querySelector(".time");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    
}

const imgBox = document.querySelector(".img_box");
const IMG_LEN = 3;

function paintImage(imgnum){
    const image = new Image();
    image.src = `./img/${imgnum + 1}.jpg`;
    imgBox.appendChild(image);
}
function genRandom(){
    const number = Math.floor(Math.random() * IMG_LEN);
    return number;
}

function init(){
    getTime();
    setInterval(getTime, 1000);
 const randomNumber = genRandom();
 paintImage(randomNumber);
}

init();