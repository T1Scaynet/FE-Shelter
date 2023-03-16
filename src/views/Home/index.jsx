

import { NavBar } from '../../components/NavBar';
import { DisplayOne } from './DisplayOne';
import { DisplayTwo } from './DisplayTwo';
import { DisplayThree } from './DisplayThree';
import { Footer } from '../../components/Footer';
import '../../App.css';
import { DisplayFive } from './DisplayFive';
import { useSelector } from 'react-redux';

export const Home = () => {
  const petsByType = useSelector((state) => state.petsByType);
  const petsBySize = useSelector((state) => state.petsBySize);
  console.log({ petsByType });
  console.log({ petsBySize });

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
