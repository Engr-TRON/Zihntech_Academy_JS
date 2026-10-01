const form = document.querySelector("#contact-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageBoxInput = document.querySelector("#message-box");
const formMsgInput = document.querySelector("#form-msg");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageBoxInput.value.trim();
  const show = formMsgInput;

  show.textContent = "";

  if (name === "") {
    show.textContent = "Please enter your name";
    show.style.color = "red";
  } else if (email === "") {
    show.textContent = "Please enter your email";
    show.style.color = "red";
  } else if (!email.includes("@") || !email.includes(".")) {
    show.textContent = "Please enter a correct email";
    show.style.color = "red";
  } else if (message === "") {
    show.textContent = "Please leave a message";
    show.style.color = "red";} 
    else {
    show.textContent = "Message sent, thank you!";
    show.style.color = "green";
  }
});
