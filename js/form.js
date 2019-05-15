var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    var paciente = obterInformacoesDoForm(form);

    var erros = validarPaciente(paciente);

    if (erros.length > 0) {
        exibirMensagensDeErro(erros);
        return;
    } 
    
    adicionarPacienteNaTabela(paciente);

    form.reset();
    document.querySelector("#mensagens-erros").innerHTML = "";
});

function adicionarPacienteNaTabela(paciente) {
    var pacienteTr = montarTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function obterInformacoesDoForm(form) {
    return {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularImc(form.peso.value, form.altura.value)
    };
}

function montarTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montarTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montarTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montarTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montarTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montarTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montarTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validarPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length === 0) {
        erros.push("O campo nome não pode estar vazio!");
    }

    if (paciente.gordura.length === 0) {
        erros.push("O campo gordura não pode estar vazio!");
    }

    if (paciente.peso.length === 0) {
        erros.push("O campo peso não pode estar vazio!");
    }

    if (paciente.altura.length === 0) {
        erros.push("O campo altura não pode estar vazio!");
    }

    if (!validarPeso(paciente.peso)) {
        erros.push("O peso é inválido");        
    } 

    if (!validarAltura(paciente.altura)) {            
        erros.push("A altura é inválida");
    } 

    return erros;
}

function exibirMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erros");
    ul.innerHTML = "";
        
    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })
}
