import React from 'react';
import GoogleLogin from 'react-google-login';

const GoogleButton = ({ onSuccess, onFailure }) => {
  const googleClientId = 'insert-your-google-client-id-here';

  return (
    <GoogleLogin
      clientId={googleClientId}
      buttonText='Iniciar sesión con Google'
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy='single_host_origin'
    />
  );
};

export default GoogleButton;
