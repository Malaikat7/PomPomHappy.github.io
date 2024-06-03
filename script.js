const sadpompom = document.querySelector('#pompom-image');
const hereforyouButton = document.querySelector('#btn1');
const lovelyButton = document.querySelector('#btn2');
const yourecuteButton = document.querySelector('#btn3');

//https://nl.pinterest.com/ciipiiyyy_/sanrio-pompompurin/, hulp van chatGPT
const pompomhappinessgrowing = [
    'Images/pompom1.jpg', 
    'Images/pompom2.jpg', 
    'Images/pompom3.jpg', 
    'Images/pompom4.jpg', 
    'Images/pompom5.jpg'  
];

// https://youtu.be/aTiOiMuSznE?si=9e8gw5b65YNpukYa, code van chatGPT
const clickSound = new Audio('Audio/twinkleaudio.mpeg');

let happinessindex = 0;

//met hulp van student
function growinghappiness(){
    if (happinessindex < pompomhappinessgrowing.length){
        sadpompom.src = pompomhappinessgrowing[happinessindex];
        clickSound.play(); // audio code van chatGPT
        happinessindex = happinessindex + 1;
    } else {
        alert("PomPom is fully happy, thank you!"); // hulp van chatGPT
    }
}

hereforyouButton.addEventListener('click', growinghappiness);
lovelyButton.addEventListener('click', growinghappiness);
yourecuteButton.addEventListener('click', growinghappiness);

