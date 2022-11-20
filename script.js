// scroll transitions
const scroll = window.requestAnimationFrame || function(callback) { window.setTimeout(callback, 1000/60)}

const elementsToShow = document.querySelectorAll('.changeOnScroll')

function loop() {
    elementsToShow.forEach(function (element) {
        isElementInViewport(element) ?
            element.classList.add('isVisible') :
            element.classList.remove('isVisible');
    })
    scroll(loop)
}

loop()

function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// nav underline
const underline = document.querySelector('#underline')
const nav = document.querySelector('.navBar nav')

nav.addEventListener('click', function(e) {
    if (e.target.nodeName == 'A') {
        underline.style.left = e.target.offsetLeft + 'px'
        underline.style.width = e.target.offsetWidth + 'px'
    }
})

// project button
const projectToggle = document.querySelectorAll('.projectCarouselToggle>p')
console.log(projectToggle);
projectToggle.forEach(function(element) {
    console.log('for each', element);
    element.addEventListener('click', function(element) {
        console.log(element)
        element.target.classList.toggle('displayNone')
        element.target.nextElementSibling?.classList.toggle('displayNone')
        element.target.previousElementSibling?.classList.toggle('displayNone')
        element.target.parentElement.nextElementSibling.classList.toggle('displayFlex')

        const projects = document.querySelectorAll('.projectCarouselCard:nth-child(n+5)')

        console.log(projects);
        projects.forEach(function(element) {
            console.log(element);
            element.classList.toggle('displayBlock')
        })
    })
})