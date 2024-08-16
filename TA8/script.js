// Arreglo para almacenar las personas
let people = [];

// Función para agregar una persona
function añadirPersona()
{
    const nameInput = document.getElementById('nombre');
    const birthInput = document.getElementById('nacimiento');
    const deathInput = document.getElementById('muerte');

    const name = nameInput.value.trim();
    const birth = birthInput.value.trim();
    const death = deathInput.value.trim();

    if (name && birth && death)
    {
        people.push({ name, birth, death });
        nameInput.value = '';
        birthInput.value = '';
        deathInput.value = '';
        alert('Se añadió la persona a la lista satisfactoriamente.');
    }
    else
    {
        alert('Por favor, llená todas las informaciones.');
    }
}

// Función para eliminar una persona
function eliminarPersona()
{
    const nameInput = document.getElementById('nombre');
    const name = nameInput.value.trim();

    if (name)
    {
        people = people.filter(person => person.name !== name);
        nameInput.value = '';
        alert('Se removió a la persona (si es que estaba en la lista).');
    }
    else
    {
        alert('Por favor, ingresá el nombre de la persona a eliminar de la lista.');
    }
}

// Función para ver todas las personas
function verPersonas()
{
    const peopleListDiv = document.getElementById('personenList');
    peopleListDiv.innerHTML = ''; // Limpia el contenido previo

    if (people.length === 0)
    {
        peopleListDiv.innerHTML = 'No hay personas en la lista.';
    }
    else
    {
        const ul = document.createElement('ul');
        people.forEach(people => {
            const li = document.createElement('li');
            li.textContent = `Nombre: ${people.name} Año de nacimiento: ${people.birth} Año de muerte: ${people.death}`;
            ul.appendChild(li);
        });
        peopleListDiv.appendChild(ul);
    }
}
function laMásVieja() {
    const peopleListDiv = document.getElementById("personenList");
    peopleListDiv.innerHTML = ""; // Limpia el contenido previo

    if (people.length === 0) {
        peopleListDiv.innerHTML = 'No hay personas en la lista.';
        console.log('No hay personas en la lista.');
    }
    else
    {
        let amAltesten = findTheOldest(people);
        peopleListDiv.innerHTML = `La persona más vieja es ${amAltesten}.`;
        console.log(`La persona más vieja es ${amAltesten}.`);
    }
}
function findTheOldest(people) {
    people.sort((a, b) => a.birth - b.birth);
    return people[0].name; // Retorna el nombre de la persona más vieja
}
