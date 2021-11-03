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

window.addEventListener("load", () => {

    const scroller = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
    });
});