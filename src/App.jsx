import { AppRoutes } from './router/AppRoutes';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Toaster } from 'sonner';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

function App () {
  const login = useSelector(state => state.login);

  axios.defaults.baseURL = import.meta.env.VITE_REACT_APP_URL_BACKEND;
  axios.interceptors.request.use((request) => {
    if (!request.url.includes('cloudinary')) {
      request.headers['x-access-token'] = login.token;
    }
    return request;
  });

  const [showLayout, setShowLayout] = useState(true);
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    currentPath && currentPath.includes('admin')
      ? setShowLayout(false)
      : setShowLayout(true);
  }, [currentPath]);

  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            height: '5rem',
            fontSize: '1rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }
        }} position='bottom-left' richColors closeButton
      />
      {showLayout && <NavBar />}
      <AppRoutes setShowLayout={setShowLayout} />
      {showLayout && <Footer />}
    </>
  );
}

export default App;
