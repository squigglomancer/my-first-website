// Select the button and the counter span
const button = document.getElementById('countButton');
const counter = document.getElementById('counter');

// Initialize a counter variable
let count = 0;

// Add a click event listener to the button
button.addEventListener('click', () => {
	count++; // Increment the counter
	counter.textContent = count; // Update the displayed number
});