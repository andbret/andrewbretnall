// var Turbolinks = require("turbolinks");
// Turbolinks.start()

const texts = [' UX designer.', ' product thinker.', ' web developer.'];
const hello = [`Hello!`];
const titles = [`Hello! My name is Andrew`];
const iama = ["I am a  "];

let test = document.getElementById("test");
let test2 = document.getElementById("test2");
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
let count1 = 0;
let index1 = 0;
let currentText1 = '';
let letter1 = '';
let count3 = 0;
let index3 = 0;
let currentText3 = '';
let letter3 = '';










const sections = [...document.querySelectorAll("section")];

let options = {
  rootMargin: "0px",
  threshold: 0.25
};

const callback = (entries, observer) => {
  entries.forEach(entry => {
const { target } = entry;
console.log(entry, target)

if (entry.intersectionRatio >= 0.25) {
target.classList.add("is-visible");
} else {
target.classList.remove("is-visible");
}
console.log(target);

console.log(entry.target.childElementCount);

  });
};

const observer = new IntersectionObserver(callback, options);

sections.forEach((section, index) => {
  observer.observe(section);
  // console.log(options);
});



// ===================scroll to top================



function scrollAppear(){
  var introText = document.querySelector('.intro-text');
  var introPosition = introText.getBoundingClientRect().top;
console.log(introPosition);
}







