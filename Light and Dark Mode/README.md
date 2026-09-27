# Light and Dark Mode Toggle

A theme-switcher built to let a user flip the page between a light and dark theme.

## Features

- Light theme by default, `.dark-mode` class overrides on toggle
- Smooth color transitions between themes

## Technologies Used

- HTML5 (
- CSS3 (` pseudo-class, transitions)
- Vanilla JavaScript (`classList.toggle`, `change` event)

## My Approach

Before writing any code, I researched how real-world light/dark toggles are typically built. I discovered they mostly use a hidden checkbox rather than a plain button.

I explored multiple implementation approaches side by side before finally settling on the beginner -oriented one for this project:

1. A plain button which changes the theme from light to dark using eventListener and functions for LightMode and DarkMode.

2. I skipped a modern CSS-only version of this project using `:has()` — specifically so I'd get practice writing the `addEventListener` and `function` logic by hand.

3. I used a `flag variable - darkM` and assigned a boolean value “false” as default, so the if statements can work with it.

## How to Run

1. Clone or download this folder.
2. Open `index.html` in a browser.
3. Click the switch to toggle between light and dark themes.

## Files

- `index.html` — page structure
- `style.css` — light/dark theme rules and switch styling
- `script.js` — make a `change` event to a `light-mode` class on `<body>`

## Author

**Taiwo Ridwan Onabanjo**

Each variation is a self-contained HTML file:

1. Open
   `1. Live Typing Counter`,
   `2. Type into the textarea(s) to see the live count update.

## Files

- `index..html`
- `style.css`
- `script.js`

## Author
**Taiwo Ridwan Onabanjo (Engr. TRON)**
