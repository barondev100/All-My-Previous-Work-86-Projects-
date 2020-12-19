const navSlide = () =>{
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-ul");
    const nav_links = document.querySelectorAll(".nav-ul > li");

    burger.addEventListener("click", () =>{
        nav.classList.toggle('nav-active');

        nav_links.forEach(function(link,index){
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navUlFade 0.5s ease forwards ${index / 5 + 0.3}s`
            }
    });
    // Burger
    burger.classList.toggle('toggle');

   });


}

navSlide();

