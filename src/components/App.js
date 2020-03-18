import React, { useState } from 'react';
import Menu from './Menu';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';
import { ViewBooksInCart } from '../components/ViewBooksInCart';

function App() {
  const [totalBooks, setTotalBooks] = useState(0);
  const [bookInCart, setBookInCart] = useState([]);

  const addToCart = book => {
    const books = bookInCart.concat(book);
    setBookInCart(books);
    console.log(bookInCart);
    setTotalBooks(bookInCart.length + 1);
  };

  return (
    <div>
      <Menu totalBooks={totalBooks} />
      <BooksList totalBooks={totalBooks} addToCart={addToCart} />
      <BooksForm />
      <ViewBooksInCart bookInCart={bookInCart} />
    </div>
  );
}

export default App;
