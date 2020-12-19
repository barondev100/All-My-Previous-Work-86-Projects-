var slide = document.querySelectorAll('.slide');
var prevButton = document.querySelectorAll('.prev');
var nextButton = document.querySelectorAll('.next');


for(var i = 1; i < slide.length; i++){
    slide[i].classList.add('hidden');
}


for(var i =0; i < prevButton.length; i++){
    prevButton[i].addEventListener('click', function(){
        slide[0].classList.toggle('hidden');
        slide[1].classList.toggle('hidden');
    })
}

for (var i=0; i<nextButton.length; i++){
    nextButton[i].addEventListener("click", function(){
        slide[0].classList.toggle("hidden");
        slide[1].classList.toggle("hidden");
    });
}
