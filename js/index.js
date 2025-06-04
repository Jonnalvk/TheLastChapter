const deurLink = document.querySelector('#deurlink');
const deurImage = document.querySelector('#deurimg');
const deurSound = document.querySelector('#deursound');

deurLink.addEventListener('click', function(e) {
    e.preventDefault()
    deurImage.style.visibility = 'visible';
    deurSound.play();
    setTimeout(function() {
      window.location.href = 'kamer1.html';
    }, 2000);
  });