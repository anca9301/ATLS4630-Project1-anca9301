import anime from "animejs/lib/anime.es.js";

// const WATER0 = document.getElementById("waterLayer0");
// const WATER1 = document.getElementById("waterLayer1");
// const WATER2 = document.getElementById("waterLayer2");
// const WATER3 = document.getElementById("waterLayer3");
// const WATER4 = document.getElementById("waterLayer4");
// const WATER5 = document.getElementById("waterLayer5");
// const WATER6 = document.getElementById("waterLayer6");
// const WATER7 = document.getElementById("waterLayer7");
// const WATER8 = document.getElementById("waterLayer8");
// const WATER9 = document.getElementById("waterLayer9");

// console.log(innerWidth);

// ANIMEJS TIMELINES

let dive = true;

let surfaceAniTimeline = anime.timeline({
  duration: anime.random(3000, 5000),
  easing: "linear",
  direction: "alternate",
  loop: true,
});

let narwhalSwim = anime.timeline({
  duration: 1000,
  easing: "linear",
  direction: "alternate",
  delay: 100,
  loop: true,
});

// ANIMATIONS

surfaceAniTimeline
  .add(
    {
      targets: "#waterLayer0",
      translateX: anime.random(0, innerWidth),
      translateY: anime.random(0, 50),
    },
    0
  )
  .add(
    {
      targets: "#waterLayer1",
      translateX: anime.random(0, innerWidth),
      translateY: anime.random(0, 50),
    },
    0
  )
  .add(
    {
      targets: "#waterLayer2",
      translateX: anime.random(0, innerWidth),
      translateY: anime.random(0, 50),
    },
    0
  )
  .add(
    {
      targets: "#waterLayer3",
      translateX: anime.random(0, innerWidth),
      translateY: anime.random(0, 50),
    },
    0
  )
  .add(
    {
      targets: "#waterLayer4",
      translateX: anime.random(0, innerWidth),
      translateY: anime.random(0, 50),
    },
    0
  )
  .add(
    {
      targets: "#waterLayer5",
      translateX: anime.random(0, innerWidth),
      translateY: anime.random(0, 50),
    },
    0
  )
  .add(
    {
      targets: "#waterLayer6",
      translateX: anime.random(0, innerWidth),
      translateY: anime.random(0, 50),
    },
    0
  )
  .add(
    {
      targets: "#waterLayer7",
      translateX: anime.random(0, innerWidth),
      translateY: anime.random(0, 50),
    },
    0
  )
  .add(
    {
      targets: "#waterLayer8",
      translateX: anime.random(0, innerWidth),
      translateY: anime.random(0, 50),
    },
    0
  )
  .add(
    {
      targets: "#waterLayer9",
      translateX: anime.random(0, innerWidth),
      translateY: anime.random(0, 50),
    },
    0
  );

narwhalSwim.add({
  targets: "#mainSubject",
  translateX: 40,
  translateY: 40,
});


let divingTimeline =  anime.timeline({
    duration: 50_000,
    direction: "alternate",
    easing: "linear",
    loop: 1
});

if (0) {    
    divingTimeline.add({
        targets: ".water",
        translateY: -3500
    });
    dive = false;
}

