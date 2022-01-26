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

let hobbiesNavbar1 = document.querySelector('#hobbies-section .navbar');

window.addEventListener('scroll', ()=> {
    let scrolledBy = window.scrollY;
    if(!hobbiesDetailsDiv.classList.contains('invisible'))
    {
        if(scrolledBy >= 210)
        {
            document.documentElement.style.setProperty('--navbarColor', 'black');
            hobbiesNavbar1.style.backgroundColor = 'rgba(0,0,0,0.1)';
        }
        else
        {
            document.documentElement.style.setProperty('--navbarColor', 'white');
            hobbiesNavbar1.style.backgroundColor = 'transparent';
        }
    }
})