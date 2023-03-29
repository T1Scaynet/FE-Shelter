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

export const Display1 = () => {
  return (
    <section
      id="home"
      className="h-[42rem] w-full flex justify-center items-center font-Nunito bg-contain relative"
    >
      <img src={line} alt="Linea punteada" className='absolute h-full w-full' />
      <img src={background} alt="Fondo de pantalla de Home" className='absolute' />
      <div
        id="home-content"
        className=" flex flex-col gap-20 items-center justify-center absolute z-20"
      >
        <div id="home-text">
          <h1 className="text-6xl font-extrabold text-[53px] leading-[73px] text-center">
            CUANDO LA VOLUNTAD EXISTE <br />
            <span className="font-normal">HAY MIL RECURSOS</span>
          </h1>
        </div>

        <Link to="/donaciones">
          <div className="button flex items-center bg-[#7C58D3] h-[66px] px-[20px] w-[193px] rounded-md hover:cursor-pointer hover:bg-[#5930b9] transition-colors duration-500">
            <img src={footprint} alt="footprint" />
            <span className="ml-[30px] text-white font-bold text-2xl">
              Donar
            </span>
          </div>
        </Link>

        <div className="flex justify-evenly w-[30rem]">
          <Link to="/donaciones/#insumos">
            <div className="relative w-[13.271rem] h-[6.563rem] rounded-[0.394rem] bg-white flex justify-center items-center flex-col">
              <div className="bg-[#EBE5F7] h-[3.938rem] w-[3.938rem] flex justify-center items-center rounded-[50%] absolute top-0 mt-[-1.969rem] hover:scale-110 hover:bg-[#c5b4e69d] transition-all duration-500">
                <img src={donate1} alt="donate2" />
              </div>
              <p className="text-[1.279rem] font-semibold mt-[2rem] text-center">
                <b>DONÁ</b> INSUMOS
              </p>
            </div>
          </Link>
          <Link to="/donaciones/#castración">
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
        className="absolute left-[15%] h-[400px] bottom-[7rem]"
      />
      <img
        src={dogTwo}
        alt="perro mestizo"
        className="absolute left-[6%] h-[400px] bottom-[8rem]"
      />
      <img
        src={cat}
        alt="catpng"
        className="absolute right-[6%] h-[250px] bottom-[133px]"
      />
    </section>
  );
};
