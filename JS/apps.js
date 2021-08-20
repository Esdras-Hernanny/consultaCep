function consultaCep(){
    var cep = document.querySelector("#cep").value;
    console.log(cep);

    $(".progress").show();

    $.ajax({
        url: "https://viacep.com.br/ws/"+cep+"/json/",
        type: "GET",
        success: function(response){
            console.log(response);
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $(".dados").show();
            $(".progress").hide();
            // Condicional verifica CEP inválido. CEP para teste (59580060).
            if(response.erro == true){
                alert("Este CEP não existe, verifique o número e tente novamente.");
            }
        }
    })
}

$(function() {
    $(".dados").hide();
    $(".progress").hide();
})



