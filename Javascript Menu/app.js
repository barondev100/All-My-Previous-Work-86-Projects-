let toggleNavStatus = false;

let toggleNav = function(){
    let getSideBar  = document.querySelector(".nav-sidebar");
    let getSideBarUl  = document.querySelector(".nav-sidebar ul");
    let getSideBarTitle  = document.querySelector(".nav-sidebar span");
    let getSideBarLinks  = document.querySelectorAll(".nav-sidebar a");

    if(toggleNavStatus === false){
        getSideBarUl.style.visibility = "visible";
        getSideBar.style.width = "275px";
        getSideBarTitle.style.opacity = "0.7";

        let linkLength = getSideBarLinks.length;
        for(let i = 0; i < linkLength; i++){
            getSideBarLinks[i].style.opacity = "1";
        }
        toggleNavStatus = true;

    }


    else if(toggleNavStatus === true){
        getSideBar.style.width = "50px";
        getSideBarTitle.style.opacity = "0";

        let linkLength = getSideBarLinks.length;
        for(let i = 0; i < linkLength; i++){
            getSideBarLinks[i].style.opacity = "0";
        }
        getSideBarUl.style.visibility = "hidden";
        toggleNavStatus = false;

    }

};

