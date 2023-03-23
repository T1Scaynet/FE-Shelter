import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import user from '../../../assets/userLogin.svg';
import { logoutSuccess } from '../../../state/features/login/loginSlice';

export function Profile ({ name }) {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logoutSuccess());
  };
  return (
    <div className='user-container'>
      <img src={user} className='h-10' />
      <h1>{name}</h1>
      <button onClick={handleLogOut}>Salir</button>
    </div>
  );
}

export default Profile;
