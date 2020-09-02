document.getElementById('formulario').addEventListener('submit', cadastraVeiculo)

function cadastraVeiculo() {
    var modeloCarro = document.getElementById('modeloCarro').value;
    var placaCarro = document.getElementById('placaCarro').value;
    var time = new Date();

    carro = {
        modelo: modeloCarro,
        placa: placaCarro,
        hora: time.getHours(),
        minutos: time.getMinutes()
    }

    e.preventDefault();
}