let pageLoader = document.querySelector('#preLoader');
let loginIntroSection1 = document.querySelector('#login-intro-section');
let musicSection = document.querySelector('#background-music');

window.addEventListener('load', () => {
    pageLoader.classList.remove('is-active');
    loginIntroSection1.classList.remove('invisible');
    musicSection.play();
});