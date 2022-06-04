const num = document.querySelector(".num");
const generateBtn = document.querySelector(".generate");
const containerBg = document.querySelector(".container");

const generateNumber = () => {
  let rand = Math.floor(Math.random() * 100 + 1);
  num.innerHTML = rand;
};

generateBtn.addEventListener("click", generateNumber);

generateNumber();
