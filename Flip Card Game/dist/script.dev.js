"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AudioController =
/*#__PURE__*/
function () {
  function AudioController() {
    _classCallCheck(this, AudioController);

    this.bgMusic = new Audio("Assets/Audio/creepy.mp3");
    this.flipSound = new Audio('Assets/Audio/flip.wav');
    this.matchSound = new Audio('Assets/Audio/match.wav');
    this.victorySound = new Audio('Assets/Audio/victory.wav');
    this.gameOverSound = new Audio('Assets/Audio/gameOver.wav');
    this.bgMusic.volume = 0.5;
    this.bgMusic.loop = true;
  }

  _createClass(AudioController, [{
    key: "startMusic",
    value: function startMusic() {
      this.bgMusic.play();
    }
  }, {
    key: "stopMusic",
    value: function stopMusic() {
      this.bgMusic.pause();
      this.bgMusic.currentTime = 0;
    }
  }, {
    key: "flip",
    value: function flip() {
      this.flipSound.play();
    }
  }, {
    key: "match",
    value: function match() {
      this.matchSound.play();
    }
  }, {
    key: "victory",
    value: function victory() {
      this.stopMusic();
      this.victorySound.play();
    }
  }, {
    key: "gameOver",
    value: function gameOver() {
      this.stopMusic();
      this.gameOverSound.play();
    }
  }]);

  return AudioController;
}(); // Another Class Constructor


var MixOrMatch =
/*#__PURE__*/
function () {
  function MixOrMatch(totalTime, cards) {
    _classCallCheck(this, MixOrMatch);

    this.cardsArray = cards;
    this.totalTime = totalTime;
    this.timeRemaining = totalTime;
    this.timer = document.getElementById('time-remaining');
    this.ticker = document.getElementById('flips');
    this.audioController = new AudioController();
  }

  _createClass(MixOrMatch, [{
    key: "startGame",
    value: function startGame() {
      var _this = this;

      this.cardToCheck = null;
      this.totalClicks = 0;
      this.timeRemaining = this.totalTime;
      this.matchedCards = [];
      this.busy = true;
      setTimeout(function () {
        _this.audioController.startMusic();

        _this.shuffleCard();

        _this.countDown = _this.startCountDown();
        _this.busy = false;
      }, 500);
      this.hideCards();
      this.timer.innerText = this.timeRemaining;
      this.ticker.innerText = this.totalClicks;
    }
  }, {
    key: "hideCards",
    value: function hideCards() {
      this.cardsArray.forEach(function (card) {
        cards.classList.remove('visible');
        cards.classList.remove('matched');
      });
    }
  }, {
    key: "flipCard",
    value: function flipCard(card) {
      if (this.canFlipCard(card)) {
        this.audioController.flip();
        this.totalClicks++;
        this.ticker.innerText = this.totalClicks;
        card.classList.add("visible");

        if (this.cardToCheck) {
          this.checkForCardMatch(card);
        } else {
          this.cardToCheck = card;
        }
      }
    }
  }, {
    key: "checkForCardMatch",
    value: function checkForCardMatch(card) {
      if (this.getCardType(card) === this.getCardType(this.cardToCheck)) {
        this.cardMatch(card, this.cardToCheck);
      } else {
        this.cardMisMatch(card, this.cardToCheck);
      }

      this.cardToCheck = null;
    }
  }, {
    key: "cardMatch",
    value: function cardMatch(card1, card2) {
      this.matchedCards.push(card1);
      this.matchedCards.push(card2);
      card1.classList.add("matched");
      card2.classList.add("matched");
      this.audioController.match();

      if (this.matchedCards.length == this.cardsArray.length) {
        this.victory();
      }
    }
  }, {
    key: "cardMisMatch",
    value: function cardMisMatch(card1, card2) {
      var _this2 = this;

      this.busy = true;
      setTimeout(function () {
        card1.classList.remove("visible");
        card2.classList.remove("visible");
        _this2.busy = false;
      }, 1000);
    }
  }, {
    key: "getCardType",
    value: function getCardType(card) {
      return card.getElementsByClassName('card-value')[0].src;
    }
  }, {
    key: "startCountDown",
    value: function startCountDown() {
      var _this3 = this;

      return setInterval(function () {
        _this3.timeRemaining--;
        _this3.timer.innerText = _this3.timeRemaining;

        if (_this3.timeRemaining === 0) {
          _this3.gameOver();
        }
      }, 1000);
    }
  }, {
    key: "gameOver",
    value: function gameOver() {
      clearInterval(this.countDown);
      this.audioController.gameOver();
      document.getElementById("game-over-text").classList.add('visible');
    }
  }, {
    key: "victory",
    value: function victory() {
      clearInterval(this.countDown);
      this.audioController.victory();
      document.getElementById("victory-text").classList.add('visible');
      this.hideCards();
    }
  }, {
    key: "shuffleCard",
    value: function shuffleCard() {
      for (var i = this.cardsArray.length - 1; i > 0; i--) {
        var randIndex = Math.floor(Math.random() * (i + 1));
        this.cardsArray[randIndex].style.order = i;
        this.cardsArray[i].style.order = randIndex;
      }
    }
  }, {
    key: "canFlipCard",
    value: function canFlipCard(card) {
      return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;
    }
  }]);

  return MixOrMatch;
}(); // Ready Function


function ready() {
  var overLays = Array.from(document.getElementsByClassName("overlay-text"));
  var cards = Array.from(document.getElementsByClassName('card'));
  var game = new MixOrMatch(100, cards);
  overLays.forEach(function (overLay) {
    overLay.addEventListener('click', function () {
      overLay.classList.remove('visible');
      game.startGame();
    });
  });
  cards.forEach(function (card) {
    card.addEventListener('click', function () {
      game.flipCard(card);
    });
  });
} // Code Load


if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', ready());
} else {
  ready();
}