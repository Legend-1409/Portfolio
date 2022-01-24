let skillsSectionScrollClickButtonDown = document.querySelector('#skills-section .scroll-click');
let skillInfoContainer = document.querySelector('#skills-section .skills-info-container');
let skillDetailsDiv = document.querySelector('#skills-section .skills-details-div');
let personalSkillsProgressBar = document.querySelectorAll('#skills-section .personal-skill-number');


function progressBarCounter(id, start, end, increment, duration) 
{

    if (start === end) return;
    let range = end - start;
    let current = start;

    let stepTime = Math.abs(Math.floor((duration * increment) / range));

    let timer = setInterval(function () {
        if (end - current < increment) {
            increment = Math.floor(increment / 10);
        }
        current += increment;
        id.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}



skillsSectionScrollClickButtonDown.addEventListener('click', ()=> {
    skillInfoContainer.classList.add('active');
    skillDetailsDiv.classList.remove('invisible');
    document.documentElement.style.setProperty('--navbarColor', 'black');
    setTimeout(()=>{
        skillInfoContainer.classList.add('invisible');
        skillInfoContainer.classList.remove('active');
    }, 800);
    setTimeout(()=>{
        personalSkillsProgressBar.forEach((element) => {
            let id = element.querySelector('.inside-circle');
            let value = Number(id.innerHTML.substring(0,2));
            progressBarCounter(id, 0, value, 1, 3000);
            element.querySelector('.inside-circle')
        });
    }, 1200);
});