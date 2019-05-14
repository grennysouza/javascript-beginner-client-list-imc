var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");

    // Animação de remoção
    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);    
});

