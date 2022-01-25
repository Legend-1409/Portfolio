let hobbiesSectionScrollClickButtonDown = document.querySelector('#hobbies-section .scroll-click');
let hobbiesInfoContainer = document.querySelector('#hobbies-section .hobbies-info-container');
let hobbiesDetailsDiv = document.querySelector('#hobbies-section .hobbies-details-div');


hobbiesSectionScrollClickButtonDown.addEventListener('click', ()=> {
    hobbiesInfoContainer.classList.add('active');
    hobbiesDetailsDiv.classList.remove('invisible');
    document.documentElement.style.setProperty('--navbarColor', 'white');
    setTimeout(()=>{
        hobbiesInfoContainer.classList.add('invisible');
        hobbiesInfoContainer.classList.remove('active');
    }, 800);
});