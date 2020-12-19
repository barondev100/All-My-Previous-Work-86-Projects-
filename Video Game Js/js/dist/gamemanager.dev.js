"use strict";

// Object GameManager
var GameManager = {
  // Setting The Start Method
  setGameStart: function setGameStart(classType) {
    this.resetPlayer(classType);
    this.setPreFight();
  },
  // Reset Player Method
  resetPlayer: function resetPlayer(classType) {
    switch (classType) {
      case "Warrior":
        player = new Player(classType, 200, 0, 200, 100, 50);
        break;

      case "Rogue":
        player = new Player(classType, 100, 0, 100, 150, 200);
        break;

      case "Mage":
        player = new Player(classType, 80, 0, 50, 200, 50);
        break;

      case "Archer":
        player = new Player(classType, 200, 0, 50, 200, 100);
        break;
    }

    var getInterface = document.querySelector('.interface');
    getInterface.innerHTML = '<img src="img/player/' + classType + '.jpg" class="img-avatar"> <div><h3>' + classType + '</h3><p class="health-Player">Health: ' + player.health + '</p>  <p>Mana: ' + player.mana + '</p><p>Strength: ' + player.strength + '</p><p>Agility: ' + player.agility + '</p><p>Speed: ' + player.speed + '</p></div>';
  },
  // Set Game Stage
  setPreFight: function setPreFight() {
    var getHeader = document.querySelector(".header");
    var getActions = document.querySelector(".action");
    var getArena = document.querySelector(".arena");
    getHeader.innerHTML = '<p>Task: Find An Enemy</p>';
    getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search For Enemy</a>';
    getArena.style.visibility = "visible";
  },
  setFight: function setFight() {
    var getHeader = document.querySelector(".header");
    var getActions = document.querySelector(".action");
    var getEnemy = document.querySelector(".enemy"); // Create Enemy

    var enemy00 = new Enemy("Goblin", 100, 0, 50, 100, 100);
    var enemy01 = new Enemy("Troll", 200, 0, 150, 80, 150);
    var chooseEnemy = Math.floor(Math.random() * Math.floor(2));

    switch (chooseEnemy) {
      case 0:
        enemy = enemy00;
        break;

      case 1:
        enemy = enemy01;
        break;
    }

    getHeader.innerHTML = '<p>Task: Choose Your Move</p>';
    getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>'; // getEnemy.innerHTML = '<img src="img/enemies/' + enemy.enemyType + '.jpg" class="img-avatar"> <div><h3>'+ enemy.enemyType + '</h3><p class="health-enemy>Health: '+ enemy.health +'</p>  <p>Mana: '+ enemy.mana +'</p><p>Strength: '+ enemy.strength +'</p><p>Agility: '+ enemy.agility +'</p><p>Speed: '+ enemy.speed +'</p></div>';

    getEnemy.innerHTML = '<img src="img/enemies/' + enemy.enemyType + '.jpg" class="img-avatar"> <div><h3>' + enemy.enemyType + '<div></h3> <p class="health-Enemy">Health: ' + enemy.health + '</p> <p>Mana: ' + enemy.mana + '</p> <p>Strength: ' + enemy.strength + '</p> <p>Agility: ' + enemy.agility + '</p> <p>Speed: ' + enemy.speed + '</p></div>';
  }
};