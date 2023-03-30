import bark from '../../assets/Footer/bark.svg';
import logo from '../../assets/Footer/Group.svg';
import phone from '../../assets/Footer/phone.svg';
import arrow from '../../assets/Footer/arrow.svg';
import pet from '../../assets/Footer/pets.svg';

export const Footer = () => {
  return (
    <footer className='bg-[#FBF9FF] py-10 w-full h-full flex items-center justify-center relative md:h-[30rem] md:py-0 md:px-[10rem]'>
      <div className='absolute w-[100%] h-[90%]'>
        <div className='absolute left-[17rem] md:left-32 md:top-14'>
          <img src={bark} alt='bark' className='h-[3.5rem]' />
        </div>
        <div className='absolute bottom-56 right-[14.5rem] md:bottom-0 md:right-32 md:mr-[1.5rem]'>
          <img src={pet} alt='cat' className='h-[8rem] md:h-[10rem]' />
        </div>
      </div>
      <div className=' px-5 space-y-10 flex flex-col md:flex-row justify-between md:items-center md:px-0 md:max-w-[94.5rem] h-[90%] bg-[#7f818200] p-[0.4rem] relative md:space-y-0'>
        <div className='flex space-y-5 md:space-y-2 flex-col text-start items-start md:w-[30%]'>
          <img src={logo} alt='logo' className='h-[4.6rem] mt-[0.4rem]' />
          <p className='w-[100%] text-[1rem]'>
            Adoptar es una forma maravillosa de brindarle una segunda oportunidad a
            un animal necesitado y darle un hogar amoroso.{' '}
          </p>
          <div className='flex flex-row'>
            <img src={phone} alt='phone' className='h-[3.5rem] rotate-[98deg]' />
            <div className='ml-[1.5rem]'>
              <b>(913) 756-3126</b>
              <p>¿Tienes preguntas? Llámanos</p>
            </div>
          </div>
        </div>
        <div className='w-full flex justify-end md:w-[15rem]'>
          <div className='w-[60%] md:w-full flex flex-col'>
            <b className='bg-[#FFFFFF] pt-3 text-center'>Horarios de atención:</b>
            <div className='flex justify-center items-center flex-row  bg-[#FFFFFF] h-[7rem] w-[100%]'>
              <div className='flex flex-col font-thin text-[0.8rem]'>
                <b className='mt-[0.1rem]'>Lun - Vie:</b>
                <b className='mt-[0.4rem]'>Sabado:</b>
                <b className='mt-[0.4rem]'>Domingo:</b>
              </div>
              <div className='flex flex-col ml-[1.8rem] mt-[0.2rem]'>
                <b>7am - 6pm</b>
                <b>9am - 4pm</b>
                <b className='mt-[0.2rem] text-[#FF47A2]'>Cerrado</b>
              </div>
            </div>
          </div>
        </div>
        <div className='md:flex flex-col mt-[2rem] space-y-5 md:w-[22rem] bg-[#8b0d0d00]'>
          <b>Newsletter</b>
          <p>¡Sé el primero en la cola! Reciba nuestras últimas noticias directamente en su bandeja de entrada.</p>
          <div className='flex flex-row'>
            <input type='text' placeholder='Email' className='rounded-[6.3px] outline-none pl-[0.5rem]' />
            <button className='rounded-[6.3px] ml-[0.9rem] bg-[#7C58D3] w-[2rem] h-[2rem] flex justify-center items-center hover:bg-[#5930b9] transition-colors duration-500'><img src={arrow} alt='arrow' /></button>
          </div>
        </div>
      </div>
    </footer>
  );
};
