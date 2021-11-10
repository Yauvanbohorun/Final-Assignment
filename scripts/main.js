//use of anime.js to animate a moto class
let animation = anime({
    targets: '.moto',
    translateX: 120,
    borderRadius: 50,
    duration: 3000,
    easing: 'linear',
    direction: 'alternate',
    loop: true,
});

//make use of locomotiveScroll for smooth scroll + animate the sub-titles
const scroller = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    scrollFromAnywhere: true
});

//add an event on scroll with the locomotiveScroll to update the long scroll buttons
scroller.on('scroll', () => {
    updateLongScrollingButtons();
});

//event listener which executes on page load an update the scroller + set a delay for autoplay
//to start after page loads
//Note: the user has to interact with the page (click on it atleast within fist 5 s on page load)
window.addEventListener("load", () => {
    scroller.update();
    setTimeout(function() {
        document.getElementById("my_audio").play();
    }, 5000);
});

//prevent page from scrolling after modal appear
$('#moreinfo-diet-plan').on('show.bs.modal', function() {
    scroller.stop();
});

//enable page to scroll after modal disappear
$("#moreinfo-diet-plan").on('hidden.bs.modal', function() {
    scroller.start();
});

function goToExercise() {
    const target = document.querySelector('#exercise');
    scroller.scrollTo(target);
}

const dots = document.getElementsByClassName("btn-dot");
const boxes = document.getElementsByClassName('boxes');

//check whether a element in DOM is etirely in the page viewport
function isInViewportCompletely(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

//set long scroll buttons to inactive
function setInactive() {
    var i = 0;
    for (; i < dots.length; i++) {
        if (dots[i].classList.contains("active-btn")) {
            dots[i].classList.replace("active-btn", "disabled-btn");
        } else {
            dots[i].classList.add("disabled-btn");
        }
    }
}

//set the current dot representing page position with respect to page subtitle
function setActive(currentBoxIndex) {
    dots[currentBoxIndex].classList.replace("disabled-btn", "active-btn");
}

function updateDots(currentBox) {
    setInactive();
    setActive(currentBox);
}

//update the long scroll buttons after checking the DOM element position in the viewport
function updateLongScrollingButtons() {
    var boxIndex = 0;
    for (; boxIndex < boxes.length; boxIndex++) {
        if (isInViewportCompletely(boxes[boxIndex])) {
            updateDots(boxIndex);
            break;
        }
    }
}

//set a gsap animation on the nav bar container so that it bounces and has a slow appearance
gsap.from(
    '#nav-bar-container', {
        duration: 1.5,
        y: '-100%',
        ease: 'bounce',
        delay: 1
    }
);

//set gsap animation for woman in home page to appear slowly
gsap.from(
    '.column2', {
        duration: 2.2,
        opacity: 0,
        delay: 1
    }
);

//set gsap animation for woman in home page to appear slowly
gsap.from(
    '#screenFiller', {
        duration: 1.6,
        opacity: 0,
        delay: 1
    }
);