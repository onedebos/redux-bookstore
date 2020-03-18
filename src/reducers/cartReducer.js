const ADD_TO_CART = "ADD_TO_CART";

const cartReducer = (state = 0, action) => {
  if (action.type === ADD_TO_CART) {
    let addedBook = state.books.find(book => book.id === action.id);
    let bookExists = state.addedBooks.find(book => action.id === book.id);
    if (bookExists) {
      addedBook.qty += 1;
      return {
        ...state,
        total: state.total + addedBook.price
      };
    } else {
      addedBook.qty = 1;
      const newTotal = state.total + addedBook.price;
      return {
        ...state,
        addedBooks: [...state.addedBooks, addedBook],
        total: newTotal
      };
    }
  } else {
    return state;
  }
};

export default cartReducer;
