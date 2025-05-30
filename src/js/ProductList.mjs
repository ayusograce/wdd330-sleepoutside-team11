import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product) {
  return `
    <li class="product-card">
      <a href="/product_pages/?product=${product.Id}">
        <img src="${product.Images.PrimaryMedium}" alt="${product.Name}">
        <h3>${product.Brand.Name}</h3>
        <p>${product.NameWithoutBrand}</p>
        <p class="product-card__price">$${product.FinalPrice}</p>
      </a>
      <a class="view-details-btn" href="/product_pages/index.html?product=${product.Id}">View Details</a>
    </li>
    `;
}

export default class ProductList {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }

  async init() {
    const list = await this.dataSource.getData(this.category);
    this.renderList(list);
    const titleElement = document.querySelector(".title");
    if (titleElement) {
      titleElement.textContent = this.category;
    }

  }

    renderList(list) {
    if (this.listElement) {
      renderListWithTemplate(productCardTemplate, this.listElement, list);
    } else {
      console.warn("ProductList: listElement is null, skipping render.");
    }
  }

}