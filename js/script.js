//Slick Slider
$('.main-card').slick({
    dots: false,
    autoplaySpeed: 2000,
    arrows: false, //Pontos para navegação do slider
    infinite: true, //Slider possui rolagem finita
    speed: 300, //Velocidade na qual as imagens se mexem
    slidesToShow: 3, //Quantidade de imagens que aparecerão na tela
    slidesToScroll: 1, //Quantidade de imagens que serão puladas a cada rolagem
    responsive: [
        {
        breakpoint: 1024, //Breakpoint para telas abaixo de 1024px
        settings: {
            slidesToShow: 2,
            centerMode: true,
            autoplaySpeed: 2000, //Quantidade de imagens que aparecerão na tela
            speed: 300,
            slidesToScroll: 1, //Quantidade de imagens que serão puladas a cada rolagem
            infinite: false, //Slider possui rolagem infinita
            dots: false, //Pontos para navegação do slider
            arrows: false //Setinhas para navegação estão desabilitadas a partir deste breakpoint (1024px)
            }
        },
        {
        breakpoint: 992, //Breakpoint para telas abaixo de 600px
        settings: {
            slidesToShow: 2,
            centerMode: false,
            autoplaySpeed: 2000,
            speed: 300,
            slidesToScroll: 1,
            arrows: false
            }
        },
        {
        breakpoint: 768, //Breakpoint para telas abaixo de 600px
        settings: {
            slidesToShow: 2,
            centerMode: false,
            autoplaySpeed: 2000,
            speed: 300,
            slidesToScroll: 2,
            arrows: false
            }
        },
        {
        breakpoint: 576, //Breakpoint para telas abaixo de 480px
        settings: {
            slidesToShow: 1,
            centerMode: true,
            autoplaySpeed: 2000,
            speed: 300,
            slidesToScroll: 1,
            arrows: false
            }
        }
    
    ]
});

//Eventos do formulário
$('input[name=nome], input[name=email], input[name=telefone]').focus(function(){
    resetarCampoInvalido($(this)); //Reseta os campos inválidos acima
});

$('.formulario').submit(function(e){
    e.preventDefault();
    var nome = $('input[name=nome]').val();
    var email = $('input[name=email]').val();
    var telefone = $('input[name=telefone]').val();

    if(verificarNome(nome) == false){ //Se igual a falso, aplique a função aplicarCampoInvalido em seu determinado campo do formulário
        aplicarCampoInvalido($('input[name=nome]'));
    }if(verificarEmail(email) == false){ //Se igual a falso, aplique a função aplicarCampoInvalido em seu determinado campo do formulário
        aplicarCampoInvalido($('input[name=email]'));
    }if(verificarTelefone(telefone) == false){ //Se igual a falso, aplique a função aplicarCampoInvalido em seu determinado campo do formulário
        aplicarCampoInvalido($('input[name=telefone]'));
    }else{
        alert('Dados enviados com sucesso!'); //Se rodou o else, então funcionou corretamente
    }
});

//Estilização dos campos do formulário
function aplicarCampoInvalido(elemento){
    elemento.css('color', 'red');
    elemento.css('border-bottom', '1px solid red');
    elemento.val('Campo Inválido!!');
}

//Função para resetar os campos do formulário
function resetarCampoInvalido(elemento){
    elemento.css('color', 'black');
    elemento.css('border-bottom', '1px solid #484850');
    elemento.val('');
}

//Função para verificar os valores digitados em cada campo
function verificarNome(nome){
    if(nome == ''){
        return false;
    }

    var qnt = nome.split(' ').lenght;//Quantidade de espaços contidos em um nome
    var splitStr = nome.split(' ');
    if(qnt >= 3){
        for(var i = 0; i < qnt; i++){
            if(splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)){ //Percorre o nome e valida apenas se a primeira letra for maiúscula e que contenha no mínimo 2 espaços

            }else{
                return false;
            }
        }
    }else{
        return false;
    }
}

function verificarTelefone(telefone){
    if(telefone == ''){
        return false; 
    }

    if(telefone.match(/^[0-9]{2}[0-9]{5}[0-9]{4}$/) == null){
        return false;
    }
}

function verificarEmail(email){
    if(email == ''){
        return false
    }if(email.match(/^([a-z0-9-_.]{1,})+@+([a-z.]{1,})$/) == null){
        return false
    }
}
