# URL Fetcher Chrome Extension

## Overview

The URL Fetcher Chrome Extension allows users to interact with and manage URLs in their browser. The extension provides three main functions: fetching the current tab's URL, saving a manually inputted URL, and deleting all stored URLs with a double-click action.

## Features

1. **Fetch Current Tab's URL:** Clicking on the "Fetch Tab" button will retrieve and display the URL of the currently active tab.

2. **Save Inputted URL:** Users can manually input a URL into the provided input field and click the "Save Input" button to store it.

3. **Delete All Stored URLs:** Double-clicking on any stored URL in the extension's interface will delete all the stored URLs.

## Tools Used

- **HTML:** Used for structuring the extension's popup interface.
- **CSS:** Applied for styling and layout of the extension popup.
- **JavaScript:** Implemented for handling the extension's functionality.
- **manifest.json:** Configuration file containing permissions and other extension details for the Chrome Extension API.

## Installation

1. Clone or download the repository to your local machine.

2. Open Google Chrome and navigate to `chrome://extensions/`.

3. Enable "Developer mode" in the top right corner.

4. Click on "Load unpacked" and select the directory where the extension files are located.

5. The extension icon should appear in the Chrome toolbar.

## Usage

1. Click on the extension icon in the Chrome toolbar to open the popup interface.

2. Use the "Fetch Tab" button to get the URL of the currently active tab.

3. Input a URL manually and click the "Save Input" button to store it.

4. Double-click on any stored URL to delete all stored URLs.

## Permissions

- **activeTab:** Required to access the current tab's URL.

## Contribution

Feel free to contribute to the development of this extension by submitting issues or pull requests.
