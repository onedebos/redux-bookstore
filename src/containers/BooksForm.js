import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';
import categoriesBook from '../constants/categoriesBook';
import '../style/BooksForm.css';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      category: categoriesBook[0]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    if (e.target.name === 'title') {
      this.setState({ title: e.target.value });
    }
    if (e.target.name === 'categories') {
      this.setState({ category: e.target.value });
    }
  }

  makeBook() {
    const { title, category } = this.state;
    return {
      id: Math.round(Math.random() * 100000),
      title,
      category,
      price: 10
    };
  }

  clearForm() {
    this.setState({ title: '', category: categoriesBook[0] });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title } = this.state;
    const { createBook } = this.props;
    if (title) {
      createBook(this.makeBook());

      this.clearForm();
    }
  }

  render() {
    const { category, title } = this.state;
    const optionCategories = categoriesBook.map(category => (
      <option key={category}>{category}</option>
    ));
    return (
      <form onSubmit={this.handleSubmit} className="addBookForm">
        <div className="form-title">ADD NEW BOOK</div>
        <div className="formWrapper">
          <div className="add-book">
            <input
              className="add-book-input"
              placeholder="add a new book.."
              type="text"
              name="title"
              value={title}
              onChange={this.handleChange}
            />
            <select
              className="filter-books arrow"
              name="categories"
              value={category}
              onChange={this.handleChange}
            >
              {optionCategories}
            </select>
            <button className="add-book-btn" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createBook: book => {
    dispatch(createBook(book));
  }
});

BooksForm.propTypes = {
  createBook: PropTypes.instanceOf(Function).isRequired
};

export default connect(null, mapDispatchToProps)(BooksForm);
