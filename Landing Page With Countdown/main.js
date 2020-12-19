const countDown = document.querySelector('.countdown');
// Launch Date
const launchDate = new Date('Jan 1, 2021 15:00:00').getTime();

//Update Every Second
const intvl = setInterval(()=>{
    //Get Todays Date And TIme 
    const now = new Date().getTime();
    const distance = launchDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins =  Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60));
    const seconds =  Math.floor((distance % (1000 * 60)) / 1000);
    //Time Calculations
    countDown.innerHTML = `
        <div>${days}<span>Days</span></div>
        <div>${hours}<span>Hours</span></div>
        <div>${mins}<span>Minutes</span></div>
        <div>${seconds}<span>Seconds</span></div>
    `;

    if(launchDate < 0){
        clearInterval(intvl);
        countDown.style.color = '#333';
        countDown.innerHTML = 'Launched!';
    }
}, 1000);