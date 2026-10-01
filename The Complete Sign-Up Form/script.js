const form = document.querySelector("#signup-form");
const fullNameInput = document.querySelector("#full-name");
const emailInput = document.querySelector("#email");
const ageInput = document.querySelector("#age");
const pswordInput = document.querySelector("#password");
const confPswordInput = document.querySelector("#confirm-password");
const terms = document.querySelector("#terms");
const signupMsg = document.querySelector("#signupMsg");

function show(message) {
  signupMsg.textContent = message;
}

confPswordInput.addEventListener("input", () => {
  if (confPswordInput.value === pswordInput.value) {
    show("Passwords match");
    signupMsg.style.color = "green";
  } else {
    show("Password don't match");
    signupMsg.style.color = "red";
  }
});

show("");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fullName = fullNameInput.value.trim();
  const email = emailInput.value.trim();
  const password = pswordInput.value.trim();
  const confirmPassword = confPswordInput.value.trim();
  const age = ageInput.value.trim();
  const ageNumber = Number(age);

  const ageIsInvalid = isNaN(ageNumber);

  if (fullName === "") {
    show("Full name is required");
  } else if (!email.includes("@") || !email.includes(".")) {
    show("Enter a valid email");
  } else if (age === "" || ageIsInvalid || ageNumber < 16) {
    show("You must be at least 16 to sign up");
  } else if (password.length < 8) {
    show("Password must be at least 8 characters");
  } else if (password !== confirmPassword) {
    show("Passwords do not match");
  } else if (terms.checked === false) {
    show("You must accept the terms to continue");
  } else {
    show(`Welcome, ${fullName}!`);
    signupMsg.style.color = "green";
  }
});
