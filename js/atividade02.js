/* Crie uma página HTML simples contendo um botão, depois crie um
arquivo javascript contendo uma função addImagem() que deve
ser vinculado ao onclick do botão. Ao clicar no botão deve ser
adicionado uma imagem qualquer na tela. */

function addImagem() {
  const minhaDiv = document.getElementById("imagens");
  const minhaImagem = document.createElement("img");
  minhaImagem.src = "../images/lion.jpg";
  minhaImagem.alt = "Imagem de um leão";
  minhaImagem.id = "minha-imagem";
  minhaDiv.appendChild(minhaImagem);
}
