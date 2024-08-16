function convertToCelsius(temperature)
{

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = ''; // Limpia el contenido
    if (temperature < -442.3)
        {
            resultadoDiv.innerHTML += `La temperatura más baja en Fahrenheit existente es de -442.3, ${temperature}\n
            no es una temperatura válida.`;
            console.log(`La temperatura más baja en Fahrenheit existente es de -442.3, ${temperature}\n
            no es una temperatura válida.`);
        }
    else
    {
        let inCelsius = Math.round(((temperature - 32) * (5 / 9)) * 10) / 10;

        resultadoDiv.innerHTML += `${temperature}°F equivale a ${inCelsius}°C.`;
        console.log(`${temperature}°F equivale a ${inCelsius}°C.`);
    }
}
function convertToFahrenheit(temperature)
{

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = ''; // Limpia el contenido

    if (temperature < -263.5)
        {
            resultadoDiv.innerHTML += `La temperatura más baja en Celsius existente es de -263.5, ${temperature}\n
            no es una temperatura válida.`;
            console.log(`La temperatura más baja en Celsius existente es de -263.5, ${temperature}\n
            no es una temperatura válida.`);
        }
    else
    {
        let inFahrenheit = Math.round(((temperature * 9 / 5) + 32) * 10) / 10;

        resultadoDiv.innerHTML += `${temperature}°C equivale a ${inFahrenheit}°F.`;
        console.log(`${temperature}°C equivale a ${inFahrenheit}°F.`);
    }
}

function convertirACelsius()
{
    const temperatura = document.getElementById("temperatur").value;
    convertToCelsius(temperatura);
}

function convertirAFahrenheit()
{
    const temperatura = document.getElementById("temperatur").value;
    convertToFahrenheit(temperatura);
}