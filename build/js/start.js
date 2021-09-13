const loadingField = document.querySelector('.loading-field');

window.onload = function(){
  setTimeout(function(){
     loadingField.classList.remove('active');
  }, 4900);
};

const howToPlayClose = document.querySelector('.how-to-play__close');
const howToPlay = document.querySelector('.how-to-play__popup');
const howToPlayButton = document.querySelector('.how-top-play');

howToPlayButton.addEventListener('click', () => {
  howToPlay.classList.add('active')
});

howToPlayClose.addEventListener('click', () => {
  howToPlay.classList.remove('active')
});
