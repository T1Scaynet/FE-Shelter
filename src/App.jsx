import { AppRoutes } from './router/AppRoutes';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';

function App () {
  return (
    <>
      <NavBar />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
