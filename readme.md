# Chrome Extension

This project is a simple Chrome Extension that allows users to save and manage leads (URLs). Users can add new leads, save the current tab URL, and delete all saved leads.

## Features

- Add a new lead from input
- Save the current tab URL as a lead
- Delete all saved leads
- Persist leads using `localStorage`

## Files

- `index.js`: Main JavaScript file containing the logic for the extension.
- `index.html`: HTML file for the extension's popup interface.
- `style.css`: CSS file for styling the extension's popup interface.

## Usage

1. Clone the repository to your local machine.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" using the toggle switch in the top right corner.
4. Click on "Load unpacked" and select the folder containing the cloned repository.
5. The extension should now be loaded and visible in the Chrome toolbar.

## Functions

### `createListItem()`

Creates a list item with an anchor element and a hidden prefix span.

### `renderLeads()`

Renders the leads stored in the `myLeads` array to the DOM.

### `loadLeads()`

Loads leads from `localStorage`.

### `saveLeads()`

Saves the leads to `localStorage`.

## Event Listeners

- `inputBtn`: Adds a new lead from input when clicked.
- `tabBtn`: Saves the current tab URL as a lead when clicked.
- `deleteBtn`: Deletes all saved leads on double click.

## License

This project is licensed under the MIT License.
