// Timeline method in gsap is used to make animation in a synchronous manner.

var tl=gsap.timeline();

tl.from("nav img, nav h3,nav h4, nav button",{
    y:-100,
    duration:1,
    delay:1,
    opacity:0,
    stagger:0.2
})

tl.from(".container h1",{
  y:100,
  opacity:0,
  stagger:0.3
})

tl.from(".container>img,.fimage img",{
  scale:0,
  opacity:0,
  stagger:0.1
})

tl.from(".fcontent img,.fcontent h3,.announce img,.announce h3",{
  scale:0,
  opacity:0,
  stagger:0.3
})

tl.to(".fcontent img,.fcontent h3",{
  y:26,
  repeat:-1,
  duration:0.7,
  yoyo:true
})


