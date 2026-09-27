# Welcome Form (Login-Style UI)

A login-style form — Username, Email, and Password fields — that validates its own input with JavaScript and displays a personalized "Welcome" message on successful submission,

## Features

- Per-field validation with individual error messages displayed beneath each field
- Fields and error text turn red when invalid, and clear automatically once corrected
- Custom validation fully replaces the browser's default popup validation (`novalidate`)
- Right-aligned label column for a clean, form-like layout
- Personalized welcome message on successful login, with the form resetting afterward

## Technologies Used

- HTML5 (`<form>`, semantic labels, `novalidate`)
- CSS3 (Flexbox layout, state-based error styling)
- Vanilla JavaScript (`submit` event`, flag-variable validation pattern, `classList`)

## My Approach

This was the final and most involved of the five projects, and the one where I did the most independent debugging. Before writing any JavaScript, I worked out for myself *why* forms should listen for the `submit` event on the `<form>` itself rather than a `click` event on the button.

The build went through several real debugging rounds rather than working correctly on the first attempt, including:
- Comparing an input **element** to an empty string instead of its `.value` (a mistake that silently breaks every validation check, since an element is never equal to `""`)
- Discovering that unconditional lines left over from an early draft were overwriting validation results on every submit, regardless of what the checks below decided
- Realizing the browser's own `required`-attribute validation was intercepting genuinely empty submissions before my custom JavaScript ever ran, which `novalidate` on the `<form>` resolves
- Restructuring label/input markup so a shared CSS class could right-align every label into a single clean column

Rather than being handed a working version outright, each bug was diagnosed by being pointed toward *what* to check and *why* it mattered, then fixed and re-tested against real submitted data until the form behaved correctly end-to-end.

## How to Run

1. Clone or download this folder.
2. Open `index.html` in a browser.
3. Try submitting with fields empty to see per-field validation errors; fill them all in to see the welcome message.

## Files

- `index.html` — form structure
- `style.css` — layout, alignment, and error/invalid state styling
- `script.js` — submission handling, validation, and welcome-message logic

## Author
**Taiwo Ridwan Onabanjo (Engr. TRON)**