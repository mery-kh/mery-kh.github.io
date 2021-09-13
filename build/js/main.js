const menu = document.querySelectorAll('.menu__link');
const previousButton = document.querySelector('.game__previous-button');
const previousMain = document.querySelector('.game__previous');
const menuTypes = document.querySelectorAll('.menu-types__list > li');

previousButton.addEventListener('click', () => {
  previousMain.classList.toggle("opened");
});

menu.forEach((menus, i) => {
  const index = i;
  menus.addEventListener('click', () => {
    menu.forEach(menuItem => {
      menuItem.classList.remove("active")
    });
    menus.classList.add("active");
    menuTypes.forEach((item, i) => {
      if (i === index) {
        item.classList.add("active")
      } else {
        item.classList.remove("active")
      }
    })
  })
});

const buttons = document.querySelectorAll(`.chat-share`);
const buttonsToolTip = document.querySelector(`.tooltip`);
const headerList = document.querySelector(`.menu-types-wrapper`);
const topSize = headerList.getBoundingClientRect().top;


buttons.forEach((item) => {
  item.addEventListener('mouseover', function () {
    buttonsToolTip.style.top =
      `${item.getBoundingClientRect().y - topSize - 3}px`;
    buttonsToolTip.classList.add(`tooltip--active`);

    item.addEventListener(`mouseout`, function () {
      buttonsToolTip.classList.remove(`tooltip--active`);
    })
  })
});


const coefButton = document.querySelector('.coefficient__button');
const coefField = document.querySelector('.coefficient__list ');

if (coefButton) {
  coefButton.addEventListener('click', () => {
    coefField.classList.toggle('open');
    coefButton.classList.toggle('open');
  })
}

const likeButton = document.querySelectorAll('.message__like');

likeButton.forEach((like) => {
  like.addEventListener('click', () => {
    like.classList.toggle('active')
  })
});

const chatButton = document.querySelector('.chat__button');
const chat = document.querySelector('.chat');
const mainMiddle = document.querySelector('.main__middle');


chatButton.addEventListener('click', () => {
  chat.classList.toggle('open');
  mainMiddle.classList.toggle('small');
});

const settingsButton = document.querySelector('.settings-burger');
const settingsBody = document.querySelector('.settings__field');

settingsButton.addEventListener('click', () => {
  settingsBody.classList.toggle('active')
});

const validityButton = document.querySelector('.validity__link');

const validityPopup = document.querySelector('.popup-validity');

const validityClose = document.querySelector('.popup-validity__close');

validityButton.addEventListener('click', () => {
  validityPopup.classList.add('active')
});

validityClose.addEventListener('click', () => {
  validityPopup.classList.remove('active')
});

const consoles = document.querySelectorAll('.console');

consoles.forEach((console) => {
  const stitcherQashout = console.querySelector('.switch__input-qashout');

  stitcherQashout.addEventListener('click', () => {
    console.classList.toggle('console-qashout')
  })
});


const switchers = document.querySelectorAll('.console-switchers__type-item');
const switcherAuto = document.querySelector('.console-switcher-auto');
const switcherInputs = document.querySelectorAll('.switch__input');
const switcherAutoField = document.querySelector('.console-switchers__auto');

switchers.forEach((switcherActive => {
  switcherActive.addEventListener('click', () => {
    switchers.forEach((switcher => {
      switcher.classList.remove("active")
    }));
    switcherActive.classList.add("active");
    if (switcherAuto.classList.contains("active")) {
      switcherAutoField.classList.add("active");


      switcherInputs.forEach((switcherInput) => {
        switcherInput.disabled = false;

      })
    } else {
      switcherAutoField.classList.remove("active");

      switcherInputs.forEach((switcherInput) => {
        switcherInput.disabled = true;

      })
    }
  })
}));

window.addEventListener(`load`, function () {
  const input = document.querySelector(`.circle__input`);
  const letters = document.querySelector(`.circle__letters`);
  let insertInput = function () {
    let firstLetter = letters.firstElementChild;
    while (firstLetter) {
      firstLetter.remove();
      firstLetter = letters.firstElementChild;
    }

    for (let i = 0; i <= input.value.length; i++) {
      let angle = -(input.value.length) * 3.5 + i * 7 + 5;
      if (i < input.value.length) {
        const letter = document.createElement(`span`);
        const letterBlock = document.createElement(`span`);
        letter.appendChild(letterBlock);
        letterBlock.textContent = input.value[i];
        letter.classList.add(`circle__letter`);
        letters.appendChild(letter);
        letterBlock.style.transform = `rotate(${angle}deg) translateY(-135px)`;
      } else {
        const letter = document.createElement(`span`);
        const letterBlock = document.createElement(`span`);
        letter.appendChild(letterBlock);
        letterBlock.textContent = `|`;
        letter.classList.add(`circle__letter`, `blinker`);
        letters.appendChild(letter);
        letterBlock.style.transform = `rotate(${angle}deg) translateY(-135px)`;
      }
    }
  };

  input.addEventListener(`input`, insertInput);
});


const startButton = document.querySelector('.console__bet-button');
const startButtonLayer = document.querySelector('.console__bet-button-layer');
const background = document.querySelector('.crazy-rocket');

startButton.addEventListener('click', () => {
  startButton.classList.toggle('push');
  startButtonLayer.classList.toggle('push');
  background.classList.add('start');
  setTimeout(() => {
    background.classList.add('background-fast');
  }, 4000);

  setTimeout(() => {
    background.classList.add('end');
    background.classList.remove('background-fast');
  }, 9000)
});


const probablyClose = document.querySelector('.popup-probably__close');
const probably = document.querySelector('.popup-probably');

probablyClose.addEventListener('click', () => {
  probably.classList.remove('active')
});

const avatarsClose = document.querySelector('.popup-avatars__button');
const avatars = document.querySelector('.popup-avatars');

avatarsClose.addEventListener('click', () => {
  avatars.classList.remove('active')
});

const addTicket = document.querySelector('.add-ticket__button');
const consoleSecond = document.querySelector('.console-second');
const consoleFirst = document.querySelector('.console-first');
const deleteTicket = consoleSecond.querySelector('.add-ticket__button');

addTicket.addEventListener('click', () => {
  consoleSecond.classList.add('active');
  consoleFirst.classList.add('active');
});

deleteTicket.addEventListener('click', () => {
  consoleSecond.classList.remove('active');
  consoleFirst.classList.remove('active');
});

const popupSeedClose = document.querySelector('.popup-seed__close');
const popupSeed = document.querySelector('.popup-seed');
const popupSeedButton = document.querySelector('.settings__hash-bottom-change');


popupSeedButton.addEventListener('click', () => {
  popupSeed.classList.add('active')
});

popupSeedClose.addEventListener('click', () => {
  popupSeed.classList.remove('active')
});

const consoleNotification = document.querySelectorAll('.console__notification')

setInterval(function () {
  consoleNotification.forEach(item => {
  item.classList.toggle('active')
  })
}, 3000);

function resizeHandler() {
  function resize() {
    const MIN_WIDTH = 1024;
    const MIN_HEIGHT = 560;
    let SCALE = 1;

    if (this.innerWidth <= MIN_WIDTH || this.innerHeight <= MIN_HEIGHT) {
      const MIN_VALUE = this.innerWidth < this.innerHeight ? this.innerWidth : this.innerHeight;
      SCALE = MIN_VALUE / MIN_HEIGHT;
    }
    background.style.transform = `scale(${SCALE})`;
    window.removeEventListener(`resize`, resizeHandler);
  }
}

function resize() {
  const MIN_WIDTH = 1024;
  const MIN_HEIGHT = 560;
  let SCALE = 1;

  if (this.innerWidth <= MIN_WIDTH || this.innerHeight <= MIN_HEIGHT) {
    const MIN_VALUE = this.innerWidth < this.innerHeight ? this.innerWidth : this.innerHeight;
    SCALE = MIN_VALUE / MIN_HEIGHT;
  }
  background.style.transform = `scale(${SCALE})`;
}

function loadHandler() {
  resize();
  window.removeEventListener(`load`, loadHandler);
}

function resizeHandler() {
  resize();
  window.removeEventListener(`resize`, loadHandler);
}


window.addEventListener(`resize`, resizeHandler);
window.addEventListener(`load`, loadHandler);
