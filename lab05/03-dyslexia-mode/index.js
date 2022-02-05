/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

var inDysMode = false;

const toggleDysMode = () => {
  if (inDysMode){
    console.log('turn off dyslexia mode!');
    inDysMode = false;
    document.querySelector("body").className = "";
  }
  else {
    console.log('turn on dyslexia mode!');
    inDysMode = true;
    document.querySelector("body").className = "dyslexia-mode";
  }
};

document.querySelector("#dyslexia-toggle").addEventListener('click', toggleDysMode);