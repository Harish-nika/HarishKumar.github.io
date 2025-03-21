/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')


/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className
    
    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)
        
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')
        
        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
})

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper('.testimonial__container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        568: {
            slidesPerView: 2,
        },
    }
})


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

document.addEventListener("DOMContentLoaded", () => {
    const githubStarsElements = document.querySelectorAll(".github-stars");

    githubStarsElements.forEach(element => {
        const repo = element.getAttribute("data-repo");
        const starsCountElement = element.querySelector(".stars-count");

        if (repo) {
            fetch(`https://api.github.com/repos/${repo}`)
                .then(response => response.json())
                .then(data => {
                    const starCount = data.stargazers_count || 0;
                    starsCountElement.textContent = starCount;
                })
                .catch(error => {
                    console.error(`Error fetching stars for ${repo}:`, error);
                    starsCountElement.textContent = "N/A";
                });
        } else {
            starsCountElement.textContent = "N/A";
        }
    });
});


/*==================== Typewriter function ====================*/ 

/*==================== Typewriter Function ====================*/ 

// Typewriter Animation
const roles = [ 
    '🔎 Gen AI Developer 📑',
    '💻 Machine Learning Engineer🦾',
    '🤖 AI Engineer 🧠'
];

let roleIndex = 0, charIndex = 0, isDeleting = false;
const typingSpeed = 100, erasingSpeed = 50, delayBetweenRoles = 1500;

function typeText() {
    const typingText = document.getElementById("typing-text");
    if (!typingText) return;

    if (!isDeleting && charIndex <= roles[roleIndex].length) {
        typingText.innerHTML = roles[roleIndex].substring(0, charIndex++);
        setTimeout(typeText, typingSpeed);
    } else if (isDeleting && charIndex >= 0) {
        typingText.innerHTML = roles[roleIndex].substring(0, charIndex--);
        setTimeout(typeText, erasingSpeed);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeText, delayBetweenRoles);
    }
}

setTimeout(typeText, 700);




/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header');
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    let scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*==================== DARK LIGHT THEME ====================*/ 
// const themeButton = document.getElementById('theme-button')
// const darkTheme = 'dark-theme'
// const iconTheme = 'uil-sun'

// // Previously selected topic (if user selected)
// const selectedTheme = localStorage.getItem('selected-theme')
// const selectedIcon = localStorage.getItem('selected-icon')

// // We obtain the current theme that the interface has by validating the dark-theme class
// const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
// const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// // We validate if the user previously chose a topic
// if (selectedTheme) {
//   // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
// document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
// themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
// }

// // Activate / deactivate the theme manually with the button
// themeButton.addEventListener('click', () => {
//     // Add or remove the dark / icon theme
//     document.body.classList.toggle(darkTheme)
//     themeButton.classList.toggle(iconTheme)
//     // We save the theme and the current icon that the user chose
//     localStorage.setItem('selected-theme', getCurrentTheme())
//     localStorage.setItem('selected-icon', getCurrentIcon())


// document.addEventListener("click", function () {
//         if (document.documentElement.requestFullscreen) {
//             document.documentElement.requestFullscreen();
//         } else if (document.documentElement.webkitRequestFullscreen) {
//             document.documentElement.webkitRequestFullscreen();
//         } else if (document.documentElement.msRequestFullscreen) {
//             document.documentElement.msRequestFullscreen();
//         }
//       }, { once: true }); // Ensures it runs only once
/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

// Retrieve saved theme settings
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Function to get the current theme and icon state
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

// Apply saved theme on page load
if (selectedTheme) {
    document.body.classList.toggle(darkTheme, selectedTheme === 'dark');
    themeButton.classList.toggle(iconTheme, selectedIcon === 'uil-moon');
}

// Toggle theme on button click
themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    // Save theme and icon state
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});  // ✅ Correctly closed

// Go fullscreen on first click anywhere on the screen
document.addEventListener("click", function () {
    if (!document.fullscreenElement) {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.webkitRequestFullscreen) { // Safari
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) { // IE11
            document.documentElement.msRequestFullscreen();
        }
    }
}, { once: true }); // ✅ Ensures it runs only once


/*==================== project seperator ====================*/ 

document.addEventListener("DOMContentLoaded", function() {
    console.log("Projects Section Loaded!");

    // Add interactive effects (if needed in future)
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseover', function() {
            this.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.15)";
        });

        card.addEventListener('mouseout', function() {
            this.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
        });
    });
});
