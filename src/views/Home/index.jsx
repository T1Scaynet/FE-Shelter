import '../../App.css';

import { DisplayOne } from './DisplayOne';
import { DisplayTwo } from './DisplayTwo';
import { DisplayThree } from './DisplayThree';
import { DisplayFive } from './DisplayFive';

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
