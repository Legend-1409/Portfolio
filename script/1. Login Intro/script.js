let introText = document.querySelector('.login-background');
let h1 = document.createElement("h1");
let textNode = document.createTextNode("Portfolio");
h1.appendChild(textNode);
h1.classList.add('zoomIn');

let loginIntroSection = document.querySelector("#login-intro-section");
let introSection = document.querySelector('#intro-section');

// For login intro page text changes from Yash Bansal to portfolio
setTimeout(()=> {
    introText.removeChild(introText.firstElementChild);
    introText.appendChild(h1);
}, 2500);

// For page transition from login-intro to intro section
setTimeout(()=> {
    introSection.classList.remove('invisible');
    loginIntroSection.classList.add('page-transition');
    setTimeout(()=>{
        loginIntroSection.classList.add('invisible');
        loginIntroSection.classList.remove('page-transition');
    },2000);
}, 5000);