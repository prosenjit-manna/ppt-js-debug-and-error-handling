import { takeEvery, fork, put } from 'redux-saga/effects';
import postApi from '../../Api/Placeholder/post';
import { PostQuery } from './Post.query.interface';
import { postSliceAction } from './Post.slice.Action';

function* postQueryMiddleWare({ payload }: { payload: PostQuery }): any {
  const posts = yield postApi.getPostList(payload);
  yield put(postSliceAction.setPostListAction(posts));
}

function* postListQuery() {
  yield takeEvery(postSliceAction.getPosts as any, postQueryMiddleWare);
}

function* postDetailsMiddleWare({ payload }: { payload: string }): any {
  const post = yield postApi.getPost(payload);
  yield put(postSliceAction.setPostAction(post));
}

function* postQuery() {
  yield takeEvery(postSliceAction.getPost as any, postDetailsMiddleWare);
}

export default function* postSaga() {
  yield fork(postListQuery);
  yield fork(postQuery);
}
