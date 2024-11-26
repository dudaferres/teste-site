// Seleciona o ícone do sino e a lista de notificações
const bellIcon = document.getElementById("bell-icon");
const notificationList = document.getElementById("notification-list");

// Adiciona o evento de clique no ícone do sino
bellIcon.addEventListener("click", () => {
    // Alterna a visibilidade da lista de notificações
    if (notificationList.style.display === "none" || notificationList.style.display === "") {
        notificationList.style.display = "block";
    } else {
        notificationList.style.display = "none";
    }
});
