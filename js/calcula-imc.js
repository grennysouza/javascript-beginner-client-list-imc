var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function(paciente) {
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");
    var imc = calcularImc(peso, altura);
    tdImc.textContent = imc.toFixed(2);
});

function calcularImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc;
}