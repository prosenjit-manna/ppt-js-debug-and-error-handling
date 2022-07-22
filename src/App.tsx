import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from './Components/ScrollToTop';
import TrackRedirectLinks from './Components/TrackRedirectLinks';

import AppRoutes from './Lib/Routes/AppRoutes';

function App() {

  return (
    <div className='App'>
      <ScrollToTop />
      <TrackRedirectLinks />
      <ToastContainer />
      <AppRoutes />
    </div>
  );
}

export default App;
