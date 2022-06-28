/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/
function sum(tamanho, media) {
  return tamanho + media;
}
const average = (array) => {
  // adicione seu código aqui
  if (array.length === 0) {
    return undefined;
  }

  for (let i = 0; i < array.length; i += 1) {
    let resultado = array[i];
    if (typeof resultado !== 'number') {
      return undefined;
    }
  }

  return Math.round(array.reduce(sum, 0) / array.length);
};

module.exports = average;
