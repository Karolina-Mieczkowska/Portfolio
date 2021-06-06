const nav = document.querySelector('nav');
const burgerMenu = document.querySelector('.burger-menu button');
const sideDrawer = document.querySelector('.side-drawer');
const backDrop = document.querySelector('.backdrop');
const crossIcon = document.querySelector('.cross-icon');
const navLinks = document.querySelectorAll('.side-drawer li');
const projectsActiveLink = document.querySelector('.active-projects-link')

const activate = () => {
    sideDrawer.classList.add('active');
    backDrop.classList.add('active');
}

const deActivate = () => {
    sideDrawer.classList.remove('active');
    backDrop.classList.remove('active');
}

burgerMenu.addEventListener('click', (event) => {
    activate();
})

backDrop.addEventListener('click', (event) => {
    deActivate();
})

crossIcon.addEventListener('click', (event) => {
    deActivate();
})

window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 100);
});







