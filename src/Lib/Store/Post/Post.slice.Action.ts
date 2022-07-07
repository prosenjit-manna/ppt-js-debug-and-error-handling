import { Post } from '../../Api/Placeholder/post';

export const postSliceAction = {
  getPosts: 'post/getPosts',
  setPostList: 'post/setPostList',
  setPostListAction: (payload: Post[]) => ({ type: postSliceAction.setPostList, payload }),
  getPost: 'post/getPost',
  setPost: 'post/setPost',
  setPostAction: (payload: Post) => ({ type: postSliceAction.setPost, payload }),
};
