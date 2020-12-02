const postsContainer = document.getElementById('posts-container');
const loading = document.querySelector('.loader');
const filter = document.getElementById('filter');

// let limit = 5;
// let page = 1;

// Fetch posts from API
function getPosts() {
  const res = await fetch(
    ``
  );
  const data = await res.json();
  console.log(data);
  return data;
  return [{
    "userId": 1,
    "id": 3,
    "title" : "Hamilton Silva",
    "body" : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, dolores Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, dolores Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, dolores",
  },{
    "userId": 1,
    "id": 3,
    "title" : "Hamilton Silva",
    "body" : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, dolores Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, dolores Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, dolores",
  },{
    "userId": 1,
    "id": 3,
    "title" : "Hamilton Silva",
    "body" : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, dolores Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, dolores Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, dolores",
  },{
    "userId": 1,
    "id": 3,
    "title" : "Hamilton Silva",
    "body" : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, dolores Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, dolores Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, dolores",
  },{
    "userId": 1,
    "id": 3,
    "title" : "Hamilton Silva",
    "body" : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, dolores Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, dolores Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, dolores",
  },];
}
var a = 1;
// Show posts in DOM
 function showPosts() {
  const posts =  getPosts();

  posts.forEach(post => {
    const postEl = document.createElement('div');
    postEl.classList.add('post');
    postEl.innerHTML = `
      <div class="number">${a}</div>
      <div class="post-info">
        <h2 class="post-title">${post.name}</h2>
        <h3 class="post-title">${post.email}</h3>
        <p class="post-body">${post.mensagem}</p>
      </div>
    `;
    a++;
    postsContainer.appendChild(postEl);
  });
}

// Show loader & fetch more posts
function showLoading() {
  loading.classList.add('show');

  setTimeout(() => {
    loading.classList.remove('show');

    setTimeout(() => {
      page++;
      showPosts();
    }, 300);
  }, 1000);
}

// Filter posts by input
function filterPosts(e) {
  const term = e.target.value.toUpperCase();
  const posts = document.querySelectorAll('.post');

  posts.forEach(post => {
    const title = post.querySelector('.post-title').innerText.toUpperCase();
    const body = post.querySelector('.post-body').innerText.toUpperCase();

    if (title.indexOf(term) > -1 || body.indexOf(term) > -1) {
      post.style.display = 'flex';
    } else {
      post.style.display = 'none';
    }
  });
}

// Show initial posts
showPosts();

window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 5) {
    showLoading();
  }
});

filter.addEventListener('input', filterPosts);
