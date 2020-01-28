const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return { ...state, books: [...state.books, action.book] };
    case REMOVE_BOOK:
      console.log('state', state);
      return state.books.filter(storedBook => storedBook.id !== action.book.id);
    default:
      console.log('initial state', state);
      return state;
  }
};

export default bookReducer;
