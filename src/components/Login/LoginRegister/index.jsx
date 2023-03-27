import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
// import { useNavigate } from 'react-router-dom';
import { loginRegister } from '../../../state/features/login/loginSlice';
import register from '../../../assets/ingresar.svg';
import { Link } from 'react-router-dom';

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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({ firstTry: true });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    const errors = validate(input);
    if (Object.keys(errors).length === 0) {
      dispatch(loginRegister(input));
      setInput({
        name: '',
        email: '',
        password: ''
      });
      setFormSubmitted(true);
      window.alert('¡Se registro correctamente! Ingresa con tus credenciales');
      navigate('/ingresar');
    } else {
      setErrors(errors);
    }
  };

  useEffect(() => {
    setErrors(
      validate({
        ...input
      })
    );
  }, [input]);

  const handleInputChange = ({ target }) => {
    setInput({
      ...input,
      [target.name]: target.value
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
    <div className='flex h-screen'>
      <div className='w-1/2 flex justify-center items-center'>
        <div>
          <h1 className='text-4xl font-bold mb-4'>Crea una cuenta</h1>
          <h2 className='text-m font-medium mb-8'>Crea una nueva cuenta en un minuto.</h2>
          <form onSubmit={handleRegister} className='max-w-md'>
            <div className='mb-4'>
              <label htmlFor='name' className='block text-gray-700 font-bold mb-2'>
                Nombre
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={input.name}
                onChange={handleInputChange}
                className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              />
              {errors.name && <div className='text-red-500'>{errors.name}</div>}
            </div>
            <div className='mb-4'>
              <label htmlFor='email' className='block text-gray-700 font-bold mb-2'>
                Correo electrónico
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={input.email}
                onChange={handleInputChange}
                className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              />
              {errors.email && <div className='text-red-500'>{errors.email}</div>}
            </div>
            <div className='mb-4'>
              <label htmlFor='password' className='block text-gray-700 font-bold mb-2'>
                Contraseña
              </label>
              <input
                type='password'
                id='password'
                name='password'
                value={input.password}
                onChange={handleInputChange}
                className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              />
              {errors.password && <div className='text-red-500'>{errors.password}</div>}
            </div>
            <button
              className='bg-[#7C58D3] hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer'
              type='submit'
              disabled={Object.keys(errors).length !== 0}
              onClick={handleCheckErrors}
            >
              Registrarse
            </button>
            {Object.keys(errors).length !== 0 && (
              <p className='text-red-500'>Por favor, corrija los errores antes de enviar el formulario.</p>
            )}
          </form>
          <p className='mt-4 text-center font-bold text-black'>
            ¿Ya tienes cuenta? <Link to='/ingresar' className='text-pink-500'>Inicia sesión aquí</Link>
          </p>
        </div>
      </div>
      <div className='w-1/2 flex justify-center items-center'>
        <img
          src={register}
          alt='Imagen de registro'
          className='object-cover h-full w-full '
        />
      </div>
    </div>
  );
}

export default RegistrationForm;
