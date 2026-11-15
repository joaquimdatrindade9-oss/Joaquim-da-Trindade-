const form = document.getElementById("formPedido");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const origem = document.getElementById("origem").value;
    const destino = document.getElementById("destino").value;

    const mensagem =
        "🏍️ *TRINDADE MOTO-TÁXI*%0A%0A" +
        "👤 Nome: " + nome + "%0A" +
        "📞 Telefone: " + telefone + "%0A" +
        "📍 Origem: " + origem + "%0A" +
        "🏁 Destino: " + destino;

    const numero = "244944902791";

    const url = "https://wa.me/" + numero + "?text=" + mensagem;

    window.open(url, "_blank");
});
