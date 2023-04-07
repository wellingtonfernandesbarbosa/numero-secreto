const menorValor = 1;
const maiorValor = 100;
const numeroSecreto = gerarNumeroSecreto(menorValor, maiorValor);

function gerarNumeroSecreto(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};

const elementoMenorValor = document.getElementById("menor-valor");
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById("maior-valor");
elementoMaiorValor.innerHTML = maiorValor;