import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loading from '../../Components/Loading/LoadingComponent';
import { AuthGuard } from '../Guards/AuthGuard';
import routes from './Routes';
const NotFound = React.lazy(() => import('../../Page/NotFoundPage'));
const HomePage = React.lazy(() => import('../../Page/HomePage'));
const LoginPage = React.lazy(() => import('../../Page/Login/LoginPage'));
const RegisterPage = React.lazy(() => import('../../Page/Register/RegisterPage'));
const ProfilePage = React.lazy(() => import('../../Page/Profile/ProfilePage'));

const DashboardPage = React.lazy(() => import('../../Page/Dashboard/DashboardPage'));



export default function AppRoutes() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path={routes.home.path} element={<HomePage />}>
            <Route path={routes.profile.path} element={<AuthGuard />}>
              <Route path={routes.profile.path} element={<ProfilePage />} />
            </Route>
          </Route>

          <Route path={routes.dashboard.path} element={<DashboardPage />}>
            <Route path={routes.dashboard.children.me.path} element={<ProfilePage />} />
          </Route>

          <Route path={routes.login.path} element={<LoginPage />} />
          <Route path={routes.register.path} element={<RegisterPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}
