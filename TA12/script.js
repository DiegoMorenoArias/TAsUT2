const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lower = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const specials = '!@#$%^&*()_+[]{}|;:,.<>?';

const allChars = upper + lower + numbers + specials;

function generatePassword(length)
{
    let password = '';

    // Incluir al menos un carácter de cada tipo
    password += upper[Math.floor(Math.random() * upper.length)];
    password += lower[Math.floor(Math.random() * lower.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += specials[Math.floor(Math.random() * specials.length)];

    // Rellena el resto de la contraseña con caracteres aleatorios
    for (let i = 4; i < length; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Mezclar la contraseña para que los caracteres no estén siempre en el mismo orden
    password = password.split('').sort(() => Math.random() - 0.5).join('');
    return password;
}

function generarContraseñaAleatoria()
{
    let numberInput = document.getElementById("largo");
    let passwordListDiv = document.getElementById("passwortList");
    passwordListDiv.innerHTML = '';
    let number = numberInput.value;
    if(number && parseInt(number) >= 8)
    {
        let contraseña = generatePassword(parseInt(number));
        passwordListDiv.innerHTML += `Su contraseña aleatoria es ${contraseña}`;
    }
    else
    {
        passwordListDiv.innerHTML += "O bien no ingresó un largo, o ingresó un largo menor a 8. Por favor, revise."
    }
}