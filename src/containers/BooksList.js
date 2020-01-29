import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import { removeBook, changeFilter } from '../actions';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({
  books, removeBook, filter, changeFilter,
}) => {
  const handleRemoveBook = book => {
    removeBook(book);
  };

  const handleFilterChange = filter => {
    changeFilter(filter);
  };

  let renderBooks;
  if (filter === 'All') {
    renderBooks = books.map(book => (
      <Book book={book} key={book.id} deleteBook={handleRemoveBook} />
    ));
  } else {
    renderBooks = books
      .filter(storedBook => storedBook.category === filter)
      .map(book => (
        <Book book={book} key={book.id} deleteBook={handleRemoveBook} />
      ));
  }

  return (
    <div>
      <CategoryFilter CategoryFilter={handleFilterChange} />
      <div>{renderBooks}</div>
    </div>
  );
};

const mapStateToProps = state => ({ books: state.books, filter: state.filter });

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
  changeFilter: filter => dispatch(changeFilter(filter)),
});

BooksList.defaultProps = {
  books: [],
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
