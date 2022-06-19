import { LoginPayload, User } from '../../Api/Fake/Users/users.interface';

export const userSliceAction = {
  login: 'user/login',
  loginAction: (payload: LoginPayload) => ({ type: userSliceAction.login, payload }),
  logout: 'user/logout',
  logoutAction: () => ({ type: userSliceAction.logout }),
  setUser: 'user/setUser',
  setUserAction: (payload: User) => ({ type: userSliceAction.setUser, payload }),
};
