import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    user: {},
    isLoggedIn: false
  },
  reducers: {
    signUp: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    editUser: (state, action) => {
      state.user = action.payload;
    },
    logOut: (state) => {
      state.user = {};
      state.isLoggedIn = false;
    }
  }
});

export const selectCurrentUser = (state: RootState) => state.session.user;
export const selectIsLoggedIn = (state: RootState) => state.session.isLoggedIn;
export const { signUp, logOut, editUser } = sessionSlice.actions;
export default sessionSlice.reducer;
