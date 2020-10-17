const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });
tl.to(".slide", { x: "100%", duration: 1.5, delay: 0.3 });
tl.to(".intro", { x: "100%", duration: 1.5 }, "-=1.5");