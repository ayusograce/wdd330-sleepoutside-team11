import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import {updateCartNum } from "./utils.mjs";

console.log("⚡ main.js is running");

const dataSource = new ProductData("tents");
const element = document.querySelector(".product-list");
const productList = new ProductList("Tents", dataSource, element);

productList.init();

//The number of items in the cart (header)
updateCartNum();
