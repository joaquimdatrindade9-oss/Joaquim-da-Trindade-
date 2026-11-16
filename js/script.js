const form = document.getElementById("formPedido");

const numero = "2449444902791";

let localizacao = "Não enviada";
let disponivel = true;


// ===============================
// LOCALIZAÇÃO
// ===============================

function obterLocalizacao() {

    if (!navigator.geolocation) {
        alert("O seu dispositivo não suporta localização.");
        return;
    }

    navigator.geolocation.getCurrentPosition(
        function(position) {

            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            localizacao =
                "https://www.google.com/maps?q=" +
                latitude + "," + longitude;

            alert("📍 Localização obtida com sucesso!");

        },
        function() {
            alert("Não foi possível obter a localização. Permita o acesso à localização.");
        }
    );
}


// ===============================
// DISPONIBILIDADE
// ===============================

function alterarDisponibilidade() {

    disponivel = !disponivel;

    const status = document.getElementById("statusDisponibilidade");

    if (status) {

        if (disponivel) {
            status.textContent = "🟢 Disponível";
            status.className = "disponivel";
        } else {
            status.textContent = "🔴 Indisponível";
            status.className = "indisponivel";
        }

    }
}


// ===============================
// PEDIDO PELO WHATSAPP
// ===============================

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const origem = document.getElementById("origem").value;
    const destino = document.getElementById("destino").value;
    const municipio = document.getElementById("municipio").value;
    const provincia = document.getElementById("provincia").value;

    const mensagem =
        "🏍️ TRINDADE MOTO-TÁXI\n\n" +
        "👤 Nome: " + nome + "\n" +
        "📞 Telefone: " + telefone + "\n" +
        "📍 Origem: " + origem + "\n" +
        "🏁 Destino: " + destino + "\n" +
        "🏙️ Município: " + municipio + "\n" +
        "📌 Província: " + provincia + "\n" +
        "📡 Disponibilidade: " +
        (disponivel ? "Disponível" : "Indisponível") + "\n" +
        "🗺️ Localização: " + localizacao;

    const url =
        "https://wa.me/" +
        numero +
        "?text=" +
        encodeURIComponent(mensagem);

    window.open(url, "_blank");

});


// ===============================
// ENVIAR SMS NORMAL
// ===============================

function enviarSMS() {

    const nome = document.getElementById("nome").value;
    const origem = document.getElementById("origem").value;
    const destino = document.getElementById("destino").value;

    const mensagem =
        "TRINDADE MOTO-TÁXI\n" +
        "Cliente: " + nome + "\n" +
        "Origem: " + origem + "\n" +
        "Destino: " + destino;

    const smsURL =
        "sms:" +
        numero +
        "?body=" +
        encodeURIComponent(mensagem);

    window.location.href = smsURL;
}

