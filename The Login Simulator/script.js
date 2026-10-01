const form = document.querySelector("#login-form");
const usernameInput = document.querySelector("#login-username");
const passwordInput = document.querySelector("#login-password");
const loginMsgInput = document.querySelector("#login-msg");

const storedUser = { username: "ada", password: "zihntech123" };
let attempts = 0;

function show(message, color = "red") {
  loginMsgInput.textContent = message;
  loginMsgInput.style.color = color;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value;

  if (attempts >= 3) {
    show("Too many attempts. Try again later.", "red");
    return;
  } else if (username !== storedUser.username) {
    attempts++;
    show("Username not found", "red");
  } else if (password !== storedUser.password) {
    attempts++;
    show("Incorrect password", "red");
  } else {
    attempts = 0;
    show("Login successful! Welcome back.", "green");
  }
});
