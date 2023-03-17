import { NavBar } from '../../components/NavBar';
import { DisplayOne } from './DisplayOne';
import { DisplayTwo } from './DisplayTwo';
import { DisplayThree } from './DisplayThree';
import '../../App.css';
import { DisplayFive } from './DisplayFive';
import SearchBar from '../../components/SearchBar';

export const Home = () => {
  return (
    <div>
      <DisplayOne />
      <DisplayTwo />
      <DisplayThree />
      <DisplayFive />
     
    </div>
  );
};
