let introSection1 = document.querySelector('#intro-section');
let aboutMeSection1 = document.querySelector('#about-me-section');
let skillsSection1 = document.querySelector('#skills-section');
let hobbiesSection1 = document.querySelector('#hobbies-section');

function homePageArrive() {
    document.documentElement.style.setProperty('--navbarColor', 'white');
    aboutMeSection1.classList.add('invisible');
    skillsSection1.classList.add('invisible');
    hobbiesSection1.classList.add('invisible');
    introSection1.classList.remove('invisible');
}

function aboutPageArrive() {
    document.documentElement.style.setProperty('--navbarColor', 'rgb(27, 27, 27)');
    introSection1.classList.add('invisible');
    skillsSection1.classList.add('invisible');
    hobbiesSection1.classList.add('invisible');
    aboutInfoContainer.classList.remove('invisible');
    aboutDetailsDiv.classList.add('invisible');
    aboutMeSection1.classList.remove('invisible');
}

function hobbiesPageArrive() {
    document.documentElement.style.setProperty('--navbarColor', 'white');
    introSection1.classList.add('invisible');
    skillsSection1.classList.add('invisible');
    aboutMeSection1.classList.add('invisible');
    hobbiesInfoContainer.classList.remove('invisible');
    hobbiesDetailsDiv.classList.add('invisible');
    hobbiesSection1.classList.remove('invisible');
}

function skillsPageArrive() {
    document.documentElement.style.setProperty('--navbarColor', 'white');
    introSection1.classList.add('invisible');
    aboutMeSection1.classList.add('invisible');
    hobbiesSection1.classList.add('invisible');
    skillInfoContainer.classList.remove('invisible');
    skillDetailsDiv.classList.add('invisible');
    skillsSection1.classList.remove('invisible');
}

// For Home Page Navbar
let homePageNavbarSection = introSection1.querySelector('.navbar');
let homePageNavbarHome = homePageNavbarSection.querySelector('.navbar-home');
let homePageNavbarAbout = homePageNavbarSection.querySelector('.navbar-about');
let homePageNavbarHobbies = homePageNavbarSection.querySelector('.navbar-hobbies');
let homePageNavbarSkills = homePageNavbarSection.querySelector('.navbar-skills');

homePageNavbarHome.addEventListener('click', (e)=> {
    e.preventDefault();
    homePageArrive();
});

homePageNavbarAbout.addEventListener('click', (e)=>{
    e.preventDefault();
    aboutPageArrive();
});

homePageNavbarHobbies.addEventListener('click', (e)=>{
    e.preventDefault();
    hobbiesPageArrive()
});

homePageNavbarSkills.addEventListener('click', (e)=>{
    e.preventDefault();
    skillsPageArrive();
});


// For About Page Navbar
let aboutPageNavbarSection = aboutMeSection1.querySelector('.navbar');
let aboutPageNavbarHome = aboutPageNavbarSection.querySelector('.navbar-home');
let aboutPageNavbarAbout = aboutPageNavbarSection.querySelector('.navbar-about');
let aboutPageNavbarHobbies = aboutPageNavbarSection.querySelector('.navbar-hobbies');
let aboutPageNavbarSkills = aboutPageNavbarSection.querySelector('.navbar-skills');

aboutPageNavbarHome.addEventListener('click', (e)=> {
    e.preventDefault();
    homePageArrive()
});

aboutPageNavbarAbout.addEventListener('click', (e)=>{
    e.preventDefault();
    aboutPageArrive()
}); 

aboutPageNavbarHobbies.addEventListener('click', (e)=>{
    e.preventDefault();
    hobbiesPageArrive()
});

aboutPageNavbarSkills.addEventListener('click', (e)=>{
    e.preventDefault();
    skillsPageArrive();
});

// For Skills Page Navbar
let skillPageNavbarSection = skillsSection1.querySelector('.navbar');
let skillPageNavbarHome = skillPageNavbarSection.querySelector('.navbar-home');
let skillPageNavbarAbout = skillPageNavbarSection.querySelector('.navbar-about');
let skillPageNavbarHobbies = skillPageNavbarSection.querySelector('.navbar-hobbies');
let skillPageNavbarSkills = skillPageNavbarSection.querySelector('.navbar-skills');

skillPageNavbarHome.addEventListener('click', (e)=> {
    e.preventDefault();
   homePageArrive(); 
});

skillPageNavbarAbout.addEventListener('click', (e)=>{
    e.preventDefault();
    aboutPageArrive();
});

skillPageNavbarHobbies.addEventListener('click', (e)=>{
    e.preventDefault();
    hobbiesPageArrive();
});

skillPageNavbarSkills.addEventListener('click', (e)=>{
    e.preventDefault();
    skillsPageArrive();
});

// For Hobbies Page Navbar
let hobbiesPageNavbarSection = hobbiesSection1.querySelector('.navbar');
let hobbiesPageNavbarHome = hobbiesPageNavbarSection.querySelector('.navbar-home');
let hobbiesPageNavbarAbout = hobbiesPageNavbarSection.querySelector('.navbar-about');
let hobbiesPageNavbarHobbies = hobbiesPageNavbarSection.querySelector('.navbar-hobbies');
let hobbiesPageNavbarSkills = hobbiesPageNavbarSection.querySelector('.navbar-skills');

hobbiesPageNavbarHome.addEventListener('click', (e)=> {
    e.preventDefault();
    homePageArrive();
});

hobbiesPageNavbarAbout.addEventListener('click', (e)=>{
    e.preventDefault();
    aboutPageArrive(); 
});

hobbiesPageNavbarHobbies.addEventListener('click', (e)=>{
    e.preventDefault();
    hobbiesPageArrive();
});

hobbiesPageNavbarSkills.addEventListener('click', (e)=>{
    e.preventDefault();
    skillsPageArrive();
});