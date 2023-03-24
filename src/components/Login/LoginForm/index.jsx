import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser, setToken } from '../../../state/features/login/loginSlice';

const handleLoginUser = async ({ name, email, password }) => {
    const { data } = await axios.post('/user/login', { name, email, password });
    return data
}

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [state, setState] =useState('');
  const navigate = useNavigate();
  const token = useSelector((state)=> state.login?.token);
  console.log(token)
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('hola')
    const userToken = await handleLoginUser({name, email, password})
    console.log({ userToken })
    // dispatch para actualizar el estado
    dispatch(setToken(userToken?.token))
    // guarden en localStorage
    localStorage.setItem('token', userToken?.token)
    setEmail('');
    setPassword('');
    setName('');
    navigate('/perfil');
  };


  return (
    <form onSubmit={handleSubmit} className='w-full max-w-sm mx-auto mt-6'>
      <div className='mb-4'>
        <h3>Iniciar Sesión</h3>
        <h2>Utilice sus credenciales para acceder a su cuenta.</h2>
        <label htmlFor='name' className='block mb-2 font-bold text-gray-700'>
          Name
        </label>
        <input
          type='name'
          id='name'
          className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
          placeholder='Nombre'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor='email' className='block mb-2 font-bold text-gray-700'>
          Email
        </label>
        <input
          type='email'
          id='email'
          className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
          placeholder='Correo electrónico'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className='mb-6'>
        <label
          htmlFor='password'
          className='block mb-2 font-bold text-gray-700'
        >
          Contraseña
        </label>
        <input
          type='password'
          id='password'
          className='w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
          placeholder='Contraseña'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Link to='/recuperar-contraseña' className='text-blue-500 hover:text-blue-700'>
          ¿Olvidaste tu contraseña?
        </Link>
      </div>
      <div className='flex items-center justify-between'>
        <button
          type='submit'
          className='px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800'
        >
          Iniciar sesión
        </button>
        <p className='text-sm text-gray-600'>
          ¿No estás registrado?
          {' '}
          <Link to='/registro' className='text-blue-500 hover:text-blue-700'>
            Regístrate aquí
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
