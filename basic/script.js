// gsap.to("#box", {
//     x: 400,
//     duration: 2, // element will animate to the 2 sec
//     delay: 1, // element will start animating after 1 sec 
//     borderRadius: 30
// })


// ****************** //

// gsap.from("#box1", {
//     x: 400,
//     duration: 2,
//     delay: 1,
// })


// ****************** //

// gsap.from('h1', {
//     opacity: 0,
//     duration: 2,
//     delay: 1,
//     y: 30,
//     stagger: 0.3
// })


// ****************** //

gsap.from('#box2', {
    x: 1300,
    duration: 2,
    delay: 1,
    repeat: -1, // it will animate element again and again if value is -1 else we can set manually like 1,2,3 -- n
    rotate: 360,
    yoyo:true // it will animate final to initial or initial to final 
})