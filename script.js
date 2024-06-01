const neutralpompom = document.querySelector('#pompom-image');
const hereforyouButton = document.querySelector('#btn1');
const lovelyButton = document.querySelector('#btn2');
const yourecuteButton = document.querySelector('#btn3');
const pompomImage = document.querySelector('#pompom-image');

// Array images, hulp van chatGPT
const pompomhappinessgrowing = [
    'Images/pompom1.jpg', // 10%
    'Images/pompom2.jpg', // 25%
    'Images/pompom3.jpg', // 50%
    'Images/pompom4.jpg', // 75%
    'Images/pompom5.jpg'  // 100%
];

// https://youtu.be/aTiOiMuSznE?si=9e8gw5b65YNpukYa, audio code van chatGPT
const clickSound = new Audio('audio/twinkleaudio.mpeg');

// begin happiness level
let happiness = 10;
let happinessindex = 0;

//met hulp van student
function growinghappiness(){
    if (happinessindex < pompomhappinessgrowing.length){
        neutralpompom.src = pompomhappinessgrowing[happinessindex];
// audio code van chatGPT
        clickSound.play();
        happinessindex = happinessindex + 1;
    } else {
        alert("PomPom is fully happy, thank you!"); // hulp van chatGPT
    }
}

hereforyouButton.addEventListener('click', growinghappiness);
lovelyButton.addEventListener('click', growinghappiness);
yourecuteButton.addEventListener('click', growinghappiness);

