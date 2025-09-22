if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js")
    .then(() => console.log("Service Worker: Registrado!"))
    .catch(err => console.error("Error ao registrar: ", err));
}

self.addEventListener("install", Event => {
    console.log("Service Worker: Instalado!");
});

self.addEventListener("activate", Event => {
    console.log("Service Worker: Ativado!");
});

self.addEventListener("fetch",Event => {
    console.log("Interceptando: ", Event.request.url);

    Event.respondWith(
        new Response("Hello do Service Worker!", {
            headers: {"Content-Type": "text/plain"}
        })
    );
});