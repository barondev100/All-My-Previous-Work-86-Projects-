window.addEventListener('load',init);
//Global Variables

//Available Levels
const levels = {
    easy: 5,
    medium: 3,
    hard: 2
}
const currentLevel = levels.medium;
let time = currentLevel;
let score = 0;
let isPlaying;
//
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
];
//Init Game
function init(){
    //Show Number of seconds
    seconds.innerHTML = currentLevel;
    showWord(words);
    // Start Matching on Word Input
    wordInput.addEventListener('input', startMatch);
    //Call Countdown every Seconds
    setInterval(countdown,1000);
    //Check The status
    setInterval(checkStatus,50);
}

//start match 
function startMatch(){
    if(matchWords()){
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }
    //If Score is -1 display 0
    if(score === -1){
        scoreDisplay.innerHTML = 0;
    }else{
        scoreDisplay.innerHTML = score;
    }
    

}

function  matchWords(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = 'Correct';
        return true;
    }else{
        message.innerHTML = '';
        return false;
    }
}



//Pick and Show Random words
function showWord(words){
    const randIndex = Math.floor(Math.random() * words.length);
    // Output Random Word
    currentWord.innerHTML = words[randIndex];
}

//countdown function that is being called from init function()

function countdown(){
    //Make sure time is not run out!
    if(time > 0){
        // Take Time off
        time--;
    }else if(time === 0){
        // Game is over
        isPlaying = false;
    }

    //Show Time
    timeDisplay.innerHTML = time;
}
// Game Status
function checkStatus(){
    if(!isPlaying && time === 0){
        message.innerHTML = 'Game Over!';
        score = -1;
    }
}