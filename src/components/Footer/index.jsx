import bark from '../../assets/Footer/bark.svg';
import logo from '../../assets/Footer/Group.svg';
import phone from '../../assets/Footer/phone.svg';
import Gus from '../../assets/Collaborators/Gus.jpg';
import Rama from '../../assets/Collaborators/Rama.jpg';
import Sele from '../../assets/Collaborators/Sele.png';
import Joaco from '../../assets/Collaborators/Joaco.jpeg';
import Tani from '../../assets/Collaborators/Tani.jpeg';
import Rodri from '../../assets/Collaborators/Rodri.jpeg';
import Romi from '../../assets/Collaborators/Romi.jpeg';
import Ivan from '../../assets/Collaborators/Ivan.png';
import pet from '../../assets/Footer/pets.svg';

const styleImg = 'min-w-[5rem] max-w-[5rem] max-w-[4.5rem] min-h-[5rem] object-contain rounded-full border-[4px] border-solid border-[#5930b9] ml-[-2.6rem] aspect-square bg-[#CFC1BF] relative';

export const Footer = () => {
  return (
    <footer className='bg-[#FBF9FF] py-10 w-full h-full flex items-center justify-center relative md:h-[30rem] md:py-0 md:px-[10rem]'>
      <div className='absolute w-[100%] h-[90%]'>
        <div className='absolute left-[17rem] md:left-32 md:top-14'>
          <img src={bark} alt='bark' className='h-[3.5rem]' />
        </div>
        <div className='absolute bottom-[2rem] right-[14.5rem] md:bottom-0 md:right-32 md:mr-[1.5rem]'>
          <img src={pet} alt='cat' className='h-[8rem] md:h-[10rem] md:hidden' />
        </div>
      </div>
      <div className=' px-5 space-y-10 flex flex-col md:flex-row justify-between md:items-center md:px-0 md:max-w-[94.5rem] h-[90%] bg-[#7f818200] p-[0.4rem] relative md:space-y-0'>
        <div className='flex space-y-5 md:space-y-2 flex-col text-start items-start md:w-[30%]'>
          <img src={logo} alt='logo' className='h-[4.6rem] mt-[0.4rem]' />
          <p className='w-[100%] text-[1rem]'>
            Adoptar es una forma maravillosa de brindarle una segunda oportunidad a
            un animal necesitado y darle un hogar amoroso.{' '}
          </p>
          <div className='flex flex-row'>
            <img src={phone} alt='phone' className='h-[3.5rem] rotate-[98deg]' />
            <div className='ml-[1.5rem]'>
              <b>(913) 756-3126</b>
              <p>¿Tienes preguntas? Llámanos</p>
            </div>
          </div>
        </div>
        <div className='w-full flex justify-center md:justify-end md:w-[15rem]'>
          <div className='w-[50%] ml-[9rem] md:ml-0 md:w-full flex flex-col'>
            <b className='bg-[#FFFFFF] pt-3 text-center'>Horarios de atención:</b>
            <div className='flex justify-center items-center flex-row  bg-[#FFFFFF] h-[7rem] w-[100%]'>
              <div className='flex flex-col font-thin text-[0.8rem]'>
                <b className='mt-[0.1rem]'>Lun - Vie:</b>
                <b className='mt-[0.4rem]'>Sabado:</b>
                <b className='mt-[0.4rem]'>Domingo:</b>
              </div>
              <div className='flex flex-col ml-[1.8rem] mt-[0.2rem]'>
                <b>7am - 6pm</b>
                <b>9am - 4pm</b>
                <b className='mt-[0.2rem] text-[#FF47A2]'>Cerrado</b>
              </div>
            </div>
          </div>
        </div>
        <section className='hidden md:flex w-[32rem] flex-col items-center pt-12 space-y-5'>
          <h1 className=' hidden md:block font-bold text-2xl'>Colaboradores</h1>
          <p className=' hidden md:block'>El equipo está formado por personas altamente capacitadas y apasionadas, que han aportado su experiencia y conocimiento para lograr los objetivos del proyecto. Cada uno de ellos ha demostrado un compromiso excepcional, dedicando tiempo y esfuerzo para asegurarse de que el proyecto fuera un éxito.</p>
          <div className='hidden md:flex ml-20 pr-18  space-x-6 justify-between w-full h-[7.5rem]'>
            <a href='https://github.com/T1Scaynet' target='_blank' rel='noreferrer'><img src={Gus} alt='Foto de perfil de Gustavo' className={`${styleImg} z-99999`} /></a>
            <a href='https://github.com/Ramir095' target='_blank' rel='noreferrer'><img src={Rama} alt='Foto de perfil de Ramiro' className={`${styleImg} z-9999`} /></a>
            <a href='https://github.com/joacorojasmoschini' target='_blank' rel='noreferrer'><img src={Sele} alt='Foto de perfil de Selene' className={`${styleImg} z-999`} /></a>
            <a href='https://github.com/MadridSelene' target='_blank' rel='noreferrer'><img src={Joaco} alt='Foto de perfil de Joaco' className={`${styleImg} z-99`} /></a>
            <a href='https://github.com/Estani02' target='_blank' rel='noreferrer'><img src={Tani} alt='Foto de perfil de Estanislao' className={`${styleImg} z-50`} /></a>
            <a href='https://github.com/rojassrodrigo' target='_blank' rel='noreferrer'><img src={Rodri} alt='Foto de perfil de Rodrigo' className={`${styleImg} z-40`} /></a>
            <a href='https://github.com/RomiMolina' target='_blank' rel='noreferrer'><img src={Romi} alt='Foto de perfil de Romina' className={`${styleImg} z-20`} /></a>
            <a href='https://github.com/adrian12352' target='_blank' rel='noreferrer'><img src={Ivan} alt='Foto de perfil de Ivan' className={`${styleImg}`} /></a>
          </div>
        </section>
      </div>
    </footer>
  );
};
// md:w-[22rem]
