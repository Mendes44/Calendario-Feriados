# Calendario de Feriados

Projeto em JavaScript para listar os proximos feriados nacionais a partir da data atual.

O programa pergunta ao usuario quantos feriados ele deseja consultar e exibe no terminal uma lista com o nome do feriado, o dia da semana e a data formatada.

## Como funciona

O projeto esta separado em pastas por camadas para deixar cada arquivo com uma responsabilidade clara:

- `index.js`: arquivo principal do programa. Ele recebe a entrada do usuario, chama a camada de servico e envia o resultado para impressao.
- `dados/dataFeriado.js`: guarda a lista de feriados nacionais fixos.
- `servico/filtros.js`: calcula quais feriados estao mais proximos da data atual.
- `servico/formataDataFeriado.js`: formata a data e descobre o dia da semana de cada feriado.
- `servico/retornaFeriado.js`: junta os dados, filtros e formatadores para devolver uma lista pronta para exibicao.
- `exibicao/imprimeFeriado.js`: mostra os feriados no terminal.

## Estrutura do projeto

```txt
calendarioFeriado/
|-- assets/
|   `-- camadas-aplicacao.png
|-- dados/
|   `-- dataFeriado.js
|-- exibicao/
|   `-- imprimeFeriado.js
|-- servico/
|   |-- filtros.js
|   |-- formataDataFeriado.js
|   `-- retornaFeriado.js
|-- index.js
`-- README.md
```

## Arquitetura em camadas

![Diagrama das camadas da aplicacao](assets/camadas-aplicacao.png)

## Fluxo do programa

1. O usuario informa quantos feriados deseja visualizar.
2. O `index.js` chama a funcao `retornaProximosFeriados`.
3. A funcao busca os feriados cadastrados em `dados/dataFeriado.js`.
4. Os feriados sao filtrados em `servico/filtros.js`, considerando a data atual.
5. Cada feriado recebe o dia da semana e uma data formatada.
6. O resultado final e enviado para `exibicao/imprimeFeriado.js` e impresso no terminal.

## Formato das datas

No arquivo `dados/dataFeriado.js`, as datas estao no formato `MM/DD`.

Exemplo:

```js
{ nome: 'Natal', data: '12/25' }
```

Esse formato foi usado porque o JavaScript interpreta datas em string com mais previsibilidade no formato americano quando usamos `new Date()`.

## Como executar

No terminal, dentro da pasta do projeto, execute:

```bash
node index.js
```

Depois, digite a quantidade de feriados que deseja consultar.

## Observacoes

- A lista atual considera feriados nacionais fixos.
- Feriados moveis, como Carnaval, Sexta-feira Santa e Corpus Christi, nao entram automaticamente nessa logica.
- A funcao `getMonth()` do JavaScript retorna meses de `0` a `11`, entao e importante somar `+ 1` caso a data seja exibida diretamente para o usuario.