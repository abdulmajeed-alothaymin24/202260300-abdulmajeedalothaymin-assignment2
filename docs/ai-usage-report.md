# AI Usage Report

## Tools Used & Use Cases

### ChatGPT

ChatGPT was used throughout the development process for:

- Reducing redundant code in repeated project cards.
- Improving the dark/light theme implementation (changing from a simple button to a toggle switch).
- Debugging and refining JavaScript logic for theme persistence using localStorage.
- Enhancing UI design decisions such as:
  - Making the navbar slightly transparent with backdrop blur.
  - Applying the 60/30/10 color rule for visual balance.
  - Improving spacing and layout alignment.
- Reviewing and improving code readability and structure.
- Assisting with documentation writing.

---

## Benefits of Using AI

- Faster debugging and issue resolution.
- Improved UI/UX decisions based on best practices.
- Cleaner and more structured CSS organization.
- Better understanding of responsive design and layout hierarchy.
- Improved theme toggle implementation logic.

---

## Challenges & Limitations

- Some AI-generated suggestions initially included redundant styles.
- Responsive media query structure required manual correction.
- Some UI improvements needed refinement to match the assignment scope.
- Not all suggestions were directly usable without modification.

---

## Learning Outcomes

- Gained deeper understanding of CSS architecture and variable-based theming.
- Learned how the 60/30/10 design principle applies to UI development.
- Improved understanding of JavaScript event handling and class toggling.
- Learned how localStorage maintains persistent user preferences.
- Developed stronger skills in reviewing and refining AI-generated code.

---

## Responsible Use & Modifications

All AI-generated suggestions were carefully reviewed and tested before being included.

- Redundant or unnecessary code was removed.
- Layout and responsiveness were manually verified using DevTools.
- JavaScript logic was adjusted to ensure correctness.
- The final structure reflects personal understanding and manual refinement.

The final submission represents my own understanding and adaptation of AI-assisted suggestions.

---

## Assignment 2 – New Interactive Features

### AI Tools Used

Claude Code (Anthropic) was used to assist in developing the new features added for Assignment 2.

### What AI Was Used For

- Generating the initial structure of the project filter logic (filter buttons + `data-category` matching).
- Suggesting the form validation approach (regex for email, per-field error highlighting).
- Recommending CSS keyframe animation patterns for the hero fade-in.
- Advising on the feedback banner layout (success/error messages after form submit).

### What Was Accepted and What Was Changed

- The filter button logic was accepted mostly as-is, but the empty-state toggle was manually written to match the existing code style.
- The form validation structure was accepted, but the auto-hide timeout duration was adjusted to 5 seconds to feel natural.
- The CSS additions were reviewed and simplified to stay consistent with the existing stylesheet structure (no new frameworks introduced).

### Challenges

- Initially the form feedback banners were suggested as `<div>` elements with complex animations. These were simplified to plain `<p>` tags with `display` toggling to keep the code at an appropriate level.
- The filter logic needed a small adjustment so the empty-state message correctly spans both grid columns.

### Learning Outcomes

- Gained understanding of `data-*` attributes in HTML and how to read them in JavaScript.
- Learned client-side form validation using regex and DOM class manipulation.
- Understood how CSS `@keyframes` animations work with the `animation` shorthand property.

### Responsible Use

All AI suggestions were reviewed, tested in the browser, and adapted before use. No code was copied blindly. The final implementation reflects my own understanding of how each feature works.