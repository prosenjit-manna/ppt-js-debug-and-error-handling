export const routes = {
  home: {
    path: '/',
  },
  login: {
    path: '/login'
  },
  forgetPassword: {
    path: '/forget-password'
  },
  register: {
    path: '/register'
  },
  dashboard: {
    path: '/dashboard',

    children: {
      me: {
        path: 'me',
        fullPath: '/dashboard/me'
      }
    }
  }

};

export default routes;
