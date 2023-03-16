import React from 'react';
import profile1 from '../../../assets/DisplayFive/perfil2.svg';
import profile2 from '../../../assets/DisplayFive/perfil1.svg';
import profile3 from '../../../assets/DisplayFive/perfil3.svg';
import profile4 from '../../../assets/DisplayFive/perfil4.svg';
import fingerprint from '../../../assets/DisplayFive/fingerprint.svg';

export const DisplayFive = () => {
  return (
    <section className='h-[39.75rem] w-[100%] flex flex-col items-center justify-center'>
      <div className='flex flex-col items-center justify-center mb-[3.125rem]'>
        <p className='text-[#7C58D3] text-[0.787rem]'>EQUIPO DE CUIDADO DE MASCOTAS</p>
        <h2 className='text-[2.263rem] font-bold'>Bienvenido a nuestra familia</h2>
      </div>
      <div className='flex flex-row items-center justify-center mb-[2.438rem]'>
        <div className='mr-[4.625rem] ml-[4.625rem] flex flex-col justify-center items-center'>
          <img src={profile1} alt='profile' />
          <h3 className='text-[1.181rem] font-bold'>Cameron Rogers</h3>
          <p className='text-[0.886rem] font-normal'>Presidente & CEO</p>
        </div>
        <div className='mr-[4.625rem] ml-[4.625rem] flex flex-col justify-center items-center'>
          <img src={profile2} alt='foude' />
          <h3 className='text-[1.181rem] font-bold'>Cameron Rogers</h3>
          <p className='text-[0.886rem] font-normal'>Presidente & CEO</p>
        </div>
        <div className='mr-[4.625rem] ml-[4.625rem] flex flex-col justify-center items-center'>
          <img src={profile3} alt='foude' />
          <h3 className='text-[1.181rem] font-bold'>Cameron Rogers</h3>
          <p className='text-[0.886rem] font-normal'>Presidente & CEO</p>
        </div>
        <div className='mr-[4.625rem] ml-[4.625rem] flex flex-col justify-center items-center'>
          <img src={profile4} alt='foude' />
          <h3 className='text-[1.181rem] font-bold'>Cameron Rogers</h3>
          <p className='text-[0.886rem] font-normal'>Presidente & CEO</p>
        </div>
      </div>
      <button className='flex flex-row items-center justify-center font-extrabold rounded-[6.3px] bg-[#7C58D3] h-[3.563rem] w-[9.688rem] hover:bg-[#5930b9] transition-colors duration-500'><img src={fingerprint} alt='fingerprint' className='mr-[0.4rem]' /> Nuestro equipo</button>
    </section>
  );
};
