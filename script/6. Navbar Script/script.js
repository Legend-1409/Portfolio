let introSection1 = document.querySelector('#intro-section');
let aboutMeSection1 = document.querySelector('#about-me-section');
let skillsSection1 = document.querySelector('#skills-section');
let hobbiesSection1 = document.querySelector('#hobbies-section');

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
    document.documentElement.style.setProperty('--navbarColor', 'white');
    introSection1.classList.add('invisible');
    skillsSection1.classList.add('invisible');
    aboutMeSection1.classList.add('invisible');
    hobbiesInfoContainer.classList.remove('invisible');
    hobbiesDetailsDiv.classList.add('invisible');
    hobbiesSection1.classList.remove('invisible');
});

homePageNavbarSkills.addEventListener('click', (e)=>{
    e.preventDefault();
    document.documentElement.style.setProperty('--navbarColor', 'white');
    introSection1.classList.add('invisible');
    aboutMeSection1.classList.add('invisible');
    skillInfoContainer.classList.remove('invisible');
    skillDetailsDiv.classList.add('invisible');
    skillsSection1.classList.remove('invisible');
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
    aboutMeSection1.classList.add('invisible');
    skillsSection1.classList.add('invisible');
    hobbiesSection1.classList.add('invisible');
    introSection1.classList.remove('invisible');
});

aboutPageNavbarAbout.addEventListener('click', (e)=>{
    e.preventDefault();
    document.documentElement.style.setProperty('--navbarColor', 'rgb(27, 27, 27)');
    introSection1.classList.add('invisible');
    skillsSection1.classList.add('invisible');
    hobbiesSection1.classList.add('invisible');
    aboutInfoContainer.classList.remove('invisible');
    aboutDetailsDiv.classList.add('invisible');
    aboutMeSection1.classList.remove('invisible');
});

aboutPageNavbarHobbies.addEventListener('click', (e)=>{
    e.preventDefault();
    document.documentElement.style.setProperty('--navbarColor', 'white');
    introSection1.classList.add('invisible');
    skillsSection1.classList.add('invisible');
    aboutMeSection1.classList.add('invisible');
    hobbiesInfoContainer.classList.remove('invisible');
    hobbiesDetailsDiv.classList.add('invisible');
    hobbiesSection1.classList.remove('invisible');
});

aboutPageNavbarSkills.addEventListener('click', (e)=>{
    e.preventDefault();
    document.documentElement.style.setProperty('--navbarColor', 'white');
    introSection1.classList.add('invisible');
    aboutMeSection1.classList.add('invisible');
    hobbiesSection1.classList.add('invisible');
    skillInfoContainer.classList.remove('invisible');
    skillDetailsDiv.classList.add('invisible');
    skillsSection1.classList.remove('invisible');
});

// For Skills Page Navbar
let skillPageNavbarSection = skillsSection1.querySelector('.navbar');
let skillPageNavbarHome = skillPageNavbarSection.querySelector('.navbar-home');
let skillPageNavbarAbout = skillPageNavbarSection.querySelector('.navbar-about');
let skillPageNavbarHobbies = skillPageNavbarSection.querySelector('.navbar-hobbies');
let skillPageNavbarSkills = skillPageNavbarSection.querySelector('.navbar-skills');

skillPageNavbarHome.addEventListener('click', (e)=> {
    e.preventDefault();
    document.documentElement.style.setProperty('--navbarColor', 'white');
    aboutMeSection1.classList.add('invisible');
    skillsSection1.classList.add('invisible');
    hobbiesSection1.classList.add('invisible');
    introSection1.classList.remove('invisible');
});

skillPageNavbarAbout.addEventListener('click', (e)=>{
    e.preventDefault();
    document.documentElement.style.setProperty('--navbarColor', 'rgb(27, 27, 27)');
    introSection1.classList.add('invisible');
    skillsSection1.classList.add('invisible');
    hobbiesSection1.classList.add('invisible');
    aboutInfoContainer.classList.remove('invisible');
    aboutDetailsDiv.classList.add('invisible');
    aboutMeSection1.classList.remove('invisible');
});

skillPageNavbarHobbies.addEventListener('click', (e)=>{
    e.preventDefault();
    document.documentElement.style.setProperty('--navbarColor', 'white');
    introSection1.classList.add('invisible');
    skillsSection1.classList.add('invisible');
    aboutMeSection1.classList.add('invisible');
    hobbiesInfoContainer.classList.remove('invisible');
    hobbiesDetailsDiv.classList.add('invisible');
    hobbiesSection1.classList.remove('invisible');
    
});

skillPageNavbarSkills.addEventListener('click', (e)=>{
    e.preventDefault();
    document.documentElement.style.setProperty('--navbarColor', 'white');
    introSection1.classList.add('invisible');
    aboutMeSection1.classList.add('invisible');
    hobbiesSection1.classList.add('invisible');
    skillInfoContainer.classList.remove('invisible');
    skillDetailsDiv.classList.add('invisible');
    skillsSection1.classList.remove('invisible');
});

// For Hobbies Page Navbar
let hobbiesPageNavbarSection = hobbiesSection1.querySelector('.navbar');
let hobbiesPageNavbarHome = hobbiesPageNavbarSection.querySelector('.navbar-home');
let hobbiesPageNavbarAbout = hobbiesPageNavbarSection.querySelector('.navbar-about');
let hobbiesPageNavbarHobbies = hobbiesPageNavbarSection.querySelector('.navbar-hobbies');
let hobbiesPageNavbarSkills = hobbiesPageNavbarSection.querySelector('.navbar-skills');

hobbiesPageNavbarHome.addEventListener('click', (e)=> {
    e.preventDefault();
    document.documentElement.style.setProperty('--navbarColor', 'white');
    introSection1.classList.remove('invisible');
    aboutMeSection1.classList.add('invisible');
    skillsSection1.classList.add('invisible');
    hobbiesSection1.classList.add('invisible');
});

hobbiesPageNavbarAbout.addEventListener('click', (e)=>{
    e.preventDefault();
    document.documentElement.style.setProperty('--navbarColor', 'rgb(27, 27, 27)');
    introSection1.classList.add('invisible');
    skillsSection1.classList.add('invisible');
    hobbiesSection1.classList.add('invisible');
    aboutInfoContainer.classList.remove('invisible');
    aboutDetailsDiv.classList.add('invisible');
    aboutMeSection1.classList.remove('invisible');
});

hobbiesPageNavbarHobbies.addEventListener('click', (e)=>{
    e.preventDefault();
    document.documentElement.style.setProperty('--navbarColor', 'white');
    introSection1.classList.add('invisible');
    skillsSection1.classList.add('invisible');
    aboutMeSection1.classList.add('invisible');
    hobbiesInfoContainer.classList.remove('invisible');
    hobbiesDetailsDiv.classList.add('invisible');
    hobbiesSection1.classList.remove('invisible');
});

hobbiesPageNavbarSkills.addEventListener('click', (e)=>{
    e.preventDefault();
    document.documentElement.style.setProperty('--navbarColor', 'white');
    introSection1.classList.add('invisible');
    aboutMeSection1.classList.add('invisible');
    hobbiesSection1.classList.add('invisible');
    skillInfoContainer.classList.remove('invisible');
    skillDetailsDiv.classList.add('invisible');
    skillsSection1.classList.remove('invisible');
});