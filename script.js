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
					"Campo de valor vazio";
				return;
			}

			var resultadoConversao = valor / taxaDeCambio; 

			document.getElementById("resultadoConversao").innerText = "R$" + valor.toFixed(2) + " para " + moedaSelecionada + ": $" + resultadoConversao.toFixed(2);
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
                    "Campo de valor vazio";
                return;
            }

            var resultadoConversao = valor / taxaDeCambio;

            document.getElementById("resultadoConversao2").innerText = valor.toFixed(2) + " " + moedaSelecionada + " para BRL: R$ " + resultadoConversao.toFixed(2);
        })
        .catch((error) => {
            console.error("Erro ao obter taxas de câmbio:", error);
            document.getElementById("resultadoConversao2").innerText =
                "Erro ao converter";
        });
}

document.addEventListener("DOMContentLoaded", function() {
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();

			document.querySelector(this.getAttribute('href')).scrollIntoView({
				behavior: 'smooth'
			});
		});
	});
});