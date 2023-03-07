import { createSlice } from '@reduxjs/toolkit';
import { CATEGORIES } from '../../app/data';
import { RootState } from '../../app/store';

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: CATEGORIES,
  },
  reducers: {}
});

export const selectCategories = (state: RootState) => state.categories.categories;
export default categoriesSlice.reducer;
