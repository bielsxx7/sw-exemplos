if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js")
        .then(() => console.log("Service Worker registrado com sucesso!"))
        .catch(err => console.log("Falha ao registrar o Service Worker: ", err));
} 

const form = document.getElementById("formulario");
const status = document.getElementById("status");

form.addEventListener("submit", async e => {
    e.preventDefault();

    const dados = new FormData(form);
    const mensagem = dados.get("mensagem");

    if (navigator.onLine) {
        try {
            await fetch("api/mensagens", {
                method: "POST",
                body: JSON.stringify({ mensagem }),
                headers: { "Content-Type": "application/json" }
            });
            status.textContent = "Mensagem enviada com sucesso!";
            console.log("Mensagem enviada para o servidor instantaneamente.", mensagem);
        } catch (err) {
            status.textContent = "Erro ao enviar mensagem.";
            navigator.serviceWorker.ready.then(reg => {
                reg.active.postMessage({ mensagem });
            });
        }
    } else {
        navigator.serviceWorker.ready.then(reg => {
            reg.active.postMessage({ mensagem });
            status.textContent = "Você está offline. A mensagem será enviada quando você estiver online.";
        });
    }

    form.reset();
});
