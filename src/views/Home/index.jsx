
import { Footer } from '../../components/Footer';
import NavBar from '../../components/NavBar';
import { DisplayOne } from './DisplayOne';
import '../../App.css';
      
export const Home = () => {
  return (
    <div>
      <NavBar />
      <DisplayOne />
      <Footer />
    </div>
  );
};
