function reverseString(texto)
{
    const resultadoDiv = document.getElementById("resultado");

    resultadoDiv.innerHTML = ''; // Limpia el contenido
    let textoRevertido = texto.split("").reverse().join("");
    resultadoDiv.innerHTML += `"${texto}" del revés es "${textoRevertido}"`
}

function revertirTexto()
{
    // Obtiene el valor del texto y las repeticiones desde los inputs
    const texto = document.getElementById("texto").value;

    // Llama a la función reverseString con los valores ingresados por el usuario
    reverseString(texto);
}