import React , {useEffect, useState} from 'react';
import axios from 'axios'; 
import user from '../../../assets/userLogin.svg';
import {useDispatch} from 'react-redux';
import { logoutSuccess } from '../../../state/features/login/loginSlice';

export function Profile () {
  const [userData , setUserData] = useState({name: '', email: ''});
  const dispatch = useDispatch();
  async function dataUser() {
    const response = await axios.get('/user/profile')
    console.log(response.data)
    setUserData({name: response.data.user.name, email: response.data.user.email})
  }
  useEffect(()=>{
    dataUser()
  },[])
  const handleLogOut = () => {
    dispatch(logoutSuccess());
    localStorage.removeItem('token');
  };
  return (
    <div className='user-container'>
      <h1>{userData.name}</h1>
      <h2>{userData.email}</h2>
      <button onClick={handleLogOut}>Salir</button>
    </div>
  );
}

export default Profile;
