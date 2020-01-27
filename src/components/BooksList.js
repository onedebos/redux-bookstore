import React from 'react';
import Book from './Book';

const BooksList = () => (
  <div>
    <table>
      <thead>
        <tr>Book ID </tr>
        <tr>Title </tr>
        <tr>Category </tr>
      </thead>
      <tbody>
        <Book />
      </tbody>
    </table>
  </div>
);


export default BooksList;
