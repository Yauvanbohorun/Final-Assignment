let animation = anime({
    targets: '.moto',
    // Properties 
    translateX: 120,
    borderRadius: 50,
    // Property Parameters
    duration: 3000,
    easing: 'linear',
    // Animation Parameters
    direction: 'alternate',
    loop: true,
});

const scroller = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    scrollFromAnywhere: true
});

$('#moreinfo-diet-plan').on('show.bs.modal', function(event) {

    scroller.stop();
});
$("#moreinfo-diet-plan").on('hidden.bs.modal', function(e) {
    scroller.start();
});

window.addEventListener("load", () => {

    scroller.update();
    setTimeout(function() {
        document.getElementById("my_audio").play();
    }, 5000);

});

function goToExercise() {
    const target = document.querySelector('#exercise');
    scroller.scrollTo(target);
}

const dots = document.getElementsByClassName("btn-dot");
const boxes = document.getElementsByClassName('boxes');
console.log("dots ", dots);
console.log("boxes ", boxes);

function isInViewportCompletely(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

function setInactive() {
    for (i = 0; i < dots.length; i++) {
        if (dots[i].classList.contains("active-btn")) {
            // console.log("hey");
            dots[i].classList.replace("active-btn", "disabled-btn");
        } else {
            dots[i].classList.add("disabled-btn");
        }
    }
}

function setActive(j) {
    dots[j].classList.replace("disabled-btn", "active-btn");
}

function updateDots(k) {
    setInactive();
    setActive(k);
}

function updateLongScrollingButtons() {
    for (j = 0; j < boxes.length; j++) {
        if (isInViewportCompletely(boxes[j])) {
            updateDots(j);
            break;
        }
    }
}

scroller.on('scroll', func => {
    updateLongScrollingButtons();
});