import { AppRoutes } from './router/AppRoutes';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import SearchBar from './components/SearchBar';


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
