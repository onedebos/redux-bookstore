import React, { useState } from 'react';
import Menu from './Menu';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';

function App() {
  const [totalBooks, setTotalBooks] = useState(0);
  const [bookInCart, setBookInCart] = useState([]);

  const addToCart = book => {
    const books = bookInCart.concat(book);
    setBookInCart(books);
    setTotalBooks(bookInCart.length + 1);
  };

  return (
    <div>
      <Menu totalBooks={totalBooks} />
      <BooksList totalBooks={totalBooks} addToCart={addToCart} />
      <BooksForm />
    </div>
  );
}

export default App;
