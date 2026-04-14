# @edo-w/flatline-solid

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
