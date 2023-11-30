const popup = document.querySelector('.btnLogin-popup');
const wrapper = document.querySelector('.wrapper');
const iconclose = document.querySelector('.icon-close');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

popup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});
iconclose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});
