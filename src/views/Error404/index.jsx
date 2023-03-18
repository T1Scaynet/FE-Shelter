import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { clearError } from '../../state/features/error/errorSlice';
import img from '../../assets/404.svg';

export const Error404 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const errorMessage = useSelector((state) => state.error.message);

  const handleClick = () => {
    dispatch(clearError());
    navigate('/');
  };

  return (
    <div className='min-h-screen grid grid-rows-[300px]  place-content-center bg-[#FFDA47] py-12 px-4 sm:px-6 lg:px-8'>
      <div className='flex place-content-center'>
        <h2 className=' text-[12.5rem] font-extrabold text-[#0E081E]'>4</h2>
        <img src={img} alt={img} />
        <h2 className='text-[12.5rem] font-extrabold text-[#0E081E]'>4</h2>
      </div>
      <div className=' w-full space-y-8 grid place-items-center'>
        <div>
          <h2 className='mt-6 text-center text-[4.25rem] font-extrabold text-gray-900'>
            Oops! Ha ocurrido un error
          </h2>
          <p className='mt-2 text-center text-lg text-[#0E081E]'>
            {errorMessage || 'Lo sentimos, algo salió mal.'}
          </p>
        </div>
        <div className='mt-8'>
          <button
            className='w-[16.25rem] h-[4.3rem] mx-auto py-2 px-6 border border-transparent rounded-md shadow-sm text-sm font-medium
            text-white bg-[#7C58D3] hover:bg-white hover:text-gray-700 hover:border-[#7C58D3] focus:outline-none hover:border-[0.09rem]'
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
