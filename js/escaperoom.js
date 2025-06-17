const introPopup = document.querySelector('#intropopup');
const startButton = document.querySelector('#startbutton');
const timer = document.querySelector('#timer');
const pauseButton = document.querySelector('#pausebutton');
const pausePopup = document.querySelector('#pausepopup');
const resumeButton = document.querySelector('#resumebutton');
const exitButton = document.querySelector('#exitbutton');
const deur = document.querySelector('#deurlink');
const deurSound = document.querySelector('#deursound');
const achtergrondMuziek = document.querySelector('#achtergrondmuziek');
const slotOpenSound = document.querySelector('#slotopen');
const slotDichtSound = document.querySelector('#slotdicht');
const buttonKlikSound = document.querySelector('#buttonklik');
const boekSound = document.querySelector('#boeksound');
const sleutelPakkenSound = document.querySelector('#sleutelpakken');
const kamerAchtergrond = document.querySelector('#kamer1bg');
const startAchtergrond = document.querySelector('#startschermbg');
const schilderijAchtergrond = document.querySelector('#closeupschilderij');
const schilderij = document.querySelector('#schilderijzone');
const terugButton = document.querySelector('#terugbutton');
const codeCijfer1 = document.querySelector('#codenumber1');
const codeCijfer2 = document.querySelector('#codenumber2');
const codeCijfer3 = document.querySelector('#codenumber3');
const schilderijOpenAchtergrond = document.querySelector('#openschilderij');
const sleutel = document.querySelector('#sleutelzone');
const cursorSleutel = document.querySelector('#cursorsleutel');
const cursorSleutel2 = document.querySelector('#cursorsleutel2');
const cursorHand = document.querySelector('#cursorhand');
const sleutelBlok = document.querySelector('#geensleutel');
const kistAchtergrond = document.querySelector('#closeupkist');
const kist = document.querySelector('#kistzone');
const feedbackText = document.querySelector('#feedbacktext');
const feedbackContainer = document.querySelector('#feedbackcontainer');
const slot = document.querySelector('#slotzone');
const knop1 = document.querySelector("#knop1");
const knop2 = document.querySelector("#knop2");
const knop3 = document.querySelector("#knop3");
const boxOpen = document.querySelector("#openbox");
const sleutel2 = document.querySelector("#sleutel2zone");
const sleutel2Blok = document.querySelector("#geensleutel2");
const escapedScherm = document.querySelector("#escapedscherm");
const eindTijdTekst = document.querySelector("#eindtijdtekst");
const opnieuwButton = document.querySelector("#opnieuwbutton");
const boek1 = document.querySelector("#boek1");
const boek2 = document.querySelector("#boek2");
const boek3 = document.querySelector("#boek3");
const raadsel = document.querySelector("#raadsel");
const boek1zone = document.querySelector("#boek1zone");
const boek2zone = document.querySelector("#boek2zone");
const boek3zone = document.querySelector("#boek3zone");
const raadselzone = document.querySelector("#raadselzone");


let tijdTimer = 600;
let timerInterval;
let knop1Stand = 0;
let knop2Stand = 0;
let knop3Stand = 0;

achtergrondMuziek.volume = 0.4;


//Startpagina


deur.addEventListener('click', function () {
    deur.style.backgroundImage = "url('images/opendeur.png')";
    deurSound.play();

    setTimeout(function () {
        resetAlles();
        sluitAlles();
        
        startAchtergrond.style.display = 'none';
        kamerAchtergrond.style.display = 'block';
        deur.style.backgroundImage = 'none';
        introPopup.style.display = 'flex';
        timer.style.display = 'block';
        cursorHand.style.display = 'inline-block'

        achtergrondMuziek.play();
    }, 2000);
});

// bron: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
// bron: https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout
// bron: https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement?utm_source=chatgpt.com


function resetAlles() {
    tijdTimer = 600;
    timerUpdate();

    knop1.style.backgroundImage = "url('images/knopgroen.png')";
    knop2.style.backgroundImage = "url('images/knopgroen.png')";
    knop3.style.backgroundImage = "url('images/knopgroen.png')";
    knop1Stand = 0;
    knop2Stand = 0;
    knop3Stand = 0;

    codeCijfer1.textContent = '0';
    codeCijfer2.textContent = '0';
    codeCijfer3.textContent = '0';

    eindTijdTekst.textContent = '';

    cursorSleutel.style.display = 'none';
    cursorSleutel2.style.display = 'none';
    sleutelBlok.style.display = 'none';
    sleutel2Blok.style.display = 'none';
    document.body.classList.remove('sleutelmode');
    document.body.classList.remove('sleutelmode2');

    boek1zone.style.display = 'none';
    boek2zone.style.display = 'none';
    boek3zone.style.display = 'none';
    schilderij.style.display = 'none';
    kist.style.display = 'none';
    slot.style.display = 'none';    
}

// bron: https://www.w3schools.com/jsref/prop_node_textcontent.asp
// bron: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style

function sluitAlles(){
    schilderijOpenAchtergrond.style.display = 'none';
    schilderijAchtergrond.style.display = 'none';

    boek1.style.display = 'none';
    boek2.style.display = 'none';
    boek3.style.display = 'none';
    raadsel.style.display = 'none';

    kistAchtergrond.style.display = 'none';
    boxOpen.style.display = 'none';

    escapedScherm.style.display = 'none';
    terugButton.style.display = 'none';
}

// Timer

function timerUpdate() {
    let minuten = Math.floor(tijdTimer / 60);
    let seconden = tijdTimer % 60;
    // bron: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder

    if (minuten < 10) { minuten = '0' + minuten; }
    if (seconden < 10) { seconden = '0' + seconden; }

    timer.textContent = minuten + ':' + seconden
}

// bron: https://www.w3schools.com/jsref/prop_node_textcontent.asp

function aftellen() {
    tijdTimer--;
    timerUpdate();
    if (tijdTimer === 0) {
        clearInterval(timerInterval);
    }
}

// bron: https://stackoverflow.com/questions/1191865/code-for-a-simple-javascript-countdown-timer?utm_source=chatgpt.com

startButton.addEventListener('click', function() {
    introPopup.style.display = 'none';
    timerInterval = setInterval(aftellen, 1000);
    pauseButton.style.display = 'block';
    boek1zone.style.display = 'block';
    boek2zone.style.display = 'block';
    boek3zone.style.display = 'block';
    schilderij.style.display = 'block';
    kist.style.display = 'block';
    slot.style.display = 'block';
});

// Pauze menu

pauseButton.addEventListener('click', function() {
    clearInterval(timerInterval); 
    pausePopup.style.display = 'flex';
});

resumeButton.addEventListener('click', function() {
    timerInterval = setInterval(aftellen, 1000);
    pausePopup.style.display = 'none';
});

exitButton.addEventListener('click', function() {
    introPopup.style.display = 'none';
    pausePopup.style.display = 'none';
    pauseButton.style.display = 'none';
    timer.style.display = 'none';
    clearInterval(timerInterval); 
    startAchtergrond.style.display = 'block';
    cursorHand.style.display = 'none';
    terugButton.style.display = 'none';
    sluitAlles();
    kamerAchtergrond.style.display = 'none';
    achtergrondMuziek.pause();
    achtergrondMuziek.currentTime = 0;
});

// Kamer elementen

schilderij.addEventListener('click', function() {
    kamerAchtergrond.style.display = 'none';
    schilderijAchtergrond.style.display = 'block';
    terugButton.style.display = 'block';
});

kist.addEventListener('click', function(){
    if (document.body.classList.contains('sleutelmode')) {
        kamerAchtergrond.style.display = 'none';
        kistAchtergrond.style.display = 'block';
        terugButton.style.display = 'block';
        document.body.classList.remove('sleutelmode');
        slotOpenSound.play();
    } else {
        geefFeedback('You need a key to open this chest.')
        slotDichtSound.play();
    }
})

// bron: https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/contains?utm_source=chatgpt.com
// bron: https://www.shecodes.io/athena?tag=classList#:~:text=To%20check%20if%20a%20class,exists%20in%20the%20element's%20classList%20.


slot.addEventListener('click', function(){
    if (document.body.classList.contains('sleutelmode2')) {
        slotOpenSound.play();
        escapedScherm.style.display = 'block';
        kamerAchtergrond.style.display = 'none';
        timer.style.display = 'none';
        pauseButton.style.display = 'none';
        eindTijd();
        clearInterval(timerInterval);
        document.body.classList.remove('sleutelmode2');
        cursorHand.style.display = 'none';
        cursorSleutel.style.display = 'none';
        cursorSleutel2.style.display = 'none';
        achtergrondMuziek.pause();
        achtergrondMuziek.currentTime = 0;
    } else if (document.body.classList.contains('sleutelmode')) {
        geefFeedback('You need another key to open this door.')
        slotDichtSound.play();
    } else {
        geefFeedback('You need a key to open this door.')
        slotDichtSound.play();
    }

})

// brond: https://www.w3schools.com/tags/av_prop_currenttime.asp
// bron: https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/contains?utm_source=chatgpt.com
// bron: https://www.shecodes.io/athena?tag=classList#:~:text=To%20check%20if%20a%20class,exists%20in%20the%20element's%20classList%20.


function geefFeedback(tekst) 
{
    feedbackText.textContent = tekst;
    feedbackContainer.classList.add('visible');
    setTimeout(function() {
        feedbackContainer.classList.remove('visible');
        setTimeout(function() {
            feedbackText.textContent = '';
        }, 300); 
    }, 1500);
}

// bron: https://www.w3schools.com/jsref/prop_node_textcontent.asp
// bron: https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/contains?utm_source=chatgpt.com
// bron: https://www.shecodes.io/athena?tag=classList#:~:text=To%20check%20if%20a%20class,exists%20in%20the%20element's%20classList%20.

terugButton.addEventListener('click', function() {
    kamerAchtergrond.style.display = 'block';
    schilderijAchtergrond.style.display = 'none';
    terugButton.style.display = 'none';
    schilderijOpenAchtergrond.style.display = 'none';
    kistAchtergrond.style.display = 'none';
    boxOpen.style.display = 'none';
    boek1.style.display = 'none';
    boek2.style.display = 'none';
    boek3.style.display = 'none';
    raadsel.style.display = 'none';
});

// Boeken

boek1zone.addEventListener('click', function(){
    boek1.style.display = 'block';
    kamerAchtergrond.style.display = 'none';
    terugButton.style.display = 'block';
    boekSound.play();
});

boek2zone.addEventListener('click', function(){
    boek2.style.display = 'block';
    kamerAchtergrond.style.display = 'none';
    terugButton.style.display = 'block';
    boekSound.play();
});

boek3zone.addEventListener('click', function(){
    boek3.style.display = 'block';
    kamerAchtergrond.style.display = 'none';
    terugButton.style.display = 'block';
    boekSound.play();
});

// Raadsel

raadselzone.addEventListener('click', function(){
    raadsel.style.display = 'block';
    boek3.style.display = 'none';
    boekSound.play();
});


// Code slot

function cijferVeranderen (cijfer) {
    let huidigCijfer = parseInt(cijfer.textContent);
    // bron: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
    huidigCijfer = huidigCijfer + 1;
    if ( huidigCijfer > 9) {
        huidigCijfer = 0
    }
    cijfer.textContent = huidigCijfer; 
}

// bron: https://www.w3schools.com/jsref/prop_node_textcontent.asp

codeCijfer1.addEventListener('click', function() {
    cijferVeranderen(codeCijfer1);
    buttonKlikSound.play();
    checkCode();
});

codeCijfer2.addEventListener('click', function() {
    cijferVeranderen(codeCijfer2);
    buttonKlikSound.play();
    checkCode();
});

codeCijfer3.addEventListener('click', function() {
    cijferVeranderen(codeCijfer3);
    buttonKlikSound.currentTime = 0;
    buttonKlikSound.play();
    checkCode();
});

function checkCode() {
    if ( codeCijfer1.textContent === "1" && codeCijfer2.textContent === "2" && codeCijfer3.textContent === "6") {
        schilderijAchtergrond.style.display = 'none';
        schilderijOpenAchtergrond.style.display = 'block';
        schilderij.style.display = 'none';
        terugButton.style.display = 'none';
        slotOpenSound.play();
    }
}

// bron: https://www.w3schools.com/jsref/prop_node_textcontent.asp

sleutel.addEventListener('click', function() {
    cursorSleutel.style.display = 'inline-block';
    sleutelPakkenSound.play();
    sleutelBlok.style.display = 'block';
    terugButton.style.display = 'block';
})


// Kleur code kist

function veranderKnop(knop) {
    if (knop === knop1) {
        if (knop1Stand === 0) {
            knop.style.backgroundImage = "url('images/knoprood.png')";
            knop1Stand = 1;
            checkKleurCode();
        } else if (knop1Stand === 1) {
            knop.style.backgroundImage = "url('images/knopgeel.png')";
            knop1Stand = 2;
        } else {
            knop.style.backgroundImage = "url('images/knopgroen.png')";
            knop1Stand = 0;
        }
    }

    else if (knop === knop2) {
        if (knop2Stand === 0) {
            knop.style.backgroundImage = "url('images/knoprood.png')";
            knop2Stand = 1;
        } else if (knop2Stand === 1) {
            knop.style.backgroundImage = "url('images/knopgeel.png')";
            knop2Stand = 2;
        } else {
            knop.style.backgroundImage = "url('images/knopgroen.png')";
            knop2Stand = 0;
            checkKleurCode();
        }
    }

    else if (knop === knop3) {
        if (knop3Stand === 0) {
            knop.style.backgroundImage = "url('images/knoprood.png')";
            knop3Stand = 1;
        } else if (knop3Stand === 1) {
            knop.style.backgroundImage = "url('images/knopgeel.png')";
            knop3Stand = 2;
            checkKleurCode();
        } else {
            knop.style.backgroundImage = "url('images/knopgroen.png')";
            knop3Stand = 0;
        }
    }
}

// bron: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style

knop1.addEventListener('click', function() {
    veranderKnop(knop1);
    buttonKlikSound.currentTime = 0;
    buttonKlikSound.play();
});

knop2.addEventListener('click', function() {
    veranderKnop(knop2);
    buttonKlikSound.currentTime = 0;
    buttonKlikSound.play();
});

knop3.addEventListener('click', function() {
    veranderKnop(knop3);
    buttonKlikSound.currentTime = 0;
    buttonKlikSound.play();
});

function checkKleurCode() {
    if ( knop1Stand === 1 && knop2Stand === 0 && knop3Stand === 2) {
        kistAchtergrond.style.display = 'none';
        boxOpen.style.display = 'block';
        terugButton.style.display = 'none';
        slotOpenSound.play();
    }
}

sleutel2.addEventListener('click', function() {
    cursorSleutel2.style.display = 'inline-block';
    sleutelPakkenSound.play();
    sleutel2Blok.style.display = 'block';
    terugButton.style.display = 'block';
    kist.style.display = 'none';
})


// Eindtijd

function eindTijd() {
    let minuten = Math.floor(tijdTimer / 60);
    let seconden = tijdTimer % 60;
    if (minuten < 10) minuten = '0' + minuten;
    if (seconden < 10) seconden = '0' + seconden;

    eindTijdTekst.textContent = "Time left: " + minuten + ":" + seconden;
}

// bron: https://www.w3schools.com/jsref/prop_node_textcontent.asp

opnieuwButton.addEventListener('click', function() {
    escapedScherm.style.display = 'none';
    startAchtergrond.style.display = 'block';
})


// Cursors

cursorSleutel.addEventListener('click', function() {
    document.body.classList.add('sleutelmode');
    document.body.classList.remove('sleutelmode2');
});

// bron: https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/contains?utm_source=chatgpt.com
// bron: https://www.shecodes.io/athena?tag=classList#:~:text=To%20check%20if%20a%20class,exists%20in%20the%20element's%20classList%20.

cursorHand.addEventListener('click', function() {
    document.body.classList.remove('sleutelmode');
    document.body.classList.remove('sleutelmode2');
});

// bron: https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/contains?utm_source=chatgpt.com
// bron: https://www.shecodes.io/athena?tag=classList#:~:text=To%20check%20if%20a%20class,exists%20in%20the%20element's%20classList%20.

cursorSleutel2.addEventListener('click', function() {
    document.body.classList.add('sleutelmode2');
    document.body.classList.remove('sleutelmode');
});

// bron: https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/contains?utm_source=chatgpt.com
// bron: https://www.shecodes.io/athena?tag=classList#:~:text=To%20check%20if%20a%20class,exists%20in%20the%20element's%20classList%20.