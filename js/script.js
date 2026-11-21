const NUMERO_WHATSAPP = "244944902791";

let tipoServico = "Moto-Táxi";

const btnTaxi = document.getElementById("btnTaxi");
const btnEncomenda = document.getElementById("btnEncomenda");

const camposTaxi = document.getElementById("camposTaxi");
const camposEncomenda = document.getElementById("camposEncomenda");

const form = document.getElementById("formPedido");
const resumo = document.getElementById("resumo");

const btnGPS = document.getElementById("btnGPS");


/* =========================
   ESCOLHER MOTO-TÁXI
========================= */

btnTaxi.addEventListener("click", function () {

    tipoServico = "Moto-Táxi";

    btnTaxi.classList.add("ativo");
    btnEncomenda.classList.remove("ativo");

    camposTaxi.classList.remove("escondido");
    camposEncomenda.classList.add("escondido");

});


/* =========================
   ESCOLHER ENCOMENDA
========================= */

btnEncomenda.addEventListener("click", function () {

    tipoServico = "Encomenda";

    btnEncomenda.classList.add("ativo");
    btnTaxi.classList.remove("ativo");

    camposEncomenda.classList.remove("escondido");
    camposTaxi.classList.add("escondido");

});


/* =========================
   GPS / LOCALIZAÇÃO
========================= */

btnGPS.addEventListener("click", function () {

    if (!navigator.geolocation) {

        alert(
            "O seu navegador não suporta localização GPS."
        );

        return;
    }

    btnGPS.textContent =
        "📍 A obter localização...";

    navigator.geolocation.getCurrentPosition(

        function (position) {

            const latitude =
                position.coords.latitude;

            const longitude =
                position.coords.longitude;

            const mapa =
                "https://www.google.com/maps?q=" +
                latitude +
                "," +
                longitude;

            document.getElementById("origem").value =
                mapa;

            btnGPS.textContent =
                "✅ Localização obtida";

        },

        function () {

            alert(
                "Não foi possível obter a localização.\n\n" +
                "Ative o GPS e permita o acesso à localização."
            );

            btnGPS.textContent =
                "🛰️ Usar minha localização GPS";
        }

    );

});


/* =========================
   ENVIAR PEDIDO
========================= */

form.addEventListener("submit", function (event) {

    event.preventDefault();


    const nome =
        document.getElementById("nome").value.trim();

    const telefone =
        document.getElementById("telefone").value.trim();

    const origem =
        document.getElementById("origem").value.trim();

    const destino =
        document.getElementById("destino").value.trim();

    const preco =
        document.getElementById("preco").value.trim();

    const pagamento =
        document.getElementById("pagamento").value;

    const observacoes =
        document.getElementById("observacoes").value.trim();


    /* VERIFICAR CAMPOS OBRIGATÓRIOS */

    if (
        !nome ||
        !telefone ||
        !origem ||
        !destino
    ) {

        alert(
            "Preencha o nome, telefone, origem e destino."
        );

        return;
    }


    let detalhes = "";


    /* =========================
       DADOS DO MOTO-TÁXI
    ========================= */

    if (tipoServico === "Moto-Táxi") {

        const passageiros =
            document.getElementById("passageiros").value;

        detalhes =
            "👥 Passageiros: " +
            passageiros;

    }


    /* =========================
       DADOS DA ENCOMENDA
    ========================= */

    else {

        const descricao =
            document
                .getElementById("descricao")
                .value
                .trim();

        const quantidade =
            document.getElementById("quantidade").value;

        detalhes =
            "📦 Descrição: " +
            (descricao || "Não informado") +
            "\n" +

            "🔢 Quantidade: " +
            quantidade;

    }


    /* =========================
       CRIAR RESUMO
    ========================= */

    resumo.innerHTML = `

        <p>
            <strong>🚦 Serviço:</strong>
            ${tipoServico}
        </p>

        <p>
            <strong>👤 Nome:</strong>
            ${nome}
        </p>

        <p>
            <strong>📞 Telefone:</strong>
            ${telefone}
        </p>

        <p>
            <strong>📍 Origem:</strong>
            ${origem}
        </p>

        <p>
            <strong>🎯 Destino:</strong>
            ${destino}
        </p>

        <p>
            ${detalhes.replace(/\n/g, "<br>")}
        </p>

        <p>
            <strong>💰 Preço:</strong>
            ${preco || "A confirmar"}
        </p>

        <p>
            <strong>💳 Pagamento:</strong>
            ${pagamento || "A combinar"}
        </p>

        <p>
            <strong>📝 Observações:</strong>
            ${observacoes || "Nenhuma"}
        </p>

    `;


    /* =========================
       MENSAGEM WHATSAPP
    ========================= */

    const mensagem =

        "🏍️ *TRINDADE MOTO-TÁXI*" +
        "\n\n" +

        "📋 *NOVO PEDIDO*" +
        "\n\n" +

        "🚦 Serviço: " +
        tipoServico +
        "\n\n" +

        "👤 Nome: " +
        nome +
        "\n" +

        "📞 Telefone: " +
        telefone +
        "\n\n" +

        "📍 Origem: " +
        origem +
        "\n" +

        "🎯 Destino: " +
        destino +
        "\n\n" +

        detalhes +
        "\n\n" +

        "💰 Preço: " +
        (preco || "A confirmar") +
        "\n" +

        "💳 Pagamento: " +
        (pagamento || "A combinar") +
        "\n\n" +

        "📝 Observações: " +
        (observacoes || "Nenhuma") +
        "\n\n" +

        "📍 Cuito — Província do Bié";


    const url =

        "https://wa.me/" +
        NUMERO_WHATSAPP +
        "?text=" +
        encodeURIComponent(mensagem);


    /* ABRIR WHATSAPP */

    window.open(url, "_blank");

});
