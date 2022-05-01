/* Crie uma página HTML simples contendo uma div identificada com
um id e um botão, depois crie um arquivo javascript com uma
função addConteudo() que deve ser vinculado ao onclick do botão.
Ao clicar no botão adicionar na div o texto “Olá Mundo” */

function addConteudo() {
  const minhaDiv = document.getElementById("content");
  const meuParagrafo = document.createElement("p");
  meuParagrafo.innerHTML = "Olá mundo!";
  meuParagrafo.id = "meu-paragrafo";
  minhaDiv.appendChild(meuParagrafo);
}
