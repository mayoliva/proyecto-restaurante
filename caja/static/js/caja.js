function showModal() {
    const now = new Date();
    const fecha = now.toLocaleDateString(); // Formato de fecha local
    const hora = now.toLocaleTimeString();  // Formato de hora local
    document.getElementById("fechaHora").textContent = `${fecha} ${hora}`;

    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function redirectToMenuCaja() {
    window.location.href = "../menu_caja/menu.html";
}

function logout() {
    window.location.href = "../index.html"; // Ajusta la ruta si es necesario
}