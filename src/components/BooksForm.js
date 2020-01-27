import React from 'react';

class BooksForm extends React.Component {
  render() {
    const categoriesBook = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    const optionCategories = categoriesBook.map(category => <option key={category}>{category}</option>);
    return (
      <form>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" />
        <label htmlFor="categories">Categories</label>
        <select name="categories">
          {optionCategories}
        </select>
      </form>
    );
  }
}

export default BooksForm;
