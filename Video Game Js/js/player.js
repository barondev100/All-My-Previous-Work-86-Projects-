// Setting the player
let player;
// Constructor Object
function Player(classType,health,mana,strength,agility,speed){
    this.classType = classType;
    this.health = health;
    this.mana = mana;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
};

let PlayerMoves = {
    calcAttack : function(){
        // Who Attacks First?
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;

        // Player Attacks
        let  playerAttack = function(){
            let calcBaseDamage;
            if(player.mama > 0 ){
                calcBaseDamage = player.strength * player.mana / 1000;
            }else{
                calcBaseDamage = player.agility * player.mana / 1000;
            }
            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDamage + offsetDamage;
            // Number Of Hits
            let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10) / 2) + 1;
            let attackValues = [calcOutputDamage, numberOfHits];
            return attackValues;
        };

        let EnemyAttack = function(){
            let calcBaseDamage;
            if(enemy.mama > 0 ){
                calcBaseDamage = enemy.strength * enemy.mana / 1000;
            }else{
                calcBaseDamage = enemy.agility * enemy.mana / 1000;
            }
            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDamage + offsetDamage;
            // Number Of Hits
            let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility / 10) / 2) + 1;
            let attackValues = [calcOutputDamage, numberOfHits];
            return attackValues;
        };
        //
        let getPlayerHealth = document.querySelector(".health-Player");
        let  getEnemyHealth = document.querySelector(".health-Enemy");
        // Iniate Attacks

        if(getPlayerSpeed>= getEnemySpeed){
            let playerAttackValues = playerAttack();
            let totalDamage = playerAttackValues[0] * playerAttackValues[1];
            enemy.health =  enemy.health  - totalDamage;
            alert("You Hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times " );
            if(enemy.health <= 0){
                alert("You Win!");
                getPlayerHealth.innerHTML = "Health: " + player.health;
                getEnemyHealth = "Health: 0";
            }else{
                getEnemyHealth.innerHTML = "Health: " + enemy.health;
                let enemyAttackValues = EnemyAttack();
                let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
                player.health =  player.health  - totalDamage;
                alert("Enemy Hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times " );
                if(player.health <= 0){
                    alert("You Loose!");
                    getPlayerHealth.innerHTML = "Health: 0" ;
                    getEnemyHealth = "Health: " + enemy.health;
                }else{
                  getPlayerHealth = "Health: " + player.health;

                }
            }
        } else if(getEnemySpeed >= getPlayerSpeed){
            let enemyAttackValues = EnemyAttack();
            let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
            player.health =  player.health  - totalDamage;
            alert("Enemy Hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times " );
            if(player.health <= 0){
                alert("You Loose Boi!");
                getEnemyHealth.innerHTML = "Health: " + enemy.health;
                getPlayerHealth = "Health: 0";
            }else{
                getPlayerHealth.innerHTML = "Health: " + player.health;
                let playerAttackValues = playerAttack();
                let totalDamage = playerAttackValues[0] * playerAttackValues[1];
                enemy.health =  enemy.health  - totalDamage;
                alert("You Hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times " );
                if(enemy.health <= 0){
                    alert("You Win!");
                    getEnemyHealth.innerHTML = "Health: 0" ;
                    getPlayerHealth = "Health: " + player.health;
                }else{
                  getEnemyHealth = "Health: " + enemy.health;

                }
            }
        }


    }



}
