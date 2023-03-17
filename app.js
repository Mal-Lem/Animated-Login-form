const sign_up_btn = document.querySelector('#sign-up-button');
const sign_in_btn = document.querySelector('#sign-in-button');
const  container = document.querySelector('.container');

sign_in_btn.addEventListener('click',() => {
    container.classList.add('sign-in-mode');
});
sign_up_btn.addEventListener('click',() => {
    container.classList.remove('sign-in-mode'); 
});