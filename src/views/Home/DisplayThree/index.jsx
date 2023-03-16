/* eslint-disable jsx-quotes */
import aboutimg from '../../../assets/DT_img.png';
import arrow from '../../../assets/DT_arrow.png';

export const DisplayThree = () => {
  return (
    <section className="grid grid-cols-2 gap-32 items-center py-[120px] px-[14%]">
      <div className="flex flex-col gap-8">
        <div>
          <h2 className="font-bold text-4xl leading-[48px]">
            Bienvenido a nuestra <br /> familia
          </h2>
          <h1 className="font-normal text-sm leading-5 text-[#1C103B]">
            Fundación ALMANIMAL Mendiolaza es una organización sin fines de
            lucro, cuyo objetivo es la protección
          </h1>
        </div>
        <div>
          <ul className="flex flex-col gap-9 font-bold">
            <li className="flex justify-between">
              <label>Cómo comenzó Fund. alma animal mendiolaza</label>
              <img src={arrow} alt="" />
            </li>
            <li className="flex  justify-between">
              <label>Estado de la misión</label>
              <img src={arrow} alt="" />
            </li>
            <li className="flex  justify-between">
              <label>Responsabilidad Social</label>
              <img src={arrow} alt="" />
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[600px]">
        <img src={aboutimg} alt="" className=" max-w-full h-auto" />
      </div>
    </section>
  );
};
