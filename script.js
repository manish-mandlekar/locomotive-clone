const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

gsap.from("nav h1",{
    y:-100,
    opacity:0,
    delay:.3,
})
gsap.from("#page1 h1",{
    y:100,
    opacity:0,
    duration:1,
    transform:"rotateX(-120deg)"
})
gsap.from(".box h1",{
    y:100,
    stagger:0.5,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start:"top 80%",
        end:"top 90%",
        scrub:3,
    }
})
