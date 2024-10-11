let cart = [];
const products = [
    { id: 1, name: 'Product 1', price: 10.00 },
    { id: 2, name: 'Product 2', price: 15.00 },
    { id: 3, name: 'Product 3', price: 20.00 }
];
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productId = parseInt(button.parentElement.getAttribute('data-id'));
        addToCart(productId);
    });
});
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartUI();
}
function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;

    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <h4>${item.name}</h4> - $${item.price.toFixed(2)}
        `;
        cartItems.appendChild(cartItem);
        totalPrice += item.price;
    });

    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}
document.getElementById('cart-btn').addEventListener('click', () => {
    const cartSection = document.getElementById('cart-section');
    cartSection.classList.toggle('hidden');
});
document.getElementById('checkout-btn').addEventListener('click', () => {
    alert('Thank you for your purchase!');
    cart = [];
    updateCartUI();
    document.getElementById('cart-section').classList.add('hidden');
});
