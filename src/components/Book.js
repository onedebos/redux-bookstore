import React from "react";
import PropTypes from "prop-types";
import "../style/Book.css";

function Book({ book, deleteBook }) {
  const handleRemoveBook = () => {
    deleteBook(book);
  };
  return (
    <div className="Book-Panel">
      <div>
        <p className="Book-cat">{book.category}</p>
        <h2 className="title">{book.title}</h2>
        <button className="remove" type="button" onClick={handleRemoveBook}>
          Remove Book
        </button>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired
  }).isRequired,
  deleteBook: PropTypes.func.isRequired
};
export default Book;
