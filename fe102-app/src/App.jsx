import {useState, useEffect} from 'react';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      const response = await fetch('https://openlibrary.org/search.json?q=react');
      const json = await response.json();
      setBooks(json.docs);
    }

    fetchBooks();
  }, []);

  return (
    <ul>
      {books.map((book) => (
        <li key={book.key}>
          {book.title}
        </li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <div>
      <h1>React Book List</h1>
      <BookList />
    </div>
  );
}

export default App;