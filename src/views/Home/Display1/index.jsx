/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable jsx-quotes */
import { Link } from 'react-router-dom';
import footprint from '../../../assets/DO_footprint.svg';
import background from '../../../assets/Display1/FondoDogs.svg';
import line from '../../../assets/Display1/lineaDog.png';
import donate2 from '../../../assets/Display1/icon2.svg';
import donate1 from '../../../assets/Display1/icon.svg';
import dogs from '../../../assets/DO_dogleft.png';
import dogTwo from '../../../assets/perroMestizotwo.svg';
import cat from '../../../assets/DO_catright.png';
import { Menu } from '../../../components/Menu';

export const Display1 = () => {
  return (
    <section
      id="home"
      className="h-[48rem] w-full flex justify-center items-center font-Nunito bg-contain relative overflow-hidden md:h-[42rem]"
    >
      <img src={line} alt="Linea punteada" className='absolute h-full w-full' />
      <img src={background} alt="Fondo de pantalla de Home" className='absolute' />
      <Menu />
      <div
        id="home-content"
        className=" flex flex-col gap-20 items-center justify-center absolute z-20"
      >
        <div id="home-text">
          <h1 className=" text-xl md:text-6xl md:text-[53px] md:leading-[73px] text-center">
            CUANDO LA VOLUNTAD EXISTE <br />
            <span className=" text-2xl font-extrabold md:text-6xl">HAY MIL RECURSOS</span>
          </h1>
        </div>

        <Link to="/donaciones" className='mb-12 md:mb-0'>
          <div className="flex items-center bg-[#7C58D3] h-[66px] px-[20px] w-[193px] rounded-md hover:cursor-pointer hover:bg-[#5930b9] transition-colors duration-500">
            <img src={footprint} alt="footprint" />
            <span className="ml-[30px] text-white font-bold text-2xl">
              Donar
            </span>
          </div>
        </Link>

        <div className=" space-y-4 pt-10 h-72 flex flex-col justify-evenly md:space-y-0 md:flex md:pt-0 md:flex-row md:justify-evenly md:w-[30rem] md:h-full">
          <Link to="/donaciones">
            <div className="relative w-[13.271rem] h-[6.563rem] rounded-[0.394rem] bg-white flex justify-center items-center flex-col">
              <div className="bg-[#EBE5F7] h-[3.938rem] w-[3.938rem] flex justify-center items-center rounded-[50%] absolute top-0 mt-[-1.969rem] hover:scale-110 hover:bg-[#c5b4e69d] transition-all duration-500">
                <img src={donate1} alt="donate2" />
              </div>
              <p className="text-[1.279rem] font-semibold mt-[2rem] text-center">
                <b>DONÁ</b> INSUMOS
              </p>
            </div>
          </Link>
          <Link to="/donaciones">
            <div className="relative w-[13.271rem] h-[6.563rem] rounded-[0.394rem] bg-white flex justify-center items-center flex-col">
              <div className="bg-[#EBE5F7] h-[3.938rem] w-[3.938rem] flex justify-center items-center rounded-[50%] absolute top-0 mt-[-1.969rem] hover:scale-110 hover:bg-[#c5b4e69d] transition-all duration-500">
                <img src={donate2} alt="donate2" />
              </div>
              <p className="text-[1.279rem] font-semibold mt-[2rem] text-center">
                <b>DONÁ</b> UNA CASTRACIÓN
              </p>
            </div>
          </Link>
        </div>
      </div>
      <img
        src={dogs}
        alt="dogspng"
        className="hidden absolute md:block left-[15%] h-[400px] bottom-[7rem]"
      />
      <img
        src={dogTwo}
        alt="perro mestizo"
        className="absolute left-[6%] h-[400px] bottom-[7rem] md:bottom-[8rem]"
      />
      <img
        src={cat}
        alt="catpng"
        className="absolute right-[-0.5rem] bottom-36 md:right-[6%] h-[250px] md:bottom-[133px]"
      />
    </section>
  );
};
