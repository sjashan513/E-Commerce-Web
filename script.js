// #region Home Page
// Script for navigation bar
//NavBar Variables
const header = document.getElementById("header");
const navOverlay = document.querySelector(".navOverlay");
const menuBtn = document.querySelector(".barsContainer");
const barsBefore = document.querySelector(".barsBefore");
const bars = document.querySelector(".bars");
const barsAfter = document.querySelector(".barsAfter");

// Feature Var
const feaContainer = document.querySelector(".feBoxContainer");
const feaContainerIndividual = document.querySelectorAll(".fe-box");

//FeaturedProducts Variables:
const feaProducts = document.getElementById("feaProducts");
const productContainer = document.getElementById("productsContainer");
const underlineVar = document.querySelectorAll(".underline");
const underlineNew = document.querySelectorAll(".underlineNewArrival");
let titleFea = document.querySelector(".titleFea");
let titleNew = document.querySelector(".titleNew");

//->>>>>>>>>>>FUNCTIONS<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//Header{

menuBtn.addEventListener("click", () => {
  navOverlay.classList.toggle("navOverlay--show");
  bars.classList.toggle("bars-active");
  barsBefore.classList.toggle("barsBefore-active");
  barsAfter.classList.toggle("barsAfter-active");
});

//}

// Feature Functions
let counter = 1;
let timer = 3000;
let widthFeaBox = feaContainerIndividual[0].clientWidth;

window.addEventListener("resize", () => {
  widthFeaBox = feaContainerIndividual[0].clientWidth;
});

console.log(feaContainerIndividual.length);
function slide() {
  feaContainer.style.transform = `translateX(-${widthFeaBox * counter}px)`;
  feaContainer.style.transition = "transform .3s";
  ++counter;
  if (counter === feaContainerIndividual.length) {
    setTimeout(() => {
      feaContainer.style.transform = `translateX(0px)`;
      feaContainer.style.transition = " none";
    }, 1000);
    counter = 1;
  }
}
setInterval(() => {
  slide();
}, timer);
//FeaturedProducts Functions:

function underlineFunc(elementTop, title) {
  let windowHeight = window.innerHeight;
  let elementVisible = 275;
  if (elementTop < windowHeight - elementVisible) {
    title.style.setProperty("--titleWidth", `${70}%`);
  } else {
    title.style.setProperty("--titleWidth", 0);
  }
}

window.addEventListener("scroll", (e) => {
  elementTopFea = underlineVar[0].getBoundingClientRect().top;
  elementTopNew = underlineNew[0].getBoundingClientRect().top;
  underlineFunc(elementTopFea, titleFea);
  underlineFunc(elementTopNew, titleNew);
});
//#endregion
