//toggle search-button visiblity
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-button').onclick = () =>
{
    searchForm.classList.toggle('active');
}

//toggle login-form visibility
let loginForm = document.querySelector('.login-form');

document.querySelector('#login-button').onclick = () =>
{
    loginForm.classList.toggle('active');
}

// for login form validation
function handleLogin(event) {
    event.preventDefault(); // Prevent default form submission
    const email = document.querySelector('.login-form input[type="email"]').value.trim();
    const password = document.querySelector('.login-form input[type="password"]').value .trim();

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

    // For Stimulating Successful login
    alert("Login successful!");
}

let cartCount = 0; // initial cart count to 0

// For getting the cart count element
const cartCountElement = document.getElementById("cart-count");

// For initially hiding the cart count
cartCountElement.style.display = "none";

// Function to handle adding items to the cart
function handleAddToCart() {
  // Show the cart count if it's hidden
  if (cartCountElement.style.display === "none") {
    cartCountElement.style.display = "flex";
  }

  // For incrementing the cart count
  cartCount += 1;

  // For updating the cart count display
  cartCountElement.textContent = cartCount;

  // Showing an alert that the item was added to the cart
  alert("Item added to cart!");
}

// Adding event listeners to all grid cart buttons
const gridCartButtons = document.querySelectorAll(".cart-icon");

gridCartButtons.forEach((button) => {
  button.addEventListener("click", handleAddToCart);
});


