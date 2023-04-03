/* eslint-disable no-unneeded-ternary */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import linea from '../../assets/PetsList/Shape.svg';
import dog from '../../assets/Contact/dogbg.png';
import phone from '../../assets/Contact/phone.svg';
import email from '../../assets/Contact/email.svg';
import time from '../../assets/Contact/time.svg';
import addres from '../../assets/Contact/addres.svg';
import { MapView } from './MapView';
import { ContactForm } from './Form';

export const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <span className='flex justify-start items-center space-x-2 h-[4.875rem] w-full bg-[#FBF9FF]'>
        <Link
          to='/'
          className='md:ml-[12.813rem] md:text-[0.9rem] font-bold ml-[2.5rem] text-[#7C58D3] text-[0.77rem]'
        >
          Inicio
        </Link>
        <div className='rounded-[50%] bg-[#FF47A2] h-[0.4rem] w-[0.4rem]' />
        <Link
          to='#'
          className='md:text-[0.9rem] font-bold text-[#7C58D3] text-[0.77rem]'
        >
          Contacto
        </Link>
      </span>
      <section className='bg-[#FBF9FF] w-full h-[18.6rem] relative overflow-hidden'>
        <div className='md:w-[79%] h-[90%] m-auto flex'>
          <div className='flex flex-col justify-evenly ml-[2.5rem]'>
            <div className='md:w-[35rem]'>
              <h1 className='md:text-7xl text-[2.5rem] font-extrabold mb-[2.02rem]'>Contáctenos</h1>
              <p className='md:text-[1rem] text-[0.875rem]'>
                ¿Quieres marcar la <b>diferencia</b> en la vida de un animal
                necesitado? ¡Contacta con nuestra fundación de rescate de
                animales hoy mismo y sé parte del cambio positivo!
                <b>Juntos </b>
                podemos salvar vidas y brindar amor y protección a nuestros
                amigos peludos. ¡No esperes más para hacer la diferencia!
              </p>
            </div>
          </div>

          <div className='h-full md:flex md:justify-center md:items-center md:ml-[8rem] hidden'>
            <img src={dog} alt='imagen de un perro' />
          </div>
        </div>

        <img
          src={linea}
          alt='imagen de la linea divisoria'
          className='absolute bottom-0'
        />
      </section>
      <section className='md:mt-[5rem] w-full flex items-center justify-center mt-[2rem]'>
        <div className='md:w-[80%] gap-3 w-screen flex flex-col items-center md:flex-row md:justify-between'>
          <div className='relative w-[16.375rem] h-[8.789rem] rounded-[0.394rem] bg-white flex justify-center items-center flex-col border-[#EBE5F7] border-solid border-2'>
            <div className='bg-[#EBE5F7] md:h-[5.75rem] md:w-[5.75rem] md:mt-[-2.969rem] w-[3rem] h-[3rem] flex justify-center items-center rounded-[50%] absolute top-0  '>
              <img
                src={phone}
                alt='phone'
                className=' md:h-[3.125rem] rotate-[98deg] h-[1.5rem]'
              />
            </div>
            <div className='text-center mt-[2rem]'>
              <b className=' md:block text-[1.279rem] font-bold hidden'>Telefonos</b>
              <p className='text-[0.7rem] md:text-[1rem]'>(549)11 7756-3126</p>
              <p className='text-[0.7rem] md:text-[1rem]'>(549)11 7756-3126</p>
            </div>
          </div>

          <div className='relative w-[16.375rem] h-[8.789rem] rounded-[0.394rem] bg-white flex justify-center items-center flex-col border-[#EBE5F7] border-solid border-2'>
            <div className='bg-[#EBE5F7] md:h-[5.75rem] md:w-[5.75rem] w-[3rem] h-[3rem] flex justify-center items-center rounded-[50%] absolute top-0 md:mt-[-2.969rem] '>
              <img
                src={email}
                alt='phone'
                className='md:w-[2.625rem] md:h-[2.078rem] h-[1rem]'
              />
            </div>
            <div className='text-center mt-[2rem]'>
              <b className='text-[1.279rem] font-bold md:block hidden'>E-mail</b>
              <p className='text-[0.7rem] md:text-[1rem]'>example@example.com</p>
              <p className='text-[0.7rem] md:text-[1rem]'>example@example.com</p>
            </div>
          </div>

          <div className='relative w-[16.375rem] h-[8.789rem] rounded-[0.394rem] bg-white flex justify-center items-center flex-col border-[#EBE5F7] border-solid border-2'>
            <div className='bg-[#EBE5F7] md:h-[5.75rem] md:w-[5.75rem] w-[3rem] h-[3rem] flex justify-center items-center rounded-[50%] absolute top-0 md:mt-[-2.969rem] '>
              <img src={addres} alt='phone' className='md:h-[2.922rem] h-[1.5rem]' />
            </div>
            <div className='text-center mt-[2rem]'>
              <b className='text-[1.279rem] font-bold md:block hidden'>Dirección</b>
              <p className='text-[0.7rem] md:text-[1rem]'>Av. siempre viva 123</p>
              <p className='text-[0.7rem] md:text-[1rem]'>Av. siempre viva 123</p>
            </div>
          </div>

          <div className='relative w-[16.375rem] h-[8.789rem] rounded-[0.394rem] bg-white flex justify-center items-center flex-col border-[#EBE5F7] border-solid border-2'>
            <div className='bg-[#EBE5F7] md:h-[5.75rem] md:w-[5.75rem] w-[3rem] h-[3rem] flex justify-center items-center rounded-[50%] absolute top-0 md:mt-[-2.969rem] '>
              <img src={time} alt='phone' className='md:h-[2.922rem] h-[1.5rem]' />
            </div>
            <div className='text-center mt-[2rem]'>
              <b className='text-[1.279rem] font-bold md:block hidden'>Horarios</b>
              <p className='text-[0.7rem] md:text-[1rem]'>Lun - Vie : 7am - 6pm</p>
              <p className='text-[0.7rem] md:text-[1rem]'>Sabado : 7am - 6pm</p>
            </div>
          </div>
        </div>
      </section>
      <section className=' flex flex-col ml-[2.5rem] md:flex-row md:items-center justify-around mb-[5rem]'>
        <div className='md:w-[40%] flex flex-col mt-[2.8rem] md:mt-[7rem]'>
          <div className='md:w-full w-[90%]'>
            <h3 className='md:text-7xl text-[2.5rem] font-extrabold mb-[1rem] md:mb-[2.02rem]'>Contáctanos</h3>
            <p className='text-[0.7rem] md:text-[1rem]'>
              ¡Gracias por considerar adoptar uno de nuestros animales! Por
              favor, completa nuestro formulario de adopción para ayudarnos a
              entender tus necesidades y brindarte la mejor opción de adopción.
              Estamos emocionados de ayudarte a encontrar a tu nuevo amigo
              peludo y hacer una diferencia en la vida de un animal necesitado.
            </p>
          </div>
          <ContactForm />
        </div>
        <div className='h-[42.25rem] md:flex hidden items-end mb-[3.4rem]'>
          <MapView />
        </div>
      </section>
    </div>
  );
};
