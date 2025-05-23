import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import {updateCartNum, loadHeaderFooter, getParam } from "./utils.mjs";

const category = getParam("category");
const dataSource = new ProductData();
const element = document.querySelector(".product-list");
const listing = new ProductList(category, dataSource, element);

listing.init();

//The number of items in the cart (header)
updateCartNum();

// To call the header and footer partials
loadHeaderFooter();