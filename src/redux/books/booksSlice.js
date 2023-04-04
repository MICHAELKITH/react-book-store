import { createSlice } from '@reduxjs/toolkit';

const bookItems = [
  {
    id: 'item1',
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    id: 'item2',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    id: 'item3',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
  },
];

const initialState = {
  books: [...bookItems],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, { payload }) => ({
      ...state,
      books: [...state.books, payload],
    }),
    removeBook: (state, { payload }) => ({
      ...state,
      books: state.books.filter((book) => book.id !== payload),
    }),
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
