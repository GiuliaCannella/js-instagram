const posts = [
  {
    id: 1,
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit voluptatibus facere cumque ipsam eaque aliquid necessitatibus non, esse culpa ea modi, nisi atque. Ut culpa, temporibus nostrum quidem quaerat reiciendis.",
    image: "https://picsum.photos/600/400",
    author: {
      name: "Giulia Cannella",
      image: "https://picsum.photos/300/300",
    },
    likes: 80,
    created: "2023-05-06",
  },
  {
    id: 2,
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit voluptatibus facere cumque ipsam eaque aliquid necessitatibus non, esse culpa ea modi, nisi atque. Ut culpa, temporibus nostrum quidem quaerat reiciendis.",
    image: "https://picsum.photos/600/400",
    author: {
      name: "Manuel Cappello",
      image: "https://picsum.photos/300/300",
    },
    likes: 150,
    created: "2023-09-06",
  },
  {
    id: 3,
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit voluptatibus facere cumque ipsam eaque aliquid necessitatibus non, esse culpa ea modi, nisi atque. Ut culpa, temporibus nostrum quidem quaerat reiciendis.",
    image: "https://picsum.photos/600/400",
    author: {
      name: "Philipp Consip",
      image: "https://picsum.photos/300/300",
    },
    likes: 360,
    created: "2023-12-08",
  },
  {
    id: 4,
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit voluptatibus facere cumque ipsam eaque aliquid necessitatibus non, esse culpa ea modi, nisi atque. Ut culpa, temporibus nostrum quidem quaerat reiciendis.",
    image: "https://picsum.photos/600/400",
    author: {
      name: "Mario Rossi",
      image: "https://picsum.photos/300/300",
    },
    likes: 20,
    created: "2023-11-27",
  },
  {
    id: 5,
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit voluptatibus facere cumque ipsam eaque aliquid necessitatibus non, esse culpa ea modi, nisi atque. Ut culpa, temporibus nostrum quidem quaerat reiciendis.",
    image: "https://picsum.photos/600/400",
    author: {
      name: "Antonello Venditti",
      image: "https://picsum.photos/300/300",
    },
    likes: 56810,
    created: "2024-01-29",
  },
];

const postContainer = document.querySelector(".post-container");

// Metodo per costruire la card dinamica
const createCard = (post) => {
  return `
    <div
          class="col-12 justify-content-center d-flex align-items-center mt-4 flex-wrap"
        >
      <div class="post-card bg-white">
      <div class="row">
        <div class="col-12">
          <div class="row d-flex align-items-center">
            <div class="col-2">
              <img src="${post.author.image}" class="profile" alt="" />
            </div>
            <div class="col-10 flex-column d-flex">
              <h2 class="fs-6 m-0">${post.author.name}</h2>
              <p class="text-secondary m-0 post-date">${post.created}</p>
            </div>
          </div>
        </div>
        <div class="col-12">
          <p class="post-description my-3">${post.content}</p>
        </div>
        <div class="col-12">
          <img src="${post.image}" class="img-fluid" alt="">
        </div>
        <div class="col-12 mt-3 d-flex align-items-center justify-content-between">
          <button type="button" data-post-id="${post.id}" class="btn btn-light js-like-button"><i class="fa-solid fa-thumbs-up"></i> Mi piace</button>
          <div class="mt-3 ">
              <p>Piace a <span class="fw-bold" id="post-counter-${post.id}">${post.likes}</span> persone</p>
          </div>
         
        </div>
      </div>
    </div>
    </div>
      `;
};

let cards = "";
posts.forEach((post) => {
  cards += createCard(post);
});

postContainer.innerHTML = cards;

// recupero bottone
const buttonsLike = document.querySelectorAll(".js-like-button");

for (const button of buttonsLike) {
  // aggancio l'event listener al bottone
  button.addEventListener("click", () => {
    const idPost = button.getAttribute('data-post-id');
    console.log(idPost);
    const counter = document.getElementById(`post-counter-${idPost}`)
    console.log(counter);
    let likes = parseInt(counter.innerText);
    
    if (button.classList.contains('thumb-verde')) {
        button.classList.remove('thumb-verde')
        button.innerHTML = '<i class="fa-solid fa-thumbs-up"></i> Mi piace'

        counter.innerText = --likes;
    }else {
        button.classList.add('thumb-verde')
        counter.innerText = ++likes;
        button.innerHTML = '<i class="fa-solid fa-thumbs-down"></i> Non mi piace piu'
    }
  });
}
