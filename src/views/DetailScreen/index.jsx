/* eslint-disable multiline-ternary */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { clearDetailList, getDetailById } from '../../state/features/details/detailSlice';
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
import { toast } from 'sonner';
import Loader from '../../utils/Loader';

export const DetailScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const pet = useSelector((state) => state.petDetails);
  const verifyLogged = useSelector((state) => state.login.token);
  const navigate = useNavigate();
  const [galery, setGalery] = useState('');

  const linkStyle = 'font-bold ml-[2rem] text-[#7C58D3] text-[0.9rem] md:font-bold md:ml-[12.813rem] md:text-[#7C58D3] md:text-[0.9rem]';

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getDetailById(id));
    return () => {
      dispatch(clearDetailList());
    };
  }, [dispatch, id]);

  const settingsVertical = {
    className: 'bg-[#FBF9FF] w-[10.188rem] h-[31rem]',
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    focusOnSelect: true,
    beforeChange: function (currentSlide, nextSlide) {
    },
    afterChange: function (currentSlide) {
    }
  };

  function handleClick () {
    if (verifyLogged) {
      navigate('/adopta-una-mascota');
    } else {
      toast.error('Debe estar registrado para adoptar una mascota, porfavor registrese', {
        style: {
          height: '5rem',
          fontSize: '1rem',
          display: 'flex',
          justifyContent: 'space-evenly',
          paddingLeft: '2.5rem'
        }
      });
      navigate('/registro');
    }
  }

  function handleChange (img) {
    setGalery(img);
  };

  return (
    <div className='flex justify-center items-center flex-col overflow-x-auto '>
      <span className='flex justify-start items-center space-x-2 bg-[#FBF9FF] h-[4.875rem] w-full'>
        <Link
          to='/'
          className={linkStyle}
        >
          Inicio
        </Link>
        <div className='rounded-[50%] bg-[#FF47A2] h-[0.4rem] w-[0.4rem]' />
        <Link
          to='/listado'
          className={linkStyle}
        >
          Listado
        </Link>
        <div className='rounded-[50%] bg-[#FF47A2] h-[0.4rem] w-[0.4rem]' />
        <Link
          to={`/detalles/${pet.petDatail?._id}`}
          className={linkStyle}
        >
          {pet.petDatail?.name}
        </Link>
      </span>

      {!pet.petDatail ? (
        <Loader />
      ) : (
        <>
          <section className='grid grid-cols-1 lg:flex lg:flex-row lg:items-center lg:space-x-10 lg:mt-[0.9rem]'>
            <div className='hidden lg:block'>
              <Slider {...settingsVertical}>
                {pet.petDatail?.galery?.map((img, i) => (
                  <div key={i}>
                    <img src={img} alt='pet' className='object-cover rounded-[0.5rem] cursor-pointer' onClick={() => handleChange(img)} />
                  </div>
                ))}
              </Slider>
            </div>
            <div className='bg-[#FBF9FF] [20rem] h-[30rem] md:w-[31.313rem] md:h-[31rem] flex items-center justify-center rounded-md'>
              <img src={pet.petDatail?.image ? pet.petDatail?.image : galery || pet.petDatail?.galery?.[0]} alt={pet.petDatail?.image} className='h-96 rounded-md object-cover bg-slate-700' />
            </div>
            <div className='flex flex-col items-start w-[20.938rem]'>
              <h4 className='text-[4.125rem] font-bold mt-[1.5rem]'>{pet.petDatail?.name}</h4>
              <div className='text-[1.625rem] font-bold flex flex-col justify-center text-left'>
                <span className='flex flex-row items-center mt-[2rem] text-[#7C58D3]'>
                  <img className='mr-[0.5rem]' src={size} alt='icon' /> Tamaño :{' '}
                  <p className='text-[1.438rem] ml-[0.5rem]'>{pet.petDatail?.size}</p>
                </span>
                <span className='flex flex-row items-center mt-[0.9rem] text-[#7C58D3]'>
                  <img className='mr-[0.5rem]' src={genre} alt='icon' />
                  Genero :{' '}
                  <p className='text-[1.438rem] ml-[0.5rem]'>{pet.petDatail?.genre}</p>
                </span>
                <span className='flex flex-row items-center mt-[0.9rem] text-[#7C58D3]'>
                  <img className='mr-[0.5rem]' src={weight} alt='icon' />
                  Peso :{' '}
                  <p className='text-[1.438rem] ml-[0.5rem]'>{pet.petDatail?.weight} kg</p>
                </span>
                <span className='flex flex-row items-center mt-[0.9rem] text-[#7C58D3]'>
                  <img className='mr-[0.5rem]' src={vac} alt='icon' />
                  Vacunado:{' '}
                  <p className='text-[1.438rem] ml-[0.5rem]'>
                    {pet.petDatail?.vaccine === true ? 'Si' : 'No'}
                  </p>
                </span>
                <span className='flex flex-row items-center mt-[0.9rem] text-[#7C58D3]'>
                  <img className='mr-[0.5rem]' src={castrated} alt='icon' />
                  Castrado/a :{' '}
                  <p className='text-[1.438rem] ml-[0.5rem]'>
                    {pet.petDatail?.castrated === true ? 'Si' : 'No'}
                  </p>
                </span>
                {/* <span className='flex flex-row text-[#7C58D3]'>Peso : <p className='text-[1.438rem] ml-[0.5rem]'>{pet.vaccine === true ? 'Si' : 'Ninguna'}</p></span> */}
                <div onClick={handleClick} className='rounded-[0.5rem] h-[4.375rem] w-[11.625rem] bg-[#7C58D3] hover:bg-[#5930b9] flex justify-center items-center mt-[3rem] ml-[3.125rem] text-[#FFFEFD] text-[1.5rem] font-extrabold transition-colors duration-500'>
                  <img
                    src={fingerprint}
                    alt='fingerprint'
                    className='h-[1.875rem] mr-[0.4rem]'
                  />{' '}
                  Adoptar

                </div>

              </div>
            </div>
          </section>
          {pet.petDatail?.history === undefined ? (
            <div className='bg-[#FBF9FF] rounded-[0.5rem] mt-[3rem] w-[5rem] h-[6rem] p-[6rem] md:mt-[6.875rem] md:w-[68.875rem] md:h-[10rem] flex items-center justify-center border-solid border-black '>
              <div className='text-left md:text-center'>
                <h4 className='text-[1.5rem] font-bold'>
                  ¡Adopta un amigo peludo y cambia su vida para siempre!
                </h4>
              </div>
            </div>
          ) : (
            <div className='bg-[#FBF9FF] flex items-center justify-center rounded-[0.5rem] mt-[5rem] w-[20rem] md:w-[45rem] h-[20rem] lg:mt-[6.875rem] lg:w-[68.875rem] lg:h-[10rem] border-solid border-black'>
              <div className='text-center'>
                <h4 className='text-[1.5rem] font-bold'>
                  Descripción de la mascota
                </h4>
                <p className='text-left pt-4'>{pet.petDatail?.history}</p>
              </div>
            </div>
          )}
          <section
            className='h-[15rem] w-[20rem] bg-local bg-repeat mt-[3rem] mb-[7.5rem] mr-[0.5rem]  lg:h-[35.813rem] lg:w-[68.875rem] lg:bg-local lg:bg-repeat lg:mt-[6.875rem] lg:mb-[7.5rem] lg:mr-[5rem] rounded-[0.5rem] overflow-x-auto'
            style={{ backgroundImage: `url(${bg})` }}
          >
            <div className='w-[10rem] mt-[1rem] ml-[3.125rem] lg:w-[29.375rem] lg:mt-[6.25rem] lg:ml-[3.125rem] '>
              <p className=' text-[1.5rem] lg:text-[2.875rem] font-extrabold lg:leading-[2.5rem]'>
                El apoyo que brindas alimenta a más{' '}
                <b className='text-[#FF47A2]'>mascotas</b>
              </p>
            </div>
            <Link
              to='/donaciones'
              className='rounded-[0.5rem] h-[4.375rem] w-[11.625rem] bg-[#7C58D3] hover:bg-[#5930b9] flex justify-center items-center mt-[1.5rem] ml-[3.125rem] text-[#FFFEFD] text-[1.5rem] font-extrabold transition-colors duration-500'
            >
              Donación
            </Link>
          </section>
        </>
      )}
    </div>
  );
};
