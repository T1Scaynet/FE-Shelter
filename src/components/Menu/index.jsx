/* eslint-disable react/jsx-closing-tag-location */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className={`md:hidden flex flex-col justify-center ${showMenu ? 'w-36 h-screen rounded-md' : 'w-8 bg-transparent h-screen'} ' fixed top-0 right-0 bg-[#EBE5F7] h-[40rem] transition-all z-50 duration-300 '`}>
      <div onClick={() => setShowMenu(!showMenu)} style={{ writingMode: !showMenu && 'vertical-lr' }} className='text-[1.5rem] bg-[#EBE5F7] rounded-md font-bold'>
        {
        !showMenu
          ? <p className='cursor-pointer py-5 px-1'>Menú</p>
          : <div className='flex flex-col space-y-5 justify-center items-center'>
            <button onClick={() => setShowMenu(false)} className='absolute top-0 left-0 rounded-md p-3'>x</button>
            <Link to='/' className='hover:text-[#7C58D3]'>Inicio</Link>
            <Link to='/nosotros' className='hover:text-[#7C58D3]'>Nosotros</Link>
            <Link to='/listado' className='hover:text-[#7C58D3]'>Adoptar</Link>
            <Link to='/contacto' className='hover:text-[#7C58D3]'>Contacto</Link>
          </div>
        }
      </div>
    </div>
  );
};
