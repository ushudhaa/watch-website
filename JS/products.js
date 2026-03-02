// Toggle search form visibility
let searchForm = document.querySelector('.search-form');
document.querySelector('#search-button').onclick = () => {
    searchForm.classList.toggle('active');
};

// Toggle login form visibility
let loginForm = document.querySelector('.login-form');
document.querySelector('#login-button').onclick = () => {
    loginForm.classList.toggle('active');
};

// Login form validation
function handleLogin(event) {
    event.preventDefault(); // Prevent default form submission

    const email = document.querySelector('.login-form input[type="email"]').value.trim();
    const password = document.querySelector('.login-form input[type="password"]').value.trim();

    // Email validation
    if (!email.includes('@') || !email.includes('.')) {
        alert("Please enter a valid email address.");
        return;
    }

    // Password length validation
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    // For simulating a successful login
    alert("Login successful!");
}


// Selecting all grid items
const gridItems = document.querySelectorAll('.grid-item');

// Adding event listener  grid item
gridItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    // When hovering over an item, this will make the others semi-transparent
    gridItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.style.opacity = '0.5'; 
      }
    });
  });

  item.addEventListener('mouseleave', () => {
    // When mouse leaves the item, it will reset the opacity of all items
    gridItems.forEach(otherItem => {
      otherItem.style.opacity = '1'; 
    });
  });
});

let cartCount = 0; // initial cart count to 0

// Getting the cart count element
const cartCountElement = document.getElementById("cart-count");

// Initially hiding the cart count
cartCountElement.style.display = "none";

// Function to handle adding items to the cart
function handleAddToCart() {
  // For showing the cart count if it's hidden
  if (cartCountElement.style.display === "none") {
    cartCountElement.style.display = "flex";
  }

  // For incrementing the cart count
  cartCount += 1;

  // Update the cart count display
  cartCountElement.textContent = cartCount;

  // Showing an alert that the item was added to the cart
  alert("Item added to cart!");
}

// Adding event listeners to all grid cart buttons
const gridCartButtons = document.querySelectorAll(".cart-front");

gridCartButtons.forEach((button) => {
  button.addEventListener("click", handleAddToCart);
});

// Adding event listeners to all new grid cart buttons
const newGridCartButtons = document.querySelectorAll(".newGrid-cart-front");

newGridCartButtons.forEach((button) => {
  button.addEventListener("click", handleAddToCart);
});
