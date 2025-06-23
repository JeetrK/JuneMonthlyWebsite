const products = [
  {
    name: "Train",
    image: "imgs/train1.jpg",
    description: "Embark on a charming journey with this beautiful handcrafted wooden train set. Engine and three interchangeable cars boast intricate details made from real beech wood. Large size (84cm L x 11cm H x 13cm W) with moving wheels and a fully ecological design (Age3+)"
  },
  {
    name: "Boat",
    image: "imgs/boat1.jpg",
    description: "Set sail for bathtub adventures with this adorable wooden boat. Made from solid Maine white pine, this handcrafted toy floats and features rounded edges for safety. Includes two peg lobster people. Size: 10.5W x 3.5H (All ages)"
  },
  {
    name: "Plane",
    image: "imgs/plane1.jpg",
    description: "Soar through imaginative skies with this classic wooden airplane. Handcrafted from sustainable Baltic birch wood with a safe natural harvest finish and a spinning propeller. Measures 3.5H x 7L x 7W (Age Toddlers)"
  },
  {
    name: "Car",
    image: "imgs/car1.jpg",
    description: "This heirloom-quality wooden car is a timeless treasure. Handcrafted from domestic and exotic hardwoods with a clear lacquer finish, this unique car will inspire generations of imaginative play. Please note potential choking hazards for small children. (All Ages)"
  },
  {
    name: "Blocks",
    image: "imgs/block1.jpg",
    description: "Build creativity and imagination with this high-quality, 72-piece block set. Made from naturally finished and smooth-sanded hardwood blocks, this set comes in a convenient wooden storage crate (13” L x 12” W x 2” H). (Age3+)"
  },
  {
    name: "Rain Train",
    image: "imgsr/train1.jpg",
    description: "Embark on a charming journey with this beautiful handcrafted wooden train set. Engine and three interchangeable cars boast intricate details made from real beech wood. Large size (84cm L x 11cm H x 13cm W) with moving wheels and a fully ecological design RAINBOW EDITION (Age3+)"
  },
  {
    name: "Rain Boat",
    image: "imgsr/boat1.jpg",
    description: "Set sail for bathtub adventures with this adorable wooden boat. Made from solid Maine white pine, this handcrafted toy floats and features rounded edges for safety. Includes two peg lobster people RAINBOW EDITION. Size: 10.5W x 3.5H (All ages)"
  },
  {
    name: "Rain Plane",
    image: "imgsr/plane1.jpg",
    description: "Soar through imaginative skies with this classic wooden airplane. Handcrafted from sustainable Baltic birch wood with a safe natural harvest finish and a spinning propeller RAINBOW EDITION. Measures 3.5H x 7L x 7W (Age Toddlers)"
  },
  {
    name: "Rain Car",
    image: "imgsr/car.jpg",
    description: "This heirloom-quality wooden car is a timeless treasure. Handcrafted from domestic and exotic hardwoods with a clear lacquer finish, this unique car will inspire generations of imaginative play. Please note potential choking hazards for small children RAINBOW EDITION. (All Ages)"
  },
  {
    name: "Rain Blocks",
    image: "imgsr/kids.jpg",
    description: "Build creativity and imagination with this high-quality, 72-piece block set. Made from naturally finished and smooth-sanded hardwood blocks, this set comes in a convenient wooden storage crate RAINBOW EDITION (13” L x 12” W x 2” H). (Age3+)"
  },
];
//Grabs the gallery container where the cards will be shown
const gallery = document.getElementById('product-gallery');
//builds one card per product and append it to the gallery
products.forEach((product, index) => {
  const card = document.createElement('div');
  card.classList.add('card');
 // Card markup
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <div class="card-content">
      <h2>${product.name}</h2>
      <button class="button-30 mt-2" onclick="showDescription(this)" data-index="${index}">More Info</button>
    </div>
  `;

  gallery.appendChild(card);
});
//description triggered by clicking more info button
function showDescription(button) {
  const index = button.getAttribute('data-index');
  const product = products[index];
// updates modal title text
  const modalTitle = document.getElementById('productModalLabel');
  modalTitle.innerText = product.name;

  // adds rainbow-text class if product name contains Rainbow, if not it is removed
  if (product.name.includes('Rain')) {
    modalTitle.classList.add('rainbow-text');
  } else {
    modalTitle.classList.remove('rainbow-text');
  }
 // fills the body of the modal with the long description
  document.getElementById('modalDescription').innerText = product.description || "No description available.";
//shows the bootstrap modal
  const modal = new bootstrap.Modal(document.getElementById('productModal'));
  modal.show();
}


