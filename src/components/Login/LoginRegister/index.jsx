import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginRegister } from '../../../state/features/login/loginSlice';

function RegistrationForm () {
  const history = useNavigate();
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: ''
  });
  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(loginRegister(formValues));
    setFormValues({
      name: '',
      email: '',
      password: ''
    });
    window.alert('¡Se registro correctamente! Ingresa con tus credenciales');
    history('/');
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  return (
    <form onSubmit={handleRegister}>
      <label htmlFor='name'>Nombre</label>
      <input
        type='text'
        id='name'
        name='name'
        value={formValues.name}
        onChange={handleInputChange}
        className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
      />
      <label htmlFor='email'>Correo electrónico</label>
      <input
        type='email'
        id='email'
        name='email'
        value={formValues.email}
        onChange={handleInputChange}
        className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
      />
      <label htmlFor='password'>Contraseña</label>
      <input
        type='password'
        id='password'
        name='password'
        value={formValues.password}
        onChange={handleInputChange}
        className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
      />
      <button
        className='px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800'
        type='submit'
      >
        Registrarse
      </button>
    </form>
  );
}

export default RegistrationForm;
