import React, { useState } from 'react';
import user from '../../../assets/userLogin.svg';
import { useDispatch, useSelector } from 'react-redux';
import { logoutSuccess } from '../../../state/features/login/loginSlice';
import { useNavigate } from 'react-router';

export function Profile () {
  const [userData, setUserData] = useState({ name: '', email: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name, email, avatar } = useSelector((state) => state.login.user);
  const handleLogOut = () => {
    dispatch(logoutSuccess());
    navigate('/');
  };
  return (
    <div>
      <h1 className='text-4xl font-bold text-center mb-8'>Mi perfil</h1>
      <div className='user-container flex flex-col items-center'>
        <img src={avatar || user} alt='User' className='w-32 h-32 rounded-full mb-4' />
        <h2 className='text-3xl font-bold capitalize text-center mb-4'>¡Hola! {name}</h2>
        <h3 className='text-xl text-center mb-8'>{email}</h3>
        <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded self-center' onClick={handleLogOut}>Salir</button>
      </div>
    </div>
  );
}

export default Profile;
