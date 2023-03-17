import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Group.svg';
import signUp from '../../assets/sign-in-svgrepo-com.svg';
import 'tailwindcss/tailwind.css';

export const NavBar = () => {
  return (
    <nav className='bg-white-800'>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          {/* Logo */}
          <div className='flex-shrink-0 flex items-center'>
            <Link to='/'>
              <img src={logo} alt='Logo' />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className='flex-grow flex justify-center items-center'>
            <div className='flex space-x-4'>
              <Link
                to='/'
                className='text-#6D6D6D-300 px-3 py-2 rounded-md font-medium'
              >
                Home
              </Link>
              <Link
                to='/contacto'
                className='text-#6D6D6D-300  px-3 py-2 rounded-md font-medium'
              >
                Crear
              </Link>
              <a
                href='#nosotros'
                className='text-#6D6D6D-300  px-3 py-2 rounded-md font-medium'
              >
                Nosotros
              </a>
              <Link
                to='/adoptar'
                className='text-#6D6D6D-300  px-3 py-2 rounded-md font-medium'
              >
                Adoptar
              </Link>
            </div>
          </div>

          {/* Sign up */}
          <div className='flex-shrink-0 flex items-center'>
            <button class='flex items-center bg-white text-gray-600 hover:bg-[#7C58D3] hover:text-white py-2 px-4 border border-[#7C58D3] rounded shadow transition duration-300 ease-in-out focus:outline-none'>
              Ingresar
              <img src={signUp} alt='acceso' className='w-4 h-4 ml-2 text-purple-500 hover:filter hover:hue-rotate-0' />
            </button>
          </div>
          {/* Empty space to keep the links centered */}
          <div className='w-1/12' />
        </div>
      </div>
    </nav>
  );
};
