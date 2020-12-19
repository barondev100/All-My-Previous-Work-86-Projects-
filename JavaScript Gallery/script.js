let galleryImages = document.querySelectorAll(".gallery-img");
let getLatestOpenedImg;
let windowWidth = window.innerWidth;

function closeImage(){
  document.querySelector(".img-window").remove();
  document.querySelector(".img-btn-prev").remove();
  document.querySelector(".img-btn-next").remove();
}
function changeImg(changeDir){
  document.querySelector("#current-img").remove();

  let getImgWindow = document.querySelector('.img-window');
  let newImg = document.createElement("img");
  getImgWindow.appendChild(newImg);

  let calcNewImg;
  if(changeDir === 1){
    calcNewImg = getLatestOpenedImg + 1;
    if(calcNewImg > galleryImages.length){
       calcNewImg = 1;
    }
  }else if(changeDir === 0){
    calcNewImg = getLatestOpenedImg - 1;
    if(calcNewImg < 1){
       calcNewImg = galleryImages.length;
    }
  }
  newImg.setAttribute("src", "img/img-"+calcNewImg+".jpg");
  newImg.setAttribute("id", "current-img");
  getLatestOpenedImg = calcNewImg;

  newImg.onload = function(){
    let imgWidth = this.width;
    let calcImageToEdge = ((windowWidth - imgWidth) / 2) - 180;
    let nextBtn = document.querySelector(".img-btn-next");
    nextBtn.style.cssText =  "right: "+calcImageToEdge+"px";

    let prevBtn = document.querySelector(".img-btn-prev");
    prevBtn.style.cssText =  "left: "+calcImageToEdge+"px";
  }
}
if(galleryImages){
  galleryImages.forEach((img, index) => {
    img.onclick = function(){
      let getElementCss = window.getComputedStyle(img);
      let getFullImgUrl = getElementCss.getPropertyValue("background-image");
      let getImgUrlPos = getFullImgUrl.split("/img/thumb/");
      let setNewImgUrl = getImgUrlPos[1].replace('")', '');

      getLatestOpenedImg = index + 1;

      let container = document.body;
      let newImgWindow = document.createElement("div");
      container.appendChild(newImgWindow);
      newImgWindow.setAttribute("class", "img-window");
      newImgWindow.setAttribute("onclick", "closeImage()");



      let newImg = document.createElement("img");
      newImgWindow.appendChild(newImg);
      newImg.setAttribute("src", "img/" + setNewImgUrl );
      newImg.setAttribute("id", "current-img");

      newImg.onload  = function(){
        console.log("hey");
        let imgWidth = this.width;
        let calcImageToEdge = ((windowWidth - imgWidth) / 2) - 180;


        let newNextBtn = document.createElement("a");
        let btnNextText = document.createTextNode("Next");
        newNextBtn.appendChild(btnNextText);
        container.appendChild(newNextBtn);
        newNextBtn.setAttribute("class", "img-btn-next");
        newNextBtn.setAttribute("onclick", "changeImg(1)");
        newNextBtn.style.cssText = "right: "+calcImageToEdge+"px";


        let newPrevBtn = document.createElement("a");
        let btnPrevText = document.createTextNode("Prev");
        newPrevBtn.appendChild(btnPrevText);
        container.appendChild(newPrevBtn);
        newPrevBtn.setAttribute("class", "img-btn-prev");
        newPrevBtn.setAttribute("onclick", "changeImg(0)");
        newPrevBtn.style.cssText = "left: "+calcImageToEdge+"px";
      }

    }
  });

}