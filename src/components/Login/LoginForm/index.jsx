import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../../state/features/login/loginSlice';
import ingresar from '../../../assets/ingresar.svg';
import email from '../../../assets/email.svg';
import password from '../../../assets/password.svg';

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
              <div className='relative'>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className=' text-center w-full px-3 py-3 mb-3 leading-tight text-[#0E081E] border-none bg-[#EBE5F7] rounded-md shadow-sm focus:outline-none focus:shadow-outline'
                  placeholder='Correo electrónico'
                  value={login.email}
                  onChange={handleOnChange}
                  required
                />
                <img src={email} alt={email} className='absolute top-2 left-4' />
              </div>

              <div className='relative mt-6'>
                <input
                  type='password'
                  id='password'
                  name='password'
                  className=' text-center w-full px-3 py-3 mb-3 leading-tight text-[#0E081E] border-none bg-[#EBE5F7] rounded-md shadow-sm focus:outline-none focus:shadow-outline'
                  placeholder='Contraseña'
                  value={login.password}
                  onChange={handleOnChange}
                  required
                />
                <img src={password} alt={password} className='absolute top-2 left-4' />
              </div>

              <Link to='/recuperar-contraseña' className=''>
                <p className='mt-4 text-[#FF47A2] hover:text-[#7C58D3]'>¿Olvidaste tu contraseña?</p>
              </Link>
            </div>
            <div className='grid place-items-center gap-6'>
              <button
                type='submit'
                className='w-full bg-[#7C58D3] px-4 py-2 font-bold text-white rounded hover:bg-purple-700 focus:outline-none focus:shadow-outline-blue active:bg-purple-800'
              >
                Iniciar sesión
              </button>
              <div className='grid place-items-center'>
                <p className=' font-semibold text-[1rem] text-[#5A5A5A]'>o inicia sesión con</p>
                <div className='flex gap-8 mt-2'>
                  <Link to='/'><p>Facebook</p></Link>
                  <Link to={`${import.meta.env.VITE_REACT_APP_URL_BACKEND}/social/auth/google`}><p>Google</p></Link>
                  <Link to='#twitter'><p>Twitter</p></Link>
                </div>
              </div>
              <div className='flex gap-2'>
                <p className='text-[1.1rem] font-bold text-[#0E081E]'>¿No tienes una cuenta?</p>
                <Link to='/registro'><p className='text-[1.1rem] font-bold text-[#FF47A2]'>Registrar aquí</p></Link>
              </div>
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
