const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreboard = {
    player: 0,
    intelligent: 0
}
choices.forEach(choice=>choice.addEventListener('click',play));

// Play Game 
function play(e){
    restart.style.display = 'inline-block';
    const playerChoice = e.target.id;
    const intelligentChoice = getComputerChoice();
    const winner = getWinner(playerChoice,intelligentChoice);
    showWinner(winner, intelligentChoice);
}
function getComputerChoice(){
    const rand = Math.random();
    if(rand < 0.34){
        return 'rock';
    }else if(rand <= 0.67){
        return 'paper';
    }else{
        return 'scissors';
    }
}

function getWinner(p,i){
    if(p === i){
        return 'draw';
    }else if(p === 'rock'){
        if(i === 'paper'){
            return 'intelligent';
        }else{
            return 'player';
        }
    }else if(p === 'paper'){
        if(i === 'scissors'){
            return 'intelligent';
        }else{
            return 'player';
        }
    }else if(p === 'scissors'){
        if(i === 'rock'){
            return 'intelligent';
        }else{
            return 'player';
        }
    }
}


function showWinner(winner, intelligentChoice){
    if(winner === 'player'){
        //Inc Player scoer++
        scoreboard.player++
        result.innerHTML = `
            <h1 class="text-win">You Win!</h1>
            <i class="fas fa-hand-${intelligentChoice} fa-10x"></i>
            <p>Computer Chose <strong>${intelligentChoice}</strong></p>
        `;
    }else if(winner === 'intelligent'){
        scoreboard.intelligent++
        result.innerHTML = `
            <h1 class="text-lose">You Lose!</h1>
            <i class="fas fa-hand-${intelligentChoice} fa-10x"></i>
            <p>Computer Chose <strong>${intelligentChoice}</strong></p>
        `;
    }else{
        result.innerHTML = `
            <h1>It's a Draw!</h1>
            <i class="fas fa-hand-${intelligentChoice} fa-10x"></i>
            <p>Computer Chose <strong>${intelligentChoice}</strong></p>
        `;
    }
    //Show The score
    score.innerHTML = `
    <p>Player: ${scoreboard.player}</p>
    <p>intelligent: ${scoreboard.intelligent}</p>
    `;

    modal.style.display = 'block';
}

window.addEventListener('click',clearModal)
function clearModal(e){
    if(e.target === modal){
        modal.style.display = 'none';
    }
}



//Restart Game
restart.addEventListener('click',function(){
    scoreboard.player = 0;
    scoreboard.intelligent = 0;
    score.innerHTML = `
        <p>Player: 0 </p>
        <p>Intelligent: 0 </p>
    `
})