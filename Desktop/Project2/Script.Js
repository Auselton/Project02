const form = document.getElementById('search-form');
const input = document.getElementById('search-input');
const gifGrid = document.getElementById('gif-grid');
const API_KEY = 'hQ93IuvbbKDlgVGx9cOO9T7XddtSsfsI';

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const query = input.value.trim();

  if (!query) return;

  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(query)}&api_key=${API_KEY}&limit=12`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    displayGifs(data.data);
  } catch (error) {
    console.error('Error fetching GIFs:', error);
  }
});

function displayGifs(gifs) {
  gifGrid.innerHTML = '';
  gifs.forEach(gif => {
    const img = document.createElement('img');
    img.src = gif.images.fixed_width.url;
    img.alt = gif.title;
    gifGrid.appendChild(img);
  });
}
