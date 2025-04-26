gsap.registerPlugin(ScrollTrigger);

var path = `M 10 100 Q 500 100 990 100`;
var finalPath = `M 10 100 Q 500 100 990 100`;

const stringEl = document.querySelector("#string");
stringEl.addEventListener("mousemove", function (dets) {
    path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`;
    gsap.to("svg path", {
        attr: {
            d: path,
            duration: 0.2,
            ease: "power3.in",
        }
    })
})


stringEl.addEventListener("mouseleave", function (e) {
    gsap.to("svg path", {
        attr: {
            d: finalPath,
            duration: 1.5,
            ease: "elastic.inOut(1,0.2)",
        }
    })
})