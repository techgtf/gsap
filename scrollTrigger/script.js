
gsap.registerPlugin(ScrollTrigger);
gsap.from("#page1 .box", {
    scale: 0,
    duration: 0.9,
    delay: 1,
    rotate: 360,
})

gsap.from("#page2 .box", {
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top top",
        // markers: true
    },
    scale: 0,
    duration: 0.9,
    delay: 1,
    rotate: 360,
})

gsap.from("#page3 .box", {
    scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        start: "top top",
        // markers: true,
    },
    scale: 0,
    duration: 0.9,
    delay: 1,
    rotate: 360,
});

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#page4",
        scroller: "body",
        start: "top 50%",
        markers: true
    },
    repeat: 1,
    repeatDelay: 1
});

tl.from("#page4 h1:nth-child(1)", {
    x: 500,
    opacity: 0,
    duration: 1
})
tl.from("#page4 h1:nth-child(2)", {
    x: -500,
    opacity: 0,
    duration: 1
})
tl.from("#page4 h1:nth-child(3)", {
    x: 500,
    opacity: 0,
    duration: 1
});


gsap.from("#page5 .box", {
    scale: 0,
    opacity: 0,
    rotate: 720,
    duration: 1,
    scrollTrigger: {
        trigger: "#page5 .box",
        scroller: "body",
        markers: true,
        start: "top 70%",
        scrub: 2
    }
})


gsap.to("#page6 h1", {
    transform: "translateX(-150%)",
    scrollTrigger: {
        pin: true,
        trigger: "#page6",
        scroller: "body",
        scrub: 3,
        markers: true,
        start: "top 0%",
        end: "top -100%"
    }
})