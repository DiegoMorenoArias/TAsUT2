let numbers = [];

function getOdds(numbers)
{
    return numbers.filter(numero => numero % 2 == 1);
}

function mostrarImpares()
{
    let impares = getOdds(numbers);
    const numbersListDiv = document.getElementById('zahlenList');
    numbersListDiv.innerHTML = ''; // Limpia el contenido previo
    numbersListDiv.innerHTML += `Los números impares de la lista son:${impares.join(', ')}`;
    console.log(`Los números impares de la lista son:${impares.join(', ')}`);
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