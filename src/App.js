import {  useEffect, useContext } from "react";
import BookCreate from "./component/BookCreate";
import BookList from "./component/BookList";
import BooksContext from "./context/books";

function App() {
  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}
export default App;
