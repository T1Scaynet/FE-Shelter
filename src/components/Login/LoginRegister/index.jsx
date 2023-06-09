/* eslint-disable prefer-const */
/* eslint-disable react/jsx-props-no-multi-spaces */
/* eslint-disable no-unneeded-ternary */
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { loginRegister } from '../../../state/features/login/loginSlice';
import iconGoogle from '../../../assets/iconGoogle.png';
import register from '../../../assets/ingresar.png';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import { Button, TextField } from '@mui/material';
import swal from 'sweetalert';

function RegistrationForm () {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className='flex h-screen md:w-full md:justify-center md:items-center'>
      <div className='md:flex md:justify-center md:items-center'>
        <div>
          <h1 className='text-4xl font-bold mb-4'>Crea una cuenta</h1>
          <h2 className='text-m font-medium mb-8'>
            Crea una nueva cuenta en un minuto.
          </h2>
          <Formik
            initialValues={{
              name: '',
              email: '',
              password: ''
            }}

            validate={(value) => {
              let errors = {};

              if (!value.name || value.name.length < 4) {
                errors.name = 'El nombre debe tener más de 4 carácteres';
              } else if (!/^[a-zA-Z]+$/.test(value.name)) {
                errors.name = 'El nombre no es válido. Porfavor ingrese otro';
              }

              if (!value.email) {
                errors.email = 'Por favor, ingrese su correo electrónico';
              } else if (!/\S+@\S+\.\S+/.test(value.email)) {
                errors.email = 'El correo electronico no es válido';
              }

              if (!value.password || value.password.length < 5) {
                errors.password = 'La contraseña debe tener más de 5 carácteres';
              } else if (/[\W_]+/.test(value.password) === false) {
                errors.password = 'La contraseña debe tener al menos un caráracter especial';
              } else if (/[A-Z]+/.test(value.password) === false) {
                errors.password = 'La contraseña debe tener al menos un caráracter en mayúscula';
              }

              return errors;
            }}

            onSubmit={(value, { resetForm }) => {
              dispatch(loginRegister(value));
              swal('¡Se registro correctamente!', 'Ingresa con tus credenciales', 'success');
              navigate('/ingresar');
              resetForm();
            }}

          >
            {({ values, errors, touched, handleChange, handleSubmit, handleBlur }) => (
              <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <TextField
                  error={touched.name && errors.name ? true : false}
                  id={
                    touched.name && errors.name ? 'outlined-error-helper-text' : 'outlined-basic'
                  }
                  label='Nombre'
                  variant='outlined'
                  name='name'
                  value={values.name}
                  helperText={touched.name && errors.name ? errors.name : undefined}
                  onChange={handleChange}
                  onBlur={handleBlur}
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
                  error={touched.email && errors.email ? true : false}
                  id={
                    touched.email && errors.email ? 'outlined-error-helper-text' : 'outlined-basic'
                  }
                  label='Email'
                  variant='outlined'
                  name='email'
                  value={values.email}
                  helperText={touched.email && errors.email ? errors.email : undefined}
                  onChange={handleChange}
                  onBlur={handleBlur}
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
                  error={touched.password && errors.password ? true : false}
                  id={
                    touched.password && errors.password ? 'outlined-error-helper-text' : 'outlined-basic'
                  }
                  label='Contraseña'
                  variant='outlined'
                  name='password'
                  value={values.password}
                  helperText={touched.password && errors.password ? errors.password : undefined}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type='password'
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
                <Button
                  type='submit'
                  onClick={handleSubmit}
                  variant='contained'
                  style={{ backgroundColor: '#7C58D3', width: '20rem' }}
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
                  Registrar
                </Button>
                <Link to={`${import.meta.env.VITE_REACT_APP_URL_BACKEND}/social/auth/google`} className='px-[5rem] py-3 md:hover:bg-[#F1F2F2] bg-[#ffffff00] rounded-[0.5rem] md:w-[22.188rem] transition-colors duration-300'>
                  <div className='grid place-items-center'>
                    <p className='flex flex-row justify-center items-center font-semibold text-[1rem] gap-2 text-[#5A5A5A]'>
                      o inicia sesión con
                      <img src={iconGoogle} alt='icon' className='h-[16px]' />
                    </p>
                  </div>
                </Link>
              </form>
            )}
          </Formik>
          <p className='mt-4 text-center font-bold text-black text-[1.1rem]'>
            ¿Ya tienes cuenta?{' '}
            <Link to='/ingresar' className='text-[#FF47A2] text-[1.1rem] font-bold'>
              Inicia sesión
            </Link>
          </p>
        </div>
      </div>
      <div className='hidden sm:block md:w-1/2 md:flex justify-center items-center'>
        <img
          src={register}
          alt='Imagen de registro'
          className='object-cover h-[44.6rem] w-[27.049rem] rounded-[0.5rem]'
        />
      </div>
    </div>
  );
}

export default RegistrationForm;
