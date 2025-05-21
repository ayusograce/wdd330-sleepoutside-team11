import { updateCartNum, loadHeaderFooter } from "./utils.mjs";
import { renderCartContents} from "./ShoppingCart.mjs";

//get the products from the cart
const cart = JSON.parse(localStorage.getItem("so-cart")) || [];

if (cart.length > 0) {
  document.querySelector(".cart-footer").classList.remove("hide");
}

// Calculate the total by adding the price of each product
const total = cart.reduce((sum, item) => sum + item.FinalPrice, 0);
// Insert total
document.querySelector(".cart-total").textContent =
  `Total: $${total.toFixed(2)}`;



renderCartContents();


//The number of items in the cart (header)
updateCartNum();

// To call the header and footer partials
loadHeaderFooter();
