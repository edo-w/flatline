---
"@edo-w/flatline-solid": minor
---

Styles

- Hide the dropdown menu content arrow.
- Stop bundling the default Noto Sans font in flatline.css.
- Keep the font import in Storybook preview so component docs still match.

Build

- Replace the old tsgo plus copied CSS library build with tsdown.
- Build component entrypoints and flatline.css through tsdown.
- Use the Solid tsdown plugin so the package build handles Solid and CSS correctly.
