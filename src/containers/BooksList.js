import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import Book from '../components/Book';

const BooksList = ({ books }) => (
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
        { books.map(book => <Book book={book} key={book.id} />)}
      </tbody>
    </table>
  </div>
);

const mapStateToProps = state => ({ books: state.books });

BooksList.defaultProps = {
  books: [],
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
};


export default connect(mapStateToProps)(BooksList);
