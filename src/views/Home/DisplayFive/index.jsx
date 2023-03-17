import React, { useState } from 'react';
import profile1 from '../../../assets/DisplayFive/perfil2.svg';
import profile2 from '../../../assets/DisplayFive/perfil1.svg';
import profile3 from '../../../assets/DisplayFive/perfil3.svg';
import profile4 from '../../../assets/DisplayFive/perfil4.svg';
import fingerprint from '../../../assets/DisplayFive/fingerprint.svg';
import leftArrow from '../../../assets/DisplayFive/previous-svgrepo-com.svg';
import rightArrow from '../../../assets/DisplayFive/next-svgrepo-com.svg';

const profiles = [
  {
    id: 1,
    name: 'Romina',
    position: 'FrontEnd Team',
    image: profile4
  },
  {
    id: 2,
    name: 'Rodrigo',
    position: 'BackEnd Team',
    image: profile1
  },
  {
    id: 3,
    name: 'Ramiro',
    position: 'FrontEnd Team',
    image: profile3
  },
  {
    id: 4,
    name: 'Gustavo',
    position: 'BackEnd Team',
    image: profile1
  },
  {
    id: 5,
    name: 'Estanilao',
    position: 'FrontEnd Team',
    image: profile3
  },
  {
    id: 6,
    name: 'Selene',
    position: 'BackEnd Team',
    image: profile2
  },
  {
    id: 7,
    name: 'Joaquin',
    position: 'BackEnd Team',
    image: profile1
  },
  {
    id: 8,
    name: 'Ivan',
    position: 'FrontEnd Team',
    image: profile3
  }
];

export const DisplayFive = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(4);

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 4);
      setEndIndex(endIndex - 4);
    }
  };

  const handleNext = () => {
    if (endIndex < profiles.length) {
      setStartIndex(startIndex + 4);
      setEndIndex(endIndex + 4);
    }
  };

  const pages = Math.ceil(profiles.length / 4);

  return (
    <section id='nosotros' className='h-[39.75rem] w-[100%] flex flex-col items-center justify-center'>
      <div className='flex flex-col items-center justify-center mb-[3.125rem]'>
        <p className='text-[#7C58D3] text-[0.787rem]'>EQUIPO DE CUIDADO DE MASCOTAS</p>
        <h2 className='text-[2.263rem] font-bold'>Bienvenido a nuestra familia</h2>
      </div>
      <div className='flex flex-row items-center justify-center mb-[2.438rem]'>
        <button onClick={handlePrevious} className='flex items-center justify-center mr-4 font-extrabold rounded-[6.3px] bg-[#7C58D3] h-[2.5rem] w-[2rem] hover:bg-[#5930b9] transition-colors duration-500'>
          <img src={leftArrow} alt='left arrow'className='brightness-100' /></button>
        {profiles.slice(startIndex, endIndex).map((profile) => (
          <div key={profile.id} className='mr-[4.625rem] ml-[4.625rem] flex flex-col justify-center items-center'>
            <img src={profile.image} alt={profile.name} />
            <h3 className='text-[1.181rem] font-bold'>{profile.name}</h3>
            <p className='text-[0.886rem] font-normal'>{profile.position}</p>
          </div>
        ))}
        <button onClick={handleNext} className='flex items-center justify-center font-extrabold rounded-[6.3px] bg-[#7C58D3] h-[2.5rem] w-[2rem] hover:bg-[#5930b9] transition-colors duration-500'><img src={rightArrow} alt='right arrow' /></button>
      </div>
      <button className='flex flex-row items-center justify-center font-extrabold rounded-[6.3px] bg-[#7C58D3] h-[3.563rem] w-[9.688rem] hover:bg-[#5930b9] transition-colors duration-500'><img src={fingerprint} alt='fingerprint' className='mr-[0.4rem]' /> Nuestro equipo</button>
    </section>
  );
};
