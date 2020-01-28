import React from "react";
import PropTypes from "prop-types";
import categoriesBook from "../constants/categoriesBook";

const CategoryFilter = props => {
  const { onChange } = props;
  const handleChange = event => {
    const { value } = event.target;
    onChange(value);
  };

  return (
    <div>
      <select name="category" onChange={handleChange}>
        <option>All</option>
        {categoriesBook.map(category => (
          <option key={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default CategoryFilter;
