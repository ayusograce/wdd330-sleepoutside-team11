import { loadHeaderFooter, getParam } from "../js/utils.mjs";
import ProductData from "../js/ProductData.mjs";
import ProductList from "../js/ProductList.mjs";

loadHeaderFooter();

const category = getParam("category");
const dataSource = new ProductData();
const element = document.querySelector(".product-list");
const listing = new ProductList(category, dataSource, element);

listing.init();