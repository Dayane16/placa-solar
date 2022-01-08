function validacao(){
    var name = document.getElementById('txtname')
    var sobrenome = document.getElementById('txtsobre')
    var nascimento = document.getElementById('datenasc')
    var email = document.getElementById('email')
    var senha = document.getElementById('senha')
    var endereço = document.getElementById('txtend')
    var telefone = document.getElementById('numphone')
    var cpf = document.getElementById("numcpf")

    if (name.value.length ==  ' ' || sobrenome.value.length == ' ' || nascimento.value.length == ' '
    || email.value.length ==  ' ' || senha.value.length ==  ' '    || endereço.value.length == ' ' 
    || telefone.value.length == ' '){

       window.alert("preencha todos os campos por favor!")

    } else if (cpf.value.length < 11 ){

        window.alert("Insira o CPF completo!")

    } else if ( telefone.value.length < 11 ){
      
        window.alert ("Insira o numero de telefone completo")
    } 
}