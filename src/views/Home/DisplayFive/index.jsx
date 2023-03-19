import React from 'react';
import profile1 from '../../../assets/DisplayFive/perfil2.svg';
import profile2 from '../../../assets/DisplayFive/perfil1.svg';
import profile3 from '../../../assets/DisplayFive/perfil3.svg';
import profile4 from '../../../assets/DisplayFive/perfil4.svg';
import fingerprint from '../../../assets/DisplayFive/fingerprint.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 2
  };

  // const pages = Math.ceil(profiles.length / 4);

  return (
    <section
      id='nosotros'
      className='h-[39.75rem] w-[100%] flex flex-col items-center justify-center'
    >
      <div className='flex flex-col items-center justify-center mb-[3.125rem]'>
        <p className='text-[#7C58D3] text-[0.787rem]'>
          EQUIPO DE CUIDADO DE MASCOTAS
        </p>
        <h2 className='text-[2.263rem] font-bold'>
          Bienvenido a nuestra familia
        </h2>
      </div>
      <div className='flex flex-row items-center justify-center mb-[2.438rem]'>
        <Slider {...settings} className='w-[90rem] bg-[#FBF9FF] rounded-t-lg'>
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className='flex justify-center items-center mr-[4.625rem] ml-[4.625rem]'
            >
              <img src={profile.image} alt={profile.name} />
              <div className='text-center w-[15rem]'>
                <h3 className='text-[1.181rem] font-bold'>{profile.name}</h3>
                <p className='text-[0.886rem] font-normal'>{profile.position}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <button className='flex flex-row items-center justify-center rounded-[6.3px] bg-[#7C58D3] h-[3.563rem] w-[9.688rem] text-[white] hover:bg-[#5930b9] transition-colors duration-500 font-bold'>
        <img src={fingerprint} alt='fingerprint' className='mr-[0.4rem]' />{' '}
        Nuestro equipo
      </button>
    </section>
  );
};
