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
window.addEventListener("load", () => {

    scroller.update();
});

function goToExercise() {
    const target = document.querySelector('#exercise');
    scroller.scrollTo(target);
    // scroller.stop();

}
// scroller.on("scroll", ScrollTrigger.update());