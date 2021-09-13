const loadingField = document.querySelector('.loading-field');

window.onload = function(){
  setTimeout(function(){
    loadingField.classList.remove('active');
  }, 4900);
};

const body = document.body;
const howToPlayClose = document.querySelector('.how-to-play__close');
const howToPlayCloseField = document.querySelector('.how-to-play__close-field');
const howToPlay = document.querySelector('.how-to-play__popup-field');
const howToPlayButton = document.querySelector('.how-top-play');

howToPlayButton.addEventListener('click', () => {
  howToPlay.classList.add('active');
  body.classList.add('dont-scroll')
});

howToPlayClose.addEventListener('click', () => {
  howToPlay.classList.remove('active');
  body.classList.remove('dont-scroll')
});

howToPlayCloseField.addEventListener('click', () => {
  howToPlay.classList.remove('active');
  body.classList.remove('dont-scroll')
});

