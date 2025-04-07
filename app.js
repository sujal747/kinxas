window.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("product-cards");

  products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <span class="discount-badge">${product.discount}</span>
      <div class="product-image" onclick="openProductModal(${product.id})">
        <img src="${product.image}" alt="${product.name}" />
      </div>
      <h4 class="product-name" onclick="openProductModal(${product.id})">${product.name}</h4>
      <div class="rating">${"⭐".repeat(product.rating)}${"☆".repeat(5 - product.rating)}</div>
      <div class="price">Rs. ${product.price}</div>
      <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
    `;

    container.appendChild(card);
  });

  // Add event listeners to the cart buttons
  const buttons = document.querySelectorAll(".add-to-cart-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.stopPropagation(); // Prevent modal from opening when clicking the button
      const productId = parseInt(this.getAttribute("data-id"));
      addToCart(productId); // This uses the function from script.js
    });
  });
});