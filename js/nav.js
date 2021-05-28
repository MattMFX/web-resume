let navItens = document.getElementsByClassName("cabecalho-itemLista");
var nomePaginaAtual = navItens.item(0).id;
var exec = true;

Array.from(navItens).forEach(pagina => {
    pagina.addEventListener("click", event => {
        if(exec) {
            exec = false;
            carregaConteudo(event.target);
            setTimeout(function() {
                exec = true;
            }, 1600);
        }
    });    
});


function carregaConteudo(pagina) {
    let classe = pagina.id.split("-");
    let paginaSelecionada = document.getElementsByClassName(classe[0]).item(0);
    let paginaAtual = document.getElementsByClassName(nomePaginaAtual).item(0);
    
    if(paginaAtual != paginaSelecionada) {
        paginaSelecionada.classList.remove("fade-in");
        paginaAtual.classList.remove("fade-out");
        paginaAtual.classList.add("fade-out");
        setTimeout(function() {
            paginaAtual.classList.add("hidden");
    
            paginaSelecionada.classList.remove("fade-out");
            paginaSelecionada.classList.remove("fade-in");
            paginaSelecionada.classList.remove("hidden");
            paginaSelecionada.classList.add("fade-in");
        }, 1000);

        nomePaginaAtual = classe[0];
    } else {
        exec = true;
    }
}