# Target Archery Sight Calculator

A browser-based calculator for converting an arrow group's offset from the target center into elevation and windage sight clicks.

## Use

1. Open `index.html` in a modern browser.
2. Enter your sight's elevation and windage movement per click.
3. Enter shooting distance and eye/peep-to-sight distance.
4. Enter the group's vertical and horizontal offset from target center.
   - Positive elevation: above center; negative: below center.
   - Positive windage: right of center; negative: left of center.
5. Select **Calculate adjustment**.

The result reports how many clicks to move the sight up/down and left/right. Values are rounded to the nearest whole click.

## Units

Each field supports the units shown in the interface:

- Sight movement per click: millimeters or inches
- Shooting distance: meters or yards
- Eye/peep-to-sight distance: centimeters or inches
- Arrow offset: centimeters or inches

Inputs are converted internally to millimeters before calculation.

## Saved values

Input values autosave in your browser's local storage. Use **Download save file** to export them as JSON, and **Import save file** to restore a previous export.

## Development

No build step or dependencies required. Edit `index.html`, `style.css`, or `calculator.js`, then refresh the page.
