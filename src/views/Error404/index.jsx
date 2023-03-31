import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { clearError } from '../../state/features/error/errorSlice';
import img from '../../assets/404.svg';

export const Error404 = ({ setShowLayout }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const errorMessage = useSelector((state) => state.error.message);

  const handleClick = () => {
    setShowLayout(true);
    dispatch(clearError());
    navigate('/');
  };

  useEffect(() => {
    setShowLayout(false);
    window.scrollTo(0, 0);
    return () => setShowLayout(true);
  }, []);

  return (
    <div className='min-h-screen grid grid-cols-1 md:grid-cols-1 place-content-center bg-[#FFDA47] py-12 px-4 sm:px-6 lg:px-8 space-y-5'>
      <div className='flex place-content-center'>
        <h2 className='text-5xl md:text-7xl lg:text-9xl font-extrabold text-[#0E081E]'>4</h2>
        <div className='w-13 md:w-30'>
          <img src={img} alt={img} />
        </div>
        <h2 className='text-5xl md:text-7xl lg:text-9xl font-extrabold text-[#0E081E]'>4</h2>
      </div>
      <div className='w-full space-y-8 grid place-items-center'>
        <div>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 text-center'>
            Oops! Ha ocurrido un error
          </h2>
          <p className='mt-2 text-base md:text-lg lg:text-xl text-[#0E081E] text-center'>
            {errorMessage || 'Lo sentimos, algo salió mal.'}
          </p>
        </div>
        <div className='mt-8'>
          <button
            className='w-full md:w-[16.25rem] h-[4.3rem] mx-auto py-2 px-6 border border-transparent rounded-md shadow-sm text-sm md:text-base lg:text-lg
            text-white bg-[#7C58D3] hover:bg-white hover:text-[#7C58D3] hover:border-[#7C58D3] focus:outline-none hover:border-[0.09rem]'
            onClick={handleClick}
          >
            Volver al inicio
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error404;
