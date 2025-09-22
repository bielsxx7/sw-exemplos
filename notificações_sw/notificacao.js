// Registrar o Service Worker
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js")
    .then(() => console.log("Service Worker registrado!"))
    .catch(err => console.error("Erro:", err));
}

// Solicitar permissão
Notification.requestPermission().then(permission => {
    console.log("Permissão para notificações:", permission);
});