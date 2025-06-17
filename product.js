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

products.forEach(product => {
  const card = document.createElement('div');
  card.classList.add('card');

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <div class="card-content">
      <h2>${product.name}</h2>
      <p>${product.description}</p>
      <p><strong>$${product.price.toFixed(2)}</strong></p>
    </div>
  `;

  gallery.appendChild(card);
});
