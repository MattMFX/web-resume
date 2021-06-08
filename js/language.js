var textosPortugues = document.getElementsByClassName("pt-BR");
var textosIngles = document.getElementsByClassName("en-US");

let langs = [];
var botaoPortugues = document.getElementById("pt-BR");
var botaoIngles = document.getElementById("en-US");

langs.push(botaoPortugues);
langs.push(botaoIngles);

setLinguagem();

for(let i=0; i<langs.length; i++) {
    langs[i].addEventListener("click", function() {
        selectLinguagem(this);
    });
}

function selectLinguagem(linguagemClicada) {
    if(linguagemClicada.id == "pt-BR") {
        botaoIngles.classList.add("opaco");
        linguagemClicada.classList.remove("opaco");
    } else {
        botaoPortugues.classList.add("opaco");
        linguagemClicada.classList.remove("opaco");
    }

    trocaLinguagem(linguagemClicada.id);
}

function setLinguagem() {
    const locale = navigator.language;

    if(locale == "pt-BR") {
        selectLinguagem(botaoPortugues);
    } else {
        selectLinguagem(botaoIngles);
    }
}

function trocaLinguagem(linguagem) {
    for(let i=0; i<textosPortugues.length; i++) {
        if(linguagem == "pt-BR") {
                textosIngles[i].classList.add("hidden");
                textosPortugues[i].classList.remove("hidden");
        } else {
            textosPortugues[i].classList.add("hidden");
            textosIngles[i].classList.remove("hidden");
        }
    }
}