const nav = document.querySelector('nav');
const burgerMenu = document.querySelector('.burger-menu button');
const sideDrawer = document.querySelector('.side-drawer');
const backDrop = document.querySelector('.backdrop');
const crossIcon = document.querySelector('.cross-icon');
const navLinks = document.querySelectorAll('.nav-link');

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

navLinks.forEach((navLink) => {
    navLink.addEventListener('click', (event) => {
        deActivate();
    })
})


// projects

const scrollUpButton = document.querySelector('.scroll-up-button');

window.onscroll = () => {
    let currentScrollPos = window.pageYOffset;
    (currentScrollPos > 20) ? 
        scrollUpButton.classList.add('onscroll-active') : scrollUpButton.classList.remove('onscroll-active')
}

scrollUpButton.addEventListener('click', () => {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
})

var anchor = document.querySelector('#wireframe');

        setTimeout(function () {
            anchor.scrollIntoView();
            window.scrollBy(0, -100);
        }, 3000);



















