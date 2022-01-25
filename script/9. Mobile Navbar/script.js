// Mobile Toggle Menu
let hamburgerIcon = document.querySelectorAll(".navbar .navbar-burger");
let mobileDropdownMenu = document.querySelectorAll(".mobile-dropdown-div");

function mobileToggleDiv(element, id) {
    element.addEventListener("click", () => {
        element.classList.toggle("is-active");
        id.classList.toggle("is-active");
  });
}

mobileToggleDiv(hamburgerIcon[0], mobileDropdownMenu[0]);
mobileToggleDiv(hamburgerIcon[1], mobileDropdownMenu[1]);
mobileToggleDiv(hamburgerIcon[2], mobileDropdownMenu[2]);
mobileToggleDiv(hamburgerIcon[3], mobileDropdownMenu[3]);



// For Home Page Navbar
let mobileHomePageNavbarSection = introSection1.querySelector(
  ".mobile-dropdown-div"
);
let mobileHomePageNavbarHome =
  mobileHomePageNavbarSection.querySelector(".navbar-home");
let mobileHomePageNavbarAbout =
  mobileHomePageNavbarSection.querySelector(".navbar-about");
let mobileHomePageNavbarHobbies =
  mobileHomePageNavbarSection.querySelector(".navbar-hobbies");
let mobileHomePageNavbarSkills =
  mobileHomePageNavbarSection.querySelector(".navbar-skills");

mobileHomePageNavbarHome.addEventListener("click", (e) => {
  e.preventDefault();
  homePageArrive();
});

mobileHomePageNavbarAbout.addEventListener("click", (e) => {
  e.preventDefault();
  aboutPageArrive();
});

mobileHomePageNavbarHobbies.addEventListener("click", (e) => {
  e.preventDefault();
  hobbiesPageArrive();
});

mobileHomePageNavbarSkills.addEventListener("click", (e) => {
  e.preventDefault();
  skillsPageArrive();
});

// For About Page Navbar
let mobileAboutPageNavbarSection = aboutMeSection1.querySelector(
  ".mobile-dropdown-div"
);
let mobileAboutPageNavbarHome =
  mobileAboutPageNavbarSection.querySelector(".navbar-home");
let mobileAboutPageNavbarAbout =
  mobileAboutPageNavbarSection.querySelector(".navbar-about");
let mobileAboutPageNavbarHobbies =
  mobileAboutPageNavbarSection.querySelector(".navbar-hobbies");
let mobileAboutPageNavbarSkills =
  mobileAboutPageNavbarSection.querySelector(".navbar-skills");

mobileAboutPageNavbarHome.addEventListener("click", (e) => {
  e.preventDefault();
  homePageArrive();
});

mobileAboutPageNavbarAbout.addEventListener("click", (e) => {
  e.preventDefault();
  aboutPageArrive();
});

mobileAboutPageNavbarHobbies.addEventListener("click", (e) => {
  e.preventDefault();
  hobbiesPageArrive();
});

mobileAboutPageNavbarSkills.addEventListener("click", (e) => {
  e.preventDefault();
  skillsPageArrive();
});

// For Skills Page Navbar
let mobileSkillsPageNavbarSection = skillsSection1.querySelector(
  ".mobile-dropdown-div"
);
let mobileSkillsPageNavbarHome =
  mobileSkillsPageNavbarSection.querySelector(".navbar-home");
let mobileSkillsPageNavbarAbout =
  mobileSkillsPageNavbarSection.querySelector(".navbar-about");
let mobileSkillsPageNavbarHobbies =
  mobileSkillsPageNavbarSection.querySelector(".navbar-hobbies");
let mobileSkillsPageNavbarSkills =
  mobileSkillsPageNavbarSection.querySelector(".navbar-skills");

mobileSkillsPageNavbarHome.addEventListener("click", (e) => {
  e.preventDefault();
  homePageArrive();
});

mobileSkillsPageNavbarAbout.addEventListener("click", (e) => {
  e.preventDefault();
  aboutPageArrive();
});

mobileSkillsPageNavbarHobbies.addEventListener("click", (e) => {
  e.preventDefault();
  hobbiesPageArrive();
});

mobileSkillsPageNavbarSkills.addEventListener("click", (e) => {
  e.preventDefault();
  skillsPageArrive();
});

// For Hobbies Page Navbar
let mobileHobbiesPageNavbarSection = hobbiesSection1.querySelector(
  ".mobile-dropdown-div"
);
let mobileHobbiesPageNavbarHome =
  mobileHobbiesPageNavbarSection.querySelector(".navbar-home");
let mobileHobbiesPageNavbarAbout =
  mobileHobbiesPageNavbarSection.querySelector(".navbar-about");
let mobileHobbiesPageNavbarHobbies =
  mobileHobbiesPageNavbarSection.querySelector(".navbar-hobbies");
let mobileHobbiesPageNavbarSkills =
  mobileHobbiesPageNavbarSection.querySelector(".navbar-skills");

mobileHobbiesPageNavbarHome.addEventListener("click", (e) => {
  e.preventDefault();
  homePageArrive();
});

mobileHobbiesPageNavbarAbout.addEventListener("click", (e) => {
  e.preventDefault();
  aboutPageArrive();
});

mobileHobbiesPageNavbarHobbies.addEventListener("click", (e) => {
  e.preventDefault();
  hobbiesPageArrive();
});

mobileHobbiesPageNavbarSkills.addEventListener("click", (e) => {
  e.preventDefault();
  skillsPageArrive();
});
