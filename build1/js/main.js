const body = document.body;

const crazyRocket = document.querySelector('.crazy-rocket')

const menu = document.querySelectorAll('.menu__item ');
const menuTypes = document.querySelectorAll('.menu-types__item ');

const allGamersButton = document.querySelector('.all-gamers-button');
const allGamers = document.querySelector('.all-gamers__popup-field');
const allGamersClose = document.querySelector('.all-gamers-title-close');
const allGamersPopupClose = document.querySelector('.all-gamers__popup-close__field');

const previousButton = document.querySelector('.previous-button');
const previous = document.querySelector('.previous__popup-field');
const previousClose = document.querySelector('.previous__popup-close');
const previousPopupClose = document.querySelector('.previous__popup-close__field');

const myBetsButton = document.querySelector('.my-bets-button');
const myBets = document.querySelector('.my-bets__popup-field');
const myBetsClose = document.querySelector('.my-bets__popup-close');
const myBetsPopupClose = document.querySelector('.my-bets__popup-close__field');

const leadersButton = document.querySelector('.leaders-button');
const leaders = document.querySelector('.leaders__popup-field');
const leadersClose = document.querySelector('.leaders__popup-close');
const leadersPopupClose = document.querySelector('.leaders__popup-close__field');

const chatButton = document.querySelector('.header__home-button-chat');
const chatField = document.querySelector('.chat__popup-field');
const chatClose = document.querySelector('.chat__button-close');

const burgerMenuButton = document.querySelector('.header__home-button-menu');
const burgerMenuField = document.querySelector('.burger__body-field');
const burgerMenuClose = document.querySelector('.burger__body-close ');
const burgerMenuCloseField = document.querySelector('.burger__popup-close__field ');


const likeButtons = document.querySelectorAll('.message__like');


const popupAvatarClose = document.querySelector('.popup-avatars__button');
const popupAvatar = document.querySelector('.popup-avatars');
const popupAvatarButton = document.querySelector('.user__field');

const popupErrorClose = document.querySelector('.popup__error-close');
const popupError = document.querySelector('.popup-error');

const popupProbablyClose = document.querySelector('.popup-probably__close');
const popupProbablyCloseField = document.querySelector('.probably__popup-close__field');
const popupProbably = document.querySelector('.probably__popup-field');

const popupProbablyButton = document.querySelector('.header__home-button-main');


const popupValidityClose = document.querySelector('.popup-validity__close');
const popupValidityCloseField = document.querySelector('.validity__popup-close__field');
const popupValidity = document.querySelector('.validity__popup-field');
const popupValidityButton = document.querySelector('.header__home-button-validity')


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

allGamersButton.addEventListener('click', () => {
  allGamers.classList.add('active');
  body.classList.add('dont-scroll')
});

allGamersClose.addEventListener('click', () => {
  allGamers.classList.remove('active');
  body.classList.remove('dont-scroll')
});

allGamersPopupClose.addEventListener('click', () => {
  allGamers.classList.remove('active');
  body.classList.remove('dont-scroll')
});

previousButton.addEventListener('click', () => {
  previous.classList.add('active');
  body.classList.add('dont-scroll')
});

previousClose.addEventListener('click', () => {
  previous.classList.remove('active');
  body.classList.remove('dont-scroll')
});

previousPopupClose.addEventListener('click', () => {
  previous.classList.remove('active');
  body.classList.remove('dont-scroll')
});


leadersButton.addEventListener('click', () => {
  leaders.classList.add('active');
  body.classList.add('dont-scroll')
});

leadersClose.addEventListener('click', () => {
  leaders.classList.remove('active');
  body.classList.remove('dont-scroll')
});

leadersPopupClose.addEventListener('click', () => {
  leaders.classList.remove('active');
  body.classList.remove('dont-scroll')
});

myBetsButton.addEventListener('click', () => {
  myBets.classList.add('active');
  body.classList.add('dont-scroll')
});

myBetsClose.addEventListener('click', () => {
  myBets.classList.remove('active');
  body.classList.remove('dont-scroll')
});

myBetsPopupClose.addEventListener('click', () => {
  myBets.classList.remove('active');
  body.classList.remove('dont-scroll')
});


chatButton.addEventListener('click', () => {
  chatField.classList.add('active');
  body.classList.add('dont-scroll')
});

chatClose.addEventListener('click', () => {
  chatField.classList.remove('active');
  body.classList.remove('dont-scroll')
});

likeButtons.forEach((likeButton) => {
  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('active')
  })
});


popupAvatarButton.addEventListener('click', () => {
  popupAvatar.classList.add('active');
  body.classList.add('dont-scroll');
});

popupAvatarClose.addEventListener('click', () => {
  popupAvatar.classList.remove('active')
  body.classList.remove('dont-scroll');

});

popupErrorClose.addEventListener('click', () => {
  popupError.classList.remove('active')
});

burgerMenuButton.addEventListener('click', () => {
  burgerMenuField.classList.add('active');
  body.classList.add('dont-scroll')
});

burgerMenuClose.addEventListener('click', () => {
  burgerMenuField.classList.remove('active');
  body.classList.remove('dont-scroll')
});

burgerMenuCloseField.addEventListener('click', () => {
  burgerMenuField.classList.remove('active');
  body.classList.remove('dont-scroll')
});


popupProbablyClose.addEventListener('click', () => {
  popupProbably.classList.remove('active');
  body.classList.remove('dont-scroll')
});

popupProbablyCloseField.addEventListener('click', () => {
  popupProbably.classList.remove('active');
  body.classList.remove('dont-scroll')
});

popupProbablyButton.addEventListener('click', () => {
  popupProbably.classList.add('active');
  body.classList.add('dont-scroll')
});

popupValidityClose.addEventListener('click', () => {
  popupValidity.classList.remove('active');
  body.classList.remove('dont-scroll')
});

popupValidityCloseField.addEventListener('click', () => {
  popupValidity.classList.remove('active');
  body.classList.remove('dont-scroll')
});

popupValidityButton.addEventListener('click', () => {
  popupValidity.classList.add('active');
  body.classList.add('dont-scroll')
});


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
        letterBlock.style.transform = `rotate(${angle}deg) translateY(-7rem)`;
      } else {
        const letter = document.createElement(`span`);
        const letterBlock = document.createElement(`span`);
        letter.appendChild(letterBlock);
        letterBlock.textContent = `|`;
        letter.classList.add(`circle__letter`, `blinker`);
        letters.appendChild(letter);
        letterBlock.style.transform = `rotate(${angle}deg) translateY(-7rem)`;
      }
    }
  };

  input.addEventListener(`input`, insertInput);
});

const consoleFirst = document.querySelector('.console-first');
const consoleSecond = document.querySelector('.console-second');
const addTicket = document.querySelector('.add-ticket__button');
const deleteTicket = document.querySelector('.add-ticket__button-delete');


addTicket.addEventListener('click', () => {
  consoleFirst.classList.add('active');
  consoleSecond.classList.add('active')
});

if (deleteTicket) {
  deleteTicket.addEventListener('click', () => {
    consoleFirst.classList.remove('active');
    consoleSecond.classList.remove('active')
  });
}


const consoles = document.querySelectorAll('.console');


consoles.forEach((consol) => {
  const autoGame = consol.querySelector('.switch__label-auto input');
  const cashout = consol.querySelector('.switch__label-cashout input');
  const cashoutInput = consol.querySelector('.switch__price-input');
  const betInput = consol.querySelector('.circle__input');

  const bet = consol.querySelector('.console__bet-button');
  const betLayer = consol.querySelector('.console__bet-button-layer');

  bet.addEventListener('click', () => {
    bet.classList.toggle('push');
    betLayer.classList.toggle('push');
    crazyRocket.classList.add('start');
    setTimeout(() => {
      crazyRocket.classList.add('background-fast');
    },4000);
    setTimeout(() => {
      crazyRocket.classList.add('end');
      crazyRocket.classList.remove('background-fast');
    }, 9000);
  });

  betInput.addEventListener('click', () => {
    popupBet.classList.add('active', 'popup-bet__field--betting');
    body.classList.add('dont-scroll')
  });

  cashout.addEventListener('click', () => {
    consol.classList.toggle('cashout');
    cashoutInput.classList.toggle('active')
  });

  autoGame.addEventListener('click', () => {
    consol.classList.toggle('auto');
  });

  cashoutInput.addEventListener('click', () => {
    popupBet.classList.add('active', 'popup-bet__field--cashout');
    body.classList.add('dont-scroll')
  });
});

const popupBetClose = document.querySelector('.popup-bet__close');
const popupBetCloseField = document.querySelector('.popup-bet__close-field');
const popupBet = document.querySelector('.popup-bet__field');



popupBetClose.addEventListener('click', () => {
  popupBet.classList.remove('active', 'popup-bet__field--betting');
  body.classList.remove('dont-scroll');
});

popupBetCloseField.addEventListener('click', () => {
  popupBet.classList.remove('active','popup-bet__field--betting');
  body.classList.remove('dont-scroll');
});

const popupCashoutClose = document.querySelector('.popup-bet__close-cashout');
const popupCashoutCloseField = document.querySelector('.popup-bet__close-field-cashout');

popupCashoutClose.addEventListener('click', () => {
  popupBet.classList.remove('active', 'popup-bet__field--cashout');
  body.classList.remove('dont-scroll');
});

popupCashoutCloseField.addEventListener('click', () => {
  popupBet.classList.remove('active','popup-bet__field--cashout');
  body.classList.remove('dont-scroll');
});


const plusButton = document.querySelector('.console__buttons-plus');
const minusButton = document.querySelector('.console__buttons-minus');

minusButton.addEventListener('click', () => {
 minusButton.classList.toggle('active');
});

plusButton.addEventListener('click', () => {
  plusButton.classList.toggle('active');
});

const popupSeed = document.querySelector('.popup-seed__field');
const popupSeedButton = document.querySelector('.settings__hash-bottom-change')
const popupSeedCloseField = document.querySelector('.popup-seed__field-close')
const popupSeedClose = document.querySelector('.popup-seed__close')

popupSeedButton.addEventListener('click', () => {
  popupSeed.classList.add('active')
});

popupSeedClose.addEventListener('click', () => {
  popupSeed.classList.remove('active')
});

popupSeedCloseField.addEventListener('click', () => {
  popupSeed.classList.remove('active')
});
