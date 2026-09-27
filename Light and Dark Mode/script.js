const btn = document.querySelector("#switch-btn");
const heading = document.querySelector("h1");
const body = document.querySelector("body");

let darkM = false;

function darkMode() {
  body.style.backgroundColor = "#121212";
  body.style.color = "#f5f5f5";
  heading.textContent = "Switch to Light Mode ☀️?";
}

function lightMode() {
  body.style.backgroundColor = "#f5f5f5";
  body.style.color = "#121212";
  heading.textContent = "Switch to Dark Mode 🌙?";
}

function switchMode() {
  if (darkM === false) {
    darkMode();
    darkM = true;
  } else {
    lightMode();
    darkM = false;
  }
}

btn.addEventListener("click", switchMode);
