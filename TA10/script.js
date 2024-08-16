let numbers = [];

function getSum(numbers)
{
    return eval(numbers.join('+'));
}

function obtenerSuma()
{
    const numbersListDiv = document.getElementById('zahlenList');
    numbersListDiv.innerHTML = ''; // Limpia el contenido previo
    if(numbers.length == 0)
    {
        numbersListDiv.innerHTML += "No hay números en la lista para sumar aún."; // Limpia el contenido previo
    }
    else
    {
        resultado = getSum(numbers);
        numbersListDiv.innerHTML += `El resultado de sumar todos los números de la lista es ${resultado}.`;
        console.log(resultado);
    }
}
function agregarNumero()
{
    const numberInput = document.getElementById('numero');

    const number = numberInput.value.trim();

    if (number)
    {
        numbers.push(parseInt(number));
        numberInput.value = '';
        alert('Se añadió el número a la lista satisfactoriamente.');
    }
    else
    {
        alert('Por favor, ingresa un valor.');
    }
}

function eliminarNumero()
{
    const numberInput = document.getElementById('numero');
    const number = numberInput.value.trim();

    if (number)
    {
        numbers = numbers.filter(numero => numero !== parseInt(number));
        numberInput.value = '';
        alert('Se removió el número (si es que estaba en la lista).');
    }
    else
    {
        alert('Por favor, ingresá un número a eliminar de la lista.');
    }
}

function mostrarNumeros()
{
    const numbersListDiv = document.getElementById('zahlenList');
    numbersListDiv.innerHTML = ''; // Limpia el contenido previo

    if (numbers.length === 0)
    {
        numbersListDiv.innerHTML = 'No hay números en la lista.';
    }
    else
    {
        const ul = document.createElement('ul');
        for(let i = 0; i < numbers.length; i++)
        {
            const li = document.createElement('li');
            li.textContent = numbers[i];
            ul.appendChild(li);
        }
        numbersListDiv.appendChild(ul);
    }
}