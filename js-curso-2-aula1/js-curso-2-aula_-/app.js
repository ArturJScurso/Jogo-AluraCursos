let listaDeNumerosSorteados = [];
let numerolimite = 10;
let numeroSecreto = gerarNumero();
let tentativas = 1;

function mostraTexto(tag, texto) {
    var armazen = document.querySelector(tag);
    armazen.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    mostraTexto('h1', 'Jogo do número secreto');
    mostraTexto('p', 'Escolha um número de 1 até 10');      
}

exibirMensagemInicial();

function verificarChute() {
    var chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        mostraTexto('h1', 'Parabêns!!!') ;
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagenTentativas =  `Você acertou, o número secreto era ${numeroSecreto} com ${tentativas} ${palavraTentativa}:)`;
        mostraTexto('p', `${mensagenTentativas}`);
        limparCampo();
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            mostraTexto('h1', 'Errou');
            mostraTexto('p', `O número secreto é menor que ${chute}`);
        } else {
            mostraTexto('h1', 'Errou');
            mostraTexto('p', `O número secreto é maior que ${chute}`);
        }tentativas++;
        limparCampo();
    }
}

function gerarNumero() {
    let numeroEscolhido = parseInt(Math.random() *numerolimite + 1);
    let quantDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantDeElementosNaLista == numerolimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumero();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido)
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
   chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumero();
    limparCampo;
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}