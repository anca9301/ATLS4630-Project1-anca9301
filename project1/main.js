import anime from "animejs/lib/anime.es.js";

const scrollDiv = document.querySelector(".scroll");
const scrollProgress = document.querySelector(".progress");
const scrollStatus = document.querySelector(".control");
scrollProgress.oninput = function () {
  scroll.seek(scroll.duration * (scrollProgress.value / 100));
  console.log("chck scrol");
};

// SCROLL ANIMATIONS & CONTROL

let isPlaying = false;

let scroll = anime({
  targets: ".container",
  translateX: "-600vw",
  elasticity: 200,
  easing: "easeInOutSine",
  autoplay: false,
  duration: 50_000,
  update: function () {
    scrollProgress.value = scroll.progress;
  },
});

scrollProgress.addEventListener("input", checkDive);

scrollDiv.addEventListener("click", (e) => {
  if (isPlaying) {
    scroll.pause();
    isPlaying = false;
    scrollStatus.textContent = "PAUSED";
  } else {
    scroll.play();
    isPlaying = true;
    scrollStatus.textContent = "PLAYING";
  }
});

// WATER ANIMATIONS

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

// NARWHAL ANIMATIONS

let narwhalSwim = anime.timeline({
  duration: 1000,
  easing: "linear",
  direction: "alternate",
  delay: 100,
  loop: true,
});

narwhalSwim
  .add(
    {
      targets: "#mainSubject",
      translateX: 40,
      translateY: 40,
    },
    0
  )
  .add(
    {
      targets: "#child1",
      translateX: -25,
      translateY: -25,
    },
    0
  );

// DIVING ANIMATIONS

let notDiving = true;
let DIVE_WATER_Y_MOVEMENT = -2_000;

let divingTimeline = anime.timeline({
  duration: 30_000,
  direction: "alternate",
  easing: "linear",
  loop: 1,
});

function checkDive() {
  let willDive = anime.random(0, 200);
  console.log("check");

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
    console.log("passed");
    anime({
      targets: "#fishSwim1",
      translateX: innerWidth,
      duration: anime.random(100_000, 200_000),
      loop: true,
      delay: anime.random(2_000, 6_000),
    });
    anime({
      targets: "#fishSwim2",
      translateX: innerWidth,
      duration: anime.random(100_000, 200_000),
      loop: true,
      delay: anime.random(20_000, 25_000),
    });
    anime({
      targets: "#fishSwim3",
      translateX: -innerWidth,
      duration: anime.random(100_000, 200_000),
      loop: true,
      delay: anime.random(12_000, 15_000),
    });
    anime({
      targets: "#fishSwim4",
      translateX: -innerWidth,
      duration: anime.random(100_000, 200_000),
      loop: true,
      delay: anime.random(30_000, 35_000),
    });
  }
}
