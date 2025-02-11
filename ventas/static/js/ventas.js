document.addEventListener('DOMContentLoaded', updateTotal);

function filterTable() {
    const searchBar = document.getElementById('searchBar').value.toLowerCase();
    const rows = document.getElementById('menuTable').getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        const productName = cells[2].innerText.toLowerCase();
        const productType = cells[2].getAttribute('data-type').toLowerCase();
        const productPrice = cells[3].getAttribute('data-price').toLowerCase();

        if (productName.includes(searchBar) || productType.includes(searchBar) || productPrice.includes(searchBar)) {
            rows[i].style.display = '';
        } else {
            rows[i].style.display = 'none';
        }
    }

    updateTotal();
}

function filterByDate() {
    const dateInput = document.getElementById('dateInput').value;
    const rows = document.getElementById('menuTable').getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        const rowDate = rows[i].getAttribute('data-date');

        if (rowDate === dateInput) {
            rows[i].style.display = '';
        } else {
            rows[i].style.display = 'none';
        }
    }

    updateTotal();
}

function updateTotal() {
    const rows = document.getElementById('menuTable').getElementsByTagName('tr');
    let total = 0;

    for (let i = 0; i < rows.length; i++) {
        if (rows[i].style.display !== 'none') {
            const price = parseInt(rows[i].getElementsByTagName('td')[3].getAttribute('data-price'));
            total += price;
        }
    }

    document.getElementById('total-amount').innerText = `$${total}`;
}

document.querySelector('.back-button').addEventListener('click', function () {
    window.history.back(); // Esto redirige a la página anterior en el historial del navegador
});
