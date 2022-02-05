const makeBigger = () => {
   console.log('make bigger!');
   contSizePx = contSizePx + .05;
   hSizePx = hSizePx + .2;
   document.querySelector(".content").style.fontSize = (contSizePx) + "em";
   document.querySelector("h1").style.fontSize = (hSizePx) + "em";
};

const makeSmaller = () => {
   console.log('make smaller!');
   contSizePx -= .05;
   hSizePx -= .2;
   document.querySelector(".content").style.fontSize = (contSizePx) + "em";
   document.querySelector("h1").style.fontSize = (hSizePx) + "em";
};

var contSizePx = 1.4;
var hSizePx = 2.0;

document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);