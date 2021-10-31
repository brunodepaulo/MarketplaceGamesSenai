let email = document.getElementById("campo-email");

//DOM - Documento Object Model

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