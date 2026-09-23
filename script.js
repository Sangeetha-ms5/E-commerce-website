const products = [
  { id: 1, name: "Sneakers", price: 59.99, image: "images/sneakers.jpeg" },
  { id: 2, name: "Backpack", price: 39.99, image: "images/backpack.jpeg" },
  { id: 3, name: "Watch", price: 89.99, image: "images/watch.jpeg" },
  { id: 4, name: "Bangles", price: 29.99, image: "images/bangles.jpeg" },
  { id: 5, name: "Sunglasses", price: 19.99, image: "images/sunglasses.jpeg" },
  { id: 6, name: "Smartphone", price: 299.99, image: "images/smartphone.jpeg" },
  { id: 7, name: "Wallet", price: 25.99, image: "images/wallet.svg" },
  { id: 8, name: "Shirt", price: 45.50, image: "images/shirt.jpeg" },
  { id: 9, name: "Headphones", price: 34.99, image: "images/headphone.jpeg" },
  { id: 10, name: "Water Bottle", price: 15.00, image: "images/waterbottle.jpeg" }
];


const productList = document.getElementById("product-list");

products.forEach(product => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
    <img src="${product.image}" alt="${product.name}" class="product-img" />
    <h3>${product.name}</h3>
    <p>Price: $${product.price.toFixed(2)}</p>
    <button onclick="addToCart(${product.id})">Add to Cart</button>
  `;
  productList.appendChild(div);
});

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(id) {
  const item = products.find(p => p.id === id);
  const existing = cart.find(p => p.id === id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${item.name} added to cart!`);
}
