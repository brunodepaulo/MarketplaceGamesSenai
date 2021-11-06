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
        titulo: "Dragon Ball Z - Kakarot - 1",
        descricao: "07 dias para terminar"      
    },
    {
        imagem: "images/Rectangle13.png",
        titulo: "Dragon Ball Z - Kakarot - 2",
        descricao: "07 dias para terminar"      
    },
    {
        imagem: "images/Rectangle13.png",
        titulo: "Dragon Ball Z - Kakarot - 3",
        descricao: "07 dias para terminar"      
    },
    {
        imagem: "images/Rectangle13.png",
        titulo: "Dragon Ball Z - Kakarot - 4",
        descricao: "07 dias para terminar"      
    },
    {
        imagem: "images/Rectangle13.png",
        titulo: "Dragon Ball Z - Kakarot - 5",
        descricao: "07 dias para terminar"      
    }
]

function renderizarOfertas() {
    let espaco = document.getElementById("ofertas_noticias");
    
    let template = "";

    for (let index = 0; index < listaOfertas.length; index++) {
        const oferta = listaOfertas[index];
    
        console.log("oferta")

        template += `<div class="ofertas">
            <img src="${oferta.imagem}" alt="Ofertas da Semana">
            <h3>${oferta.titulo}</h3>
            <p>${oferta.descricao}</p>
        </div>`

    }

    console.log(espaco.innerHTML)

    espaco.innerHTML = template;
}