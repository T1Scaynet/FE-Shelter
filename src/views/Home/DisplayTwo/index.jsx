import { Card } from '../../../components/Card';

export const DisplayTwo = () => {
  return (
    <div className='w-full h-screen bg-[#FFFEFD] flex flex-col items-center space-y-3 py-2'>
      <p className='text-[#7C58D3] font-bold text-[1.2rem] font-[Nunito]'>Mascotas disponibles para adopción</p>
      <h1 className=' text-[3rem] font-[Nunito]'>Encontrar un nuevo amigo peludo</h1>
      <span>Las mascotas adoptables se actualizan continuamente. Visitanos con frecuencia para encontrar tu pareja perfecta</span>
      <div className='mx-auto grid grid-cols-1 gap-6 lg:grid-cols-2 w-[79%] gap-x-[7.8rem] pl-3'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <button className='w-44 h-14 bg-[#7C58D3] text-[#FFFFFF] rounded-md'>Ver más</button>
    </div>
  );
};
