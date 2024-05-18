let cart = [];
let total = 0;

function addToCart(bookName, price) {
    cart.push({ name: bookName, price: price });
    total += price;
    updateCart();
}

function removeFromCart(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = '';

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeFromCart(index);
        li.appendChild(removeButton);
        cartElement.appendChild(li);
    });

    document.getElementById('total').textContent = total;
}