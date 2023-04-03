import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  message: '',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => {
      state.message = 'Coming Soon!';
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
