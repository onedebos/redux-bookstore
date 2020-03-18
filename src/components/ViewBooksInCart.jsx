import React from 'react';

export const ViewBooksInCart = ({ bookInCart }) => {
  const displayBooks = bookInCart.map((book, id) => (
    <div className="Book-Panel" key={id}>
      <div>
        <p className="Book-cat">{book.category}</p>
        <h2 className="title">{book.title}</h2>
      </div>
    </div>
  ));
  return (
    <div>
      <h1>Books In Cart</h1>
      {displayBooks}
    </div>
  );
};
