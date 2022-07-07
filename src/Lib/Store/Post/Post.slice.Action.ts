import { Post } from '../../Api/Placeholder/post';

export const postSliceAction = {
  getPosts: 'post/getPosts',
  getPostAction: (payload: Post[]) => ({ type: postSliceAction.getPosts, payload })
};
