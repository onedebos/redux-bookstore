const CREATE_BOOK = "CREATE_BOOK";
const REMOVE_BOOK = "REMOVE_BOOK";
const ADD_BOOK = "ADD_BOOK";

const bookReducer = (state = null, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter(storedBook => storedBook.id !== action.book.id);
    case ADD_BOOK:
      return state.addedBooks.concat(action.book);
    default:
      return state;
  }
};

export default bookReducer;
