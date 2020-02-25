const colorBtn = document.querySelector(".colorBtn");
const bcg = document.querySelector("body");
const colorLabel = document.querySelector(".theColor");
const color = [
  "#33691e",
  "#f57f17",
  "#1565c0",
  "#ff4081",
  " #7b1fa2",
  "#7b1fa2",
  "#4h5323",
  "#c51162",
  "#1b0000",
  "#64ff17",
  "#64dd17",
  "#33691e",
  "#c79400",
  "#b8cc00",
  "#000000",
  "#c796400",
  "#c79445",
  "#c75400",
  "#64ff17",
  "#000111"
];

colorBtn.addEventListener("click", randomColor);

function randomColor() {
  function getRandomInt() {
    return Math.floor(Math.random() * color.length);
  }
  var number = getRandomInt(13, 0);
  console.log(number);
  console.log(color.length);
  bcg.style.backgroundColor = color[number];
}
