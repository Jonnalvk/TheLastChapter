const introPopup = document.querySelector('#intropopup');
const startButton = document.querySelector('#startbutton');
const timer = document.querySelector('#timer');
const pauseButton = document.querySelector('#pausebutton');
const pausePopup = document.querySelector('#pausepopup');
const resumeButton = document.querySelector('#resumebutton');
const exitButton = document.querySelector('#exitbutton');
const deurLink = document.querySelector('#deurlink');
const deurImage = document.querySelector('#deurimg');
const deurSound = document.querySelector('#deursound');
const kamerAchtergrond = document.querySelector('#kamer1bg');
const startAchtergrond = document.querySelector('#startschermbg');

let tijdTimer = 600;
let timerInterval;

//Startpagina

deurLink.addEventListener('click', function(e) {
    e.preventDefault()
    deurImage.style.visibility = 'visible';
    deurSound.play();
    setTimeout(function() {
        startAchtergrond.style.display = 'none';
        kamerAchtergrond.style.display = 'block';
        introPopup.style.display = 'flex';
        timer.style.display = 'block';
        pauseButton.style.display = 'block';
        tijdTimer = 600;
    }, 2000);
});


// Timer

function timerAfspelen() {
    let minuten = Math.floor(tijdTimer / 60);
    let seconden = tijdTimer % 60;
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
    if (seconden < 10) { seconden = '0' + seconden; }
    if (minuten < 10) { minuten = '0' + minuten; }
    timer.textContent = minuten + ':' + seconden
}

function timerStarten() {
    timerInterval = setInterval(aftellen, 1000);
}

function aftellen() {
    tijdTimer--;
    timerAfspelen();
    if (tijdTimer == 0) {
        clearInterval(timerInterval);
    }
}

startButton.addEventListener('click', function() {
    introPopup.style.display = 'none';
    timerStarten();
});

// Pauze menu

pauseButton.addEventListener('click', function() {
    clearInterval(timerInterval); 
    pausePopup.style.display = 'flex';
});

resumeButton.addEventListener('click', function() {
    timerStarten();
    pausePopup.style.display = 'none';
});