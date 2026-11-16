const form = document.getElementById("formPedido");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const origem = document.getElementById("origem").value.trim();
    const destino = document.getElementById("destino").value.trim();

    const municipio = document.getElementById("municipio").value;
    const provincia = document.getElementById("provincia").value;

    const mensagem =
        "🏍️ TRINDADE MOTO-TÁXI\n\n" +
        "👤 Nome: " + nome + "\n" +
        "📞 Telefone: " + telefone + "\n" +
        "📍 Origem: " + origem + "\n" +
        "🏁 Destino: " + destino + "\n" +
        "🏙️ Município: " + municipio + "\n" +
        "📌 Província: " + provincia;

    const numero = "244944902791";

    const url = "https://wa.me/" + numero +
        "?text=" + encodeURIComponent(mensagem);

    window.open(url, "_blank");
});


