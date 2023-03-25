import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginRegister } from '../../../state/features/login/loginSlice';

function validate (input) {
  const errors = {};

  if (!input.name || input.name.length < 4) {
    errors.name = 'El nombre debe tener más de cuatro letras';
  }

  if (!input.email) {
    errors.email = 'Por favor, ingrese su correo electrónico';
  } else if (!/\S+@\S+\.\S+/.test(input.email)) {
    errors.email = 'Por favor, ingrese un correo electrónico válido';
  }

  if (!input.password || input.password.length < 5) {
    errors.password = 'La contraseña debe tener más de cinco caracteres';
  }

  return errors;
}

function RegistrationForm () {
  const history = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({ firstTry: true });
  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(loginRegister(input));
    setInput({
      name: '',
      email: '',
      password: ''
    });
    window.alert('¡Se registro correctamente! Ingresa con tus credenciales');
    // history('/');
  };
  useEffect(() => {
    setErrors(
      validate({
        ...input
      })
    );
  }, [input]);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value
    });
  };
  function handleCheckErrors (e) {
    e.preventDefault();
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }));
    handleRegister(e);
  }

  return (
    <form onSubmit={handleRegister}>
      <label htmlFor='name'>Nombre</label>
      <input
        type='text'
        id='name'
        name='name'
        value={input.name}
        onChange={handleInputChange}
        className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
      />
      {errors.name && (<div>{errors.name}</div>)}
      <label htmlFor='email'>Correo electrónico</label>
      <input
        type='email'
        id='email'
        name='email'
        value={input.email}
        onChange={handleInputChange}
        className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
      />
      {errors.email && (<div>{errors.email}</div>)}
      <label htmlFor='password'>Contraseña</label>
      <input
        type='password'
        id='password'
        name='password'
        value={input.password}
        onChange={handleInputChange}
        className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
      />
      {errors.password && (<div>{errors.password}</div>)}
      <button
        className='px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800'
        type='submit'
        onClick={handleCheckErrors}
      >
        Registrarse
      </button>
    </form>
  );
}

export default RegistrationForm;
