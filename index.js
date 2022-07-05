import { Financiamento } from './financiamento.js'
import { FinanciamentoCarencia } from './financiamentocarencia.js'

const comCarencia = document.getElementById('comCarencia');
const listaSuspensa = document.getElementById('listaSuspensa');
const corpoTabela = document.getElementById('corpoTabela');
const btnCalcular = document.getElementById('btnCalcular');
const textoValor = document.getElementById('textoValor');
const textoEntrada = document.getElementById('textoEntrada');
const textoTaxaJuros = document.getElementById('textoTaxa');
const textoPrazo = document.getElementById('textoPrazo');

comCarencia.addEventListener('change', () => {
    if(comCarencia.checked) {
        listaSuspensa.removeAttribute('hidden');
    } else {
        listaSuspensa.setAttribute('hidden','hidden');
    }
});

btnCalcular.addEventListener('click', function() {    
    resetTable();
    const valor = parseFloat(textoValor.value);
    const entrada = parseFloat(textoEntrada.value);
    const taxaJuros = parseFloat(textoTaxaJuros.value);
    const prazo = parseFloat(textoPrazo.value);
    let simulacao;
    if(comCarencia.checked) {
        const carencia = parseInt(listaSuspensa.value);
        simulacao = new FinanciamentoCarencia(valor, entrada, taxaJuros, prazo, carencia);
    } else {
        simulacao = new Financiamento(valor, entrada, taxaJuros, prazo);
    }    
    simulacao.calcParcelasMensais();
    simulacao.exibeParcelas();
    resetInputs();
})

function resetInputs () {
    textoValor.value = '';
    textoEntrada.value = '';
    textoTaxaJuros.value = '';
    textoPrazo.value = '';
}

function resetTable () {
    while(corpoTabela.firstChild) {
        corpoTabela.removeChild(corpoTabela.firstChild);
    }
}