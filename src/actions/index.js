const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

export const createBook = book => ({
  type: CREATE_BOOK,
  book,
});


export const removeBook = book => ({
  type: REMOVE_BOOK,
  book,
});
