// Set Initial Count
let count = 0;
// Select Value and Buttons
let value = document.querySelector('#value');
let btn = document.querySelectorAll('.btn');

btn.forEach(function(eachBtn){
    eachBtn.addEventListener('click',function(e){
        var styles =  e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }else if(styles.contains('reset')){
            count = 0;
        }else if(styles.contains('increase')){
            count++;
        }
        if(count > 0){
            value.style.color= 'lightgreen';
        }
        if(count < 0){
            value.style.color = 'crimson';
        }
        if(count === 0){
            value.style.color = '#333';
        }
        value.textContent = count;
    })
})


