<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>TRINDADE MOTO-TÁXI</title>

    <link rel="stylesheet" href="css/style.css">
</head>

<body>

<header>
    <div class="logo">🏍️</div>
    <h1>TRINDADE MOTO-TÁXI</h1>
    <p>Transporte rápido e seguro</p>
</header>

<main>

    <section id="inicio">
        <h2>Bem-vindo à TRINDADE MOTO-TÁXI</h2>

        <p>
            Serviço de moto-táxi rápido, seguro e disponível no
            <strong>Cuito, Província do Bié</strong>.
        </p>

        <a href="#pedido" class="botao">
            Fazer pedido
        </a>
    </section>

    <section id="pedido">

        <h2>Fazer pedido de moto-táxi</h2>

        <form id="formPedido">

            <label for="nome">Nome</label>
            <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Digite o seu nome"
                required
            >

            <label for="telefone">Telefone</label>
            <input
                type="tel"
                id="telefone"
                name="telefone"
                placeholder="Digite o seu telefone"
                required
            >

            <label for="origem">Local de partida</label>
            <input
                type="text"
                id="origem"
                name="origem"
                placeholder="Onde está?"
                required
            >

            <label for="destino">Destino</label>
            <input
                type="text"
                id="destino"
                name="destino"
                placeholder="Para onde vai?"
                required
            >

            <label for="municipio">Município</label>
            <select id="municipio" name="municipio" required>
