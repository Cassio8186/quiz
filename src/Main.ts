import { Jogador } from "./Jogador";
import { Page } from "./PageOrganization";

// Cria novo jogador
let nome = prompt("Qual seu nome?");
while (nome === null) {
	nome = prompt("Qual seu nome?");
}
const jogador = new Jogador(nome);
// Instancia page
const page = new Page(jogador);
// Inicia quiz
alert(page.apresentar());
page.iniciaQuiz();
