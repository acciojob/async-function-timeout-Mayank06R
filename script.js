//your JS code here. If required.
// Function to simulate delay using async/await
function delayWithPromise(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Main logic for handling the button click event
document.getElementById('btn').addEventListener('click', async function () {
    // Retrieve user inputs
    const message = document.getElementById('text').value;
    const delay = parseInt(document.getElementById('delay').value, 10); // Convert to an integer
    
    // Clear the output div
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = '';

    // Validate inputs
    if (!message) {
        alert('Please enter a valid message.');
        return;
    }
    if (isNaN(delay) || delay < 0) {
        alert('Please enter a valid delay in milliseconds.');
        return;
    }

    // Simulate delay
    await delayWithPromise(delay);

    // Display the message after the delay
    outputDiv.textContent = message;
});