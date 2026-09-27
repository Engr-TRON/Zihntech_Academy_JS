const loginForm = document.querySelector("#login-form");
const userName = document.querySelector("#username");
const userEmail = document.querySelector("#user-email");
const userPswword = document.querySelector("#user-psword");
const welcomeMsg = document.querySelector(".welcome-msg");

const usernameError = document.querySelector(".username-error-text");
const emailError = document.querySelector(".email-error-text");
const pswordError = document.querySelector(".psword-error-text");

usernameError.textContent ="";
emailError.textContent ="";
pswordError.textContent ="";

userName.classList.remove("invalid");
userEmail.classList.remove("invalid");
userPswword.classList.remove("invalid");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let inputCorrect = true; // a flag variable, takes a boolean value

  if (userName.value.trim() === "") {
    usernameError.textContent = "*Username cannot be empty";
    userName.classList.add("invalid");
    inputCorrect = false;
  }
  if (userEmail.value.trim() === "") {
    emailError.textContent = "*Email cannot be empty";
    userEmail.classList.add("invalid");
    inputCorrect = false;
  }
  if (userPswword.value.trim() === "") {
    pswordError.textContent = "*Password cannot be empty";
    userPswword.classList.add("invalid");
    inputCorrect = false;
  }
  if (inputCorrect === true) {
    welcomeMsg.textContent = `Welcome, ${userName.value}!`;
  } else {
    welcomeMsg.textContent = "Oops, invalid login.";
  }
});
