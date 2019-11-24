import { Jogador } from "./Jogador";
import { listaPergunta } from "./listaPerguntas";

export class Page {
	private divButtons = document.getElementsByTagName("div")[0];
	private iniciado: boolean = false;
	private jogador: Jogador;
	private contadorPergunta: number;
	constructor(jogador: Jogador) {
		this.jogador = jogador;
		this.contadorPergunta = 0;
	}

	apresentar() {
		return this.jogador.apresentar();
	}
	perguntar() {
		if (this.contadorPergunta + 1 > listaPergunta.length) {
			alert(this.jogador.mostrarPontuacao());
		} else {
			const pergunta = listaPergunta[this.contadorPergunta];
			const alternativaCorreta = pergunta.alternativaCorreta();
			const questao = pergunta.perguntar();
			let resposta = prompt(questao);
			while (resposta === null || resposta === undefined) {
				alert("Preencha a alternativa com um numero");
				resposta = prompt(questao);
			}
			const acertouOuErrou = pergunta.verificarAcerto(parseInt(resposta));
			switch (acertouOuErrou) {
				case true: {
					alert("Você acertou, parabéns");
					this.jogador.acertar();
					break;
				}
				case false: {
					alert("Você errou, a alternativa correta era: " + alternativaCorreta);
					this.jogador.errar();
					break;
				}
			}
			this.contadorPergunta++;
		}
	}

	iniciaQuiz() {
		this.criaIniciaQuizBTN();
	}

	private criaIniciaQuizBTN() {
		const iniciaQuizBTN = document.createElement("button");
		iniciaQuizBTN.textContent = "Iniciar Quiz";
		iniciaQuizBTN.addEventListener("click", () => {
			if (this.iniciado === false) {
				this.criaProximaPerguntaBTN();
				this.perguntar();
			}
			iniciaQuizBTN.removeEventListener("click", () => {
				console.log("Evento removido");
			});
		});
		this.divButtons.appendChild(iniciaQuizBTN);
	}
	private criaProximaPerguntaBTN() {
		if (!this.iniciado) {
			this.iniciado = true;
			const proximaPerguntaBTN = document.createElement("button");
			proximaPerguntaBTN.textContent = "Próxima Pergunta";

			proximaPerguntaBTN.addEventListener("mousedown", () => {
				// Apenas reagirá ao botão do mouse cujo código é 1
				this.perguntar();
			});
			this.divButtons.appendChild(proximaPerguntaBTN);
		}
	}
}
