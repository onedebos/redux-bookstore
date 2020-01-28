import React from "react";
import PropTypes from "prop-types";
import "./Book.css";

function Book({ book, deleteBook }) {
  const handleRemoveBook = () => {
    deleteBook(book);
  };
  return (
    <tr className="Bookstore-CMS">
      <td>{book.id}</td>
      <td className="title">{book.title}</td>
      <td>{book.category}</td>
      <td>
        <button type="button" onClick={handleRemoveBook}>
          Remove Book
        </button>
      </td>
    </tr>
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
