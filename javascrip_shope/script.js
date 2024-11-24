function calcular() {
  // Obter o valor do produto
  var valorProduto = parseFloat(document.getElementById("valor_produto").value);

  // Verificar qual radio button está selecionado
  var freteSim = document.getElementById("frete_sim").checked;
  var freteNao = document.getElementById("frete_nao").checked;

  // Verificar se o valor do produto foi inserido corretamente
  if (isNaN(valorProduto) || valorProduto <= 0) {
    alert("Por favor, insira um valor válido para o produto.");
    return;
  }

  // Verificar se o usuário selecionou uma opção de frete
  if (!freteSim && !freteNao) {
    alert("Por favor, selecione se o frete será grátis ou não.");
    return;
  }

  // Calcular a taxa e o frete
  var taxa, freteInfo;
  if (freteSim) {
    taxa = valorProduto * 0.2 + 4; // Taxa de 20% + R$ 4
    freteInfo = "O frete do cliente será grátis.";
  } else if (freteNao) {
    taxa = valorProduto * 0.14 + 4; // Taxa de 14% + R$ 4
    freteInfo = "O cliente terá que pagar o frete para a Shope.";
  }

  // Calcular o lucro e o preço de venda
  var intencaoDeLucro = valorProduto * 0.8; // 80% de lucro
  var valorDeVenda = valorProduto + (taxa + intencaoDeLucro);

  // Exibir o resultado na página
  var resultadoDiv = document.getElementById("resultado");
  if (freteSim){
    resultadoDiv.innerHTML = `
        Você pagará a taxa de 20% mais 4 R$  no total R$ ${taxa.toFixed(2)}<br>
        ${freteInfo}<br>
        Para ter 80% de lucro do valor original + a taxa, você deverá vender por: R$ ${valorDeVenda.toFixed(
          2
        )}
    `;
    
  }else {
    resultadoDiv.innerHTML = `
   Você pagará a taxa de 14% mais 4 R$  no total R$ ${taxa.toFixed(2)}<br>
    ${freteInfo}<br>
    Para ter 80% de lucro do valor original + a taxa, você deverá vender por: R$ ${valorDeVenda.toFixed(
      2
    )}
`;
  }
  
}
