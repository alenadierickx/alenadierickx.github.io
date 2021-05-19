window.addEventListener('scroll', function () {

    const header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 0)

    let skills = document.querySelectorAll('.skill div')

    const divForTraining = document.querySelector('.testimonial')
    const left = document.querySelector('.testimonialBx.left')
    const right = document.querySelector('.testimonialBx.right')
    const coordinatesForTraining = divForTraining.getBoundingClientRect()

    const divForServices = document.querySelector('.servicesBx')
    const coordinatesForServices = divForServices.getBoundingClientRect()

    if (coordinatesForServices.y < 600 && coordinatesForServices.y > -700) {
        skills.forEach(elem => {
            elem.classList.add('active')
        })
    } else {
        skills.forEach(elem => {
            elem.classList.remove('active')
        })
    }

    if (coordinatesForTraining.y < 600 && coordinatesForTraining.y > -700) {
        left.classList.add('active')
        right.classList.add('active')
    } else {
        left.classList.remove('active')
        right.classList.remove('active')
    }

});

function toggleMenu(){
    const menuToggle = document.querySelector('.toggle');
    const menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}