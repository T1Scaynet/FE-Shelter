import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../../state/features/login/loginSlice';
import ingresar from '../../../assets/ingresar.svg';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: '',
    password: ''
  });

  const handleOnChange = ({ target }) => {
    setLogin({
      ...login,
      [target.name]: target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginUser(login));
    navigate('/');
  };

  return (
    <div className='flex h-screen'>
      <div className='w-1/2 flex justify-center items-center'>
        <div>
          <h3 className='text-4xl font-bold mb-4'>Iniciar Sesión</h3>
          <h2 className='text-m font-medium mb-8'>Utilice sus credenciales para acceder a su cuenta.</h2>
          <form onSubmit={handleSubmit} className='max-w-md'>
            <div className='mb-6'>
              <h3 className='text-2xl font-bold mb-2'>Iniciar Sesión</h3>
              <label htmlFor='email' className='block mb-2 font-bold text-gray-700'>
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                className='w-full px-3 py-2 mb-3 leading-tight text-gray-700 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:shadow-outline'
                placeholder='Correo electrónico'
                value={login.email}
                onChange={handleOnChange}
                required
              />
              <label
                htmlFor='password'
                className='block mb-2 font-bold text-gray-700'
              >
                Contraseña
              </label>
              <input
                type='password'
                id='password'
                name='password'
                className='w-full px-3 py-2 mb-3 leading-tight text-gray-700 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:shadow-outline'
                placeholder='Contraseña'
                value={login.password}
                onChange={handleOnChange}
                required
              />
              <Link to='/recuperar-contraseña' className='text-blue-500 hover:text-blue-700'>
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
            <div className='flex items-center justify-between'>
              <button
                type='submit'
                className='bg-[#7C58D3] px-4 py-2 font-bold text-white rounded hover:bg-purple-700 focus:outline-none focus:shadow-outline-blue active:bg-purple-800'
              >
                Iniciar sesión
              </button>
              <p className='text-sm text-gray-600'>
                ¿No estás registrado?{' '}
                <Link to='/registro' className='text-blue-500 hover:text-blue-700'>
                  Regístrate aquí
                </Link>
              </p>
            </div>
          </form>

        </div>
      </div>
      <div className='w-1/2  flex justify-center items-center'>
        <img
          src={ingresar}
          alt='Imagen de ingreso'
          className='object-cover h-full w-full '
        />
      </div>
    </div>

  );
};

export default LoginForm;
