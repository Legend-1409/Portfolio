let scrollClickButtonDown = document.querySelector('#about-me-section .scroll-click');
let aboutInfoContainer = document.querySelector('#about-me-section .about-info-container');
let aboutDetailsDiv = document.querySelector('#about-me-section .about-details-div');



scrollClickButtonDown.addEventListener('click', ()=> {
    aboutInfoContainer.classList.add('active');
    aboutDetailsDiv.classList.remove('invisible');
    setTimeout(()=>{
        aboutInfoContainer.classList.add('invisible');
        aboutInfoContainer.classList.remove('active');
    }, 800);
});