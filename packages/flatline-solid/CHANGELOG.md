# @edo-w/flatline-solid

## 0.3.1

### Patch Changes

- 3152ed0: Build

  - Restore the package root export for the generated dist entry.
  - Copy the shared style CSS files into dist/style during the library build.
  - Remove the empty src/index.ts file from the tsdown entry setup.

## 0.3.0

### Minor Changes

- 38b8857: Styles

  - Hide the dropdown menu content arrow.
  - Stop bundling the default Noto Sans font in flatline.css.
  - Keep the font import in Storybook preview so component docs still match.

  Build

  - Replace the old tsgo plus copied CSS library build with tsdown.
  - Build component entrypoints and flatline.css through tsdown.
  - Use the Solid tsdown plugin so the package build handles Solid and CSS correctly.

## 0.2.1

### Patch Changes

- b855fa1: Combobox

  - Preserve caret position during editable text updates.
  - Keep Home and End focused on native caret movement in the input.
  - Fix controlled input clearing and restoration on Escape and blur.
  - Clear selected value before syncing edited text in controlled mode.
  - Open the full option list with ArrowUp or ArrowDown when there are no
    matches and the popup is closed.
  - Keep keyboard-highlighted items scrolled into view.
  - Prevent hover highlighting from auto-scrolling the list.
  - Stop list navigation from wrapping at the top and bottom.
  - Keep bottom list padding visible when scrolling the last item into view.

  Dropdown Menu And Styles

  - Disable the button press translate effect for dropdown menu triggers.
  - Tighten the combobox group separator border rendering.

## 0.2.0

### Minor Changes

- 89239a7: Initial release of components
