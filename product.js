const products = [
  {
    name: "Train",
    price: 24.99,
    image: "/imgs/train1.jpg",
    description: ""
  },
  {
    name: "Boat",
    price: 18.5,
    image: "/imgs/boat1.jpg",
    description: ""
  },
  {
    name: "Plane",
    price: 12.99,
    image: "/imgs/plane1.jpg",
    description: ""
  },
  {
    name: "Car",
    price: 12.99,
    image: "/imgs/car1.jpg",
    description: ""
  },
  {
    name: "Blocks",
    price: 12.99,
    image: "/imgs/block1.jpg",
    description: ""
  },
  {
    name: "Rainbow Train",
    price: 12.99,
    image: "/imgsr/train1.jpg",
    description: ""
  },
  {
    name: "Rainbow Boat",
    price: 12.99,
    image: "/imgsr/boat1.jpg",
    description: ""
  },
  {
    name: "Rainbow Plane",
    price: 12.99,
    image: "/imgsr/plane1.jpg",
    description: ""
  },
  {
    name: "Rainbow Car",
    price: 12.99,
    image: "/imgsr/car.jpg",
    description: ""
  },
  {
    name: "Rainbow Blocks",
    price: 12.99,
    image: "/imgsr/kids.jpg",
    description: ""
  },
];

const gallery = document.getElementById('product-gallery');

products.forEach((product, index) => {
  const card = document.createElement('div');
  card.classList.add('card');

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <div class="card-content">
      <h2>${product.name}</h2>
      <strong>$${product.price.toFixed(2)}</strong>
      <button class="btn btn-primary mt-2" onclick="showDescription(this)" data-index="${index}">More Info</button>
    </div>
  `;

  gallery.appendChild(card);
});

function showDescription(button) {
  const index = button.getAttribute('data-index');
  const product = products[index];
  document.getElementById('productModalLabel').innerText = product.name;
  document.getElementById('modalDescription').innerText = product.description || "No description available.";

  const modal = new bootstrap.Modal(document.getElementById('productModal'));
  modal.show();
}

