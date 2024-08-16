function sumAll(num1, num2)
{
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = ''; // Limpia el contenido

    let resultado = 0;
    if (num1 > num2)
    {
        temp = num2
        num2 = num1;
        num1 = temp;
    }
    if(num1 == num2)
    {
        resultado = num1;
    }
    else
    {
        for(let i = num1; i < num2 + 1; i++)
        {
            resultado += i;
        }
    }
    resultadoDiv.innerHTML += `El resultado de sumar todos los números del ${num1} al ${num2} es ${resultado}`;

}

function sumarNumeros()
{
    let firstNumber = document.getElementById("erstNummer").value;
    let secondNumber = document.getElementById("zweiterNummer").value;
    if (firstNumber && secondNumber)
    {
    // Obtiene el valor del texto y las repeticiones desde los inputs
    const primerNumero = parseInt(firstNumber);
    const segundoNumero = parseInt(secondNumber);

    // Llama a la función reverseString con los valores ingresados por el usuario
    sumAll(primerNumero, segundoNumero);
    }
    else
    {
        alert('Por favor, ingrese ambos números.');
    }   
}