import { fork, put, takeEvery } from 'redux-saga/effects';
import { userApi } from '../../Api/Fake';
import { LoginPayload } from '../../Api/Fake/Users/users.interface';
import routes from '../../Routes/Routes';
import { helperSliceAction } from '../Helper/Helper.Slice.Action';
import { userSliceAction } from './User.Slice.Action';

function* loginMiddleWare({ payload }: { payload: LoginPayload }) {
  const { user } = yield userApi.getCurrentUser();
  yield console.log(user, payload);
  yield put(userSliceAction.setUserAction(user));
  yield put(helperSliceAction.redirectLinkAction(routes.profile.path));
}

function* loginSaga() {
  yield takeEvery(userSliceAction.login as any, loginMiddleWare);
}

function* logOutMiddleWare() {
  yield put(helperSliceAction.redirectLinkAction(routes.login.path));
}

function* logOutSaga() {
  yield takeEvery(userSliceAction.logout as any, logOutMiddleWare);
}

export default function* userSaga() {
  yield fork(loginSaga);
  yield fork(logOutSaga);
}
