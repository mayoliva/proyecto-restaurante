function goBack() {
    window.location.href = "../Menú/menu.html";
}

let totalAmount = 0;

const products = [
    { id: 1, name: "Sandwich", price: 2000 },
    { id: 2, name: "Pancakes", price: 1500 },
    { id: 3, name: "Burger", price: 3000 },
    { id: 4, name: "Hot Dog", price: 1500 },
];

const productList = document.getElementById('productList');

products.forEach(product => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <button onclick="decrease(${product.id})">-</button>
            <span id="quantity-${product.id}">0</span>
            <button onclick="increase(${product.id})">+</button>
        </td>
        <td>${product.name}</td>
        <td id="price-${product.id}">$${product.price}</td>
    `;
    productList.appendChild(row);
});

function increase(id) {
    const quantitySpan = document.getElementById(`quantity-${id}`);
    const currentQuantity = parseInt(quantitySpan.textContent);
    quantitySpan.textContent = currentQuantity + 1;
    updateTotal(id, 1);
}

function decrease(id) {
    const quantitySpan = document.getElementById(`quantity-${id}`);
    const currentQuantity = parseInt(quantitySpan.textContent);
    if (currentQuantity > 0) {
        quantitySpan.textContent = currentQuantity - 1;
        updateTotal(id, -1);
    }
}

function updateTotal(id, change) {
    const product = products.find(p => p.id === id);
    totalAmount += product.price * change;
    document.getElementById('totalAmount').textContent = `$${totalAmount}`;
}

function confirmOrder() {
    alert("Pedido confirmado.");
}

function cancelOrder() {
    alert("Pedido cancelado.");
}
