const btn = document.querySelector(".btn");
const bg = document.querySelector(".bg");

bg.style.color = "black";

let clicks = 0;

function changeBG() {
  clicks = clicks + 1;

  if (clicks === 1) {
    bg.style.backgroundColor = "navy";
    bg.style.color = "white";
    btn.style.backgroundColor = "white";
    btn.style.color = "navy";
  } else if (clicks === 2) {
    bg.style.backgroundColor = "darkgreen";
    bg.style.color = "yellow";
    btn.style.backgroundColor = "yellow";
    btn.style.color = "darkgreen";
  } else if (clicks === 3) {
    bg.style.backgroundColor = "gold";
    bg.style.color = "black";
    btn.style.backgroundColor = "black";
    btn.style.color = "gold";
  } else if (clicks === 4) {
    bg.style.backgroundColor = "purple";
    bg.style.color = "white";
    btn.style.backgroundColor = "white";
    btn.style.color = "purple";
  } else {
    bg.style.backgroundColor = "gray";
    bg.style.color = "black";
    btn.style.backgroundColor = "black";
    btn.style.color = "gray";

    clicks = 0;
  }
}

btn.addEventListener("click", changeBG);
