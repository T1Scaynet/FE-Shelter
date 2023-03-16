import '../../App.css';
import { DisplayOne } from './DisplayOne';
import NavBar from '../../components/NavBar';
import { DisplayThree } from './DisplayThree';

export const Home = () => {
  return (
    <div>
      <NavBar />
      <DisplayOne />

      <DisplayThree />
    </div>
  );
};
