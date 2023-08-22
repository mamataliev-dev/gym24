// Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper = new Swiper(".staffSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".priceSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    }
});


// Menu Burger Btn
const btn = document.querySelector('.menu-btn')
const blackout = document.querySelector('.blackout')
const mobileLink = document.querySelectorAll('.mobile-nav-link')
const mobileNav = document.querySelector('.mobile-nav')
const line1 = document.querySelector('.line-1')
const line2 = document.querySelector('.line-2')
const line3 = document.querySelector('.line-3')
const lines = document.querySelectorAll('.menu-btn-line')


btn.addEventListener('click', () => {
    blackout.classList.add('active')
    mobileNav.classList.add('active')
    document.body.classList.add('active')

    line1.classList.add('active')
    line2.classList.add('active')
    line3.classList.add('active')
})

mobileLink.forEach(element => {
    element.addEventListener('click', () => {
        blackout.classList.remove('active')
        document.body.classList.remove('active')
        mobileNav.classList.remove('active')

        line1.classList.remove('active')
        line2.classList.remove('active')
        line3.classList.remove('active')
    })
});

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('blackout')) {
        blackout.classList.remove('active')
        document.body.classList.remove('active')
        mobileNav.classList.remove('active')

        line1.classList.remove('active')
        line2.classList.remove('active')
        line3.classList.remove('active')
    } else {
        console.log();
    }
})

// AOS
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

const aosAnimation = document.querySelectorAll('.aos');
observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('aos-animate');
        } else {
            entry.target.classList.remove('aos-animate');
        }
    });
});

aosAnimation.forEach(aosObject => {
    observer.observe(aosObject);
});