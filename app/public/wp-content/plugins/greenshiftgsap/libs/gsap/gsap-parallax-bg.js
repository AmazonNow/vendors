function GSparallaxinitBG(parallaxbgwrap, inEditor = false, id = '') {
    let getRatioParallaxImage = el => window.innerHeight / (window.innerHeight + el.offsetHeight);
    let ratio = getRatioParallaxImage(parallaxbgwrap);
    let first = parallaxbgwrap.getAttribute('data-first') || null;
    if (parallaxbgwrap.getAttribute('data-ratio')) {
        ratio = parallaxbgwrap.getAttribute('data-ratio');
    }

    let scrollbgargs = {
        trigger: parallaxbgwrap,
        start: () => !first ? "top bottom" : "top top",
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true // to make it responsive
    }
    if (inEditor) {
        let scrollerbgfind = ".interface-interface-skeleton__content";
        scrollbgargs.scroller = scrollerbgfind;
    }
    if (id) {
        scrollbgargs.id = 'gsparallaxbg' + id;
    }

    gsap.fromTo(parallaxbgwrap, {
        backgroundPosition: () => !first ? `50% ${-window.innerHeight * ratio}px` : "50% 0px"
    }, {
        backgroundPosition: () => `50% ${window.innerHeight * (1 - ratio)}px`,
        ease: "none",
        scrollTrigger: scrollbgargs
    });
    if (parallaxbgwrap.getAttribute('data-fade') == 'yes') {
        let parallaxoverlay = parallaxbgwrap.querySelector('.gs_parallax_overlay');
        gsap.to(parallaxoverlay, {
            ease: "none",
            autoAlpha: 1,
            scrollTrigger:{
                trigger: parallaxbgwrap,
                start: "top center", 
                end:"bottom top", 
                id: id ? 'gsparallaxoverlay' + id : null,
                scrub:true
            }
        });
    }

}

//parallax move
let gs_parallaxbg_wrapper = document.getElementsByClassName('gs-gsap-parallaxbg');
if (gs_parallaxbg_wrapper.length > 0) {
    for (let i = 0; i < gs_parallaxbg_wrapper.length; i++) {
        let parallaxbgwrap = gs_parallaxbg_wrapper[i];
        GSparallaxinitBG(parallaxbgwrap);
    };
}