document.addEventListener("DOMContentLoaded", () => {
    // Coloque o código aqui
});


// Seleciona o ícone do sino e a lista de notificações
const bellIcon = document.getElementsByClassName("img_sino")[0];
const notificationList = document.getElementById("notification-list");

// Verifica se os elementos foram encontrados antes de continuar
if (bellIcon && notificationList) {
    // Adiciona o evento de clique no ícone do sino
    bellIcon.addEventListener("click", () => {
        // Alterna a visibilidade da lista de notificações
        if (notificationList.style.display === "none" || notificationList.style.display === "") {
            notificationList.style.display = "block";
        } else {
            notificationList.style.display = "none";
        }
    });
} else {
    console.error("Ícone do sino ou lista de notificações não encontrados!");
}