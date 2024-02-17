## Run Test

```
npm run test
```

### Três A's
Arrange (Preparar): Nesta fase inicial, configuramos o ambiente de teste. Isso inclui a criação de objetos necessários, configuração de mocks (simulações), definição de inputs (entradas) e preparação do contexto em que o teste será executado. O objetivo é criar um cenário controlado onde todos os pré-requisitos para executar o teste estão prontamente disponíveis, garantindo um ponto de partida claro e definido.

Act (Agir): Após a preparação, esta etapa envolve a execução da ação ou função que está sob teste, usando os inputs e o contexto definidos anteriormente. O foco é no processo de interação com o código para gerar um resultado, permitindo-nos observar o comportamento do código em condições específicas.

Assert (Afirmar): Por fim, avaliamos os resultados da ação, comparando o que foi obtido com o que era esperado. Utilizamos assertivas para verificar esses resultados, sendo estas declarações que falham caso o resultado não corresponda ao esperado. Esta fase é crucial para confirmar se o código testado atua conforme as expectativas, validando seu comportamento e garantindo que as funcionalidades atendam às especificações desejadas.

## Exemplo prático
```js
function add(a, b) {
    return a + b;
}

// Teste da função add
describe('add function', () => {
    it('should add two numbers correctly', () => {
        // Arrange
        const num1 = 5;
        const num2 = 3;

        // Act
        const result = add(num1, num2);

        // Assert
        expect(result).toBe(8);
    });
});

```

## Explanação do exemplo
- Arrange: Definimos num1 e num2 com valores que serão usados na soma.
- Act: Chamamos a função add com num1 e num2 como argumentos.
- Assert: Usamos expect para verificar se o resultado retornado pela função add é igual a 8.