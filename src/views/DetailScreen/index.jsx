/* eslint-disable multiline-ternary */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getDetailById } from '../../state/features/details/detailSlice';
import bg from '../../assets/DetailScreen/bg.svg';
import weight from '../../assets/DetailScreen/peso.svg';
import genre from '../../assets/DetailScreen/genero.svg';
import vac from '../../assets/DetailScreen/vacunado.svg';
import castrated from '../../assets/DetailScreen/castrado.svg';
import size from '../../assets/DetailScreen/tamaño.svg';
import fingerprint from '../../assets/DisplayFive/fingerprint.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './DetailScreen.css';

export const DetailScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const pet = useSelector((state) => state.petDetails);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getDetailById(undefined));
    dispatch(getDetailById(id));
  }, [dispatch]);

  console.log(pet.history);

  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2
  };

  const settingsVertical = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log('before change', currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log('after change', currentSlide);
    }
  };

  return (
    <div className='flex justify-center items-center flex-col'>
      <span className='flex justify-start items-center space-x-2 bg-[#EBE5F7] h-[4.875rem] w-full'>
        <Link
          to='/'
          className='font-bold ml-[12.813rem] text-[#7C58D3] text-[0.9rem]'
        >
          Inicio
        </Link>
        <div className=' rounded-[50%] bg-[#FF47A2] h-[0.4rem] w-[0.4rem]' />
        <Link
          to='/completeList'
          className='font-bold ml-[12.813rem] text-[#7C58D3] text-[0.9rem]'
        >
          Adoptar
        </Link>
        <div className=' rounded-[50%] bg-[#FF47A2] h-[0.4rem] w-[0.4rem]' />
        <Link
          to='/detalles'
          className='font-bold ml-[12.813rem] text-[#7C58D3] text-[0.9rem]'
        >
          Detalles
        </Link>
      </span>
      {pet === undefined ? (
        <div>Cargando...</div>
      ) : pet === null ? (
        <></>
      ) : (
        <>
          <section className='flex flex-row items-center space-x-10 mt-[0.9rem]'>
            <Slider {...settingsVertical} className='w-[10.188rem]  bg-[#FBF9FF] flex justify-between'>
              {pet.galery?.map((img, i) => (
                <img src={img} alt='pet' className='object-cover w-[10.188rem] h-[10.188rem] rounded-[0.5rem] mt-2' key={i} />
              ))}
            </Slider>
            <Slider {...settings} className='w-[501px] h-[36.063rem] flex items-center justify-center rounded-t-lg bg-[#FBF9FF]'>
              {pet.galery?.map((img, i) => (
                <img src={img} alt='pet' className='object-cover w-[22.938rem] h-[22.938rem] rounded-[0.5rem] m-auto' key={i} />
              ))}
            </Slider>
            <div className='flex flex-col items-start w-[20.938rem]'>
              <h4 className='text-[4.125rem] font-bold'>{pet.name}</h4>
              <div className='text-[1.625rem] font-bold flex flex-col justify-center text-left'>
                <span className='flex flex-row items-center mt-[2rem] text-[#7C58D3]'>
                  <img className='mr-[0.5rem]' src={size} alt='icon' /> Tamaño :{' '}
                  <p className='text-[1.438rem] ml-[0.5rem]'>{pet.size}</p>
                </span>
                <span className='flex flex-row items-center mt-[0.9rem] text-[#7C58D3]'>
                  <img className='mr-[0.5rem]' src={genre} alt='icon' />
                  Genero :{' '}
                  <p className='text-[1.438rem] ml-[0.5rem]'>{pet.genre}</p>
                </span>
                <span className='flex flex-row items-center mt-[0.9rem] text-[#7C58D3]'>
                  <img className='mr-[0.5rem]' src={weight} alt='icon' />
                  Peso :{' '}
                  <p className='text-[1.438rem] ml-[0.5rem]'>{pet.weight}</p>
                </span>
                <span className='flex flex-row items-center mt-[0.9rem] text-[#7C58D3]'>
                  <img className='mr-[0.5rem]' src={vac} alt='icon' />
                  Vacunado:{' '}
                  <p className='text-[1.438rem] ml-[0.5rem]'>
                    {pet.vaccine === true ? 'Si' : 'No'}
                  </p>
                </span>
                <span className='flex flex-row items-center mt-[0.9rem] text-[#7C58D3]'>
                  <img className='mr-[0.5rem]' src={castrated} alt='icon' />
                  Castrado/a :{' '}
                  <p className='text-[1.438rem] ml-[0.5rem]'>
                    {pet.castrated === true ? 'Si' : 'No'}
                  </p>
                </span>
                {/* <span className='flex flex-row text-[#7C58D3]'>Peso : <p className='text-[1.438rem] ml-[0.5rem]'>{pet.vaccine === true ? 'Si' : 'Ninguna'}</p></span> */}
                <Link
                  to='/donacion'
                  className='rounded-[0.5rem] h-[4.375rem] w-[11.625rem] bg-[#7C58D3] hover:bg-[#5930b9] flex justify-center items-center mt-[3rem] ml-[3.125rem] text-[#FFFEFD] text-[1.5rem] font-extrabold transition-colors duration-500'
                >
                  <img
                    src={fingerprint}
                    alt='fingerprint'
                    className='h-[1.875rem] mr-[0.4rem]'
                  />{' '}
                  Adoptar
                </Link>
              </div>
            </div>
          </section>
          {pet.history === undefined ? (
            <div className='bg-[#EBE5F7] rounded-[0.5rem] mt-[6.875rem] w-[68.875rem] h-[10rem] flex items-center justify-center'>
              <div className='text-center'>
                <h4 className='text-[1.5rem] font-bold'>
                  ¡Adopta un amigo peludo y cambia su vida para siempre!
                </h4>
              </div>
            </div>
          ) : (
            <div className='bg-[#EBE5F7] rounded-[0.5rem] mt-[6.875rem] w-[68.875rem] h-[10rem] flex items-center justify-center'>
              <div className='text-center'>
                <h4 className='text-[1.5rem] font-bold'>
                  Descripción de la mascota
                </h4>
                <p className='text-left'>{pet.history}</p>
              </div>
            </div>
          )}
          <section
            className='h-[35.813rem] w-[68.875rem] bg-local bg-repeat mt-[6.875rem] mb-[7.5rem] rounded-[0.5rem]'
            style={{ backgroundImage: `url(${bg})` }}
          >
            <div className='w-[29.375rem] mt-[6.25rem] ml-[3.125rem]'>
              <p className='text-[2.875rem] font-extrabold'>
                El apoyo que brindas alimenta a más{' '}
                <b className='text-[#FF47A2]'>mascotas</b>
              </p>
            </div>
            <Link
              to='/donacion'
              className='rounded-[0.5rem] h-[4.375rem] w-[11.625rem] bg-[#7C58D3] hover:bg-[#5930b9] flex justify-center items-center mt-[3rem] ml-[3.125rem] text-[#FFFEFD] text-[1.5rem] font-extrabold transition-colors duration-500'
            >
              Donación
            </Link>
          </section>
        </>
      )}
    </div>
  );
};