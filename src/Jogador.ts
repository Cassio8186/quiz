export class Jogador {
	private nome: string;
	private acertos: number;
	private erros: number;

	constructor(nome: string) {
		this.nome = nome;
		this.acertos = 0;
		this.erros = 0;
	}
	apresentar() {
		return "Bem vindo, " + this.nome;
	}
	acertar() {
		return ++this.acertos;
	}
	errar() {
		return ++this.erros;
	}
	mostrarPontuacao() {
		return `O jogador acertou: ${this.acertos} e errou: ${this.erros}`;
	}
}
