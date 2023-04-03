/* eslint-disable prefer-const */
/* eslint-disable react/jsx-props-no-multi-spaces */
/* eslint-disable no-unneeded-ternary */
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { loginRegister } from '../../../state/features/login/loginSlice';
import register from '../../../assets/ingresar.png';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import { Button, TextField } from '@mui/material';
import swal from 'sweetalert';

function RegistrationForm () {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className='flex h-screen'>
      <div className='w-1/2 flex justify-center items-center'>
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
                  helperText={touched.email && errors.name ? errors.email : undefined}
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
                  helperText={touched.password && errors.name ? errors.password : undefined}
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
                  style={{ backgroundColor: '#7C58D3', width: '30.438rem' }}
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
              </form>
            )}
          </Formik>
          <p className='mt-4 text-center font-bold text-black'>
            ¿Ya tienes cuenta?{' '}
            <Link to='/ingresar' className='text-pink-500'>
              Inicia sesión
            </Link>
          </p>
        </div>
      </div>
      <div className='w-1/2 flex justify-center items-center'>
        <img
          src={register}
          alt='Imagen de registro'
          className='object-cover h-[34.625rem] rounded-[0.5rem] mr-8'
        />
      </div>
    </div>
  );
}

export default RegistrationForm;
