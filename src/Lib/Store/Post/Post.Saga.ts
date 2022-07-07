import { takeEvery, fork, put } from 'redux-saga/effects';
import postApi from '../../Api/Placeholder/post';
import { postSliceAction } from './Post.slice.Action';

function* postQueryMiddleWare(): any {
  const posts = yield postApi.getPostList();
  yield console.log(posts);
  yield put(postSliceAction.getPostAction(posts));
}

function* postListQuery() {
  yield takeEvery(postSliceAction.getPosts as any, postQueryMiddleWare);
}

export default function* postSaga() {
  yield fork(postListQuery);
}
