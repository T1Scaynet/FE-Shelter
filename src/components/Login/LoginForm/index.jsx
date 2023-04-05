import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../../state/features/login/loginSlice';
import ingresar from '../../../assets/ingresar.png';
import { Button, TextField } from '@mui/material';
import iconGoogle from '../../../assets/iconGoogle.png';

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
    <div className='flex h-screen '>
      <div className='md:w-1/2 md:flex md:justify-center md:items-center'>
        <div>
          <h3 className='text-4xl font-bold mb-4'>Iniciar Sesión</h3>
          <h2 className='text-m font-medium mb-8'>Utilice sus credenciales para acceder a su cuenta.</h2>
          <form onSubmit={handleSubmit} className='max-w-md flex flex-col gap-4'>
            <TextField
              label='Email'
              id='email'
              variant='outlined'
              name='email'
              value={login.email}
              onChange={handleOnChange}
              required
              sx={{
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                      {
                        borderColor: '#7C58D3'
                      },
                '& label.Mui-focused': {
                  color: '#7C58D3'
                }
              }}
            />
            <TextField
              label='Contraseña'
              type='password'
              id='password'
              variant='outlined'
              name='password'
              value={login.password}
              onChange={handleOnChange}
              required
              sx={{
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                      {
                        borderColor: '#7C58D3'
                      },
                '& label.Mui-focused': {
                  color: '#7C58D3'
                }
              }}
            />
            <Link to='/recuperar-contraseña' className=''>
              <p className='mt-4 text-[#FF47A2] hover:text-[#7C58D3]'>¿Olvidaste tu contraseña?</p>
            </Link>
            <div className='grid place-items-center gap-6'>
              <Button
                type='submit'
                variant='contained'
                style={{ backgroundColor: '#7C58D3', width: '22.188rem' }}
                sx={{
                  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                      {
                        borderColor: '#7C58D3'
                      },
                  '& label.Mui-focused': {
                    color: '#7C58D3'
                  }
                }}
              >
                Iniciar sesión
              </Button>
              <Link to={`${import.meta.env.VITE_REACT_APP_URL_BACKEND}/social/auth/google`} className='px-[5rem] py-3 md:hover:bg-[#F1F2F2] bg-[#ffffff00] rounded-[0.5rem] md:w-[22.188rem] transition-colors duration-300'>
                <div className='grid place-items-center'>
                  <p className='flex flex-row justify-center items-center font-semibold text-[1rem] gap-2 text-[#5A5A5A]'>
                    o inicia sesión con
                    <img src={iconGoogle} alt='icon' className='h-[16px]' />
                  </p>
                </div>
              </Link>
              <div className='flex gap-2'>
                <p className='text-[1.1rem] font-bold text-[#0E081E]'>¿No tienes una cuenta?</p>
                <Link to='/registro'><p className='text-[1.1rem] font-bold text-[#FF47A2]'>Registrar aquí</p></Link>
              </div>
            </div>
          </form>

        </div>
      </div>
      <div className='hidden sm:block md:w-1/2 md:flex justify-center items-center'>
        <img
          src={ingresar}
          alt='Imagen de ingreso'
          className='object-cover h-[44.6rem] w-[27.049rem] rounded-[0.5rem]'
        />
      </div>
    </div>

  );
};

export default LoginForm;
