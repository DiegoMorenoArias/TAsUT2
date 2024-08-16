// Arreglo para almacenar los libros
let books = [];

// Función para agregar un libro
function añadirLibro()
{
    const titleInput = document.getElementById('título');
    const authorInput = document.getElementById('autor');

    const title = titleInput.value.trim();
    const author = authorInput.value.trim();

    if (title && author)
    {
        books.push({ title, author });
        titleInput.value = '';
        authorInput.value = '';
        alert('Se añadió el libro satisfactoriamente.');
    }
    else
    {
        alert('Por favor, llená ambas informaciones.');
    }
}

// Función para eliminar un libro
function eliminarLibro()
{
    const titleInput = document.getElementById('título');
    const title = titleInput.value.trim();

    if (title)
    {
        books = books.filter(book => book.title !== title);
        titleInput.value = '';
        alert('Se removió el libro (si es que existía).');
    }
    else
    {
        alert('Por favor, ingresá el título del libro a eliminar.');
    }
}

// Función para ver todos los libros
function verLibros()
{
    const bookListDiv = document.getElementById('bücherList');
    bookListDiv.innerHTML = ''; // Limpia el contenido previo

    if (books.length === 0)
    {
        bookListDiv.innerHTML = 'No hay libros disponibles (por ahora ☺).';
    }
    else
    {
        getTheTitles(books);
    }
}
function getTheTitles(books)
{
    const bookListDiv = document.getElementById('bücherList');
    bookListDiv.innerHTML = ''; // Limpia el contenido previo
    const ul = document.createElement('ul');
        books.forEach(book => {
            const li = document.createElement('li');
            li.textContent = `Libro: ${book.title} Autor: ${book.author}`;
            console.log(`Libro: ${book.title} Autor: ${book.author}`);
            ul.appendChild(li);
        });
        bookListDiv.appendChild(ul);
}
