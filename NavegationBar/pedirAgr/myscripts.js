// modal
var modal = document.getElementById("myModal");

//
var span = document.getElementsByClassName("close")[0];


function pegarDadosDoElemento(elemento) {
  const containerLeft = elemento.childNodes[1]
  const containerRight = elemento.childNodes[3]

  const containerImagem = containerLeft.childNodes[1]
  const containerNome = containerLeft.childNodes[3]

  const nome = containerNome.innerText
  const imagem = containerImagem.src

  const containerPreco = containerRight.childNodes[1]

  const preco = containerPreco.innerText.split('A partir de R$ ')[1].replace(',00', '')

  const precoConvertido = parseInt(preco)

  return {
    nome,
    imagem,
    precoConvertido
  }
}

function abrirModal(element){ {
  const valorDaEntrega = 5

  // Pega os dados do elemento clicado
  const dados = pegarDadosDoElemento(element.childNodes[1])

  // Pega os elementos da modal
  const modalImagem = document.getElementById('imagemPizza')
  const modalPizza = document.getElementById('nomePizza')
  const modalPreco = document.getElementById('precoPizza')
  const preco = document.getElementById('preco')
  const precoTotal = document.getElementById('precoTotal')

  // Coloca os dados da pizza nos elementos da modal
  modalImagem.src = dados.imagem
  modalPizza.innerText = dados.nome
  modalPreco.innerText = `A partir de R$ ${dados.precoConvertido},00`
  preco.innerText = `R$ ${dados.precoConvertido},00`

  // Soma o preco do frete na pizza e exibe no valor total da modal
  precoTotal.innerText = `R$ ${dados.precoConvertido + valorDaEntrega},00`


  // Exibe a modal
  modal.style.display = "block";
}

// Quando clicar no (x) Fechar o modal
span.onclick = function() {
  modal.style.display = "none";

}

// Quando clicar em fora do modal, fecha o modal.
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}}
