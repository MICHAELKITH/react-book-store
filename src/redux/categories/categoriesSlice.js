import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    getStatus: (state) => (state.categories.length === 0 ? 'Under construction' : 'Ready'),
  },
});

export const { getStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
