let introText = document.querySelector('.login-background');
let h1 = document.createElement("h1");
let textNode = document.createTextNode("Portfolio");
h1.appendChild(textNode);
h1.classList.add('zoomIn');

let loginIntroSection = document.querySelector("#login-intro-section");
let introSection = document.querySelector('#intro-section');


setTimeout(()=> {
    introText.removeChild(introText.firstElementChild);
    introText.appendChild(h1);
}, 2500);

setTimeout(()=> {
    loginIntroSection.classList.add('invisible');
    introSection.classList.remove('invisible');
}, 5000);