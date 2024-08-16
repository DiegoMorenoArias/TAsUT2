function repeatString(texto, repeticiones)
{
    const resultadoDiv = document.getElementById("resultado");

    resultadoDiv.innerHTML = ''; // Limpia el contenido

    for (let i = 0; i < repeticiones; i++)
    {
        console.log(texto); // En consola
        resultadoDiv.innerHTML += `<p>${texto}</p>`; // A nivel de UI
    }
}

function repetirTexto()
{
    // Obtiene el valor del texto y las repeticiones desde los inputs
    const texto = document.getElementById("texto").value;
    const repeticiones = parseInt(document.getElementById("repeticiones").value);

    // Llama a la función repeatString con los valores ingresados por el usuario
    repeatString(texto, repeticiones);
}