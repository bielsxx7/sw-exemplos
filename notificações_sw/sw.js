// Escuta o evento "push"
self.addEventListener("push", event => {
  const data = event.data ? event.data.text() : "Clique em mim para saber qual aplicação disparou essa notificação.";
  self.registration.showNotification("Olá! Essa é uma push notification. Aparece mesmo se a aba estiver fechada.", {
    body: data,
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6X6SlR7kCahU2erUQtNwHMTGyznLddopKDA&s&quot"
  });
});

// Para abrir algo ao clicar na notificação
self.addEventListener("notificationclick", event => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow("http://127.0.0.1:5500/exemplo-pwa/notificacoes/notificacao-sw.html&quot")
  );
});