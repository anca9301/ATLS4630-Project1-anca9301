// import _ from 'lodash';
// import anime from "animejs";
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
import anime from 'animejs/lib/anime.es.js';
// const anime = require('animejs');

// import pkg from 'animejs';
// const anime = pkg;

const WATER0 = document.getElementById("waterLayer0");
const WATER1 = document.getElementById("waterLayer1");
const WATER2 = document.getElementById("waterLayer2");
const WATER3 = document.getElementById("waterLayer3");
const WATER4 = document.getElementById("waterLayer4");
const WATER5 = document.getElementById("waterLayer5");
const WATER6 = document.getElementById("waterLayer6");
const WATER7 = document.getElementById("waterLayer7");
const WATER8 = document.getElementById("waterLayer8");
const WATER9 = document.getElementById("waterLayer9");

const WATER_ELEMENTS = [WATER0, WATER1, WATER2, WATER3, WATER4, WATER5, WATER6, WATER7, WATER8, WATER9];

let atSurface = true;
// let transitionDive = true;
let transitionSurface = true;

// WATER0.style.top = "10rem";

// animating water

if (atSurface) {
    anime({
        targets: "#waterLayer0, #waterLayer3, #waterLayer6, #waterLayer9", 
        duration: 5000,
        // direction: "normal",
        easing: "linear",
        direction: "alternate",
        // delay: 100,
        delay: anime.stagger(1000),
        loop: true,
        translateX: innerWidth,
        translateY: 20
    });

    anime({
        targets: "#waterLayer1, #waterLayer5, #waterLayer8",
        duration: 3000,
        // direction: "normal",
        easing: "linear",
        direction: "alternate",
        // delay: 100,
        delay: anime.stagger(500),
        loop: true,
        translateX: innerWidth,
        translateY: 20
    });

    anime({
        targets: "#waterLayer2, #waterLayer4, #waterLayer7",
        duration: 4000,
        // direction: "normal",
        easing: "linear",
        direction: "alternate",
        // delay: 100,
        delay: anime.stagger(750),
        loop: true,
        translateX: innerWidth,
        translateY: 30
    });

    // animating main narwhal
    anime({
        targets: "#mainSubject",
        duration: 1000,
        // direction: "normal",
        easing: "linear",
        direction: "alternate",
        delay: 100,
        loop: true,
        translateX: 40,
        translateY: 40

    });

    if (transitionDive) {
        anime({
            targets: ".water",
            duration: 10000,
            easing: "linear",
            translateY: -700,
            loop: false
        })
        
        setTimeout(function() {
            for (let i = 0; i < 10; i++) {
                WATER_ELEMENTS[i].style.setProperty("top", "-10rem");
            }

            atSurface = false;
            transitionSurface = false;  
        }, (10000));        
    }
}

if (!atSurface) {
    
}