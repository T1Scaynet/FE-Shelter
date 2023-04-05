import React from 'react';
import Lottie from 'lottie-react';
import animationData from './loader.json';

function Loader () {
  return (
    <Lottie
      animationData={animationData}
      loop
      autoplay
      style={{ width: '300px', height: '300px' }}
    />
  );
}

export default Loader;
