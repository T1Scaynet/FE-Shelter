import { AppRoutes } from './router/AppRoutes';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Toaster } from 'sonner';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function App () {
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
      <Toaster position='bottom-left' richColors closeButton />
      {showLayout && <NavBar />}
      <AppRoutes setShowLayout={setShowLayout} />
      {showLayout && <Footer />}
    </>
  );
}

export default App;
