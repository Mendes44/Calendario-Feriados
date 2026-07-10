//Camada de somente impressão na tela.
function imprimeFeriados (feriadosFiltro){
    feriadosFiltro.forEach(feriado => {
        const nome = feriado.nome;
        const diaDaSemana = feriado.diaDaSemana;
        const dataFeriado = feriado.data;

        console.log(`${nome} caira em: ${diaDaSemana}, ${dataFeriado}`);
        
    });

};

export default imprimeFeriados;