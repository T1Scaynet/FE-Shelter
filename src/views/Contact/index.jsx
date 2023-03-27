/* eslint-disable no-unneeded-ternary */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import linea from '../../assets/PetsList/Shape.svg';
import dog from '../../assets/Contact/dogbg.png';
import phone from '../../assets/Contact/phone.svg';
import email from '../../assets/Contact/email.svg';
import time from '../../assets/Contact/time.svg';
import addres from '../../assets/Contact/addres.svg';
import { MapView } from '../../components/MapView';
import { TextField, Button } from '@mui/material';
import validation from './validation';
import swal from 'sweetalert';
// import { useDispatch } from 'react-redux';

export const Contact = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const [error, setError] = useState({});
  const [input, setInput] = useState({
    name: '',
    lastname: '',
    email: '',
    message: '',
    phone: ''
  });

  function handelChange (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
    setError(
      validation({
        ...input,
        [e.target.name]: e.target.value
      })
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validation(input));
    if (
      error !== undefined &&
      Object.entries(error).length === 0 &&
      input.name.length
    ) {
      // dispatch(postRecipe(input));
      swal('Se enviaron tus datos!', 'Nos estaremos comunicando pronto', 'success');
      navigate('/');
    } else {
      swal('Ocurrió un Error', 'Vuelve a intentarlo', 'error');
    }
  };

  return (
    <div>
      <span className='flex justify-start items-center space-x-2 h-[4.875rem] w-full bg-[#FBF9FF]'>
        <Link
          to='/'
          className='font-bold ml-[12.813rem] text-[#7C58D3] text-[0.9rem]'
        >
          Inicio
        </Link>
        <div className=' rounded-[50%] bg-[#FF47A2] h-[0.4rem] w-[0.4rem]' />
        <Link
          to='#'
          className='font-bold ml-[12.813rem] text-[#7C58D3] text-[0.9rem]'
        >
          Contacto
        </Link>
      </span>
      <section className='bg-[#FBF9FF] w-full h-[18.6rem] relative overflow-hidden'>
        <div className='w-[79%] h-[90%] m-auto flex'>
          <div className='flex flex-col justify-evenly'>
            <div className='w-[35rem]'>
              <h1 className='text-7xl font-bold mb-[2.02rem]'>Contactenos</h1>
              <p>
                ¿Quieres marcar la <b>diferencia</b> en la vida de un animal
                necesitado? ¡Contacta con nuestra fundación de rescate de
                animales hoy mismo y sé parte del cambio positivo!{' '}
                <b>Juntos </b>
                podemos salvar vidas y brindar amor y protección a nuestros
                amigos peludos. ¡No esperes más para hacer la diferencia!
              </p>
            </div>
          </div>

          <div className='h-full flex justify-center items-center ml-[8rem]'>
            <img src={dog} alt='imagen de un perro' />
          </div>
        </div>

        <img
          src={linea}
          alt='imagen de la linea divisoria'
          className='absolute bottom-0'
        />
      </section>
      <section className='w-full flex items-center justify-center mt-[5rem]'>
        <div className='w-[80%] flex flex-row justify-between'>
          <div className='relative w-[16.375rem] h-[8.789rem] rounded-[0.394rem] bg-white flex justify-center items-center flex-col border-[#EBE5F7] border-solid border-2'>
            <div className='bg-[#EBE5F7] h-[5.75rem] w-[5.75rem] flex justify-center items-center rounded-[50%] absolute top-0 mt-[-2.969rem] '>
              <img
                src={phone}
                alt='phone'
                className='rotate-[98deg] h-[3.125rem]'
              />
            </div>
            <div className='text-center mt-[2rem]'>
              <b className='text-[1.279rem] font-bold'>Telefonos</b>
              <p>(549)11 7756-3126</p>
              <p>(549)11 7756-3126</p>
            </div>
          </div>

          <div className='relative w-[16.375rem] h-[8.789rem] rounded-[0.394rem] bg-white flex justify-center items-center flex-col border-[#EBE5F7] border-solid border-2'>
            <div className='bg-[#EBE5F7] h-[5.75rem] w-[5.75rem] flex justify-center items-center rounded-[50%] absolute top-0 mt-[-2.969rem] '>
              <img
                src={email}
                alt='phone'
                className='w-[2.625rem] h-[2.078rem]'
              />
            </div>
            <div className='text-center mt-[2rem]'>
              <b className='text-[1.279rem] font-bold'>E-mail</b>
              <p>example@example.com</p>
              <p>example@example.com</p>
            </div>
          </div>

          <div className='relative w-[16.375rem] h-[8.789rem] rounded-[0.394rem] bg-white flex justify-center items-center flex-col border-[#EBE5F7] border-solid border-2'>
            <div className='bg-[#EBE5F7] h-[5.75rem] w-[5.75rem] flex justify-center items-center rounded-[50%] absolute top-0 mt-[-2.969rem] '>
              <img src={addres} alt='phone' className='h-[2.922rem]' />
            </div>
            <div className='text-center mt-[2rem]'>
              <b className='text-[1.279rem] font-bold'>Dirección</b>
              <p>Av. siempre viva 123</p>
              <p>Av. siempre viva 123</p>
            </div>
          </div>

          <div className='relative w-[16.375rem] h-[8.789rem] rounded-[0.394rem] bg-white flex justify-center items-center flex-col border-[#EBE5F7] border-solid border-2'>
            <div className='bg-[#EBE5F7] h-[5.75rem] w-[5.75rem] flex justify-center items-center rounded-[50%] absolute top-0 mt-[-2.969rem] '>
              <img src={time} alt='phone' className='h-[2.922rem]' />
            </div>
            <div className='text-center mt-[2rem]'>
              <b className='text-[1.279rem] font-bold'>Horarios</b>
              <p>Lun - Vie : 7am - 6pm</p>
              <p>Sabado : 7am - 6pm</p>
            </div>
          </div>
        </div>
      </section>
      <section className='w-full flex items-center justify-around mb-[5rem]'>
        <div className='w-[40%] flex flex-col mt-[7rem]'>
          <div>
            <h3 className='text-[2.875rem] font-extrabold'>Contáctanos</h3>
            <p>
              ¡Gracias por considerar adoptar uno de nuestros animales! Por
              favor, completa nuestro formulario de adopción para ayudarnos a
              entender tus necesidades y brindarte la mejor opción de adopción.
              Estamos emocionados de ayudarte a encontrar a tu nuevo amigo
              peludo y hacer una diferencia en la vida de un animal necesitado.
            </p>
          </div>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className='flex flex-col gap-10 w-[80%] mt-[2.8rem] mb-[2.8rem]'
          >
            <div className='flex justify-between'>
              <TextField
                error={error.name ? true : false}
                id={
                  error.name ? 'outlined-error-helper-text' : 'outlined-basic'
                }
                label='Nombre'
                variant='outlined'
                name='name'
                value={input.name}
                onChange={(e) => handelChange(e)}
                helperText={!error.name ? undefined : error.name}
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
                error={error.lastname ? true : false}
                id={
                  error.lastname
                    ? 'outlined-error-helper-text'
                    : 'outlined-basic'
                }
                label='Apellido'
                variant='outlined'
                name='lastname'
                value={input.lastname}
                onChange={(e) => handelChange(e)}
                helperText={!error.lastname ? undefined : error.lastname}
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
            <div className='flex justify-between'>
              <TextField
                error={error.name ? true : false}
                id={
                  error.name ? 'outlined-error-helper-text' : 'outlined-basic'
                }
                label='Número de teléfono'
                type='number'
                variant='outlined'
                name='phone'
                value={input.phone}
                onChange={(e) => handelChange(e)}
                InputLabelProps={{
                  shrink: true,
                  endAdornment: null
                }}
                helperText={!error.phone ? undefined : error.phone}
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
                error={error.email ? true : false}
                id={
                  error.name ? 'outlined-error-helper-text' : 'outlined-basic'
                }
                label='E-mail'
                variant='outlined'
                name='email'
                value={input.email}
                onChange={(e) => handelChange(e)}
                helperText={!error.email ? undefined : error.email}
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
              error={error.message ? true : false}
              id={
                error.name
                  ? 'filled-textarea-error-helper-text'
                  : 'filled-textarea'
              }
              label='Tu mensaje'
              name='message'
              value={input.message}
              onChange={(e) => handelChange(e)}
              fullWidth
              multiline
              helperText={!error.message ? undefined : error.message}
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
          </form>
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
        <div className='h-[42.25rem] flex justify-end items-end'>
          <MapView />
        </div>
      </section>
    </div>
  );
};
