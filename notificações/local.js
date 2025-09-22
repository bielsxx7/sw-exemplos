const botao = document.getElementById("notificacao");

Notification.requestPermission().then(permission => {
    console.log('Permissão para notificações:', permission);

});

botao.addEventListener("click", () => {
    if (Notification.permission === "granted") {
        new Notification("Olá", {
            body: "Esta é uma notificação local!",
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6X6S1R7kCahU2erUQTNwHTGyznLddopKDA&s"
        });
    } else {
        alert("Alerta! Você precisa permitir as notificações no seu navegador.");
    }
});