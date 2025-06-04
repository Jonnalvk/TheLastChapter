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
const schilderijAchtergrond = document.querySelector('#closeupschilderij');
const schilderij = document.querySelector('#schilderijzone');
const timerPauzeContainer = document.querySelector('#timerpauzecontainer');
const terugButton = document.querySelector('#terugbutton');
const codeCijfer1 = document.querySelector('#codenumber1');
const codeCijfer2 = document.querySelector('#codenumber2');
const codeCijfer3 = document.querySelector('#codenumber3');
const schilderijOpenAchtergrond = document.querySelector('#openschilderij');

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
    pauseButton.style.display = 'block';
    timerPauzeContainer.style.display = 'flex';
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

exitButton.addEventListener('click', function() {
    startAchtergrond.style.display = 'block';
    kamerAchtergrond.style.display = 'none';
    schilderijAchtergrond.style.display = 'none';
    introPopup.style.display = 'none';
    pausePopup.style.display = 'none';
    pauseButton.style.display = 'none';
    timer.style.display = 'none';
    clearInterval(timerInterval); 
    tijdTimer = 600;
    timerAfspelen(); 
    startAchtergrond.style.display = 'block';
    deurImage.style.visibility = 'hidden';
});

// Kamer elementen

schilderij.addEventListener('click', function() {
    kamerAchtergrond.style.display = 'none';
    schilderijAchtergrond.style.display = 'block';
    terugButton.style.display = 'block';
});

terugButton.addEventListener('click', function() {
    kamerAchtergrond.style.display = 'block';
    schilderijAchtergrond.style.display = 'none';
    terugButton.style.display = 'none';
    schilderijOpenAchtergrond.style.display = 'none';
});

// Code slot

function cijferVeranderen (nummer) {
    let huidigCijfer = parseInt(nummer.textContent);
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
    huidigCijfer = huidigCijfer + 1;
    if ( huidigCijfer > 9) {
        huidigCijfer = 0
    }
    nummer.textContent = huidigCijfer; 
}

codeCijfer1.addEventListener('click', function() {
    cijferVeranderen(codeCijfer1);
    checkCode();
});

codeCijfer2.addEventListener('click', function() {
    cijferVeranderen(codeCijfer2);
    checkCode();
});

codeCijfer3.addEventListener('click', function() {
    cijferVeranderen(codeCijfer3);
    checkCode();
});

function checkCode() {
    if ( codeCijfer1.textContent === "4" && codeCijfer2.textContent === "9" && codeCijfer3.textContent === "2") {
        schilderijAchtergrond.style.display = 'none';
        schilderijOpenAchtergrond.style.display = 'block';
        schilderij.style.display = 'none';
    }
}
