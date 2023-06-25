const cards = document.querySelectorAll('.card');
const main = document.querySelector('.memory-game');

let hasFlippedCard = false;
let blockBoard = false;
let firstCard, secondCard;
let qtdAcertos = 0;
let tentativas = 0;

function flipCard() {
    if (blockBoard) return;
    if (this === firstCard) return;

    this.classList.add('card-flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    hasFlippedCard = false;
    checkCardSame();
}

function checkCardSame() {
    tentativas += 1;

    if (firstCard.dataset.card === secondCard.dataset.card) {
        disabledCard();
    } else {
        unflipCards();
    }
}

function disabledCard() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    qtdAcertos += 1;
    console.log(qtdAcertos);

    if (qtdAcertos === 6) {
        newHtmlWhenWin();
    }
    resetBoard();
}

function unflipCards() {
    blockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('card-flip');
        secondCard.classList.remove('card-flip');
        resetBoard();
    }, 700);
}

function resetBoard() {
    [hasFlippedCard, blockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

function showAllCards() {
    cards.forEach((card) => {
      card.classList.add('card-flip');
    });
  
    setTimeout(() => {
      cards.forEach((card) => {
        card.classList.remove('card-flip');
      });
    }, 1500);
  }
  

function newHtmlWhenWin() {
    cards.forEach((card) => {
        main.removeChild(card);
    })

    main.classList.remove('memory-game');
    main.classList.add('main');

    const message = document.createElement('h2');
    message.textContent = `Congratulations! You needed ${tentativas} moves!`;
    message.classList.add('message');
    main.appendChild(message);

    if (tentativas === 6) {
        message.textContent = `Woow you are so luky! Congratulations! You only needed ${tentativas} moves. Also, you did not miss a single one!`;
    } else if (tentativas <= 10) {
        message.textContent = `Congratulations! You only needed ${tentativas} moves!`;
    } else if (tentativas >= 11) {
        message.textContent = `Wel done! You needed ${tentativas} moves! Try again to get faster.`;
    } else if (tentativas >= 14) {
        message.textContent = `Finaly! You needed ${tentativas} moves! You need to memorise the images and match them, play again to get better.`;
    } else if (tentativas >= 18) {
        message.textContent = `Come on!! You needed ${tentativas} moves? Try to memorise the images and match them, play again to get better.`;
    }

    const playAgain = document.createElement('button');
    playAgain.textContent = 'Try again';
    playAgain.classList.add('play-again');
    main.appendChild(playAgain);

    const resetGame = document.querySelector('.play-again');
    resetGame.addEventListener('click', function () {
        location.reload();
    });
}

(function shuffle() {
    cards.forEach((card) => {
        let randomPosition = Math.floor(Math.random() * 12);
        card.style.order = randomPosition;
    })
})();

cards.forEach((card) => {
    card.addEventListener('click', flipCard);
});

showAllCards();
