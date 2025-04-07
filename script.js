let time = 3600;
const countdown = document.getElementById('countdown');

function formatTime(seconds) {
  const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const s = String(seconds % 60).padStart(2, '0');
  return `${h}:${m}:${s}`;
}

setInterval(() => {
  if (time > 0) {
    time--;
    countdown.textContent = formatTime(time);
  }
}, 1000);

document.getElementById('loginBtn').addEventListener('click', function() {
  document.getElementById('loginModal').style.display = "block";
});

window.onclick = function(event) {
  if (event.target === document.getElementById('loginModal')) {
    document.getElementById('loginModal').style.display = "none";
  }
};

function startApp() {
  gapi.load('auth2', function() {
    gapi.auth2.init({
      client_id: 'YOUR_GOOGLE_CLIENT_ID',
    }).then(function(auth2) {
      attachSignin(document.getElementById('googleLoginBtn'), auth2);
    });
  });
}

function attachSignin(element, auth2) {
  auth2.attachClickHandler(element, {}, function(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Email: ' + profile.getEmail());
    document.getElementById('loginModal').style.display = "none";
  });
}

startApp();

document.getElementById('emailLoginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email && password) {
    console.log('Logging in with email:', email);
    document.getElementById('loginModal').style.display = "none";
  } else {
    alert('Please fill in both fields.');
  }
});

const productContainer = document.getElementById('product-cards');

function formatPrice(price) {
  return price.toLocaleString('en-IN');
}

products.forEach(product => {
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');
  productCard.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h4>${product.name}</h4>
    <p>Rs ${formatPrice(product.price)}</p>
    <p>⭐ ${product.rating}</p>
    <button onclick="addToCart(${product.id})">Add to Cart</button>
  `;
  productContainer.appendChild(productCard);
});


function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const product = products.find(p => p.id === productId);

  if (!product) {
    console.log("Product not found!");
    return;
  }

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));

  updateCartCount(); 
}


function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartCount = document.getElementById('cartCount');
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);


  if (totalItems > 0) {
    cartCount.textContent = totalItems;
    cartCount.style.visibility = 'visible'; 
  } else {
    cartCount.style.visibility = 'hidden';
  }
}


function toggleSearch() {
  document.querySelector('.search-input').style.display = 'block'; // Show input
  document.querySelector('.search-icon').style.display = 'none';   // Hide icon
  document.querySelector('.search-input').focus();                // Focus on the input
}



// Product modal functions
function openProductModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  // Set product details
  document.getElementById('modalProductImg').src = product.image;
  document.getElementById('modalProductName').textContent = product.name;
  document.getElementById('modalProductPrice').textContent = `Rs. ${product.price}`;
  document.getElementById('modalProductRating').innerHTML = `${"⭐".repeat(product.rating)}${"☆".repeat(5 - product.rating)}`;
  document.getElementById('modalProductDiscount').textContent = product.discount;
  
  // Generate a description if one doesn't exist
  const description = product.description || 
    `${product.name} is one of our best selling products, known for its excellent quality and durability. This item is highly rated by our customers, with an average rating of ${product.rating} out of 5 stars. Currently available at a special discount of ${product.discount}.`;
  
  document.getElementById('modalProductDescription').textContent = description;

  // Create thumbnail images (including the main image and some placeholders)
  const thumbnailsContainer = document.getElementById('imageThumbnails');
  thumbnailsContainer.innerHTML = '';
  
  // Add main image as first thumbnail
  const mainThumb = document.createElement('div');
  mainThumb.className = 'image-thumbnail active';
  mainThumb.innerHTML = `<img src="${product.image}" alt="${product.name}" onclick="changeMainImage('${product.image}', this)">`;
  thumbnailsContainer.appendChild(mainThumb);
  
  // Add 3 placeholder thumbnails with different angles
  for (let i = 1; i <= 3; i++) {
    const thumb = document.createElement('div');
    thumb.className = 'image-thumbnail';
    // Using the same image but in real app you'd have different angle images
    thumb.innerHTML = `<img src="${product.image}" alt="${product.name} view ${i}" onclick="changeMainImage('${product.image}', this)">`;
    thumbnailsContainer.appendChild(thumb);
  }

  // Set up reviews
  const reviewContainer = document.getElementById('customerReviews');
  reviewContainer.innerHTML = '';

  // Display real reviews if available, otherwise use sample reviews
  const productReviews = product.reviews || reviews;
  
  productReviews.forEach(r => {
    reviewContainer.innerHTML += `
      <div class="review">
        <img src="${r.image}" alt="${r.name}">
        <div class="review-content">
          <strong>${r.name}</strong>
          <div class="review-stars">${'⭐'.repeat(r.rating)}</div>
          <p>${r.review}</p>
        </div>
      </div>
    `;
  });

  // Set up quantity buttons
  document.getElementById('decreaseQuantity').onclick = function() {
    const quantityInput = document.getElementById('productQuantity');
    if (quantityInput.value > 1) {
      quantityInput.value = parseInt(quantityInput.value) - 1;
    }
  };

  document.getElementById('increaseQuantity').onclick = function() {
    const quantityInput = document.getElementById('productQuantity');
    if (quantityInput.value < 10) {
      quantityInput.value = parseInt(quantityInput.value) + 1;
    }
  };

  // Set up add to cart button
  document.getElementById('modalAddToCartBtn').onclick = function() {
    const quantity = parseInt(document.getElementById('productQuantity').value);
    addToCartWithQuantity(productId, quantity);
    closeProductModal();
  };

  // Display the modal
  document.getElementById('productModal').style.display = "flex";
}

function closeProductModal() {
  document.getElementById('productModal').style.display = "none";
}

function changeMainImage(src, thumbnailElement) {
  // Update main image
  document.getElementById('modalProductImg').src = src;
  
  // Update active thumbnail
  const thumbnails = document.querySelectorAll('.image-thumbnail');
  thumbnails.forEach(thumb => thumb.classList.remove('active'));
  thumbnailElement.parentElement.classList.add('active');
}

function addToCartWithQuantity(productId, quantity) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const product = products.find(p => p.id === productId);

  if (!product) {
    console.log("Product not found!");
    return;
  }

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ ...product, quantity: quantity });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  
  // Show a confirmation message
  alert(`Added ${quantity} ${quantity > 1 ? 'items' : 'item'} to your cart!`);
}