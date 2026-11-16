// ==================================
// CONFIGURAÇÕES DO SISTEMA
// ==================================

const NUMERO_WHATSAPP = "244944902791";


// ==================================
// ELEMENTOS DO SITE
// ==================================

const formulario = document.getElementById("formPedido");

const cartaoTaxi = document.getElementById("cartaoTaxi");

const cartaoEncomenda = document.getElementById("cartaoEncomenda");

const camposEncomenda = document.getElementById("camposEncomenda");

const camposTaxi = document.getElementById("camposTaxi");

const resumo = document.getElementById("resumo");

const conteudoResumo = document.getElementById("conteudoResumo");

const enviarWhatsApp = document.getElementById("enviarWhatsApp");


// ==================================
// ESCOLHA DO SERVIÇO
// ==================================

const servicos = document.querySelectorAll(
    'input[name="servico"]'
);

servicos.forEach(function(servico) {

    servico.addEventListener("change", function() {

        resumo.classList.add("escondido");

        if (this.value === "Encomenda") {

            camposEncomenda.classList.remove("escondido");

            camposTaxi.classList.add("escondido");

            document.getElementById("descricao").required = true;

            cartaoEncomenda.classList.add("ativo");

            cartaoTaxi.classList.remove("ativo");

        } else {

            camposEncomenda.classList.add("escondido");

            camposTaxi.classList.remove("escondido");

            document.getElementById("descricao").required = false;

            cartaoTaxi.classList.add("ativo");

            cartaoEncomenda.classList.remove("ativo");

        }

    });

});


// ==================================
// LOCALIZAÇÃO GPS
// ==================================

document.getElementById("botaoGPS")
.addEventListener("click", function() {

    const estadoGPS = document.getElementById("estadoGPS");

    const origem = document.getElementById("origem");

    if (!navigator.geolocation) {

        estadoGPS.textContent =
            "O seu navegador não suporta GPS.";

        return;

    }

    estadoGPS.textContent =
        "A obter a sua localização...";

    navigator.geolocation.getCurrentPosition(

        function(posicao) {

            const latitude = posicao.coords.latitude;

            const longitude = posicao.coords.longitude;

            origem.value =
                "https://www.google.com/maps?q=" +
                latitude + "," + longitude;

            estadoGPS.textContent =
                "Localização obtida com sucesso!";

        },

        function() {

            estadoGPS.textContent =
                "Não foi possível obter a localização. Verifique as permissões do GPS.";

        },

        {
            enableHighAccuracy: true,
            timeout: 15000
        }

    );

});


// ==================================
// CONFIRMAR PEDIDO
// ==================================

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome =
        document.getElementById("nome").value.trim();

    const telefone =
        document.getElementById("telefone").value.trim();

    const origem =
        document.getElementById("origem").value.trim();

    const destino =
        document.getElementById("destino").value.trim();

    const observacao =
        document.getElementById("observacao").value.trim();

    const pagamento =
        document.getElementById("pagamento").value;

    const servico =
        document.querySelector(
            'input[name="servico"]:checked'
        ).value;

    const descricao =
        document.getElementById("descricao").value.trim();

    const passageiros =
        document.getElementById("passageiros").value;


    // VERIFICAR CAMPOS OBRIGATÓRIOS

    if (!nome || !telefone || !origem || !destino) {

        alert("Preencha todos os campos obrigatórios.");

        return;

    }

    if (servico === "Encomenda" && !descricao) {

        alert("Descreva a sua encomenda.");

        return;

    }


    // CONSTRUIR RESUMO

    let dados = {

        nome,
        telefone,
        servico,
        origem,
        destino,
        observacao,
        pagamento,
        descricao,
        passageiros

    };


    let mensagem =

        "🏍️ TRINDADE MOTO-TÁXI\n\n" +

        "👤 Nome: " + nome + "\n" +

        "📞 Telefone: " + telefone + "\n" +

        "🛵 Serviço: " + servico + "\n" +

        "📍 Origem: " + origem + "\n" +

        "🎯 Destino: " + destino + "\n";


    if (servico === "Encomenda") {

        mensagem +=
            "📦 Descrição: " + descricao + "\n";

    } else {

        mensagem +=
            "👥 Passageiros: " + passageiros + "\n";

    }


    mensagem +=

        "💰 Pagamento: " + pagamento + "\n" +

        "📝 Observação: " + observacao + "\n\n" +

        "Preço: A confirmar com o motorista.";


    // MOSTRAR RESUMO

    conteudoResumo.replaceChildren();

    const linhas = [

        ["Nome", nome],

        ["Telefone", telefone],

        ["Serviço", servico],

        ["Origem", origem],

        ["Destino", destino],

        ["Descrição", servico === "Encomenda" ? descricao : "Não aplicável"],

        ["Passageiros", servico === "Moto-Táxi" ? passageiros : "Não aplicável"],

        ["Pagamento", pagamento],

        ["Observação", observacao || "Nenhuma"],

        ["Preço", "A confirmar"]

    ];

    linhas.forEach(function(item) {

        const paragrafo = document.createElement("p");

        const titulo = document.createElement("strong");

        titulo.textContent = item[0] + ": ";

        paragrafo.appendChild(titulo);

        paragrafo.appendChild(
            document.createTextNode(item[1])
        );

        conteudoResumo.appendChild(paragrafo);

    });


    // PREPARAR WHATSAPP

    enviarWhatsApp.href =

        "https://wa.me/" +

        NUMERO_WHATSAPP +

        "?text=" +

        encodeURIComponent(mensagem);


    resumo.classList.remove("escondido");

    resumo.scrollIntoView({

        behavior: "smooth",

        block: "start"

    });

});


// ==================================
// FIM DO SISTEMA
// ==================================

