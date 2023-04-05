import React from 'react';
import imgRodrigo from '../../../assets/DisplayFive/rodrigo.jpeg';
import imgSelene from '../../../assets/DisplayFive/selene.jpeg';
import imgKevin from '../../../assets/DisplayFive/kevin.jpeg';
import imgRomina from '../../../assets/DisplayFive/romina.jpeg';
import imgGustavo from '../../../assets/DisplayFive/gustavo.jpeg';
import imgEstani from '../../../assets/DisplayFive/estani.jpeg';
import imgJoaquin from '../../../assets/DisplayFive/joaquin.jpeg';
import fingerprint from '../../../assets/DisplayFive/fingerprint.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const profiles = [
  {
    id: 1,
    name: 'Romina',
    position: 'FrontEnd Team',
    image: imgRomina
  },
  {
    id: 2,
    name: 'Rodrigo',
    position: 'BackEnd Team',
    image: imgRodrigo
  },
  {
    id: 3,
    name: 'Kevin',
    position: 'FrontEnd Team',
    image: imgKevin
  },
  {
    id: 4,
    name: 'Gustavo',
    position: 'BackEnd Team',
    image: imgGustavo
  },
  {
    id: 5,
    name: 'Estanilao',
    position: 'FrontEnd Team',
    image: imgEstani
  },
  {
    id: 6,
    name: 'Selene',
    position: 'BackEnd Team',
    image: imgSelene
  },
  {
    id: 7,
    name: 'Joaquin',
    position: 'BackEnd Team',
    image: imgJoaquin
  },
  {
    id: 8,
    name: 'Ivan',
    position: 'FrontEnd Team',
    image: imgRodrigo
  }
];

export const Display5 = () => {
  return (
    <section
      id='nosotros'
      className='bg-[#FFFEFD] hidden h-[39.75rem] w-full md:flex flex-col items-center justify-center'
    >
      <div className='flex flex-col items-center space-y-4 justify-center mb-[3.125rem]'>
        <p className='text-[#7C58D3] text-[0.787rem]'>
          EQUIPO DE DESARROLLO
        </p>
        <h2 className='text-[2.263rem] font-bold'>
          Bienvenido a nuestra familia
        </h2>
      </div>
      <div className='flex flex-row items-center justify-center mb-[4rem]'>
        <Slider
          dots
          infinite
          speed={500}
          slidesToShow={4}
          slidesToScroll={4}
          className='w-[90rem] bg-[#FBF9FF] rounded-t-lg'
        >
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className='flex justify-center items-center mr-[4.625rem] ml-[4.625rem]'
            >
              <div className='w-60 h-60 bg-gray-100 flex items-center justify-center '>
                <img className='object-contain rounded-full' src={profile.image} alt={profile.name} />
              </div>
              <div className='text-center w-[15rem]'>
                <h3 className='text-[1.181rem] font-bold'>{profile.name}</h3>
                <p className='text-[0.886rem] font-normal'>{profile.position}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* <button className='flex flex-row items-center justify-center rounded-[6.3px] bg-[#7C58D3] h-[3.563rem] w-[9.688rem] text-[white] hover:bg-[#5930b9] transition-colors duration-500 font-bold'>
        <img src={fingerprint} alt='fingerprint' className='mr-[0.4rem]' />
        Nuestro equipo
      </button> */}
    </section>
  );
};
