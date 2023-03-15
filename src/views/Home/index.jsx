import { NavBar } from '../../components/NavBar';
import { DisplayOne } from './DisplayOne';
import { DisplayTwo } from './DisplayTwo';
import { Footer } from '../../components/Footer';
import '../../App.css';

export const Home = () => {
  return (
    <div>
      <NavBar />
      <DisplayOne />
      <DisplayTwo />
      <Footer />
    </div>
  );
};
