let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartList = document.getElementById("cart-list");
let total = 0;

function renderCart() {
  cartList.innerHTML = ""; // Clear list
  total = 0;

  if(cart.length === 0) {
    cartList.innerHTML = "<li>Your cart is empty.</li>";
  } else {
    cart.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
      cartList.appendChild(li);
      total += item.price * item.quantity;
    });
  }

  document.getElementById("total").textContent = total.toFixed(2);
}

document.getElementById("clear-cart-btn").addEventListener("click", () => {
  localStorage.removeItem("cart");
  cart = [];
  renderCart();
});

renderCart();
