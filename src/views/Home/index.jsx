import '../../App.css';

import { Display1 } from './Display1';
import { Display2 } from './Display2';
import { Display3 } from './Display3';
import { Display4 } from './Display4';
import { Display5 } from './Display5';
import { useEffect } from 'react';

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Display1 />
      <Display2 />
      <Display3 />
      <Display4 />
      <Display5 />
    </div>
  );
};
