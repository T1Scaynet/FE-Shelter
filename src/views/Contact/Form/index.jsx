/* eslint-disable prefer-const */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/jsx-props-no-multi-spaces */
import { Button, TextField } from '@mui/material';
import { Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router';
import swal from 'sweetalert';
import { PostContat } from '../../../state/features/contactForm';

export const ContactForm = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      }}

      validate={(value) => {
        let errors = {};
        const phoneRegExpression = /^[1-9][0-9]{2}[1-9][0-9]{6}$/;
        const emailRegExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

        if (!value.name || value.name.length < 4) {
          errors.name = 'El nombre debe tener más de 4 carácteres';
        } else if (!/^[a-zA-Z]+$/.test(value.name)) {
          errors.name = 'El nombre no es válido. Porfavor ingrese otro';
        }

        if (!value.lastName || value.lastName.length < 4) {
          errors.lastName = 'El apellido debe tener más de 4 carácteres';
        } else if (!/^[a-zA-Z]+$/.test(value.lastName)) {
          errors.lastName = 'El apellido no es válido. Porfavor ingrese otro';
        }

        if (!value.phone) {
          errors.phone = 'Rellene con su teléfono *';
        } else if (!phoneRegExpression.test(value.phone)) {
          errors.phone = 'El número es invalido *';
        };

        if (!value.email) {
          errors.email = 'Rellene con su email *';
        } else if (!emailRegExpression.test(value.email)) {
          errors.email = 'El email es invalido *';
        };

        if (!value.message) {
          errors.message = 'Rellena con tu mensaje *';
        } else if (value.message.length > 1500) {
          errors.message = 'El mensaje es demasiado largo *';
        }

        return errors;
      }}

      onSubmit={(value, { resetForm }) => {
        dispatch(PostContat(value));
        swal('Se enviaron tus datos!', 'Nos estaremos comunicando pronto', 'success');
        // navigate('/');
        resetForm();
      }}
    >
      {({ values, errors, touched, handleChange, handleSubmit, handleBlur }) => (
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-[39rem] mt-8'>
          {/* {console.log(touched)} */}
          <div className='flex justify-between'>
            <TextField
              error={errors.name && touched.name ? true : false}
              id={errors.name && touched.name ? 'outlined-error-helper-text' : 'outlined-basic'}
              label='Nombre'
              variant='outlined'
              name='name'
              value={values.name}
              helperText={errors.name && touched.name ? errors.name : undefined}
              onChange={handleChange}
              style={{ width: '17.5rem' }}
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
              error={errors.lastName && touched.lastName ? true : false}
              id={
                errors.lastName && touched.lastName
                  ? 'outlined-error-helper-text'
                  : 'outlined-basic'
              }
              label='Apellido'
              variant='outlined'
              name='lastName'
              value={values.lastName}
              helperText={errors.lastName && touched.lastName ? errors.lastName : undefined}
              onChange={handleChange}
              style={{ width: '17.5rem' }}
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
          </div>
          <div className='flex justify-between mt-6 mb-6'>
            <TextField
              error={errors.email && touched.email ? true : false}
              id={
                errors.email && touched.email
                  ? 'outlined-error-helper-text'
                  : 'outlined-basic'
              }
              label='E-mail'
              variant='outlined'
              name='email'
              value={values.email}
              helperText={errors.email && touched.email ? errors.email : undefined}
              onChange={handleChange}
              onBlur={handleBlur}
              style={{ width: '17.5rem' }}
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
              error={errors.phone && touched.phone ? true : false}
              id={
                errors.phone && touched.phone
                  ? 'outlined-error-helper-text'
                  : 'outlined-basic'
              }
              label='Teléfono'
              variant='outlined'
              name='phone'
              type='number'
              value={values.phone}
              helperText={errors.phone && touched.phone ? errors.phone : undefined}
              onChange={handleChange}
              style={{ width: '17.5rem' }}
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
          </div>
          <TextField
            error={errors.message && touched.message ? true : false}
            id={
              errors.name && touched.message
                ? 'filled-textarea-error-helper-text'
                : 'filled-textarea'
            }
            label='Tu mensaje'
            name='message'
            value={values.message}
            onBlur={handleBlur}
            onChange={handleChange}
            fullWidth
            multiline
            helperText={errors.message && touched.message ? errors.message : undefined}
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
          <div className='mt-6 mb-6 w-full flex justify-center items-center'>
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
              Enviar
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
};
