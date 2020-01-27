import React from "react";
import { createBook } from "../actions/index";
import { connect } from "react-redux";
import { categoriesBook } from "../constants/categoriesBook";
class BooksForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      category: categoriesBook[0]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    if (e.target.name === "title") {
      this.setState({ title: e.target.value });
    }
    if (e.target.name === "categories") {
      this.setState({ category: e.target.value });
    }
  };

  makeBook() {
    const { title, category } = this.state;
    return {
      title,
      category,
      id: Math.round(Math.random() * 1000)
    };
  }

  clearForm() {
    this.setState({ title: "", category: categoriesBook[0] });
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(createBook(this.makeBook()));
    this.clearForm();
  };

  render() {
    const optionCategories = categoriesBook.map(category => (
      <option key={category}>{category}</option>
    ));
    return (
      <form>
        <input type="text" name="title" onChange={this.handleChange} />
        <select name="categories" onChange={this.handleChange}>
          {optionCategories}
        </select>
        <button type="submit" onClick={this.handleSubmit}>
          Submit
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createBook: book => {
    dispatch(createBook(book));
  }
});

export default connect(null, mapDispatchToProps)(BooksForm);
