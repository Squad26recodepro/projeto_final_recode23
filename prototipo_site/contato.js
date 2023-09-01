const header = document.querySelector("header");
let isHeaderBgBlue = true;

function toggleHeaderBackground() {
  if (isHeaderBgBlue) {
    header.style.backgroundColor = "#e74c3c"; // Vermelho
  } else {
    header.style.backgroundColor = "#3498db"; // Azul
  }
  isHeaderBgBlue = !isHeaderBgBlue;
}


setInterval(toggleHeaderBackground, 2000);