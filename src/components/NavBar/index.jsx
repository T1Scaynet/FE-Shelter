import React from 'react';
import { options } from '../../constants/optionsRutes';
import logo from '../../assets/Group.svg';
import logoDog from '../../assets/Nav/dogLogo.svg';
import signUp from '../../assets/sign-in-svgrepo-com.svg';
import 'tailwindcss/tailwind.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DropdownUser from '../../views/Admin - Dashboard/components/DropdownUser';

export const NavBar = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const userLogged = useSelector((state) => state.login.token);

  return (
    <nav className='bg-[#FFFEFD] w-full h-[5rem] md:h-[6.1rem] flex items-center'>
      <div className='w-full md:m-[12.8rem]'>
        <div className='flex w-full h-full px-5 justify-between md:h-16'>
          {/* Logo */}
          <div className='md:flex-shrink-0 md:flex md:items-center'>
            <Link to='/'>
              <img src={logoDog} alt='Logo resposive' className=' md:hidden' />
              <img src={logo} alt='Logo' className='hidden md:block' />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className='hidden md:flex-grow md:flex justify-center items-center'>
            <ul className='flex space-x-4'>
              {options.length &&
                options.map((o) => (
                  <li key={o.window}>
                    <Link
                      to={o.rute}
                      className='text-#0E081E-300 px-3 py-2 font-bold bg-[#d3dbdb00] transition-colors duration-500 rounded-[16%] p-[1.1vh] hover:bg-[#d3dbdb53]'
                    >
                      {o.window}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          {/* Sign up */}
          <div className='flex-shrink-0 flex items-center z-50'>
            {userLogged
              ? (
                <DropdownUser />
                // <a href='/perfil'>Mi perfil</a>
                )
              : (
                <a
                  href='/ingresar'
                  className='flex items-center bg-transparent text-[#0E081E] font-bold hover:bg-[#7C58D3] hover:text-white py-2 px-4 border border-[#7C58D3] rounded shadow transition duration-300 ease-in-out focus:outline-none'
                >
                  Ingresar
                  <img
                    src={signUp}
                    alt='acceso'
                    className='w-4 h-4 ml-2 text-purple-500 hover:filter hover:hue-rotate-0'
                  />
                </a>
                )}
          </div>

          {userLogged && (
            <div className='hidden md:flex md:justify-center items-center ml-6 font-medium'>
              <Link to='/carrito' className='flex items-center justify-center'>
                <i className='bx bx-shopping-bag  text-[32px] text-[#7e5ad3] ' />
                <span>{cartTotalQuantity}</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
