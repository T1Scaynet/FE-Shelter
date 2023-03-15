import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Group.svg';
import SignUp from '../../assets/Sign up.svg';
import 'tailwindcss/tailwind.css';

const NavBar = () => {
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
                Contacto
              </Link>
              <Link
                to='/nosotros'
                className='text-#6D6D6D-300  px-3 py-2 rounded-md font-medium'
              >
                Nosotros
              </Link>
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
            <Link to='/signUp'>
              <img src={SignUp} alt='signUp' />
            </Link>
          </div>
          {/* Empty space to keep the links centered */}
          <div className='w-1/12' />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
