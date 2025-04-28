


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



  
