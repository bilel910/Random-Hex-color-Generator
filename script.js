const hex = document.querySelector(".hex");
const generateBtn = document.querySelector(".generate");
const containerBg = document.querySelector(".container");

const generateColor = () => {
  let colorGenerate = "#" + Math.random().toString(16).slice(2, 8);
  hex.innerHTML = colorGenerate;
  containerBg.style.backgroundColor = colorGenerate;
};

generateBtn.addEventListener("click", generateColor);

generateColor();
