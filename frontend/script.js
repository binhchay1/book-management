const bookApi = 'http://localhost:5000/api/books';

const form = document.getElementById('bookForm');
const list = document.getElementById('bookList');

async function loadBooks() {
    const res = await fetch(bookApi);
    const books = await res.json();
    list.innerHTML = books.map(book => `
    <li>
      ${book.title} - ${book.author || 'No author'} - ${book.publisher || 'No publisher'} - ${book.year || 'No year'} 
      <button onclick="deleteBook('${book._id}')">Delete</button>
    </li>
  `).join('');
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(form));
    await fetch(bookApi, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    });
    form.reset();
    loadBooks();
});

async function deleteBook(id) {
    await fetch(`${bookApi}/${id}`, { method: 'DELETE' });
    loadBooks();
}

loadBooks();
