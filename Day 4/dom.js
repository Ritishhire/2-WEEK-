// dom.js
export function renderPosts(posts) {
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = ''; // Clear loading message
  
    posts.slice(0, 10).forEach(post => {
      const postEl = document.createElement('div');
      postEl.style = `
        background: #f9f9f9;
        padding: 10px;
        margin-bottom: 10px;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      `;
      postEl.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body.replace(/\n/g, '<br>')}</p>
      `;
      postsContainer.appendChild(postEl);
    });
  }
  