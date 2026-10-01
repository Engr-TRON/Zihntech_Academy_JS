Complete Sign-Up Form
Author: Taiwo Ridwan Onabanjo (Engr. TRON)

Overview:
This is a comprehensive, multi-field registration form designed to handle diverse data types. It validates standard text, confirms email structure, enforces a minimum numerical age, ensures password matching, and verifies a boolean checkbox state before allowing account creation.

Problem-Solving Approach:
Managing six distinct inputs requires strict data type control. My approach focused heavily on data conversion and precise conditional checks. Because HTML inputs always return strings, I utilized the Number() method to convert the age input into a usable integer.
Crucially, I implemented isNaN() checks to catch edge cases where a user might type a word (like "twenty") instead of a number, preventing logical bugs during the < 16 age check. Furthermore, to style specific input types without breaking others (like keeping the checkbox a neat square while letting text inputs stretch to 100% width), I utilized advanced CSS attribute selectors (input[type="checkbox"] and input:not([type="checkbox"])).

Core Concepts Applied:
Type Conversion: Parsing string inputs into integers for mathematical comparison.
Advanced Conditionals: Utilizing isNaN() to gracefully handle invalid numerical entries.
Boolean Evaluation: Reading .checked properties rather than .value for checkbox inputs.
Cross-Field Validation: Comparing the raw string values of two separate inputs (Password vs. Confirm Password) simultaneously.
CSS Attribute Selectors: Using precise CSS targeting to separate the styling of text fields from native checkboxes.

How to Run:
Clone the repository to your local machine.
Open index.html in your browser.
Test edge cases: input text into the age field, mismatch the passwords, or try submitting without accepting the terms.
