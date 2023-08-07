

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function firstpageanime() {

    var tl = gsap.timeline()
    tl.from("#nav", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    tl.to(".boundingelem", {
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        stagger: .2

    })
    tl.from("#hero-footer", {
        y: -10,
        opacity: 0,
        duration: 1.1,
        delay: -1,
        ease: Expo.easeInOut
    })

}
var timeout;
function circlechaptakaro() {
    //define default scale valeue
    var xscale = 1;
    var yscale = 1;

    var xprev = 0
    var yprev = 0


    window.addEventListener("mousemove", function (dets) {
        clearTimeout(timeout);

        xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);

        xprev = dets.clientX
        yprev = dets.clientY

        circlemousefollower(xscale, yscale);

        timeout = setTimeout(function () {
            document.querySelector("#mini-circle").style.transform = `translate(${dets.clientX}px , ${dets.clientY}px) scale(1 , 1)`
        }, 100)
    })
}
function circlemousefollower(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#mini-circle").style.transform = `translate(${dets.clientX}px , ${dets.clientY}px) scale(${xscale}, ${yscale})`
    })
}
circlemousefollower();
  firstpageanime();
circlechaptakaro();


document.querySelectorAll(".elem").forEach(function (elem) {

    var rotate = 0;
    var diffrot = 0;
    elem.addEventListener("mouseleave", function (dets) {

        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            // ease: power3,
            duration: .5
          
        })
    })

    elem.addEventListener("mousemove", function (dets) {

        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = rotate - dets.clientX;
        rotate = dets.clientX;
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            // ease:  power3,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot * .5),

        })
    })
})
