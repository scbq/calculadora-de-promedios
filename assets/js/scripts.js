function calcularPromedios() {
    for (let i = 1; i <= 3; i++) {
        let notas = [];
        for (let j = 1; j <= 3; j++) {
            let nota = parseFloat(document.getElementById(`nota${j}_ramo${i}`).value);
            notas.push(nota);
        }
        let promedio = notas.reduce((a, b) => a + b, 0) / 3;
        document.getElementById(`promedio_ramo${i}`).innerText = promedio.toFixed(2);
    }
}
