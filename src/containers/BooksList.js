import { connect } from "react-redux";
import PropTypes from "prop-types";
import React from "react";
import { removeBook } from "../actions";
import Book from "../components/Book";
import CategoryFilter from "../components/CategoryFilter";

const BooksList = ({ books, removeBook, filter, changeFilter }) => {
  const handleRemoveBook = book => {
    removeBook(book);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Book ID</td>
            <td>Title</td>
            <td>Category</td>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <Book book={book} key={book.id} deleteBook={handleRemoveBook} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => ({ books: state.books, filter: state.filter });

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book))
});

BooksList.defaultProps = {
  books: [],
  filter: "All"
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
