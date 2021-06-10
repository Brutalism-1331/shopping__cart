/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// DONE: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  //clear innerHTML = '' using queryselector
  document.tbody.innerHTML = '';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body - like above
  //find using queryselector
  let tableBody = document.querySelector('tbody');

  // DONE: Iterate over the items in the cart - for loop through cart.items array
  for (let i = 0; i < cart.items.length; i++) {
  // DONE: Create a TR - document.createelement
    let tr = document.createElement('tr');
  }
  // TODO: Create a TD for the delete link, quantity,  and the item - document.createelement, give content, append to row
  let td = document.createElement('td');
  // td.textContent = cart.items;

  // TODO: Add the TR to the TBODY and each of the TD's to the TR, append row to tbody, window to the dom

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage - we have a method for that, saveToLocalStorage()
  Cart.prototype.saveToLocalStorage();
  // TODO: Re-draw the cart table - showCart()

}

// This will initialize the page and draw the cart on screen
renderCart();
