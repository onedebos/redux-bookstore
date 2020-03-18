import React from 'react';
import '../style/Menu.css';

const Menu = ({ totalBooks, totalPrice }) => (
  <div className="menu">
    <div>
      <h1 className="menu-title">Bookstore CMS</h1>
    </div>
    <div className="cartMenu">
      <p className="books">BOOKS</p>
      <p className="categories">CATEGORIES</p>
      <p className="cart">
        <i className="material-icons cartIcon">shopping_cart</i>
        <span>{totalBooks}</span>
        <span className="price">${totalPrice}</span>
      </p>
    </div>
  </div>
);

export default Menu;
