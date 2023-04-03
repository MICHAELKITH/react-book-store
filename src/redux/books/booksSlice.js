import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    bookAdded: (state, action) => {
      state.books.push(action.payload);
    },
    bookRemoved: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload.id);
    },
  },
});

export const { bookAdded, bookRemoved } = booksSlice.actions;
export default booksSlice.reducer;
