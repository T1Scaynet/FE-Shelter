

import { NavBar } from '../../components/NavBar';
import { DisplayOne } from './DisplayOne';
import { DisplayTwo } from './DisplayTwo';
import { DisplayThree } from './DisplayThree';
import { Footer } from '../../components/Footer';
import '../../App.css';
import { DisplayFive } from './DisplayFive';

export const Home = () => {
  return (
    <div>
      <NavBar />
      <DisplayOne />
      <DisplayTwo />
      <DisplayThree />
      <DisplayFive />
      <Footer />
    </div>
  );
};
