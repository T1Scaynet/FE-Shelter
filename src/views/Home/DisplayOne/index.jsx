/* eslint-disable jsx-quotes */
import { Link } from 'react-router-dom';
import footprint from '../../../assets/DO_footprint.svg';
import donate1 from '../../../assets/DO_donation1.svg';
import donate2 from '../../../assets/DO_donation2.svg';
import dogs from '../../../assets/DO_dogleft.png';
import cat from '../../../assets/DO_catright.png';

export const DisplayOne = () => {
  return (
    <section
      id="home"
      className="h-screen w-full flex justify-center items-center font-Nunito bg-[url('https://cdn.discordapp.com/attachments/1039259834379415572/1085599522715078656/shapes_overlay_1_1.png')] bg-contain relative"
    >
      <div
        id="home-content"
        className=" flex flex-col gap-20 items-center justify-center"
      >
        <div id="home-text">
          <h1 className="text-6xl font-extrabold text-[53px] leading-[73px] text-center">
            CUANDO LA VOLUNTAD <br />
            EXISTE <br />
            <span className="font-normal">HAY MIL RECURSOS</span>
          </h1>
        </div>

        <Link to="/">
          <div className="button flex items-center bg-[#7C58D3] h-[66px] px-[20px] w-[193px] rounded-md hover:cursor-pointer">
            <img src={footprint} alt="footprint" />
            <span className="ml-[30px] text-white font-bold text-2xl">
              Donar
            </span>
          </div>
        </Link>

        <div className="flex">
          <Link to="/">
            <img src={donate1} alt="donate1" />
          </Link>
          <Link to="/">
            <img src={donate2} alt="donate2" />
          </Link>
        </div>
      </div>
      <img
        src={dogs}
        alt="dogspng"
        className="absolute left-[6%] h-[400px] bottom-[133px]"
      />
      <img
        src={cat}
        alt="catpng"
        className="absolute right-[6%] h-[250px] bottom-[133px]"
      />
    </section>
  );
};