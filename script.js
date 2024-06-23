'use strict';

const welcome = document.querySelector('.welcome');
const firstSite = document.querySelector('.firstSite');
const content = document.querySelector('.content');
const betTitle = document.querySelector('.betTitle');
const totalBetDiv = document.querySelector('.totalBetDiv');
const firstTotal = document.querySelector('.firstTotal');
const totalP = document.querySelector('.totalP');
const totalGeld = document.querySelector('.totalGeld');
const firstBet = document.querySelector('.firstBet');
const betP = document.querySelector('.betP');
const betGeld = document.querySelector('.betGeld');
const startImg = document.querySelector('.startImg');
const tokenDiv = document.querySelector('.tokenDiv');
const token10 = document.querySelector('.token10');
const token50 = document.querySelector('.token50');
const token100 = document.querySelector('.token100');
const token500 = document.querySelector('.token500');

const secondSite = document.querySelector('.secondSite');
const secondTotal = document.querySelector('.secondTotal');
const secondBet = document.querySelector('.secondBet');
const playersScore = document.querySelector('.playersScore');
const playersFirstCard = document.querySelector('.playersFirstCard');
const playersScndCard = document.querySelector('.playersScndCard');
const playersThirdCard = document.querySelector('.playersThirdCard');
const playersFourthCard = document.querySelector('.playersFourthCard');
const playersFifthCard = document.querySelector('.playersFifthCard');
const hitBtn = document.querySelector('.hitBtn');
const newGameBtn = document.querySelector('.newGameBtn');
const dealersScore = document.querySelector('.dealersScore');
const dealersFirstCard = document.querySelector('.dealersFirstCard');
const dealersScndCard = document.querySelector('.dealersScndCard');
const dealersThirdCard = document.querySelector('.dealersThirdCard');
const dealersFourthCard = document.querySelector('.dealersFourthCard');
const dealersFifthCard = document.querySelector('.dealersFifthCard');
const standBtn = document.querySelector('.standBtn');
const gameOver = document.querySelector('.gameOver');
const win = document.querySelector('.win');
const draw = document.querySelector('.draw');

let bet = 0;
let total = 1500;

const welcomeTurn = function () {
  welcome.classList.add('hidden');
  document.body.classList.add('bckChange');
  firstSite.classList.remove('hidden');
};

let tokenMove = function (amount) {
  let tokenKind = document.querySelector(`.token${amount}`);
  if (tokenKind) {
    if (total >= amount) {
      total -= amount;
      bet += amount;
    } else {
      tokenKind.style.pointerEvents = 'none';
    }
    secondTotal.textContent = total;
    secondBet.textContent = bet;
    betGeld.textContent = bet;
    totalGeld.textContent = total;
    tokenKind.style.animation = 'none';
    tokenKind.offsetHeight;
    tokenKind.style.animation = 'animate 0.5s ease-in-out';
  }
};

const betAdding = function () {
  total = parseInt(totalGeld.textContent) + bet;
  totalGeld.textContent = total;
  secondTotal.textContent = total;
  betGeld.textContent = 0;
  secondBet.textContent = 0;
  bet = 0;
};

const removeMessage = function (message) {
  if (!message.classList.contains('hidden')) {
    message.classList.add('hidden');
  }
};

const tokenMovement = function () {
  token10.style.animation = 'none';
  token10.offsetHeight;
  token50.style.animation = 'none';
  token50.offsetHeight;
  token100.style.animation = 'none';
  token100.offsetHeight;
  token500.style.animation = 'none';
  token500.offsetHeight;
};

/*welcome.classList.add('hidden');*/
firstSite.classList.add('hidden');
secondSite.classList.add('hidden');

/*/ ///WELCOME PAGE////*/

const keydownHandler = function () {
  welcomeTurn();
  document.removeEventListener('keydown', keydownHandler);
};
const clickHandler = function () {
  welcomeTurn();
  document.removeEventListener('click', clickHandler);
};

document.addEventListener('keydown', keydownHandler);
document.addEventListener('click', clickHandler);
/*/ ////FIRST SITE//////*/
startImg.addEventListener('click', function () {
  tokenMovement();
  content.classList.add('hidden');
  tokenDiv.classList.add('hidden');
  secondSite.classList.remove('hidden');
});

token10.addEventListener('click', function () {
  tokenMove(10);
});

token50.addEventListener('click', function () {
  tokenMove(50);
});

token100.addEventListener('click', function () {
  tokenMove(100);
});

token500.addEventListener('click', function () {
  tokenMove(500);
});

/*//////SECOND SITE///////*/
secondTotal.textContent = total;
secondBet.textContent = bet;

playersThirdCard.classList.add('hidden');
playersFourthCard.classList.add('hidden');
playersFifthCard.classList.add('hidden');

dealersThirdCard.classList.add('hidden');
dealersFourthCard.classList.add('hidden');
dealersFifthCard.classList.add('hidden');

const CardsValue = function () {
  const cards = Math.trunc(Math.random() * 13) + 1;
  return cards;
};

let firstPCardValue = CardsValue();
let secondPCardValue = CardsValue();
let thirdPCardValue = CardsValue();
let fourthPCardValue = CardsValue();
let fifthPCardValue = CardsValue();

playersFirstCard.src = firstPCardValue + '.jpg';
playersScndCard.src = secondPCardValue + '.jpg';
playersThirdCard.src = thirdPCardValue + '.jpg';
playersFourthCard.src = fourthPCardValue + '.jpg';
playersFifthCard.src = fifthPCardValue + '.jpg';

const playersScoreCalc = function (whichCard) {
  console.log(whichCard);

  if (whichCard === 1) {
    return 11;
  } else if (whichCard === 11) {
    return 10;
  } else if (whichCard === 12) {
    return 10;
  } else if (whichCard === 13) {
    return 10;
  } else {
    return whichCard;
  }
};

let firstPCardScore = playersScoreCalc(firstPCardValue);
let secondPCardScore = playersScoreCalc(secondPCardValue);
let thirdPCardScore = playersScoreCalc(thirdPCardValue);
let fourthPCardScore = playersScoreCalc(fourthPCardValue);
let fifthPCardScore = playersScoreCalc(fifthPCardValue);

const playersAce = function (value) {
  if (value === 11) {
    if (parseInt(playersScore.textContent) + value > 21) {
      return 1;
    } else {
      return 11;
    }
  }
};

playersScore.textContent = parseInt(playersScore.textContent) + firstPCardScore;

playersScore.textContent =
  parseInt(playersScore.textContent) + secondPCardScore;

/*DEALERS PART*/

let firstDCardValue = CardsValue();
let secondDCardValue = CardsValue();
let thirdDCardValue = CardsValue();
let fourthDCardValue = CardsValue();
let fifthDCardValue = CardsValue();

dealersFirstCard.src = firstDCardValue + '.jpg';
dealersThirdCard.src = thirdDCardValue + '.jpg';
dealersFourthCard.src = fourthDCardValue + '.jpg';
dealersFifthCard.src = fifthDCardValue + '.jpg';
console.log('Welcome!');

const dealersScoreCalc = function (whichCard) {
  if (parseInt(whichCard) === 1) {
    if (parseInt(dealersScore.textContent) >= 11) {
      return 1;
    } else {
      return 11;
    }
  } else if (parseInt(whichCard) >= 11 && parseInt(whichCard) <= 13) {
    return 10;
  } else {
    return parseInt(whichCard);
  }
};

let firstDCardScore = dealersScoreCalc(firstDCardValue);
let secondDCardScore = dealersScoreCalc(secondDCardValue);
let thirdDCardScore = dealersScoreCalc(thirdDCardValue);
let fourthDCardScore = dealersScoreCalc(fourthDCardValue);
let fifthDCardScore = dealersScoreCalc(fifthDCardValue);

dealersScore.textContent = firstDCardScore;

hitBtn.addEventListener('click', function () {
  const myScore = parseInt(playersScore.textContent);

  if (playersThirdCard.classList.contains('hidden')) {
    playersThirdCard.classList.remove('hidden');
    playersScore.textContent = myScore + thirdPCardScore;
  } else if (playersFourthCard.classList.contains('hidden') && myScore < 22) {
    playersFourthCard.classList.remove('hidden');
    playersScore.textContent = myScore + fourthPCardScore;
  } else if (playersFifthCard.classList.contains('hidden') && myScore < 22) {
    playersFifthCard.classList.remove('hidden');
    playersScore.textContent = myScore + fifthPCardScore;
  }

  lose();
});

const lose = function () {
  const myScore = parseInt(playersScore.textContent);
  if (myScore > 21) {
    gameOver.classList.remove('hidden');
    bet = 0;
    betGeld.textContent = 0;
    secondBet.textContent = 0;
  }
};

standBtn.addEventListener('click', function () {
  let dilo = 0;
  dealersScndCard.src = secondDCardValue + '.jpg';
  dilo += firstDCardScore + secondDCardScore;

  const diloPut = function (cardy, cordy) {
    cardy.classList.remove('hidden');
    dilo += cordy;
  };

  if (dilo <= 16) {
    diloPut(dealersThirdCard, thirdDCardScore);
  }
  if (dilo <= 16) {
    diloPut(dealersFourthCard, fourthDCardScore);
  }
  if (dilo <= 16) {
    diloPut(dealersFifthCard, fifthDCardScore);
  }

  dealersScore.textContent = dilo;

  if (dilo > playersScore.textContent && dilo <= 21) {
    gameOver.classList.remove('hidden');
    bet = 0;
    betGeld.textContent = 0;
    secondBet.textContent = 0;
  } else if (dilo == playersScore.textContent) {
    draw.classList.remove('hidden');
    betAdding();
  } else {
    win.classList.remove('hidden');
    bet = bet * 2;
    betAdding();
  }
});

newGameBtn.addEventListener('click', function () {
  if (
    !gameOver.classList.contains('hidden') ||
    !draw.classList.contains('hidden') ||
    !win.classList.contains('hidden')
  ) {
    removeMessage(win);
    removeMessage(draw);
    removeMessage(gameOver);
    playersScore.textContent = 0;
    dealersScore.textContent = 0;

    firstPCardValue = CardsValue();
    secondPCardValue = CardsValue();
    thirdPCardValue = CardsValue();
    fourthPCardValue = CardsValue();
    fifthPCardValue = CardsValue();
    firstDCardValue = CardsValue();
    secondDCardValue = CardsValue();
    thirdDCardValue = CardsValue();
    fourthDCardValue = CardsValue();
    fifthDCardValue = CardsValue();
    playersFirstCard.src = firstPCardValue + '.jpg';
    playersScndCard.src = secondPCardValue + '.jpg';
    playersThirdCard.src = thirdPCardValue + '.jpg';
    playersFourthCard.src = fourthPCardValue + '.jpg';
    playersFifthCard.src = fifthPCardValue + '.jpg';
    dealersFirstCard.src = firstDCardValue + '.jpg';
    dealersScndCard.src = 'backSide.jpg';
    dealersThirdCard.src = thirdDCardValue + '.jpg';
    dealersFourthCard.src = fourthDCardValue + '.jpg';
    dealersFifthCard.src = fifthDCardValue + '.jpg';
    firstPCardScore = playersScoreCalc(firstPCardValue);
    secondPCardScore = playersScoreCalc(secondPCardValue);
    thirdPCardScore = playersScoreCalc(thirdPCardValue);
    fourthPCardScore = playersScoreCalc(fourthPCardValue);
    fifthPCardScore = playersScoreCalc(fifthPCardValue);
    firstDCardScore = dealersScoreCalc(firstDCardValue);
    secondDCardScore = dealersScoreCalc(secondDCardValue);
    thirdDCardScore = dealersScoreCalc(thirdDCardValue);
    fourthDCardScore = dealersScoreCalc(fourthDCardValue);
    fifthDCardScore = dealersScoreCalc(fifthDCardValue);
    playersScore.textContent = firstPCardScore + secondPCardScore;
    dealersScore.textContent = firstDCardScore;

    !playersThirdCard.classList.contains('hidden')
      ? playersThirdCard.classList.add('hidden')
      : '';
    !playersFourthCard.classList.contains('hidden')
      ? playersFourthCard.classList.add('hidden')
      : '';
    !playersFifthCard.classList.contains('hidden')
      ? playersFifthCard.classList.add('hidden')
      : '';

    !dealersThirdCard.classList.contains('hidden')
      ? dealersThirdCard.classList.add('hidden')
      : '';
    !dealersFourthCard.classList.contains('hidden')
      ? dealersFourthCard.classList.add('hidden')
      : '';
    !dealersFifthCard.classList.contains('hidden')
      ? dealersFifthCard.classList.add('hidden')
      : '';

    secondSite.classList.add('hidden');
    content.classList.remove('hidden');
    tokenDiv.classList.remove('hidden');
  }
});
