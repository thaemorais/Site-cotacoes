async function consultarCotacao(moeda) {
	try {
		const response = await fetch(
			`https://api.exchangerate-api.com/v4/latest/BRL`
		);
		const data = await response.json();

		const cotacao = data.rates[moeda];
		const resultadoElement = document.getElementById("resultadoCotacao");

		resultadoElement.innerHTML =
			"<br>1 Real (BRL) = " + cotacao.toFixed(2) + " " + moeda;

		resultadoElement.innerHTML +=
			"<br><br>1 " + moeda + " = " + (1 / cotacao).toFixed(2) + " Real (BRL)";
	} catch (error) {
		console.error("Erro ao obter cotação: ", error);
	}
}

function converterMoeda() {
	var valor = parseFloat(document.getElementById("valor1").value);
	var moedaSelecionada = document.getElementById("moeda1").value;

	var apiUrl = "https://open.er-api.com/v6/latest/" + moedaSelecionada;

	fetch(apiUrl)
		.then((response) => response.json())
		.then((data) => {
			var taxaDeCambio = data.rates["BRL"];

			if (isNaN(valor)) {
				console.error("Valor inválido. Insira um número.");
				document.getElementById("resultadoConversao").innerText =
					"Valor inválido";
				return;
			}

			var resultadoConversao = valor / taxaDeCambio; 

			document.getElementById("resultadoConversao").innerText = resultadoConversao.toFixed(2) + " " + moedaSelecionada;
		})
		.catch((error) => {
			console.error("Erro ao obter taxas de câmbio:", error);
			document.getElementById("resultadoConversao").innerText =
				"Erro ao converter";
		});
}

function converterMoeda2() {
    var valor = parseFloat(document.getElementById("valor2").value);
    var moedaSelecionada = document.getElementById("moeda2").value;

    var apiUrl = "https://open.er-api.com/v6/latest/BRL";

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            var taxaDeCambio = data.rates[moedaSelecionada];

            if (isNaN(valor)) {
                console.error("Valor inválido. Insira um número.");
                document.getElementById("resultadoConversao2").innerText =
                    "Valor inválido";
                return;
            }

            var resultadoConversao = valor / taxaDeCambio;

            document.getElementById("resultadoConversao2").innerText = resultadoConversao.toFixed(2);
        })
        .catch((error) => {
            console.error("Erro ao obter taxas de câmbio:", error);
            document.getElementById("resultadoConversao2").innerText =
                "Erro ao converter";
        });
}
