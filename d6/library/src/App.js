import { useState } from 'react';
import './App.css';

class Book {

  constructor(title, author, isbn) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
  }

  static fromJSON(json) {
      return new Book(
        json.title,
        json.author,
        json.isbn,
      );
  }
}

function App() {

  const [booksArray, setBooks] = useState([]);

  function createRemoveBookButton(book) {
    const button = document.createElement('button');

    button.setAttribute('class', 'btn btn-danger btn-sm');
    button.innerHTML = 'X'
    button.addEventListener('click', () => {
      const target = book.isbn;
      setBooks(booksArray.filter(item => item.isbn !== target));
      renderTable();
    });

    return button;
  }

  function createBookTableRow(book){
    const tr = document.createElement('tr');

    const tdTitle = document.createElement('td');
    const tdAuthor = document.createElement('td');
    const tdISBN = document.createElement('td');
    const tdActions = document.createElement('td');

    tdTitle.innerHTML = book.title;
    tdAuthor.innerHTML = book.author;
    tdISBN.innerHTML = book.isbn;

    const removeButton = createRemoveBookButton(book);
    tdActions.appendChild(removeButton);

    tr.appendChild(tdTitle);
    tr.appendChild(tdAuthor);
    tr.appendChild(tdISBN);
    tr.appendChild(tdActions);

    return tr;
  }

  function renderTable(){
    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML = "";
    for (let i = 0; i< booksArray.length; i++){
      const book = booksArray[i];

      const tr = createBookTableRow(book);
      tableBody.appendChild(tr);
    }
  }

  function addNewBook(){
    const book = new Book(document.getElementById('title-input').value, document.getElementById("author-input").value, document.getElementById("isbn-input").value);
    console.log(book.title);
    setBooks(oldArray => [...oldArray, book]);
    console.log(booksArray);
    renderTable();
  }

  return (
    <div className="container my-5">
    <div className="card p-4">
      <h1>Library</h1>

      <form id="form">
        <div className="mb-3">
          <label className="form-label">
            Title
          </label>
          <input id="title-input" type="text" className="form-control"/>
        </div>

        <div className="mb-3">
          <label className="form-label">
            Author
          </label>
          <input id="author-input" type="text" className="form-control"/>
        </div>

        <div className="mb-3">
          <label className="form-label">
            #ISBN
          </label>
          <input id="isbn-input" type="text" className="form-control"/>
        </div>

        <div className="d-grid gap-2 mt-4">
          <button className="btn btn-outline-primary" type="button" onClick={addNewBook}>
            Add Book
          </button>
        </div>
      </form>

      <table className="table mt-5">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="table-body">

        </tbody>
      </table>
    </div>
  </div>
  );
}

export default App;
