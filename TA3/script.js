function removerDeArreglo() {
    let arreglo = arregloAleatorio();
    if (arreglo.length === 0) {
        document.getElementById("resultado").innerHTML = 'El arreglo está vacío.';
        return;
    }

    const randomIndex = Math.floor(Math.random() * arreglo.length);
    const item = arreglo[randomIndex];
    arreglo.splice(randomIndex, 1);

    // Mostrar el resultado en el DOM
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `Se eliminó el ítem "${item}" del arreglo.<br><br>Los elementos que quedaron en el array son: <br>`;
    for (let i = 0; i < arreglo.length; i++) {
        resultadoDiv.innerHTML += `${i}) ${arreglo[i]} <br>`;
    }
}

function arregloAleatorio() {
    const max = 100;
    const min = 1;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    const arreglo = [];
    for (let i = 0; i < randomNumber; i++) {
        arreglo.push(palabraAleatoria());
    }
    return arreglo;
}

function palabraAleatoria() {
    const caracteres = 'abcdefghijklmnopqrstuvwxyz';
    let palabra = '';
    const max = 23;
    const min = 3;
    const longitud = Math.floor(Math.random() * (max - min + 1)) + min;
    for (let i = 0; i < longitud; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        palabra += caracteres.charAt(indiceAleatorio);
    }
    return palabra;
}