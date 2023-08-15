var nome
var email
var num = 0;
saldo = 1000;
var saque =0;
var deposito =0;

function retirada(saque){
    saldo = saldo - saque
    return saldo
}

function colocando(deposito) {
    saldo = saldo + deposito
    return saldo
}


function escrever(quadro) {
    info = "Usuário número " + (++num) + "\n";
    info += "Nome: " + nome + "\n";
    info += "E-mail: " + email + "\n";
    info += "Depostito: " + colocando(deposito) + "\n";
    info += "saldo:" + retirando(saque) + "\n \n";
    quadro.value += info;
}