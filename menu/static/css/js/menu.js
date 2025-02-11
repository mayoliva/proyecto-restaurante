function showCloseModal() {
    document.getElementById('closeModal').style.display = 'flex';
    const now = new Date();
    const fecha = now.toLocaleDateString(); // Formato de fecha local
    const hora = now.toLocaleTimeString(); // Formato de hora local
    document.getElementById('fechaInicio').textContent = `${fecha} ${hora}`;
}

function closeModal() {
    document.getElementById('closeModal').style.display = 'none';
}

function acceptClose() {
    window.location.href = '../cierre/cierre.html';
}

function redirectionVentas() {
    window.location.href = "../ventas/ventas.html";
}

function redirectionPedidos() {
    window.location.href = "../pedidos/pedidos.html";
}

document.getElementById('cerrar-caja').addEventListener('click', showCloseModal);