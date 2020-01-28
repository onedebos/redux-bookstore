import React from "react";
import Menu from "./Menu";
import BooksForm from "../containers/BooksForm";
import BooksList from "../containers/BooksList";

function App() {
  return (
    <div>
      <Menu />
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
