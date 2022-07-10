function exibirContato (){

    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var descricao = document.getElementById("descricao");

    console.log("formulário de contato " + "nome: "+ nome.value + " email: " + email.value + " descricao " + descricao.value);
    alert("Mensagem enviada com sucesso");
}

