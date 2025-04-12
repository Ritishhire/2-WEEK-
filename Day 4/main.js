// main.js
import { fetchPosts } from './api.js';
import { renderPosts } from './dom.js';

async function startApp() {
  try {
    const posts = await fetchPosts();
    renderPosts(posts);
  } catch (error) {
    document.getElementById('posts').textContent = 'Error loading posts.';
    console.error(error);
  }
}

startApp();
