export const routes = {
  home: {
    path: '/',
  },
  login: {
    path: '/login'
  },
  register: {
    path: '/register'
  },
  profile: {
    path: '/profile'
  },
  dashboard: {
    path: '/dashboard',

    children: {
      me: {
        path: 'me'
      }
    }
  }

};

export default routes;
