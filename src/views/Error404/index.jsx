import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import { clearError } from '../../state/features/error/errorSlice';

export const Error404 = () => {
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.error.message);
  // const history = useHistory(); //

  const handleClick = () => {
    dispatch(clearError());
    window.location.href = '/';
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <div>
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            Oops! Ha ocurrido un error
          </h2>
          <p className='mt-2 text-center text-sm text-gray-600'>
            {errorMessage || 'Lo sentimos, algo salió mal.'}
          </p>
        </div>
        <div className='mt-8'>
          <button
            className='w-full mx-auto flex justify-center py-2 px-6 w-auto border border-transparent rounded-md shadow-sm text-sm font-medium
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
