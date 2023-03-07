import { createSlice } from '@reduxjs/toolkit';
import { AUTHORS } from '../../app/data';
import { RootState } from '../../app/store';

export const authorsSlice = createSlice({
  name: 'authors',
  initialState: {
    authors: AUTHORS,
  },
  reducers: {}
});

export const selectAuthors = (state: RootState) => state.authors.authors;
export default authorsSlice.reducer;
