$(document).ready(function() {

    $("#carousel img:eq(0)").addClass("destaques_ativo").show()

    setInterval(slide, 2500)

    function slide() {
        if ($(".destaques_ativo").next().length) {
            $(".destaques_ativo").removeClass("destaques_ativo").hide().next().addClass("destaques_ativo").show()
        } else {
            $(".destaques_ativo").removeClass().hide()
            $("#carousel img:eq(0)").addClass("destaques_ativo").show()
        }
    }

    $("#barras").click(function() {
        // $("#menu").addClass("menu_ativo")
        // if ($("#menu").hasClass("menu_ativo")) {
        //     $("#menu").removeClass("menu_ativo")
        //     } else {
        //         $("#menu").addClass("menu_ativo")
        // }
        $("#menu").toggleClass("menu_ativo")
    })
})

let email = document.getElementById("campo-email");
let menu = document.getElementById("menu");

//DOM - Documento Object Model

function mostrarmenu() {
    if(menu.style.display != "none") {
        menu.style.display = "none"
    } else {
        menu.style.display = "flex"
    }
}

function enviarEmail() {
    let emailDigitado = email.value;
    console.log(emailDigitado);
}

let listaOfertas = [    
    {
        imagem: "images/Rectangle13.png",
        imagem_pc: "images/baseline_computer_white_24dp 2.png",
        imagem_console: "images/baseline_videogame_asset_white_24dp 2.png",
        titulo: "Dragon Ball Z - Kakarot - 1",
        descricao: "07 dias para terminar",
        desconto: "-70%",   
        preco: "R$149,90"
    },
    {
        imagem: "images/Rectangle13.png",
        imagem_pc: "images/baseline_computer_white_24dp 2.png",
        imagem_console: "images/baseline_videogame_asset_white_24dp 2.png",
        titulo: "Dragon Ball Z - Kakarot - 2",
        descricao: "07 dias para terminar",     
        desconto: "-70%",   
        preco: "R$149,90"
    },
    {
        imagem: "images/Rectangle13.png",
        imagem_pc: "images/baseline_computer_white_24dp 2.png",
        imagem_console: "images/baseline_videogame_asset_white_24dp 2.png",
        titulo: "Dragon Ball Z - Kakarot - 3",
        descricao: "07 dias para terminar",
        desconto: "-70%",   
        preco: "R$149,90"     
    },
    {
        imagem: "images/Rectangle13.png",
        imagem_pc: "images/baseline_computer_white_24dp 2.png",
        imagem_console: "images/baseline_videogame_asset_white_24dp 2.png",
        titulo: "Dragon Ball Z - Kakarot - 4",
        descricao: "07 dias para terminar",
        desconto: "-70%",   
        preco: "R$149,90"      
    },
    {
        imagem: "images/Rectangle13.png",
        imagem_pc: "images/baseline_computer_white_24dp 2.png",
        imagem_console: "images/baseline_videogame_asset_white_24dp 2.png",
        titulo: "Dragon Ball Z - Kakarot - 5",
        descricao: "07 dias para terminar",
        desconto: "-70%",   
        preco: "R$149,90"   
    }
]

function renderizarOfertas() {
    let espaco = document.getElementById("ofertas_noticias");
    
    let template = "";

    for (let index = 0; index < listaOfertas.length; index++) {
        const oferta = listaOfertas[index];
    
        console.log("oferta")

        template += 
        `<div class="ofertas">
            <div class="ofertas_imagem1">
                <img src="${oferta.imagem}" alt="Ofertas da Semana">
            </div>
            <div class="ofertas_fundo">
                <div class="ofertas_tit1">
                    <h3>${oferta.titulo}</h3>
                </div>
                <div class="ofertas_tipo">
                    <img src="${oferta.imagem_pc}" alt="Tipo de PC">
                    <img src="${oferta.imagem_console}" alt="Console">
                </div>
                <div class="ofertas_tempo">
                    <p>${oferta.descricao}</p>
                </div>
                <div class="ofertas_preco_guia">
                        <h2>${oferta.desconto}</h2>
                        <h1>${oferta.preco}</h1>
                </div>
            </div>
        </div>`
    }

    console.log(espaco.innerHTML)

    espaco.innerHTML = template;
}

let listaNovidades = [    
    {
        imagem: "images/Novidades_Figura.png",
        imagem_pc: "images/baseline_computer_white_24dp 2.png",
        titulo: "New World - 1",
        preco: "R$149,90"
    },
    {
        imagem: "images/Novidades_Figura.png",
        imagem_pc: "images/baseline_computer_white_24dp 2.png",
        titulo: "New World - 2",
        preco: "R$149,90"
    },
    {
        imagem: "images/Novidades_Figura.png",
        imagem_pc: "images/baseline_computer_white_24dp 2.png",
        titulo: "New World - 3",
        preco: "R$149,90"     
    },
    {
        imagem: "images/Novidades_Figura.png",
        imagem_pc: "images/baseline_computer_white_24dp 2.png",
        titulo: "New World - 4",
        preco: "R$149,90"      
    },
    {
        imagem: "images/Novidades_Figura.png",
        imagem_pc: "images/baseline_computer_white_24dp 2.png",
        titulo: "New World - 5",
        preco: "R$149,90"   
    }
]

function renderizarNovidades() {
    let espaco = document.getElementById("ofertas_novidades");
    
    let template = "";

    for (let index = 0; index < listaNovidades.length; index++) {
        const novidade = listaNovidades[index];
    
        console.log("novidade")

        template += 
        `<div class="ofertas">
            <div class="ofertas_imagem1">
                <img src="${novidade.imagem}" alt="Ofertas da Semana">
            </div>
            <div class="ofertas_fundo">
                <div class="ofertas_tit1">
                    <h3>${novidade.titulo}</h3>
                </div>
                <div class="ofertas_tipo">
                    <img src="${novidade.imagem_pc}" alt="Tipo de PC">
                </div>
                <div class="ofertas_preco_guia">
                        <h1>${novidade.preco}</h1>
                </div>
            </div>
        </div>`
    }

    console.log(espaco.innerHTML)

    espaco.innerHTML = template;
}