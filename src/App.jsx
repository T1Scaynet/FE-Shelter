import { AppRoutes } from './router/AppRoutes';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Toaster } from 'sonner';

function App () {
  return (
    <>
      <Toaster position='bottom-left' richColors closeButton />
      <NavBar />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
