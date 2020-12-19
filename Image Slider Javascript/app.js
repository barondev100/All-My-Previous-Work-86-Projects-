const slide = document.querySelector(".slide");
const images = document.querySelectorAll(".slide img");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

// Counter
let counter = 1;
const size  = images[0].clientWidth;

slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Button Listener
nextBtn.addEventListener("click", function(){
    if(counter >= images.length -1) return;
    slide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

prevBtn.addEventListener("click", function(){
    if(counter <= 0) return;
    slide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

slide.addEventListener("transitionend", function(){
    if(images[counter].id === "lastImgClone"){
        slide.style.transition = "none";
        counter = images.length - 2;
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(images[counter].id === "FirstImageClone"){
        slide.style.transition = "none";
        counter = images.length - counter;
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})