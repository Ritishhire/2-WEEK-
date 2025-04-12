const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');

const API_URL = 'https://api.api-ninjas.com/v1/quotes';
const API_KEY = 'HYStYCxciZfYVDEr4nXs3A==laOjxlRfKoYhVt7F'; // Replace with your actual API key

// Set a random gradient background from 0 to 19
function setRandomBackground() {
  const randomIndex = Math.floor(Math.random() * 20);
  document.body.className = `gradient-${randomIndex}`;
}

async function getQuote() {
  quoteEl.textContent = 'Loading...';
  authorEl.textContent = '';
  setRandomBackground();

  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'X-Api-Key': API_KEY,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) throw new Error("Failed to fetch quote");

    const data = await response.json();
    const { quote, author } = data[0];

    quoteEl.textContent = `"${quote}"`;
    authorEl.textContent = `— ${author}`;

    // Trigger fade-in effect
    const box = document.querySelector('.quote-box');
    box.classList.remove('fade-in');
    void box.offsetWidth; // force reflow
    box.classList.add('fade-in');

  } catch (err) {
    quoteEl.textContent = "Oops! Couldn't fetch quote.";
    console.error(err);
  }
}

function copyQuote() {
  const quote = quoteEl.textContent;
  const author = authorEl.textContent;
  const full = `${quote} ${author}`;
  navigator.clipboard.writeText(full).then(() => {
    alert("✅ Quote copied to clipboard!");
  });
}

function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}

getQuote();
