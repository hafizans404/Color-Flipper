// Get the "New Colour" button element and the element displaying the current color
const newColourBtnElement = document.getElementById('new-colour-button');
const currentColourElement = document.getElementById('current-colour');

// Array containing characters representing hexadecimal values
const hexValues = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'
];

// Function to get a random hexadecimal character
function getRandomHexValue() {
    const randomIndexPosition = Math.floor(Math.random() * hexValues.length);
    const randomHexValue = hexValues[randomIndexPosition];
    return randomHexValue;
}

// Function to generate a random hexadecimal string of a specified length
function getRandomHexString(stringLength) {
    let hexString = '';
    for (let i = 0; i < stringLength; i++) {
        hexString += getRandomHexValue();
    }
    return hexString;
}

// Add an event listener to the "New Colour" button
newColourBtnElement.addEventListener('click', function () {
    // Generate a random hexadecimal string of length 6
    const randomHexString = '#' + getRandomHexString(6);

    // Set the background color of the body to the generated color
    document.body.style.setProperty('background-color', randomHexString);

    // Update the text displayed in the current color element
    currentColourElement.textContent = randomHexString;
});



// Function to copy text to the clipboard
function copyTextToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

// Add an event listener to the "Copy Text to Clipboard" button
copyToClipboardButton.addEventListener('click', function () {
    const currentColor = currentColourElement.textContent;
    copyTextToClipboard(currentColor);
    
    // Display a message to indicate that the text has been copied (optional)
    alert('Color code copied to clipboard: ' + currentColor);
});
