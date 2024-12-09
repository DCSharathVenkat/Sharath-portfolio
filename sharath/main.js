/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        const sectionId = current.getAttribute('id')

        // Use template literals to safely handle section IDs
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav__menu a[href*="${sectionId}"]`).classList.add('active')
        } else {
            document.querySelector(`.nav__menu a[href*="${sectionId}"]`).classList.remove('active')
        }
    })
}

// Debounce function to improve scroll performance
let debounceTimer
window.addEventListener('scroll', function() {
    clearTimeout(debounceTimer)
    debounceTimer = setTimeout(scrollActive, 100) // Adjust debounce delay as needed
})

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: false  // Disable reset globally
})


// ScrollReveal for specific elements
sr.reveal('.home__title', { reset: true })
sr.reveal('.home__scroll', { delay: 200, reset: true })
sr.reveal('.home__img', { origin: 'right', delay: 400, reset: true })

/*SCROLL ABOUT*/
sr.reveal('.about__img', { delay: 500, reset: false })
sr.reveal('.about__subtitle', { delay: 300, reset: false })
sr.reveal('.about__profession', { delay: 400, reset: false })
sr.reveal('.about__text', { delay: 500, reset: false })
sr.reveal('.about__social-icon', { delay: 600, interval: 200, reset: false })

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', { reset: false })
sr.reveal('.skills__name', { distance: '20px', delay: 50, interval: 100, reset: false })
sr.reveal('.skills__img', { delay: 400, reset: false })

/*SCROLL PROJECT*/
sr.reveal('.project', { interval: 200, reset: false })

/*SCROLL EXP*/
sr.reveal('.exp', { interval: 200, reset: false })

/*SCROLL CONTACT*/
sr.reveal('.contact__subtitle', { reset: false })
sr.reveal('.contact__text', { interval: 200, reset: false })
sr.reveal('.contact__input', { delay: 400, reset: false })
sr.reveal('.contact__button', { delay: 600, reset: false })
