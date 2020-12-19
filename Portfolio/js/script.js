const navToggle = document.querySelector('.menu-button')
const nav = document.querySelector('nav');

navToggle.addEventListener('click',function(){
    document.body.classList.toggle('nav-is-open');
})
nav.addEventListener('click', ()=>{
    document.body.classList.remove('nav-is-open');
})


const portfolioContainer = document.querySelector('.portfolio-items');

portfolioContainer.addEventListener('click', e=>{
    e.preventDefault();
    const modalToggle = e.target.closest('.portfolio-link');

    if(! modalToggle) return

    const modal = modalToggle.parentNode.nextElementSibling;

    const closeButton = modal.querySelector('#modal-close')
    const modalOpen = _=>{
        modal.classList.add('is-open');
        modal.style.animation = 'modalIn 500ms forwards'
        document.body.style.overflowY = 'hidden';
    }
    const modalClose = _=>{
        modal.classList.remove('is-open');
        modal.removeEventListener('animationend', modalClose)
        document.body.style.overflowY = 'scroll';

    }
    closeButton.addEventListener('click', (e)=>{
        modal.style.animation = 'modalOut 500ms forwards';
        modal.addEventListener('animationend',modalClose)
    })

    document.addEventListener('keydown', e =>{
        if(e.keycode === 27){
            modal.style.animation = 'modalOut 500ms forwards';
            modal.addEventListener('animationend',modalClose)
        document.body.style.overflowY = 'scroll';
        }
    })
    modalOpen();
})