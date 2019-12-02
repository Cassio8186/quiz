export class Pergunta {
	private pergunta: string;
	private alternativas: Array<string>;
	private correta: number;
	constructor(pergunta: string, alternativas: Array<string>, correta: number) {
		this.pergunta = pergunta;
		this.alternativas = alternativas;
		this.correta = correta;
	}
	perguntar(): string {
		return `${this.pergunta}\n escolha uma das alternativas:\n${this.alternativas}`;
	}
	/**
	 *
	 * @param alternativa - Numero da alternativa que o usuário passou
	 * @returns {number} - Retorna 1 para certa e 0 para errado
	 */
	verificarAcerto(alternativa: number): boolean {
		if (alternativa === this.correta) {
			return true;
		} else {
			return false;
		}
	}

	public alternativaCorreta(): string {
		const alternativaCorreta = this.alternativas[this.correta];
		return alternativaCorreta;
	}
}
