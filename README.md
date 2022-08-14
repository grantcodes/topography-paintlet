# @grantcodes/topography-paintlet

A css paintlet to create a nice custom topography inspired background.

## Usage

### 1. Register the paint worklet in JavaScript:

```javascript
CSS.paintWorklet.addModule(
  'https://unpkg.com/@grantcodes/topography-paintlet/dist/topography-paintlet.js'
)
```

NOTE: This example loads the worklet from unpkg.com, but you could also copy and host the file locally.

### 2. Set up the colors and corner in CSS and use the `paint` function.

```css
.topography {
  background-color: #2a4858;
  background-position: --topography-corner;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: paint(grantcodes-topography);
  --topography-corner: top right;
  --topography-colors: #106e7c, #00968e, #4abd8c, #9cdf7c, #fafa6e;
}
```

### Random gotchas

- Works best with 5 colors in my opinion but it should work if you use more.
- Doesn't seem to work great when applied to the `html` or `body` elements.
