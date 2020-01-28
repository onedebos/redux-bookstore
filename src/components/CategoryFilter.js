import React from "react";
import PropTypes from "prop-types";
import categoriesBook from "../constants/categoriesBook";
import "./CategoryFilter.css";

const CategoryFilter = ({ CategoryFilter }) => {
  const handleChange = e => {
    CategoryFilter(e.target.value);
  };

  return (
    <div className="filter-drop">
      <span>Filter Books: </span>
      <div>
        <select
          className="filter-books"
          name="category"
          onChange={handleChange}
        >
          <option value="All">All</option>
          {categoriesBook.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

CategoryFilter.propTypes = {
  CategoryFilter: PropTypes.func.isRequired
};

export default CategoryFilter;
