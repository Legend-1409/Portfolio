let introSection1 = document.querySelector('#intro-section');
let aboutMeSection1 = document.querySelector('#about-me-section');

// For Home Page Navbar
let homePageNavbarSection = introSection1.querySelector('.navbar');
let homePageNavbarHome = homePageNavbarSection.querySelector('.navbar-home');
let homePageNavbarAbout = homePageNavbarSection.querySelector('.navbar-about');
let homePageNavbarHobbies = homePageNavbarSection.querySelector('.navbar-hobbies');
let homePageNavbarSkills = homePageNavbarSection.querySelector('.navbar-skills');

homePageNavbarHome.addEventListener('click', (e)=> {
    e.preventDefault();
    document.documentElement.style.setProperty('--navbarColor', 'white');
    introSection1.classList.remove('invisible');
    aboutMeSection1.classList.add('invisible');
});

homePageNavbarAbout.addEventListener('click', (e)=>{
    e.preventDefault();
    document.documentElement.style.setProperty('--navbarColor', 'rgb(27, 27, 27)');
    introSection1.classList.add('invisible');
    aboutInfoContainer.classList.remove('invisible');
    aboutDetailsDiv.classList.add('invisible');
    aboutMeSection1.classList.remove('invisible');
});

homePageNavbarHobbies.addEventListener('click', (e)=>{
    e.preventDefault();
});

homePageNavbarSkills.addEventListener('click', (e)=>{
    e.preventDefault();
});


// For About Page Navbar
let aboutPageNavbarSection = aboutMeSection1.querySelector('.navbar');
let aboutPageNavbarHome = aboutPageNavbarSection.querySelector('.navbar-home');
let aboutPageNavbarAbout = aboutPageNavbarSection.querySelector('.navbar-about');
let aboutPageNavbarHobbies = aboutPageNavbarSection.querySelector('.navbar-hobbies');
let aboutPageNavbarSkills = aboutPageNavbarSection.querySelector('.navbar-skills');

aboutPageNavbarHome.addEventListener('click', (e)=> {
    e.preventDefault();
    document.documentElement.style.setProperty('--navbarColor', 'white');
    introSection1.classList.remove('invisible');
    aboutMeSection1.classList.add('invisible');
});

aboutPageNavbarAbout.addEventListener('click', (e)=>{
    e.preventDefault();
    document.documentElement.style.setProperty('--navbarColor', 'rgb(27, 27, 27)');
    introSection1.classList.add('invisible');
    aboutInfoContainer.classList.remove('invisible');
    aboutDetailsDiv.classList.add('invisible');
    aboutMeSection1.classList.remove('invisible');
});

aboutPageNavbarHobbies.addEventListener('click', (e)=>{
    e.preventDefault();
});

aboutPageNavbarSkills.addEventListener('click', (e)=>{
    e.preventDefault();
});