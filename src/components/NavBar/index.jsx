import React from 'react';
import { options } from '../../constants/optionsRutes';
import logo from '../../assets/Group.svg';
import signUp from '../../assets/sign-in-svgrepo-com.svg';
import 'tailwindcss/tailwind.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Profile from '../Login/Profile';

export const NavBar = () => {
  const user = useSelector((state) => state.login.user);
  const logged = useSelector((state)=> state.login.userLogged);
  console.log(logged);
  return (
    <nav className='bg-[#FFFEFD] h-[6.1rem] flex items-center '>
      <div className='w-full m-[12.8rem]'>
        <div className='flex justify-between h-16'>
          {/* Logo */}
          <div className='flex-shrink-0 flex items-center'>
            <Link to='/'>
              <img src={logo} alt='Logo' />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className='flex-grow flex justify-center items-center'>
            <ul className='flex space-x-4'>
              {
                options.length && options.map(o => (
                  <li key={o.window}>
                    <Link to={o.rute} className='text-#0E081E-300 px-3 py-2 font-bold bg-[#d3dbdb00] transition-colors duration-500 rounded-[16%] p-[1.1vh] hover:bg-[#d3dbdb53]'>
                      {o.window}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
          {/* Sign up */}
          <div className='flex-shrink-0 flex items-center'>
            {user.userLogged === false
              ? (<button className='flex items-center bg-transparent text-[#0E081E] font-bold hover:bg-[#7C58D3] hover:text-white py-2 px-4 border border-[#7C58D3] rounded shadow transition duration-300 ease-in-out focus:outline-none'>
                <a href='/ingresar'>Ingresar</a>
                <img
                  src={signUp}
                  alt='acceso'
                  className='w-4 h-4 ml-2 text-purple-500 hover:filter hover:hue-rotate-0'
                />
                 </button> )
              : (<Profile name={user.name} />)}
          </div>
          {/* Empty space to keep the links centered */}
          <div className='w-1/12' />
        </div>
      </div>
    </nav>
  );
};
