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
const underline = document.querySelector('#navUnderline')
const nav = document.querySelector('.mainNav')

nav.addEventListener('click', function(e) {
    if (e.target.nodeName == 'A') {
        underline.style.left = e.target.offsetLeft + 'px'
        underline.style.width = e.target.offsetWidth + 'px'
    }
})

// project button
const projectToggle = document.querySelectorAll('.projectCarouselToggle>p')
const projects = document.querySelectorAll('.projectCarouselCard:nth-child(n+5)')
const seeMore = document.querySelector('.seeMore')

projectToggle.forEach(function(element) {
    element.addEventListener('click', function(element) {
        element.target.classList.toggle('displayNone')
        element.target.nextElementSibling?.classList.toggle('displayNone')
        element.target.previousElementSibling?.classList.toggle('displayNone')
        element.target.parentElement.nextElementSibling.classList.toggle('displayFlex')
        // this add display block to the projects that were hidden
        projects.forEach(function(element) {
            element.classList.toggle('displayBlock')
        })
        // remove the "Swipe to see more"
        seeMore.classList.toggle('displayNone')
    })
})