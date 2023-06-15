// quotes.js should be included before this file in popup.html
// So we can directly use the quotes array

// Get the button and quote element from the DOM
const generateButton = document.getElementById('generate');
const quoteElement = document.getElementById('quote');

// Add event listener to the button
generateButton.addEventListener('click', generateQuote);

function generateQuote() {
  // Generate a random index into the quotes array
  const randomIndex = Math.floor(Math.random() * quotes.length);
  // Get the quote at the random index
  const randomQuote = quotes[randomIndex];
  // Set the text content of the quote element to the random quote
  quoteElement.textContent = randomQuote;
}
