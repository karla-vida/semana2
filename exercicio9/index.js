var resultado = 0;
var contador 
function decrementar () {
    var idHtml = document.getElementById("valorAtual");
    var numero = idHtml.textContent;
    var conta = parseInt(numero) - 1;
    valorAtual.textContent  = conta;
}
function incrementar () {
    var idHtml = document.getElementById("valorAtual");
    var numero = idHtml.textContent;
    var conta = parseInt(numero) + 1;
    valorAtual.textContent  = conta;
}