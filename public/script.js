


// _______________________________________________________________

// Retrieve the counter from localStorage or initialize it to 0
let count = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 0;

// Select the button and the counter display
const button = document.getElementById('countButton');
const counter = document.getElementById('counter');

// Display the current count
counter.textContent = count;

// Set up an event listener on the button
button.addEventListener('click', () => {
    count++; // Increment the counter
    counter.textContent = count; // Update the text content of the counter
    localStorage.setItem('counter', count); // Store the updated counter value in localStorage
});






// _______________________________________________________________
// This code is for the global counter functionality
// _______________________________________________________________

// Set up a WebSocket connection to the server
const socket = new WebSocket('ws://localhost:8080');

// Select the button and the counter display
const globalButton = document.getElementById('globalCountButton');
const globalCounter = document.getElementById('globalCounter');

// _______________________________________________________________

// Listen for messages from the server
socket.addEventListener('message', (event) => {
    const data = JSON.parse(event.data);
    if (data.type === 'globalCount') {
        const globalCount = data.count;
        globalCounter.textContent = globalCount;
    }
});

// _______________________________________________________________

// When the button is clicked, send an "increment" request to the server
globalButton.addEventListener('click', () => {
    socket.send(JSON.stringify({ type: 'increment' }));
});

// _______________________________________________________________

// Close the WebSocket connection when the page is unloaded
window.addEventListener('beforeunload', () => {
    socket.close();
});

// _______________________________________________________________

  
