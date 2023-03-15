// Script for navigation bar

const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");
const boxArray = [box1, box2, box3, box4, box5, box6];
const feBoxUl = document.querySelector(".feBoxUl");
const feBoxContainer = document.getElementById("feBoxContainer");
let counter = 0;
let timer;
function slideFeBox() {
  feBoxUl.style.transform = `translateX(-${counter * 1000}px)`;
  if (counter === boxArray.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
}

window.onload = () => {
  timer = setInterval(slideFeBox, 2000);
};

function pauseTimer() {
  clearInterval(timer);
}
feBoxContainer.addEventListener("mousedown", () => {
  pauseTimer();
  feBoxContainer.addEventListener("mouseup", () => {
    timer = setInterval(slideFeBox, 2000);
  });
});
