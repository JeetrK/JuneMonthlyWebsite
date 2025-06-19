const products = [
  {
    name: "Train",
    price: 24.99,
    image: "/imgs/train1.jpg",
    description: "Handcrafted birch train with wheels."
  },
  {
    name: "Boat",
    price: 18.5,
    image: "/imgs/boat1.jpg",
    description: "Soft and cuddly stuffed bear."
  },
  {
    name: "Plane",
    price: 12.99,
    image: "/imgs/plane1.jpg",
    description: "Colorful wooden puzzle blocks."
  },
  {
    name: "Car",
    price: 12.99,
    image: "/imgs/car1.jpg",
    description: "Colorful wooden puzzle blocks."
  },
  {
    name: "Blocks",
    price: 12.99,
    image: "/imgs/block1.jpg",
    description: "Colorful wooden puzzle blocks."
  },
  {
    name: "Rainbow Train",
    price: 12.99,
    image: "/imgsr/train1.jpg",
    description: "Colorful wooden puzzle blocks."
  },
  {
    name: "Rainbow Boat",
    price: 12.99,
    image: "/imgsr/boat1.jpg",
    description: "Colorful wooden puzzle blocks."
  },
  {
    name: "Rainbow Plane",
    price: 12.99,
    image: "/imgsr/plane1.jpg",
    description: "Colorful wooden puzzle blocks."
  },
  {
    name: "Rainbow Car",
    price: 12.99,
    image: "/imgsr/car.jpg",
    description: "Colorful wooden puzzle blocks."
  },
  {
    name: "Rainbow Blocks",
    price: 12.99,
    image: "/imgsr/kids.jpg",
    description: "Colorful wooden puzzle blocks."
  },
];

const gallery = document.getElementById('product-gallery');

products.forEach((product, index) => {
  const modalId = `modal-${index}`;
  const card = document.createElement('div');
  card.classList.add('card', 'm-3');
  card.style.width = '18rem';

  card.innerHTML = `
    <img src="${product.image}" class="card-img-top" alt="${product.name}">
    <div class="card-body">
      <h5 class="card-title">${product.name}</h5>
      <p class="card-text">$${product.price.toFixed(2)}</p>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${modalId}">
        More Info
      </button>
    </div>

    <div class="modal fade" id="${modalId}" tabindex="-1" aria-labelledby="${modalId}Label" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="${modalId}Label">${product.name}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <img src="${product.image}" class="img-fluid mb-3" alt="${product.name}">
            <p>${product.description}</p>
            <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  `;

  gallery.appendChild(card);
});

