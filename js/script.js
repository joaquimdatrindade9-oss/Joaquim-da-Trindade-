const form = document.getElementById("formPedido");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const origem = document.getElementById("origem").value;
    const destino = document.getElementById("destino").value;

    const mensagem =
`🏍️ TRINDADE MOTO-TÁXI

Novo pedido de transporte!

Nome: ${nome}
Telefone: ${telefone}
Origem: ${origem}
Destino: ${destino}`;

    const numero = "244944902791";

    const link = "https://wa.me/" + numero +
                 "?text=" + encodeURIComponent(mensagem);

    window.open(link, "_blank");
});
