const textInput = document.querySelector("#comment-text");
const counter = document.querySelector("#char-counter");

textInput.addEventListener("input", function () {
  const count = textInput.value.length;
  counter.textContent = `Characters (${count})`;
});
