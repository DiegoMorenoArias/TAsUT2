function leapYear(año){
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = ''; // Limpia el contenido

    if ((año % 100 == 0 && año % 400 != 0) || año % 4 != 0){
        resultadoDiv.innerHTML += `El año ${año} no es bisiesto`
        console.log(false);
    }
    else
    {
        resultadoDiv.innerHTML += `El año ${año} es bisiesto`
        console.log(true);
    }
}

function añoBisiesto(){
    let añoInput = document.getElementById("schaltJahr").value;
    if (añoInput)
    {
        const año = parseInt(document.getElementById("schaltJahr").value);
        leapYear(año);
    }
    else
    {
        alert('Por favor, ingrese un año.')
    }
}