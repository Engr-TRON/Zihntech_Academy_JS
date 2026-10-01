const form = document.querySelector("#signupForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const errorText = document.querySelector("#error-text");

function showError(message) {
  errorText.textContent = message;
  errorText.style.color = "red";
}

function showSuccess(message) {
  errorText.textContent = message;
  errorText.style.color = "green";
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  showError("");
  //errorText.textContent ="";

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value;

  if (name === "") {
    showError("Name is required");
  } else if (email === "") {
    showError("Email is required");
  } else if (!email.includes("@") || !email.includes(".")) {
    showError("Enter a valid email");
  } else if (password.length < 8) {
    showError("Password must be 8+ characters");
  } else {
    showSuccess("You did it! Account created!");
    form.reset();
  }
});
