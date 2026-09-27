document.addEventListener("keydown", (event) => {
  const display = document.querySelector("#display");
  display.textContent = `You just pressed: ${event.key}`;
});

/*addEventListener("keydown", (event) => {
console.log(event);
});*/
