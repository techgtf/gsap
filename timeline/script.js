// gsap.to('#box1', {
//     x: 1200,
//     rotate: 360,
//     duration: 1.5,
//     delay: 1
// })
// gsap.to('#box2', {
//     x: 1200,
//     rotate: 360,
//     duration: 1.5,
//     delay: 1.5
// })
// gsap.to('#box3', {
//     x: 1200,
//     rotate: 360,
//     duration: 1.5,
//     delay: 3.5
// })


// boxes timeline
let tl = gsap.timeline({ repeat: 2, repeatDelay: 1 });
tl.to('#box1', {
    x: 1200,
    rotate: 360,
    duration: 1.5,
})
tl.to('#box2', {
    x: 1200,
    rotate: 360,
    duration: 1.5,
})
tl.to('#box3', {
    x: 1200,
    rotate: 360,
    duration: 1.5,
})


let tl1 = gsap.timeline();
tl1.from("#logo", {
    y: -20,
    opacity: 0,
    // delay: 0.5,
    duration: 0.3
})
tl1.from(".items", {
    y: -20,
    opacity: 0,
    duration: 1,
    stagger: 0.3
})
tl1.from("#loaded", {
    y: 30,
    opacity: 0,
    scale: 0.7
})