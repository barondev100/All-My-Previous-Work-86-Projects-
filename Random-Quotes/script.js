var quotes = [ "In the end, it’s not the years in your life that count. It’s the life in your years",
"Don’t gain the world and lose your soul, wisdom is better than silver or gold",
"Lighten up, just enjoy life, smile more, laugh more, and don’t get so worked up about things",
"Don’t cry because it’s over, smile because it happened",
"Do stuff. Be clenched, curious. Not waiting for inspiration’s shove or society’s kiss on your forehead. Pay attention. It’s all about paying attention. Attention is vitality. It connects you with others. It makes you eager. Stay eager",
    
];


const btn = document.querySelector('#btn').addEventListener('click', newQuote);
function newQuote(){
    var randNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById("content").innerHTML = quotes[randNumber];
}

