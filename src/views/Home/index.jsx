import '../../App.css';

import { DisplayOne } from './DisplayOne';
import { DisplayTwo } from './DisplayTwo';
import { DisplayThree } from './DisplayThree';
import { DisplayFive } from './DisplayFive';
import { useEffect } from 'react';

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <DisplayOne />
      <DisplayTwo />
      <DisplayThree />
      <DisplayFive />
    </div>
  );
};
