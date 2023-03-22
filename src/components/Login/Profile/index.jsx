import React from 'react';
import { useSelector } from 'react-redux';

export function Profile () {
  const userLogged = useSelector((state) => state.login.user);
  console.log('soy el profile', userLogged);
  const name = userLogged ? userLogged.name : null;
  const lastName = userLogged ? userLogged.lastName : null;
  const address = userLogged ? userLogged.address : null;

  return (
    <div className='user-container'>
      <div className='name-container'>
        <h4 className='name'>
          {userLogged ? `${name} ${lastName}` : 'Invitado'}
        </h4>
      </div>
      {userLogged && (
        <div className='address-container'>
          <p className='address'>{address}</p>
        </div>
      )}
    </div>
  );
}

export default Profile;
