let animation = anime({
    targets: '.moto',
    // Properties 
    translateX: 100,
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
// $('#exampleModalCenter').on('show.bs.modal', function (event) {
//     // scroller.stop();
//     // scroller.update();
// });
// $("#exampleModalCenter").on('hidden.bs.modal', function (e) {
//     // put your default event here
//     scroller.start();
//     // console.log("modal openpp");
// });

window.addEventListener("load", () => {
    scroller.update();
});

function goToExercise() {
    const target = document.querySelector('#exercise');
    scroller.scrollTo(target);
}


const dots = document.getElementsByClassName("btn-dot");
const boxes = document.getElementsByClassName('boxes');
// console.log("dots ", dots);
// console.log("boxes ", boxes);

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= rect.height / 2 &&
        rect.bottom >= rect.height / 2 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
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
    // console.log("j", j);
    dots[j].classList.replace("disabled-btn", "active-btn");
}

function updateDots() {
    for (j = 0; j < boxes.length; j++) {
        if (isInViewport(boxes[j])) {
            console.log("boxes[j]", boxes[j]);

            setInactive();
            setActive(j);
            break;
        }
    }
}

scroller.on('scroll', func => {
    updateDots();
});
