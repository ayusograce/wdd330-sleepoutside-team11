import { getLocalStorage, loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const cart = JSON.parse(localStorage.getItem('so-cart')) || [];

if (cart.length > 0) {
  document.querySelector('.cart-footer').classList.remove('hide');
}

// Calculate the total by adding the price of each product
const total = cart.reduce((sum, item) => sum + item.FinalPrice, 0);
// Insert total
document.querySelector('.cart-total').textContent = `Total: $${total.toFixed(2)}`;

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Images?.PrimarySmall || 'images/fallback.jpg'}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

renderCartContents();