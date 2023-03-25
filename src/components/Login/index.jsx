import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { LoginForm } from '../Login/LoginForm/index';
import { Profile } from '../Login/Profile/index';

const LoginPage = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
