let changeColor = document.querySelector('#changeColor');
let hexCode = document.querySelector('#hexCode');
let container = document.querySelector('.container')

changeColor.addEventListener('click', setBg);


function setBg() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    hexCode.innerHTML = '#'+randomColor;
}
