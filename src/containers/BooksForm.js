import React from 'react';

function BooksForm() {
  const categoriesBook = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const optionCategories = categoriesBook.map(
    category => <option key={category}>{category}</option>,
  );
  return (
    <form>
      <input type="text" name="title" />
      <select name="categories">
        {optionCategories}
      </select>
    </form>
  );
}

export default BooksForm;
