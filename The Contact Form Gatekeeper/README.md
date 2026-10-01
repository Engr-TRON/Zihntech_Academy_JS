Contact Form Gatekeeper
Author: Taiwo Ridwan Onabanjo (Engr. TRON)

Overview:

This project is a fundamental form validation script built to act as a "gatekeeper" for user input. The objective of this build is to ensure that no empty data is processed or sent to a database, requiring a user to correctly fill out their name, email, and a message before submission.

Problem-Solving Approach:
My core philosophy for this project was sequential error handling. Rather than overwhelming the user with multiple error messages at once, I implemented a strict if / else if / else chain. This ensures the form checks fields exactly in the order they appear visually. It stops at the very first error it encounters, guiding the user to fix one issue at a time.
To maintain layout integrity, I styled the interface using modern CSS fundamentals, specifically box-sizing: border-box and Flexbox, ensuring the form remains perfectly centered and responsive without overflowing the viewport (min-height: 100vh).

Core Concepts Applied:
DOM Event Prevention: Utilizing e.preventDefault() to stop the default page reload upon submission.
Data Sanitization: Applying the .trim() method to strip accidental whitespace from inputs before evaluating them.
Sequential Logic: Using if/else if/else statements to create a step-by-step validation pipeline.
Modern DOM Manipulation: Using .textContent and .style.color to dynamically inject error or success messages without relying on innerHTML.

How to Run:
Clone the repository to your local machine.
Open index.html in any modern web browser.
Attempt to submit the form while empty, partially filled, and completely filled to observe the sequential validation logic.
