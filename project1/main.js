// import { random } from "animejs/lib/anime.es.js";
import anime from "animejs/lib/anime.es.js";

const scrollDiv = document.querySelector(".scroll");
const scrollProgress = document.querySelector(".progress");
scrollProgress.oninput = function () {
  scroll.seek(scroll.duration * (scrollProgress.value / 100));
};

let scroll = anime({
  targets: ".container",
  translateX: - parseInt(anime.get(scrollDiv, 'width')) ,
  elasticity: 200,
  easing: "easeInOutSine",
  autoplay: false,
});

scrollProgress.addEventListener("input", checkDive);

// ANIMEJS TIMELINES

let waterGroups = [
  "#waterLayer0, #waterLayer6",
  "#waterLayer1, #waterLayer3",
  "#waterLayer2, #waterLayer9",
  "#waterLayer7, #waterLayer5",
  "#waterLayer4, #waterLayer8",
];
const MIN_WATER_DUR = 10_000,
  MAX_WATER_DUR = 20_000;
const MIN_WATER_X = -2000,
  MAX_WATER_X = 2000;
const MIN_WATER_Y = -50,
  MAX_WATER_Y = 50;

let notDiving = true;

let narwhalSwim = anime.timeline({
  duration: 1000,
  easing: "linear",
  direction: "alternate",
  delay: 100,
  loop: true,
});

narwhalSwim.add({
  targets: "#mainSubject",
  translateX: 40,
  translateY: 40,
},0).add({
  targets:"#child1",
  translateX: -25,
  translateY: -25
},0);

anime({
  targets: waterGroups[0],
  translateX: anime.random(MIN_WATER_X, MAX_WATER_X),
  translateY: anime.random(MIN_WATER_Y, MAX_WATER_Y),
  duration: anime.random(MIN_WATER_DUR, MAX_WATER_DUR),
  easing: "linear",
  direction: "alternate",
  loop: true,
});

anime({
  targets: waterGroups[1],
  translateX: anime.random(MIN_WATER_X, MAX_WATER_X),
  translateY: anime.random(MIN_WATER_Y, MAX_WATER_Y),
  duration: anime.random(MIN_WATER_DUR, MAX_WATER_DUR),
  easing: "linear",
  direction: "alternate",
  loop: true,
});

anime({
  targets: waterGroups[2],
  translateX: anime.random(MIN_WATER_X, MAX_WATER_X),
  translateY: anime.random(MIN_WATER_Y, MAX_WATER_Y),
  duration: anime.random(MIN_WATER_DUR, MAX_WATER_DUR),
  easing: "linear",
  direction: "alternate",
  loop: true,
});

anime({
  targets: waterGroups[3],
  translateX: anime.random(MIN_WATER_X, MAX_WATER_X),
  translateY: anime.random(MIN_WATER_Y, MAX_WATER_Y),
  duration: anime.random(MIN_WATER_DUR, MAX_WATER_DUR),
  easing: "linear",
  direction: "alternate",
  loop: true,
});
 
anime({
  targets: waterGroups[4],
  translateX: anime.random(MIN_WATER_X, MAX_WATER_X),
  translateY: anime.random(MIN_WATER_Y, MAX_WATER_Y),
  duration: anime.random(MIN_WATER_DUR, MAX_WATER_DUR),
  easing: "linear",
  direction: "alternate",
  loop: true,
});

let DIVE_WATER_Y_MOVEMENT = -2_000;

let divingTimeline = anime.timeline({
  duration: 30_000,
  direction: "alternate",
  easing: "linear",
  loop: 1,
});

// function swimmingFish() {

// }

function checkDive() {
  let willDive = anime.random(0, 500);

  if (notDiving && willDive == 1) {
    notDiving = false;
    console.log("diving");
    divingTimeline
      .add(
        {
          targets: waterGroups[0],
          translateX: anime.random(MIN_WATER_X, MAX_WATER_X),
          translateY: DIVE_WATER_Y_MOVEMENT,
        },
        0
      )
      .add(
        {
          targets: waterGroups[1],
          translateX: anime.random(MIN_WATER_X, MAX_WATER_X),
          translateY: DIVE_WATER_Y_MOVEMENT,
        },
        0
      )
      .add(
        {
          targets: waterGroups[2],
          translateX: anime.random(MIN_WATER_X, MAX_WATER_X),
          translateY: DIVE_WATER_Y_MOVEMENT,
        },
        0
      )
      .add(
        {
          targets: waterGroups[3],
          translateX: anime.random(MIN_WATER_X, MAX_WATER_X),
          translateY: DIVE_WATER_Y_MOVEMENT,
        },
        0
      )
      .add(
        {
          targets: waterGroups[4],
          translateX: anime.random(MIN_WATER_X, MAX_WATER_X),
          translateY: DIVE_WATER_Y_MOVEMENT,
        },
        0
      )
      .add(
        {
          targets: "#underwater",
          translateY: DIVE_WATER_Y_MOVEMENT,
        },
        0
      );

      setTimeout(() => {
        notDiving = true;
      }, 90_000);
  }
  if (notDiving == false) {
    console.log("passed")
    anime({
      targets: "#fishSwim1",
      translateX: innerWidth,
      duration: anime.random(100_000,200_000),
      loop:true,
      delay: anime.random(2_000,6_000)
    })
    anime({
      targets: "#fishSwim2",
      translateX: innerWidth,
      duration: anime.random(100_000,200_000),
      loop:true,
      delay:anime.random(20_000,25_000)
    })
    anime({
      targets: "#fishSwim3",
      translateX: -innerWidth,
      duration: anime.random(100_000,200_000),
      loop:true,
      delay: anime.random(12_000,15_000)
    })
    anime({
      targets: "#fishSwim4",
      translateX: -innerWidth,
      duration: anime.random(100_000,200_000),
      loop:true,
      delay: anime.random(30_000,35_000)
    })
  }
}