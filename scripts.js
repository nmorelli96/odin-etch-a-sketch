let currentColor = "black";

function setCurrentColor(color) {
  currentColor = color;
}

const squareContainer = document.querySelector("#square-container");
const colorSelector = document.querySelector("#color-input");
const clearBtn = document.querySelector("#clear-btn");

colorSelector.oninput = (event) => setCurrentColor(event.target.value) 

clearBtn.addEventListener("click", clearAll);

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function createSquares() {
  for (let i = 0; i < 256 ; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", changeColor)
    square.addEventListener("mousedown", changeColor)
    squareContainer.appendChild(square);
  }
}
createSquares();

function changeColor(event) {
  if (event.type === 'mouseover' && !mouseDown) return;
  if (event.target.style.backgroundColor !== currentColor) {
      event.target.style.backgroundColor = currentColor;
  }
}

function clearAll() {
  squareContainer.innerHTML = '';
  createSquares();
}

console.log(squareContainer.childElementCount)
