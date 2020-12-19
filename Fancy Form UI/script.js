const questions = [
    {question: "Enter Your First Name"},
    {question: "Enter Your Last Name"},
    {question: "Enter Your Email", pattern: /\S+@\S+\.\S+/},
    {question: "Create A New Password", type: 'password'}
];

//Transition Time
const shakeTime = 100;
const switchTime = 200;
// Position At First Question
let position = 0;
//Init Dom Elements
const formBox = document.querySelector('#form-box');
const nextBtn = document.querySelector('#next-btn');
const prevBtn = document.querySelector('#prev-btn');
const inputGroup = document.querySelector('#input-group');
const inputField = document.querySelector('#input-field');
const inputLabel = document.querySelector('#input-label');
const inputProgress = document.querySelector('#input-progress');
const progress = document.querySelector('#progress-bar');

document.addEventListener('DOMContentLoaded', getQuestion);
nextBtn.addEventListener('click', validate);
//inputfield
inputField.addEventListener('keyup', e =>{
    if(e.keyCode == 13){
        validate();
    }
})
function getQuestion(){
    // Get Current Question
    inputLabel.innerHTML = questions[position].question;
    // Get Current Type
    inputField.type =  questions[position].type || 'text';
    //Get Current Answer
    inputField.value = questions[position].answer || '';
    //Focus on current element
    inputField.focus();

    //Progress Bar
    progress.style.width = (position * 100) / questions.length + "%";

    //Add user Icon
    prevBtn.className = position ? 'fas fa-arrow-left': 'fas fa-users';

    showQuestion();
}

function showQuestion(){
    inputGroup.style.opacity = 1;
    inputProgress.style.transition = '';
    inputProgress.style.width = '100%';
}

//Hide questions
function hideQuestion(){
    inputGroup.style.opacity = 0;
    inputLabel.style.marginLeft = 0;
    inputProgress.style.width = 0;
    inputProgress.style.transition = 'none';
    inputGroup.style.border = null;
}

//
function transForm(x,y){
    formBox.style.transform = `translate(${x}px,${y}px)`;
}

function validate(){
    //Make Sure Patterns Matches
    if(!inputField.value.match(questions[position].pattern || /.+/)){
        inputFail();
    }else{
        inputPass();
    }   
}

function inputFail(){
    formBox.className = 'error';
    for(let i = 0; i < 6; i++){
        setTimeout(transForm, shakeTime * i, ((i % 2) * 2 - 1) * 20,0);
        setTimeout(transForm, shakeTime * 6, 0,0);
        inputField.focus();
    }
}
function inputPass(){
    formBox.className = '';
    setTimeout(transForm,shakeTime * 0,0, 10);
    setTimeout(transForm,shakeTime * 1,0, 0);
    //Store Answer in Array
    questions[position].answer = inputField.value;
    //Increment Position
    position++;
    //If new Question, hide current and get Next
    if(questions[position]){
        hideQuestion();
        getQuestion();
    }else{
        hideQuestion();
        formBox.className = 'close';
        progress.style.width = '100%';
        formComplete();
    }
}


//All fields complete

function formComplete(){
    
    const h1 = document.createElement('h1');
    h1.classList.add('end');
    h1.appendChild(document.createTextNode(`Thanks ${questions[0].answer} You are registered!`));

    setTimeout(()=>{
        formBox.parentElement.appendChild(h1);
        setTimeout(()=> (h1.style.opacity =1),50)
    }, 1000)
}