let listaDeNumeroSorteado = [];
let numeroMax = 10;
let numero = gerarNumero();
let tentativas = 1;
function exibirTextoNaTela(tag, texto) {
    let inicio = document.querySelector(tag);
    inicio.innerHTML = texto;
}
function telaInicial() {
exibirTextoNaTela('h1' ,'jogo do número secreto');
exibirTextoNaTela('p','escolha um número de 0 a 10');
}

telaInicial();

function verificarChute() {
    let chute = document.querySelector('input').value
    let palavraTenta = tentativas > 1 ? 'tentativas' : 'tentativa';
    let palavra = `Parabéns! Você descobriu o número secreto com ${tentativas} ${palavraTenta}!`;
    if (chute == numero) {
        exibirTextoNaTela('h1' , 'acertou');
        exibirTextoNaTela('p' , palavra);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numero) {
            exibirTextoNaTela('h1' , 'errou');
            exibirTextoNaTela('p' , 'o número secreto é menor');
        } else {
            exibirTextoNaTela('h1' , 'errou');
            exibirTextoNaTela('p' , 'o número secreto é maior');
        }
    } tentativas++;
    limparCampo();
}

function gerarNumero() {
    let numeroSorteado = parseInt(Math.random() * numeroMax + 1);
    let numeroLimite = listaDeNumeroSorteado.length;
    if ( numeroLimite == numeroMax) {
        listaDeNumeroSorteado = [];
        console.log(numeroLimite);
    } 
    if (listaDeNumeroSorteado.includes(numeroSorteado)) {
        return gerarNumero();
    } else {
        return numeroSorteado;
    }

}

function reiniciarJogo() {
    numero = gerarNumero();
    limparCampo();
    tentativas = 1;
    telaInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = ''; 
}