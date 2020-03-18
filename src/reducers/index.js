import { combineReducers } from "redux";
import booksReducer from "./books";
import filterReducer from "./filter";

const rootReducer = combineReducers({
  books: booksReducer,
  filter: filterReducer,
  addedBooks: booksReducer,
  total: booksReducer
});

export default rootReducer;
