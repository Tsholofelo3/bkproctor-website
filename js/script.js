// Function to update subtotals & total in cart
function updateCartTotals() {
    let rows = document.querySelectorAll('.cart-table tbody tr');
    let total = 0;

    rows.forEach(row => {
        let price = parseFloat(row.children[2].textContent.replace('P', ''));
        let qtyInput = row.querySelector('input[type="number"]');
        let qty = parseInt(qtyInput.value);
        let subtotalCell = row.children[4];

        let subtotal = price * qty;
        subtotalCell.textContent = `P${subtotal.toFixed(2)}`;

        total += subtotal;
    });

    // Update total price in summary
    let totalDisplay = document.querySelector('.cart-summary strong');
    if (totalDisplay) {
        totalDisplay.textContent = `Total: P${total.toFixed(2)}`;
    }
}

// Event listener for quantity changes in cart
document.addEventListener('input', function (e) {
    if (e.target.matches('.cart-table input[type="number"]')) {
        updateCartTotals();
    }
});

// Alert when Add to Cart buttons are clicked (shop.html)
document.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON' && e.target.textContent === 'Add to Cart') {
        alert('Item added to cart successfully!');
        console.log('Add to Cart clicked:', e.target.parentElement.querySelector('h3').textContent);
    }
});

// Update Cart button handler (cart.html)
document.addEventListener('click', function (e) {
    if (e.target.textContent === 'Update Cart') {
        alert('Cart updated!');
        updateCartTotals();
    }
});

// Checkout button handler
document.addEventListener('click', function (e) {
    if (e.target.textContent === 'Proceed to Checkout') {
        alert('Proceeding to checkout...');
    }
});
