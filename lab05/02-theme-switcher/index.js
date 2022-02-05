/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/
const makeDefault = () => {
   console.log('make default!');

   document.querySelector("body").className = "";
};

document.querySelector("#default").addEventListener('click', makeDefault);

const makeOcean = () => {
   console.log('make ocean!');

   document.querySelector("body").className = "ocean";
}

document.querySelector("#ocean").addEventListener('click', makeOcean);

const makeDesert = () => {
   console.log('make desert!');

   document.querySelector("body").className = "desert";
};

document.querySelector("#desert").addEventListener('click', makeDesert);

const makeHC = () => {
   console.log('make high contrast!');

   document.querySelector("body").className = "high-contrast";
};

document.querySelector("#high-contrast").addEventListener('click', makeHC);