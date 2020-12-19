var modalBtn = document.querySelector(".modal-btn");
var modalBg = document.querySelector(".modal-bg");
var modalCls = document.querySelector(".modal-close");
modalBtn.addEventListener("click",function(){
    modalBg.classList.add('bg-active');
})
modalCls.addEventListener("click",function(){
    modalBg.classList.remove('bg-active');
})
