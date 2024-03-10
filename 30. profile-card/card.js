let card = document.querySelector('.card');
let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');
let sun = document.querySelector('.sun');


toggle.addEventListener('click',()=>{
    card.classList.toggle('active')
})

sun.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme');
    // body.classList.toggle('dark')
    // card.classList.toggle('dark')
})