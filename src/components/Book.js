import React from 'react';

class Book extends React.Component {
  render() {
    const { book } = this.props;

    return (
      <div>
        <tr>
          <td>{book.id}</td>
          <td>{book.title}</td>
          <td>{book.category}</td>
        </tr>
      </div>
    );
  }
}

export default Book;
