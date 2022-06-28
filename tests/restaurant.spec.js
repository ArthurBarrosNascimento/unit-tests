const createMenu = require('../src/restaurant');
 
/*
  Você é responsável por escrever o código do sistema de pedidos de um restaurante através do qual será possível
  cadastrar um menu. Dado que um menu foi cadastrado, o sistema deve disponibilizar um objeto que permite:

  - Ler o menu cadastrado;
  - Fazer pedidos;
  - Verificar o que foi pedido;
  - Somar o valor da conta.

  A estrutura deste código e deste objeto já está definida e você precisa implementá-la.
  Abaixo você verá uma série de testes e passos que irão guiar você e, que devem NECESSARIAMENTE ser realizados em ordem para o bom desenvolvimento do sistema.

  Desenvolvimento:
  - Uma função: 
    createMenu()
  - Recebe um parâmetro que é um objeto, o menu:
    Exemplo: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }.

  A função createMenu() então, retornará um novo objeto. Este novo objeto contém algumas chaves e ao acessar cada uma delas temos os seguintes retornos:

  - Uma chave `fetchMenu` retornando o menu, que nada mais é que o objeto passado como parâmetro para createMenu()

    Exemplo:
    const meuRestaurante = createMenu({
      food: {'coxinha': 3.90, 'sanduiche', 9.90},
      drinks: {'agua': 3.90, 'cerveja': 6.90}
    });

    meuRestaurante.fetchMenu() // Retorno: Menu acima

  - Uma chave `consumption` armazenando um array de strings. Cada string é a chave de um pedido.
    Exemplo: ['coxinha', 'cerveja']

  - Uma chave `order` armazenando uma função. Essa função recebe uma string como parâmetro e essa string deve ser adicionada à lista armazenada em `consumption`.

  - Uma chave `pay` que, quando chamada, invoca uma função. Essa função faz a soma do preço de todos os pedidos, retornando essa soma de preços com acréscimo de 10%.

  Comportamento:
    const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} })

    meuRestaurante.fetchMenu() // Retorno: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }

    meuRestaurante.order('coxinha') // Retorno: undefined

    meuRestaurante.consumption // Retorno: ['coxinha']

    meuRestaurante.pay() // Retorno: 4.29

  IMPORTANTE: FAÇA OS TESTES E PASSOS DE ACORDO COM A SEQUÊNCIA INDICADA NO README DO PROJETO!

*/

describe('10 - Implemente os casos de teste e a função `createMenu`', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    const pedido = {
      food: {'coxinha': 3.90, 'sanduiche': 9.90},
      drinks: {'agua': 3.90, 'cerveja': 6.90} 
    }

    const objetoRetornado = createMenu(pedido);

    expect(objetoRetornado).toHaveProperty('fetchMenu');

    expect(objetoRetornado.fetchMenu()).toHaveProperty('food');
    expect(objetoRetornado.fetchMenu()).toHaveProperty('drinks');

    expect(objetoRetornado.fetchMenu()).toEqual(pedido);

    expect(objetoRetornado.consumption.length).toEqual(0);

    objetoRetornado.order("coxinha");
    expect(objetoRetornado.consumption).toEqual(['coxinha']);

    objetoRetornado.order("agua");
    objetoRetornado.order("sopa");
    objetoRetornado.order("sashimi");

    expect(objetoRetornado.consumption).toEqual([
      'coxinha',
      'agua',
      'sopa',
      'sashimi'
    ])

    objetoRetornado.limpaConsumptiom();

    objetoRetornado.order('coxinha');
    objetoRetornado.order('agua');
    objetoRetornado.order('coxinha');

    expect(objetoRetornado.consumption).toEqual([
      'coxinha',
      'agua',
      'coxinha',
    ])

    expect(objetoRetornado.pay()).toEqual(12.87)
  })
})