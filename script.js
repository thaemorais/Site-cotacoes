async function consultarCotacao(moeda) {
    try {
        const response = await fetch(
            `https://api.exchangerate-api.com/v4/latest/BRL`
        );
        const data = await response.json();

        const cotacao = data.rates[moeda];
        const resultadoElement = document.getElementById("resultado");

        resultadoElement.innerHTML =
            "<br>1 Real (BRL) = " + cotacao.toFixed(2) + " " + moeda;

        resultadoElement.innerHTML += "<br><br>1 " + moeda + " = " + (1 / cotacao).toFixed(2) + " Real (BRL)";

    } catch (error) {
        console.error("Erro ao obter cotação: ", error);
    }
}
