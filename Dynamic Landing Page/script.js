const time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name'),
focus = document.getElementById('focus');
const showAmPm = true;
//Show Time
function showTime(){
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();
        //Set Am||Pm
    const amPm = hour >= 12 ? 'Pm' : 'Am';

    //12 Hour Format
    hour = hour % 12 || 12;
    time.innerHTML = `
        ${hour}<span>:</span>${addZero(min)}
        <span>:</span>${addZero(sec)}
        ${showAmPm ? amPm : ''}
    `;

    setTimeout(showTime,1000);
}
// Run
showTime();

//Add Zero Function
function addZero(n){
    return (parseInt(n,10) < 10 ? '0': '') + n;
}


//Set BackGround And Greeting
function setBgGreet(){
    let today = new Date(),
    hour = today.getHours();

    if(hour < 12){
        //Morning
        document.body.style.backgroundImage = "url(img/morning.jpg)";
        greeting.textContent = 'Good Morning';
    }else if(hour < 18){
        //Afternoon
        document.body.style.backgroundImage = "url(img/afternoon.jpg)";
        greeting.textContent = 'Afternoon';
    }else{
        //Evening!
        document.body.style.backgroundImage = "url(img/night.jpg)";
        greeting.textContent = 'Good Night';
        document.body.style.color = '#fff';
    }
}
setBgGreet();


//Get Name Function
function getName(){
    if(localStorage.getItem('name') === null){
        name.textContent = '[Enter Name]';
    }else{
        name.textContent = localStorage.getItem('name');
    }
}

function getFocus(){
    if(localStorage.getItem('focus') === null){
        focus.textContent = '[Enter Your Focus]';
    }else{
        focus.textContent = localStorage.getItem('focus');
    }
}

getName();
getFocus();


name.addEventListener('keypress', setName)
name.addEventListener('blur', setName)


function setName(e){
    if(e.type === 'keypress'){
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    }else{
        localStorage.setItem('name', e.target.innerText);
    }
}




focus.addEventListener('keypress', setFocus)
focus.addEventListener('blur', setFocus)

function setFocus(e){
    if(e.type === 'keypress'){
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    }else{
        localStorage.setItem('focus', e.target.innerText);
    }
}

