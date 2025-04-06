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