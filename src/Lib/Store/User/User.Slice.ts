import { createSlice } from '@reduxjs/toolkit';
import { LoginPayload, User } from '../../Api/Fake/Users/users.interface';

export interface UserSliceState {
  currentUser: null | User;
}

const initialState: UserSliceState = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, { payload }: { payload: LoginPayload }) => {
      console.log('logging in', state.currentUser, payload);
    },
    setUser: (state, { payload }: { payload: User }) => {
      state.currentUser = payload;
    },
    logout: (state) => {
      state.currentUser = null;
    }
  }
});

// Action creators are generated for each case reducer function
export const userSliceActions = userSlice.actions;

export default userSlice.reducer;
