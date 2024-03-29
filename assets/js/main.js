/* ===== SHOW MENU ===== */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu');

/* ===== REMOVE MENU MOBILE ===== */
const navLink = document.querySelectorAll ('.nav__link');

function linkAction () {
     const navMenu = document.getElementById ('nav-menu');
     navMenu.classList.remove ('show-menu');
}
navLink.forEach (n => n.addEventListener ('click', linkAction));

/* ===== SCROLL SECTIONS ACTIVE LINK ===== */
const sections = document.querySelectorAll('section [id]');

function scrollActive() {
    const scrollY = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive);

// CHANGE BACKGROUND HEADER
function scrollHeader() {
    const header = document.getElementById('header')
    if (this.scrollY >= 200) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

// SHOW SCROLL TOP
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top')
    this.scrollY >= 560 ? scrollTop.classList.add('show-scroll')
   : scrollTop.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollTop);


const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
    : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)
// MIXITUP FILTER FOR PORTFOLIO
// const mixer = mixitup('portfolio__container',{
//     selectors:{
//         target:'.portfolio__content'
//     },
//     animation:{
//         duration: 400
//     }
// });

const linkPortfolio = document.querySelectorAll('.portfolio__item');

function activePortfolio() {
    if (linkPortfolio) {
        linkPortfolio.forEach(l => l.classList.remove('active-portfolio'))
        this.classList.add('active-portfolio')
    }
}
linkPortfolio.forEach(l => l.addEventListener('click', activePortfolio));

// SORT ITEMS IN PORTFOLIO
const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableItems = document.querySelectorAll(".portfolio__container .portfolio__content");

const filterCards = e => {
    document.querySelector(".active-portfolio").classList.remove("active-portfolio");
    e.target.classList.add("active-portfolio");
   // console.log(e.target);

    filterableItems.forEach(portfolio__content => {
        portfolio__content.classList.add("hide");
        
        if(portfolio__content.dataset.filter === e.target.dataset.filter || e.target.dataset.filter === "all"){
            portfolio__content.classList.remove("hide");
        }
    });
}

filterButtons.forEach(button => button.addEventListener("click", filterCards))


