// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}


export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(param);
  return product
}

export function renderListWithTemplate(template, parentElement, list, position = "afterbegin", clear = false) {
  const htmlStrings = list.map(template);
  // if clear is true we need to clear out the contents of the parent.
  if (clear) {
    parentElement.innerHTML = "";
  }
  parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
}

export function renderWithTemplate(templateFn, parentElement, callback, data) {
  parentElement.innerHTML = templateFn;
  if(callback) {
    callback(data);
  }
}

export async function loadTemplate(path){
  const res = await fetch(path);
  const template = await res.text();
  return template;
}

export async function loadHeaderFooter(){
  const headerTemplate = await loadTemplate("/partials/header.html");
  const footerTemplate = await loadTemplate("/partials/footer.html");
  const headerElement = document.querySelector("#main-header");
  const footerElement = document.querySelector("#main-footer");
  renderWithTemplate(footerTemplate, footerElement);
  renderWithTemplate(headerTemplate, headerElement, updateCartNum);
  }

// Function to show the number of elements in the cart
export function updateCartNum(){
  const cart = getLocalStorage("so-cart") || [];
  const number = cart.length;

  const cartIcon = document.querySelector(".count-cart");

  if (cartIcon){
    cartIcon.textContent = number;
    cartIcon.style.display = "inline-block";
  }
}

export function alertMessage(message, scroll = true) {
  const alert = document.createElement("div");
  alert.classList.add("alert-box");
  alert.innerHTML = `<p>${message}</p>`;

  const main = document.querySelector("main");
  if (main) {
    main.prepend(alert);
  }

  if (scroll) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  setTimeout(() => {
    alert.remove();
  }, 5000);
}

export function removeAllAlerts() {
  const alerts = document.querySelectorAll(".alert-box");
  alerts.forEach(alert => alert.remove());
}
