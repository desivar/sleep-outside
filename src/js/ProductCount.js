function updateCartCount() {
  // Retrieve cart items from localStorage
  const cartItems = JSON.parse(localStorage.getItem("so-cart")) || [];

  // Get the cart count element
  const cartCountElement = document.getElementById("cartCount");

  // Set the badge text to the number of items in the cart
  cartCountElement.textContent = cartItems.length;
}

// Call updateCartCount when the page loads to display the correct count
updateCartCount();

// Listen for custom event to update cart count dynamically when the addToCart btn is clicked
window.addEventListener("cartUpdated", updateCartCount);