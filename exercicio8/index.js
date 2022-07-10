function calculaAno (){
    var ano = prompt("informe um ano");
    var atual = new Date().getFullYear();
    var resultado = atual - parseInt(ano);
    alert ("Resultado: " + resultado ) 
}
