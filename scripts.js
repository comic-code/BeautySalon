const nav = document.querySelector('header > nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', () => nav.classList.toggle('show'))
}

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', () => nav.classList.remove('show'))
}

const header = document.querySelector('.mainHeader')
const navHeight = header.offsetHeight
const backToTopButton = document.querySelector('.back-to-top')
const sections = document.querySelectorAll('main section[id]')

window.addEventListener('scroll', () => {
  const checkpoint = window.scrollY + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector(`nav ul li a[href*="${sectionId}"`)
        .classList.add('active')
    } else {
      document
        .querySelector(`nav ul li a[href*="${sectionId}"`)
        .classList.remove('active')
    }
  }

  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }

  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
})

// Carrousel
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  loop: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
  // reset: true
})

scrollReveal.reveal(
  `#home .text, #home .image,
  #about .image, #about, .text, 
  #services header, #services .card, 
  #testimonials header, #testimonials .testimonials,
  footer .brand, footer .social
  `,
  {
    interval: 100
  }
)
