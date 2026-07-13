// Camada de impressao: recebe os feriados ja prontos e mostra no terminal.
function imprimeFeriados (feriadosFiltro){
    // Percorre cada feriado recebido da camada de servico.
    feriadosFiltro.forEach(feriado => {
        // Separa as informacoes do objeto para facilitar a leitura no console.log.
        const nome = feriado.nome;
        const diaDaSemana = feriado.diaDaSemana;
        const dataFeriado = feriado.data;

        // Exibe uma linha visual de separacao e depois os dados do feriado.
        console.log('::::::::::::::::::::::::::::::::::::::::::::::::::::');
        console.log(`${nome} Sera: ${diaDaSemana}, Data:${dataFeriado}`);
    });

};

// Exporta a funcao para o arquivo principal conseguir imprimir os resultados.
export default imprimeFeriados;