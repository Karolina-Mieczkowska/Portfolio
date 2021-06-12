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


navLinks.forEach((navLink) => {
    navLink.addEventListener('click', (event) => {
        let destination;
        if(navLink.classList.contains('about')) {
            destination = document.querySelector('#about');
        } else if (navLink.classList.contains('projects')) {
            destination = document.querySelector('#projects');
        } else if (navLink.classList.contains('faq-page')) {
            destination = document.querySelector('#faq-page');
        } else if (navLink.classList.contains('online-shop')) {
            destination = document.querySelector('#online-shop');
        } else if (navLink.classList.contains('wireframe')) {
            destination = document.querySelector('#wireframe');
        } 
        ScrollIntoAbove(destination)
    })
})

const ScrollIntoAbove = (el) => {
    setTimeout(() => {
        el.scrollIntoView();
        window.scrollBy(0, -100)
    }, 1);
};

















