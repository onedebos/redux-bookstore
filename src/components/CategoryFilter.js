import React from 'react';
import PropTypes from 'prop-types';
import categoriesBook from '../constants/categoriesBook';

const CategoryFilter = ({ CategoryFilter }) => {
  const handleChange = e => {
    CategoryFilter(e.target.value);
  };

  return (
    <div>
      <select name="category" onChange={handleChange}>
        <option value="All">All</option>
        {categoriesBook.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  CategoryFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
