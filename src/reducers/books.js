const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return { ...state, books: [...state.books, action.book] };
    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter(storedBook => storedBook.id !== action.book.id),
      };
    default:
      return state;
  }
};

export default bookReducer;
