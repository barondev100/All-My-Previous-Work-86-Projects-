"use strict";

// Setting the player
var player; // Constructor Object

function Player(classType, health, mana, strength, agility, speed) {
  this.classType = classType;
  this.health = health;
  this.mana = mana;
  this.strength = strength;
  this.agility = agility;
  this.speed = speed;
}

var PlayerMoves = function PlayerMoves() {
  var calcAttack = function calcAttack() {
    // Who Attacks First?
    var getPlayerSpeed = player.speed;
    var getEnemySpeed = enemy.speed;
  }; // Player Attacks


  var playerAttack = function playerAttack() {
    var calcBaseDamage;

    if (player.mama > 0) {
      calcBaseDamage = player.strength * player.mana / 1000;
    } else {
      calcBaseDamage = player.agility * player.mana / 1000;
    }

    var offsetDamage = Math.floor(Math.random() * Math.floor(10));
    var calcOutputDamage = calcBaseDamage + offsetDamage; // Number Of Hits

    var numberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10) / 2) + 1;
    var attackValues = [calcOutputDamage, numberOfHits];
    return attackValues;
  };

  var EnemyAttack = function EnemyAttack() {
    var calcBaseDamage;

    if (enemy.mama > 0) {
      calcBaseDamage = enemy.strength * enemy.mana / 1000;
    } else {
      calcBaseDamage = enemy.agility * enemy.mana / 1000;
    }

    var offsetDamage = Math.floor(Math.random() * Math.floor(10));
    var calcOutputDamage = calcBaseDamage + offsetDamage; // Number Of Hits

    var numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility / 10) / 2) + 1;
    var attackValues = [calcOutputDamage, numberOfHits];
    return attackValues;
  }; //


  var getPlayerHealth = document.querySelector(".health-Player");
  var getEnemyHealth = document.querySelector(".health-Enemy"); // Iniate Attacks

  if (getPlayerSpeed >= getEnemySpeed) {
    var playerAttackValues = playerAttack();
    var totalDamage = playerAttackValues[0] * playerAttackValues[1];
    enemy.health = enemy.health - totalDamage;
    alert("You Hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times ");

    if (enemy.health <= 0) {
      alert("You Win!");
    }
  }
};