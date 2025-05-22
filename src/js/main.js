import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import {updateCartNum, loadHeaderFooter } from "./utils.mjs";

console.log("⚡ main.js is running");

const dataSource = new ProductData("tents");
const listElement = document.querySelector('.product-list');
if (listElement) {
  const dataSource = new ProductData();
  const myList = new ProductList('tents', dataSource, listElement);
  myList.init();
}


//The number of items in the cart (header)
updateCartNum();

// To call the header and footer partials
loadHeaderFooter();
