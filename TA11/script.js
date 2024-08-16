let numbers = [];

function duplicates(nums)
{
    const countMap = new Map();
    let duplicatesCount = 0;

    // Contar la frecuencia de cada número en el array
    nums.forEach(num =>
    {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    });

    // Contar cuántos números tienen más de una aparición
    countMap.forEach(count =>
    {
        if (count > 1)
        {
            duplicatesCount++;
        }
    });

    return duplicatesCount;
}

function duplicados()
{
    const numbersListDiv = document.getElementById('zahlenList');
    numbersListDiv.innerHTML = ''; // Limpia el contenido previo
    if(numbers.length == 0)
    {
        numbersListDiv.innerHTML += "No hay números en la lista aún."; // Limpia el contenido previo
    }
    else
    {
        let duplicados = duplicates(numbers);
        numbersListDiv.innerHTML += `La cantidad de números duplicados en la lista es ${duplicados}.`;
        console.log(duplicados);
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