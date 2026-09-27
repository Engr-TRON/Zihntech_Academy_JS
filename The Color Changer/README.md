# The Color Changer

A simple interactive button that cycles the page's background and text colors through a fixed sequence of themes on each click, using vanilla JavaScript.

## Features

- Click-triggered background/color cycling through five distinct themes (navy → dark green → gold → purple → gray reset)
- Smooth 0.5-second color transition using CSS `transition`
- Button styling mirrors the current background theme on every click

## Technologies Used

- HTML5
- CSS3 (transitions)
- Vanilla JavaScript (DOM manipulation, event listeners)

## My Approach

This was the first of five beginner JavaScript projects I worked through with guided, hint-based tutoring rather than being handed finished code. For each piece — HTML structure, CSS transition, and the click-counting JavaScript logic — I attempted the code myself first, then reviewed it against feedback that pointed out issues (such as an incomplete CSS `transition` shorthand) without directly fixing them for me, so I could work out the "why" behind each correction myself.

The core JavaScript concept here was tracking a `clicks` counter in a variable and using conditional branching (`if`/`else if`) to change the background based on its value, then resetting the counter once the cycle completed.

## How to Run

1. Clone or download this folder.
2. Open `index.html` in a browser (or serve it with a tool like Live Server).
3. Click the button to cycle through the color themes.

## Files

- `index.html` — page structure
- `style.css` — styling and transition
- `script.js` — click-handling and color-cycling logic

## Author
**Taiwo Ridwan Onabanjo (Engr. TRON)**
