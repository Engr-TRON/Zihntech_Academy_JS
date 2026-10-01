Login Simulator
Author: Taiwo Ridwan Onabanjo (Engr. TRON)

Overview:
This project is a mock authentication interface that simulates querying a backend database to verify user credentials. It features an integrated security mechanism that tracks failed attempts and permanently locks the form after three incorrect tries.

Problem-Solving Approach:
This project required managing application state across multiple independent form submissions. My approach was to separate static "database" information and dynamic application state from the event listener itself.
By declaring the mock user object (storedUser) and the attempt counter (let attempts = 0) globally, the data persists between clicks. To handle the account lockout feature efficiently, Instead of nesting massive if/else blocks, I placed the lockout check at the very top of the function and used the return; statement to immediately halt execution if the user exceeded their attempts, ensuring clean, readable, and secure logic.

Core Concepts Applied:
Data Structures: Using JavaScript Objects ({}) to store and retrieve simulated server data.
Scope Management: Placing variables correctly inside or outside the event listener to control data persistence.
Guard Clauses & Early Returns: Using return; to exit a function early, preventing unnecessary code execution.
State Tracking: Incrementing a counter variable to track user behavior over time.

How to Run:
Clone the repository to your local machine.
Open index.html in your browser.
Test the lockout feature by submitting incorrect credentials three times.
Refresh the page and use the correct credentials to observe a successful login state.
