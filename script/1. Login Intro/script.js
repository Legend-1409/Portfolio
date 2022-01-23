let introText = document.querySelector('.login-background');
let h1 = document.createElement("h1");
let textNode = document.createTextNode("Portfolio");
h1.appendChild(textNode);

setTimeout(()=> {
    introText.removeChild(introText.firstElementChild);
    introText.appendChild(h1);
}, 2300);