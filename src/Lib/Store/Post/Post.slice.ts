import { Post } from './../../Api/Placeholder/post';
import { createSlice } from '@reduxjs/toolkit';

export interface PostSlice {
  posts: Post[];
}

const initialState: PostSlice = {
  posts: [],
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
   getPosts: (state, { payload } : { payload: Post[] }) => {
    console.log('initiate post query');
    state.posts = payload;
   },
  },
});

// Action creators are generated for each case reducer function
export const postSliceActions = postSlice.actions;

export default postSlice.reducer;
